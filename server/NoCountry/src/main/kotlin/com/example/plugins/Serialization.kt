package com.example.plugins

import com.example.dtos.roomType.RoomTypeRequest
import com.example.dtos.roomType.RoomTypeResponse
import com.example.dtos.services.ServicesRequest
import com.example.entity.RoomTypeTable
import com.example.entity.ServicesTable
import com.example.entity.UserLoginTable
import com.example.entity.UserTable
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.json.Json
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction


fun Application.configureSerialization() {
    install(ContentNegotiation) {
        json(Json {
            prettyPrint = true
            isLenient = true
        })
    }


    routing {



        post("/insertServiceTable") {
            try {
                val input = call.receive<ServicesRequest>()

                transaction {
                    ServicesTable.insert {
                        it[name] = input.name
                    }
                }
                call.respond(mapOf("status" to "success"))
            } catch (e: Exception) {
                application.log.error("Error handling /insertServiceTable request", e)
                call.respond(
                    HttpStatusCode.InternalServerError,
                    mapOf("status" to "failure", "message" to e.localizedMessage)
                )
            }
        }

        /*

        USUARIO

        */

        post("/insertNewUserTable") {
            try {
                val content = call.receiveText()
                application.log.info("Received content: $content")

                val input = Json.decodeFromString<InsertUserLogin>(content)


                transaction {
                    UserTable.insert {
                        it[image] = input.image
                        it[name] = input.name
                        it[age] = input.age
                        it[location] = input.location
                        it[biography] = input.biography
                        it[isVerify] = input.isVerify
                        it[budget] = input.budget
                        it[searchedArea] = input.searchedArea
                    }
                    UserLoginTable.insert {
                        it[user] = input.user
                        it[email] = input.email
                        it[password] = input.password
                    }
                }
                call.respond(mapOf("status" to "success"))
            } catch (e: Exception) {
                application.log.error("Error handling /insertNewUserTable request", e)
                call.respond(
                    HttpStatusCode.InternalServerError,
                    mapOf("status" to "failure", "message" to e.localizedMessage)
                )
            }
        }

        post("/user") {
            val input = call.receive<UserCredentials>()

            val user = transaction {
                UserLoginTable.select {
                    (UserLoginTable.email eq input.email) and (UserLoginTable.password eq input.password)
                }.singleOrNull()
            }

            if (user != null) {
                call.respond(mapOf("status" to "success"))
            } else {
                call.respond(mapOf("status" to "failure"))
            }
        }


        /*

        ROOMTYPE

        */

        post("/newInsertRoomtype") {
            try {
                val input = call.receive<RoomTypeRequest>()

                transaction {
                    RoomTypeTable.insert {
                        it[name] = input.name
                    }
                }
                call.respond(mapOf("Status" to "Success"))
            } catch (e: Exception) {
                // Log the exception
                application.log.error("Error handling /newInsertRoomtype request", e)
                // Respond with a 500 status code and a message
                call.respond(
                    HttpStatusCode.InternalServerError,
                    mapOf("Status" to "Failure", "Message" to e.localizedMessage)
                )
            }
        }

        get("/roomtypes") {
            try {
                val roomtype = transaction {
                    RoomTypeTable.selectAll().map {
                        RoomTypeResponse(
                            it[RoomTypeTable.id],
                            it[RoomTypeTable.name]
                        )
                    }
                }.toList()
                call.respond(roomtype)
            } catch (e: Exception) {
                // Log the exception
                application.log.error("Error handling /roomtypes request", e)
                // Respond with a 500 status code
                call.respond(HttpStatusCode.InternalServerError)
            }
        }


    }

}

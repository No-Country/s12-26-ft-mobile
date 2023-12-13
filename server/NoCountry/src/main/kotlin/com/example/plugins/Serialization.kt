package com.example.plugins

import com.example.dtos.room.RoomRequest
import com.example.dtos.room.RoomResponse
import com.example.dtos.roomType.RoomTypeResponse
import com.example.dtos.services.ServicesRequest
import com.example.entity.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json
import org.jetbrains.exposed.sql.*
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

        post("/getUser") {
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



        get("/getRoomTypes") {
            try {
                val roomtype = transaction {
                    RoomTypeTable.selectAll().map {
                        RoomTypeResponse(
                            it[RoomTypeTable.id].value,
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

        get("/getRoom") {
            try {
                val room = transaction {
                    RoomTable.selectAll().map {
                        RoomResponse(
                            it[RoomTable.id].value,
                            it[RoomTable.image],
                            it[RoomTable.title],
                            it[RoomTable.city],
                            it[RoomTable.district],
                            it[RoomTable.province],
                            it[RoomTable.monthPrice],
                            it[RoomTable.sizeM2],
                            it[RoomTable.isPet],
                            it[RoomTable.isSmokers],
                            it[RoomTable.room]
                        )
                    }
                }.toList()
                call.respond(room)
            } catch (e: Exception) {
                // Log the exception
                application.log.error("Error handling /roomtypes request", e)
                // Respond with a 500 status code
                call.respond(HttpStatusCode.InternalServerError)
            }
        }


// ...

        post("/InsertRoom") {
            launch {
                try {
                    val input = call.receive<RoomRequest>()

                    transaction {
                        // Check if the room type exists in the RoomType table
                        val roomTypeExists = RoomTypeTable.select {
                            RoomTypeTable.id eq input.room
                        }.singleOrNull() != null

                        if (roomTypeExists) {
                            // If the room type exists, proceed with the insert operation
                            val roomId = RoomTable.insertAndGetId {
                                it[image] = input.image
                                it[title] = input.title
                                it[city] = input.city
                                it[district] = input.district
                                it[province] = input.province
                                it[monthPrice] = input.monthPrice
                                it[sizeM2] = input.sizeM2
                                it[isPet] = input.isPet
                                it[isSmokers] = input.isSmokers
                                it[room] = input.room
                            }.value

                            UserRoomTable.insert {
                                it[user] = input.userId
                                it[room] = roomId
                            }
                            launch { call.respond(mapOf("Status" to "Success")) }
                        } else {
                            // If the room type does not exist, respond with an error message
                            launch {
                                call.respond(
                                    HttpStatusCode.BadRequest,
                                    mapOf("Status" to "Failure", "Message" to "Room type does not exist")
                                )
                            }
                        }
                    }
                } catch (e: Exception) {
                    // Log the exception
                    application.log.error("Error handling /InsertUserRoom request", e)
                    // Respond with a 500 status code and a message
                    call.respond(
                        HttpStatusCode.InternalServerError,
                        mapOf("Status" to "Failure", "Message" to e.localizedMessage)
                    )
                }
            }
        }
    }
}


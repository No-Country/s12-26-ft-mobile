package com.example.plugins

import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import kotlinx.serialization.json.Json
import com.example.Database.Model
import com.example.Database.Model.UserLoginTable.email
import com.example.dtos.services.ServicesRequest
import com.example.dtos.roomType.RoomTypeRequest
import com.example.dtos.roomType.RoomTypeResponse
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
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


        get("/json/test") {
            // Realiza la consulta a la base de datos
            val rows = transaction {
                Model.RoomTypeTable.selectAll().map {
                    // Convierte cada fila del resultado a una instancia de TestRow
                    /*
                                        TestRow(it[Model.RoomTypeTable.id], it[Model.RoomTypeTable.name])
                    */
                }
            }.toList() // Convierte la ArrayList a una lista inmutable

            // Envía la respuesta en formato JSON
            call.respond(rows)
        }



        post("/insertServiceTable") {
            // Deserializa el cuerpo de la petición a una instancia de TestRowInput
            val input = call.receive<ServicesRequest>()

            // Realiza la inserción en la base de datos
            transaction {
                Model.ServiceTable.insert {
                    it[name] = input.name
                }
            }

            // Envía una respuesta para indicar que la operación fue exitosa
            call.respond(mapOf("status" to "success"))
        }

        /*

        USUARIO

        */

        post("/insertNewUserTable") {
            // Deserializa el cuerpo de la petición a una instancia de TestRowInput
            val input = call.receive<InsertUserLogin>()

            // Realiza la inserción en la base de datos
            transaction {

                Model.UserTable.insert {
                    it[image] = input.image
                    it[name] = input.name
                    it[age] = input.age
                    it[location] = input.location
                    it[biography] = input.biography
                    it[isVerify] = input.isVerify
                    it[budget] = input.budget
                    it[searchedArea] = input.searchedArea
                }
                Model.UserLoginTable.insert {
                    it[user] = input.user
                    it[email] = input.email
                    it[password] = input.password
                }
            }

            // Envía una respuesta para indicar que la operación fue exitosa
            call.respond(mapOf("status" to "success"))
        }

        post("/user") {
            val input = call.receive<UserCredentials>()

            val user = transaction {
                Model.UserLoginTable.select {
                    (email eq input.email) and (Model.UserLoginTable.password eq input.password)
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

        post ("/newInsertRoomtype") {
            val input = call.receive<RoomTypeRequest>()

            transaction {
                Model.RoomTypeTable.insert {
                    it[name] = input.name
                }
            }
            call.respond(mapOf("Status" to "Succes"))
        }


        get("/roomtypes") {
            val roomtype = transaction {
                Model.RoomTypeTable.selectAll().map {
                    // Convierte cada fila del resultado a una instancia de TestRow
                    RoomTypeResponse(
                        it[Model.RoomTypeTable.id],
                        it[Model.RoomTypeTable.name]
                    )
                }
            }.toList() // Convierte la ArrayList a una lista inmutable
            call.respond(roomtype)
        }


    }

}




package com.example.plugins

import com.example.dtos.favorite.FavoriteByIDRequest
import com.example.dtos.favorite.FavoriteByUserRequest
import com.example.dtos.favorite.FavoriteRequest
import com.example.dtos.room.*
import com.example.dtos.roomType.RoomTypeResponse
import com.example.dtos.services.ServicesRequest
import com.example.dtos.services.ServicesResponse
import com.example.dtos.user.UserLoginIdRequest
import com.example.dtos.user.UserResponsePost
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
                    // Verificar si el correo electrónico ya está en uso
                    val existingUser = UserLoginTable.select { UserLoginTable.email eq input.email }.singleOrNull()

                    if (existingUser != null) {
                        // Si el correo electrónico ya está en uso, responder con un mensaje
                        launch { call.respond(HttpStatusCode.BadRequest, "Este correo electrónico ya fue usado") }
                    } else {
                        // Si el correo electrónico no está en uso, proceder con la inserción
                        val userId = UserTable.insertAndGetId {
                            it[image] = input.image
                            it[name] = input.name
                            it[age] = input.age
                            it[location] = input.location
                            it[biography] = input.biography
                            it[isVerify] = input.isVerify
                            it[budget] = input.budget
                            it[searchedArea] = input.searchedArea
                        }.value

                        UserLoginTable.insert {
                            it[user] = userId
                            it[email] = input.email
                            it[password] = input.password
                        }
                        launch { call.respond(mapOf("status" to "success")) }
                    }
                }
            } catch (e: Exception) {
                application.log.error("Error handling /insertNewUserTable request", e)
                call.respond(
                    HttpStatusCode.InternalServerError,
                    mapOf("status" to "failure", "message" to e.localizedMessage)
                )
            }
        }
        post("/validateUser") {
            val input = call.receive<UserCredentials>()

            try {
                transaction {
                    val userLogin = UserLoginTable.select {
                        (UserLoginTable.email eq input.email) and (UserLoginTable.password eq input.password)
                    }.singleOrNull()

                    if (userLogin != null) {
                        val user = UserTable.select { UserTable.id eq userLogin[UserLoginTable.user] }.singleOrNull()
                        if (user != null) {
                            val userId = userLogin[UserLoginTable.id].value
                            val userName = user[UserTable.name]
                            val userLocation = user[UserTable.location]
                            // Aquí puedes usar userId, userName y userLocation

                            launch { call.respond(UserResponsePost("success", userId, userName, userLocation)) }
                        } else {
                            launch { call.respond(UserResponsePost("failure", null, null, null)) }
                        }
                    } else {
                        launch { call.respond(UserResponsePost("failure", null, null, null)) }
                    }
                }
            } catch (e: Exception) {
                application.log.error("Error during transaction", e)
                launch { call.respond(HttpStatusCode.InternalServerError, "Error during transaction") }
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
                            it[RoomTable.room_type],
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
                                it[room_type] = input.room
                            }.value

                            UserRoomTable.insert {
                                it[user] = input.userId
                                it[room] = roomId
                            }

                            // Insert into ServicesRoomTable
                            input.serviceId.forEach { serviceId ->
                                RoomServiceTable.insert {
                                    it[room] = roomId
                                    it[service] = serviceId
                                }
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

        post("/insertFavorite") {
            launch {
                try {
                    val input = call.receive<FavoriteRequest>()

                    transaction {
                        // Check if the room type exists in the RoomType table
                        val roomExist = RoomTable.select {
                            RoomTable.id eq input.room
                        }.singleOrNull() != null
                        val userExist = UserLoginTable.select {
                            UserLoginTable.id eq input.user
                        }.singleOrNull() != null

                        if (roomExist && userExist) {
                            // If the room type exists, proceed with the insert operation
                            FavoriteTable.insert {
                                it[user] = input.user
                                it[room] = input.room
                            }
                            launch { call.respond(mapOf("Status" to "Success")) }
                        } else {
                            // If the room type does not exist, respond with an error message
                            launch {
                                call.respond(
                                    HttpStatusCode.BadRequest,
                                    mapOf("Status" to "Failure", "Message" to "Room or user does not exist")
                                )
                            }
                        }

                    }
                } catch (e: Exception) {
                    // Log the exception
                    application.log.error("Error handling /insertFavorite request", e)
                    // Respond with a 500 status code and a message
                    call.respond(
                        HttpStatusCode.InternalServerError,
                        mapOf("Status" to "Failure", "Message" to e.localizedMessage)
                    )
                }
            }
        }


        post("/getFavoriteByUser") {
            launch {
                try {
                    val input = call.receive<FavoriteByUserRequest>()

                    transaction {

                        val userExist = UserTable.select {
                            UserTable.id eq input.user
                        }.singleOrNull() != null

                        if (userExist) {
                            // If the user exists, proceed with the select operation
                            val favorites = FavoriteTable.select {
                                FavoriteTable.user eq input.user
                            }

                            val rooms = RoomTable.select {
                                RoomTable.id inList favorites.map { it[FavoriteTable.room] }
                            }.map {
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
                                    it[RoomTable.room_type]
                                )
                            }.toList()

                            launch { call.respond(rooms) }
                        } else {
                            // If the user does not exist, respond with an error message
                            launch {
                                call.respond(
                                    HttpStatusCode.BadRequest,
                                    mapOf("Status" to "Failure", "Message" to "User does not exist")
                                )
                            }
                        }
                    }
                } catch (e: Exception) {
                    // Log the exception
                    application.log.error("Error handling /getFavoriteByUser request", e)
                    // Respond with a 500 status code and a message
                    call.respond(
                        HttpStatusCode.InternalServerError,
                        mapOf("Status" to "Failure", "Message" to e.localizedMessage)
                    )
                }
            }
        }

        post("/getRoomById") {
            try {
                val input = call.receive<RoomIdRequest>()
                val roomId = input.id
                val room = transaction {
                    val roomServices = (RoomTable innerJoin RoomServiceTable innerJoin ServicesTable)
                        .select { RoomTable.id eq roomId }
                        .map {
                            Pair(
                                RoomServicesResponse(
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
                                    it[RoomTable.room_type],
                                    emptyList()
                                ),
                                ServicesResponse(
                                    it[ServicesTable.id].value,
                                    it[ServicesTable.name]
                                )
                            )
                        }

                    val roomMap = roomServices.groupBy({ it.first }, { it.second })

                    roomMap.map { (room, services) ->
                        room.copy(services = services)
                    }.singleOrNull()
                }
                if (room != null) {
                    call.respond(room)
                } else {
                    call.respond(HttpStatusCode.NotFound, "Room not found")
                }
            } catch (e: Exception) {
                // Log the exception
                application.log.error("Error handling /getRoom request", e)
                // Respond with a 500 status code
                call.respond(HttpStatusCode.InternalServerError)
            }
        }

        post("/getRoomFilter") {
            try {
                val input = call.receive<RoomFilterRequest>()
                val room = transaction {
                    val query = RoomTable.selectAll()

                    input.title?.let {
                        query.orWhere { RoomTable.title eq it }
                    }

                    input.title?.let {
                        query.orWhere { RoomTable.city eq it }
                    }

                    input.title?.let {
                        query.orWhere { RoomTable.district eq it }
                    }

                    query.map {
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
                            it[RoomTable.room_type],
                        )
                    }.toList()
                }
                if (room.isNotEmpty()) {
                    call.respond(room)
                } else {
                    call.respond(HttpStatusCode.NotFound, "Room not found")
                }
            } catch (e: Exception) {
                // Log the exception
                application.log.error("Error handling /getRoom request", e)
                // Respond with a 500 status code
                call.respond(HttpStatusCode.InternalServerError)
            }
        }

        post("/deleteFavoriteById") {
            launch {
                try {
                    val input =
                        call.receive<FavoriteByIDRequest>() // Asume que FavoriteByUserRequest tiene un campo 'id'

                    transaction {
                        val deletedRows = FavoriteTable.deleteWhere { FavoriteTable.id eq input.id }

                        if (deletedRows > 0) {
                            launch { call.respond(mapOf("Status" to "Success")) }
                        } else {
                            launch {
                                call.respond(
                                    HttpStatusCode.BadRequest,
                                    mapOf("Status" to "Failure", "Message" to "Favorite not found")
                                )
                            }
                        }
                    }
                } catch (e: Exception) {
                    // Log the exception
                    application.log.error("Error handling /deleteFavoriteById request", e)
                    // Respond with a 500 status code and a message
                    call.respond(
                        HttpStatusCode.InternalServerError,
                        mapOf("Status" to "Failure", "Message" to e.localizedMessage)
                    )
                }
            }
        }

        post("/getUserInfoById") {
            try {
                val input = call.receive<UserLoginIdRequest>()

                transaction {
                    val userLogin = UserLoginTable.select { UserLoginTable.id eq input.id }.singleOrNull()

                    if (userLogin != null) {
                        val user = UserTable.select { UserTable.id eq userLogin[UserLoginTable.user] }.singleOrNull()

                        if (user != null) {
                            val userInfo = User(
                                user[UserTable.id].value,
                                user[UserTable.image],
                                user[UserTable.name],
                                user[UserTable.age],
                                user[UserTable.location],
                                user[UserTable.biography],
                                user[UserTable.isVerify],
                                user[UserTable.budget],
                                user[UserTable.searchedArea]

                            )
                            launch { call.respond(userInfo) }
                        } else {
                            launch { call.respond(HttpStatusCode.NotFound, "User not found") }
                        }
                    } else {
                        launch { call.respond(HttpStatusCode.NotFound, "UserLogin not found") }
                    }
                }
            } catch (e: Exception) {
                application.log.error("Error handling /getUserInfo request", e)
                launch { call.respond(HttpStatusCode.InternalServerError) }
            }
        }


        get("/getServices") {
            try {
                val services = transaction {
                    ServicesTable.selectAll().map {
                        ServicesResponse(
                            it[ServicesTable.id].value,
                            it[ServicesTable.name]
                        )
                    }
                }.toList()
                call.respond(services)
            } catch (e: Exception) {
                // Log the exception
                application.log.error("Error handling /getServices request", e)
                // Respond with a 500 status code
                call.respond(HttpStatusCode.InternalServerError)
            }
        }

    }
}


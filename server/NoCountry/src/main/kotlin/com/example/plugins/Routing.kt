package com.example.plugins

import com.example.Database.Model
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction



fun Application.configureRouting() {
    routing {
        get("/user/{login}") {
            if (call.parameters["login"] == "admin"){

            }
        }
        get("/room") {
            call.respondText("Hello World!")
        }
        route("/user") {
            get {
                call.respond(Model.UserTable)
            }
        }
    }
}







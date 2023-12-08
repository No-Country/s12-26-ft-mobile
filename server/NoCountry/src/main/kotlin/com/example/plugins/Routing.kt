package com.example.plugins

import com.example.entity.User
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*


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
                call.respond(User())
            }
        }
    }
}







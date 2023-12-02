package com.example.plugins

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

private var users = listOf(
    "chris", "Roberto", "David"
)

fun Application.configureRouting() {
    routing {
        get("/user/{login}") {
            if (call.parameters["login"] == "admin"){

            }
        }
        get("/room") {
            call.respondText("Hello World!")
        }
    }
}

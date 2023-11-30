package com.example.plugins

import com.example.plugins.TestTable.name
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction

fun Application.configureSerialization() {
    install(ContentNegotiation) {
        json()
    }
    routing {
        get("/json/kotlinx-serialization") {
            call.respond(mapOf("hello" to "world"))
        }

        get("/json/test") {
            // Realiza la consulta a la base de datos
            val rows = transaction {
                TestTable.selectAll().map {
                    // Convierte cada fila del resultado a una instancia de TestRow
                    TestRow(it[TestTable.id], it[TestTable.name])
                }
            }.toList() // Convierte la ArrayList a una lista inmutable

            // Envía la respuesta en formato JSON
            call.respond(rows)
        }

        post("/json/insert") {
            // Deserializa el cuerpo de la petición a una instancia de TestRowInput
            val input = call.receive<TestRowInput>()

            // Realiza la inserción en la base de datos
            transaction {
                TestTable.insert {
                    it[name] = input.name
                }
            }

            // Envía una respuesta para indicar que la operación fue exitosa
            call.respond(mapOf("status" to "success"))
        }
    }

}

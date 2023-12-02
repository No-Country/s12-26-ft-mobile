package com.example.plugins

import com.example.Database.Model
import io.ktor.server.application.*
import kotlinx.serialization.Serializable
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction


@Serializable
data class TestRow(val id: Int, val name: String)


fun Application.configureDatabase() {
    Database.connect(
        url = "jdbc:mysql://localhost:3306/test?createDatabaseIfNotExist=true",
        driver = "com.mysql.cj.jdbc.Driver",
        user = "root",
        password = "root"
    )

    transaction {
        // Crea la tabla en la base de datos
        SchemaUtils.create(
            Model.UserTable,
            Model.RoomTable,
            Model.ServiceTable,
            Model.RoomTypeTable,
            Model.FavoriteTable,
            Model.RoomServiceTable,
            Model.UserRoomTable,
            Model.UserLoginTable

        )
    }

}
package com.example.plugins


import com.example.entity.*
import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import io.ktor.server.application.*
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction

fun Application.configureDatabase() {
    val databaseName = "test"
    val instanceConnectionName = "ktor-project-407503:us-central1:test"
    val user = "ryzer"
    val password = "David1091."
    var jdbcUrl = String.format(
        "jdbc:mysql://google/%s?cloudSqlInstance=%s&socketFactory=com.google.cloud.sql.mysql.SocketFactory&user=%s&password=%s&useSSL=false",
        databaseName,
        instanceConnectionName,
        user,
        password
    )

    val config = HikariConfig().apply {
        driverClassName = "com.mysql.cj.jdbc.Driver"
        this.jdbcUrl = jdbcUrl
        maximumPoolSize = 3
        isAutoCommit = false
        transactionIsolation = "TRANSACTION_REPEATABLE_READ"
        validate()
    }

    val dataSource = HikariDataSource(config)

    Database.connect(dataSource)


    transaction {
        // Create the table in the database
        SchemaUtils.create(
            UserTable,
            RoomTable,
            ServicesTable,
            FavoriteTable,
            RoomServiceTable,
            UserLoginTable,
            UserRoomTable
            // Add other tables here...
        )
    }
}


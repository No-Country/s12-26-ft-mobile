package com.example.plugins

import io.ktor.server.application.*
import kotlinx.serialization.Serializable
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.transactions.transaction

// Define el objeto que representa la tabla
object TestTable : Table() {
    val id = integer("id").autoIncrement()
    val name = varchar("name", length = 50)
    override val primaryKey = PrimaryKey(id, name = "PK_TestTable_Id")

}

@Serializable
data class TestRow(val id: Int, val name: String)

@Serializable
data class TestRowInput(val name: String)
fun Application.configureDatabase() {
    Database.connect(
        url = "jdbc:mysql://localhost:3306/test",
        driver = "com.mysql.cj.jdbc.Driver",
        user = "root",
        password = "root"
    )

    transaction {
        // Crea la tabla en la base de datos
        SchemaUtils.create(TestTable)
    }
    transaction {
        exec("SHOW TABLES") { rs ->
            val tableNames = generateSequence {
                if (rs.next()) rs.getString(1) else null
            }.toList()
            println("Tables in the database: $tableNames")
        }
    }
}
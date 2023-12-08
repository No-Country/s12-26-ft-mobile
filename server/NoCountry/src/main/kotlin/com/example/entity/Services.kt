package com.example.entity

import org.jetbrains.exposed.sql.Table

class Services : Table() {
    val id = integer("id")
        .autoIncrement()
        .uniqueIndex()
    val name = varchar("name", 150)
    override val primaryKey = PrimaryKey(id, name = "PK_ServiceTable_Id")
}
package com.example.entity

import org.jetbrains.exposed.dao.id.IntIdTable

object ServicesTable : IntIdTable() {
    val name = varchar("name", 150)
    override val primaryKey = PrimaryKey(id, name = "PK_ServiceTable_Id")
}
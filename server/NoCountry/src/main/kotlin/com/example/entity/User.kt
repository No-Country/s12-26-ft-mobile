package com.example.entity

import org.jetbrains.exposed.sql.Table

class User : Table() {
    val id = integer("id").autoIncrement()
    val image = varchar("image", 150)
    val name = varchar("name", 150)
    val age = integer("age")
    val location = varchar("location", 150)
    val biography = varchar("biography", 150)
    val isVerify = bool("is_verify")
    val budget = double("budget")
    val searchedArea = varchar("searched_area", 150)
    override val primaryKey = PrimaryKey(id, name = "PK_UserTable_Id")
}
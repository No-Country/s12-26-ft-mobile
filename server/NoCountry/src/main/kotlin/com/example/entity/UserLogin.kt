package com.example.entity

import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table
class UserLogin : Table() {
    val id = integer("id")
        .autoIncrement()
        .uniqueIndex()
    val user = integer("user").references(User().id, onDelete = ReferenceOption.CASCADE)
    val email = varchar("email", 150)
    val password = varchar("password", 150)
    override val primaryKey = PrimaryKey(id, name = "PK_UserLoginTable_Id")
}
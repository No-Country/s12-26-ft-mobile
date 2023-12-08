package com.example.entity

import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table

class RoomService : Table() {
    val id = integer("id")
        .autoIncrement()
        .uniqueIndex()
    val room = integer("room").references(Room().id, onDelete = ReferenceOption.CASCADE)
    val service = integer("service").references(Services().id, onDelete = ReferenceOption.CASCADE)
    override val primaryKey = PrimaryKey(id, name = "PK_RoomServiceTable_Id")
}
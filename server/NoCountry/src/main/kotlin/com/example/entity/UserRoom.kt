package com.example.entity

import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table
object UserRoomTable : Table() {
    val id = integer("id")
        .autoIncrement()
        .uniqueIndex()
    val room = integer("room").references(RoomTable.id, onDelete = ReferenceOption.CASCADE)
    val service = integer("service").references(ServicesTable.id, onDelete = ReferenceOption.CASCADE)
    override val primaryKey = PrimaryKey(id, name = "PK_RoomServiceTable_Id")
}

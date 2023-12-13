package com.example.entity

import org.jetbrains.exposed.sql.Table

object RoomTypeTable : Table() {
    val id = integer("id")
        .autoIncrement()
        .uniqueIndex()
    val name = varchar("name", 150)
    override val primaryKey = PrimaryKey(id, name = "PK_RoomTypeTable_Id")

}

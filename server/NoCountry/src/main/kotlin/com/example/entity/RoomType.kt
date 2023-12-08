package com.example.entity

import org.jetbrains.exposed.sql.Table

class RoomType : Table() {
    val id = integer("id")
        .autoIncrement()
        .uniqueIndex()
    val name = varchar("name", 150)
    override val primaryKey = PrimaryKey(id, name = "PK_RoomTypeTable_Id")

}

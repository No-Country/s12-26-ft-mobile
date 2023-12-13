package com.example.entity

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table
object FavoriteTable : IntIdTable() {
    val user = integer("user").references(UserTable.id, onDelete = ReferenceOption.CASCADE)
    val room = integer("room").references(RoomTable.id, onDelete = ReferenceOption.CASCADE)
    override val primaryKey = PrimaryKey(id, name = "PK_FavoriteTable_Id")
}
package com.example.entity

import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table
object RoomTable : Table() {
    val id = integer("id")
        .autoIncrement()
    val image = varchar("image", 150)
    val title = varchar("title", 150)
    val city = varchar("city", 150)
    val district = varchar("district", 150)
    val province = varchar("province", 150)
    val monthPrice = double("month_price")
    val sizeM2 = double("size_m2")
    val isPet = bool("is_pet")
    val isSmokers = bool("is_smokers")
    val room = integer("room").references(RoomTypeTable.id, onDelete = ReferenceOption.CASCADE)
    override val primaryKey = PrimaryKey(id, name = "PK_RoomTable_Id")
}
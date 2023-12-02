package com.example.Database

import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table

class Model {
    // Define el objeto que representa la tabla

    object UserTable : Table() {
        val id = integer("id").autoIncrement()
        val image = varchar("image", 150)
        val name = varchar("name", 150)
        val age = integer("age")
        val location = varchar("location", 150)
        val biography = varchar("biography", 150)
        val isVerify = bool("is_verify")
        val budget = double("budget")
        val searchedArea = varchar("searched_area", 150)
        override val primaryKey = PrimaryKey(UserTable.id, name = "PK_UserTable_Id")
    }

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

        override val primaryKey = PrimaryKey(RoomTable.id, name = "PK_RoomTable_Id")
    }

    object RoomTypeTable : Table() {
        val id = integer("id")
            .autoIncrement()
            .uniqueIndex()
        val name = varchar("name", 150)
        override val primaryKey = PrimaryKey(RoomTypeTable.id, name = "PK_RoomTypeTable_Id")
    }

    object ServiceTable : Table (){
        val id = integer("id")
            .autoIncrement()
            .uniqueIndex()
        val name = varchar("name", 150)
        override val primaryKey = PrimaryKey(ServiceTable.id, name = "PK_ServiceTable_Id")
    }

    object RoomServiceTable : Table() {
        val id = integer("id")
            .autoIncrement()
            .uniqueIndex()
        val room = integer("room").references(RoomTable.id, onDelete = ReferenceOption.CASCADE)
        val service = integer("service").references(ServiceTable.id, onDelete = ReferenceOption.CASCADE)
        override val primaryKey = PrimaryKey(RoomServiceTable.id, name = "PK_RoomServiceTable_Id")
    }

    object UserRoomTable : Table() {
        val id = integer("id")
            .autoIncrement()
            .uniqueIndex()
        val user = integer("user").references(UserTable.id, onDelete = ReferenceOption.CASCADE)
        val room = integer("room").references(RoomTable.id, onDelete = ReferenceOption.CASCADE)
        override val primaryKey = PrimaryKey(UserRoomTable.id, name = "PK_UserRoomTable_Id")
    }

    object FavoriteTable : Table() {
        val id = integer("id")
            .autoIncrement()
            .uniqueIndex()
        val user = integer("user").references(UserTable.id, onDelete = ReferenceOption.CASCADE)
        val room = integer("room").references(RoomTable.id, onDelete = ReferenceOption.CASCADE)
        override val primaryKey = PrimaryKey(FavoriteTable.id, name = "PK_FavoriteTable_Id")
    }

    object UserLoginTable : Table() {
        val id = integer("id")
            .autoIncrement()
            .uniqueIndex()
        val user = integer("user").references(UserTable.id, onDelete = ReferenceOption.CASCADE)
        val email = varchar("email", 150)
        val password = varchar("password", 150)
        override val primaryKey = PrimaryKey(UserLoginTable.id, name = "PK_UserLoginTable_Id")
    }
}


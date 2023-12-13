package com.example.plugins

import kotlinx.serialization.Serializable

@Serializable
data class User(
    val id: Int,
    val image: String,
    val name: String,
    val age: Int,
    val location: String,
    val biography: String,
    val isVerify: Boolean,
    val budget: Double,
    val searchedArea: String
)

@Serializable
data class Room(
    val id: Int,
    val image: String,
    val title: String,
    val city: String,
    val district: String,
    val province: String,
    val monthPrice: Double,
    val sizeM2: Double,
    val isPet: Boolean,
    val isSmokers: Boolean,
    val room: Int
)

@Serializable
data class RoomType(
    val id: Int,
    val name: String
)

@Serializable
data class Service(
    val id: Int,
    val name: String
)

@Serializable
data class RoomService(
    val id: Int,
    val room: Int,
    val service: Int
)

@Serializable
data class UserRoom(
    val id: Int,
    val user: Int,
    val room: Int
)

@Serializable
data class Favorite(
    val id: Int,
    val user: Int,
    val room: Int
)

@Serializable
data class UserLogin(
    val id: Int,
    val user: Int,
    val email: String,
    val password: String
)

@Serializable
data class InsertUserLogin(
    val user: Int,
    val email: String,
    val password: String,
    val image: String,
    val name: String,
    val age: Int,
    val location: String,
    val biography: String,
    val isVerify: Boolean,
    val budget: Double,
    val searchedArea: String
)

@Serializable
data class RoomTypeRequest(
    val name: String
)


@Serializable
data class UserCredentials(val email: String, val password: String)
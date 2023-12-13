package com.example.dtos.userRoom

import kotlinx.serialization.Serializable

@Serializable
data class UserRoomResponse(
    val id: Int,
    val user: Int,
    val room: Int
)
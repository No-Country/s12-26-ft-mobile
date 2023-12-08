package com.example.dtos.userRoom

import kotlinx.serialization.Serializable

@Serializable
data class UserRoomRequest(
    val user: Int,
    val room: Int
)

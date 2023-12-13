package com.example.dtos.roomServices

import kotlinx.serialization.Serializable

@Serializable
data class RoomServicesResponse(
    val id: Int,
    val user: Int,
    val room: Int
)

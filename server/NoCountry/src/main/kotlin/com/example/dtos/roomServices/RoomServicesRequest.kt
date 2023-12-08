package com.example.dtos.roomServices

import kotlinx.serialization.Serializable

@Serializable
data class RoomServicesRequest(
    val user: Int,
    val room: Int
)

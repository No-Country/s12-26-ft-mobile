package com.example.dtos.roomType

import kotlinx.serialization.Serializable

@Serializable
data class RoomTypeResponse(
    val id: Int,
    val name: String
)
package com.example.dtos.room

import kotlinx.serialization.Serializable

@Serializable
data class RoomResponse(
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
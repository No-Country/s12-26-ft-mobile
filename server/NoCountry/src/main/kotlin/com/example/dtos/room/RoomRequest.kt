package com.example.dtos.room

import kotlinx.serialization.Serializable

@Serializable
data class RoomRequest(
    val image: String,
    val title: String,
    val city: String,
    val district: String,
    val province: String,
    val monthPrice: Double,
    val sizeM2: Double,
    val isPet: Boolean,
    val isSmokers: Boolean,
    val room: Int,
    val userId: Int,
    val serviceId: List<Int>,
)


@Serializable
data class RoomIdRequest(val id: Int)


@Serializable
data class RoomFilterRequest(
    val title: String? = null,
)
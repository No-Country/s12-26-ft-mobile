package com.example.dtos.favorite

import kotlinx.serialization.Serializable

@Serializable
data class FavoriteResponse (
    val id: Int,
    val user: Int,
    val room: Int
)
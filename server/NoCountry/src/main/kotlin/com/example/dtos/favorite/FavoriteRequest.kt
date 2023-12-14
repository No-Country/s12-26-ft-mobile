package com.example.dtos.favorite

import kotlinx.serialization.Serializable

@Serializable
data class FavoriteRequest(
    val user: Int,
    val room: Int
)


@Serializable
data class FavoriteByUserRequest(
    val user: Int,
)
package com.example.dtos.user

import kotlinx.serialization.Serializable

@Serializable
data class UserRequest(
    val image: String,
    val name: String,
    val age: Int,
    val location: String,
    val biography: String,
    val isVerify: Boolean,
    val budget: Double,
    val searchedArea: String
)

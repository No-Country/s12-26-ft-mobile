package com.example.dtos.user

import kotlinx.serialization.Serializable

@Serializable
data class UserResponse(
    val id: Int,
    val image: String,
    val name: String,
    val age: Int,
    val location: String,
    val biography: String,
    val isVerify: Boolean,
    val budget: Double,
    val searchedArea: String
)
@Serializable
data class UserResponsePost(val status: String, val userId: Int?, val userName: String?, val userLocation: String?)
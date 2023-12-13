package com.example.dtos.userLogin

import kotlinx.serialization.Serializable

@Serializable
data class UserLoginResponse(
    val id: Int,
    val user: Int,
    val email: String,
    val password: String
)

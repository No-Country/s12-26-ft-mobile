package com.example.dtos.userLogin

import kotlinx.serialization.Serializable

@Serializable
data class UserLoginRequest(
    val user: Int,
    val email: String,
    val password: String
)

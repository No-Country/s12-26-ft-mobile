package com.example.dtos.services

import kotlinx.serialization.Serializable

@Serializable
data class ServicesResponse(
    val id: Int,
    val name: String
)

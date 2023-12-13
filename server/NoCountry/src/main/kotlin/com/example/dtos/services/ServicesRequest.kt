package com.example.dtos.services

import kotlinx.serialization.Serializable

@Serializable
data class ServicesRequest(
    val name: String
)
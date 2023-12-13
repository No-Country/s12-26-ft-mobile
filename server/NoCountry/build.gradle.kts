import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar
import com.google.cloud.tools.gradle.appengine.appyaml.AppEngineAppYamlExtension

val ktor_version: String by project
val kotlin_version: String by project
val logback_version: String by project

plugins {
    kotlin("jvm") version "1.9.21"
    id("io.ktor.plugin") version "2.3.6"
    id("org.jetbrains.kotlin.plugin.serialization") version "1.9.21"
    id("com.github.johnrengelman.shadow") version "5.2.0"
    id("com.google.cloud.tools.appengine") version "2.2.0" // Add this line
}

group = "com.example"
version = "0.0.1"

application {
    mainClass.set("com.example.ApplicationKt")

    val isDevelopment: Boolean = project.ext.has("development")
    applicationDefaultJvmArgs = listOf("-Dio.ktor.development=$isDevelopment")
}

tasks {
    val shadowJarTask = named<ShadowJar>("shadowJar") {
        // ... as defined above
    }

    // we want the UberJar, so this task has limited value
    named("jar") {
        enabled = false
    }

    // update the `assemble` task to ensure the creation
    // of a brand new UberJar using the shadowJar task
    named("assemble") {
        dependsOn(shadowJarTask)
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.ktor:ktor-server-core-jvm")
    implementation("io.ktor:ktor-server-content-negotiation-jvm")
    implementation("io.ktor:ktor-serialization-kotlinx-json-jvm")
    implementation("io.ktor:ktor-server-netty-jvm")
    implementation("ch.qos.logback:logback-classic:$logback_version")
    testImplementation("io.ktor:ktor-server-tests-jvm")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit:$kotlin_version")
    /*Conection Mysql*/
    implementation("mysql:mysql-connector-java:8.0.28")
    implementation("org.jetbrains.exposed:exposed-core:0.35.1")
    implementation("org.jetbrains.exposed:exposed-dao:0.35.1")
    implementation("org.jetbrains.exposed:exposed-jdbc:0.35.1")
    implementation("com.zaxxer:HikariCP:4.0.3")
    implementation("com.google.cloud.sql:mysql-socket-factory-connector-j-8:1.15.1")

}


buildscript {
    repositories { jcenter() }
    dependencies { classpath("com.google.cloud.tools:appengine-gradle-plugin:2.2.0") }
}
apply {
    plugin("com.google.cloud.tools.appengine")
}

configure<AppEngineAppYamlExtension> {
    tools {
        // configure the Cloud Sdk tooling
    }

    stage {
        // configure staging for deployment
        setAppEngineDirectory("src/main/appengine")
        setArtifact("build/libs/${project.name}-all.jar")
    }

    deploy {
        // configure deployment to app engine
        projectId = "GCLOUD_CONFIG"
        version = "GCLOUD_CONFIG"
        stopPreviousVersion = true  // stop the old version
        promote = true              // use this the version
    }
}
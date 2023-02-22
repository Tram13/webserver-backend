package me.tram13.api.controllers

import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.io.InputStream
import java.io.Serializable
import java.nio.file.Path
import java.nio.file.Paths

@RestController
class FilesController {

    private val downloadDirectory: Path = Paths.get("/mnt/hdd/data/webserver_data")

    @GetMapping(
        value = ["/lille_2023"],
        produces = [MediaType.APPLICATION_OCTET_STREAM_VALUE]
    )
    fun getLilleZip(): ResponseEntity<out Serializable> {

        val x: InputStream? = this::class.java.getResourceAsStream("${downloadDirectory}/lille_2023.zip")
        return if (x != null) {
            ResponseEntity.status(HttpStatus.OK).body(x.readBytes())
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("File not found on server")
        }
    }
}
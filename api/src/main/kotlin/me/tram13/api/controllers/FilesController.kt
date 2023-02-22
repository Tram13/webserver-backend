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

        val file: InputStream? = this::class.java.getResourceAsStream(downloadDirectory.resolve("lille_2023.zip").toString())
        print(downloadDirectory.resolve("lille_2023.zip").toString())
        return if (file != null) {
            ResponseEntity.status(HttpStatus.OK).body(file.readBytes())
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("File not found on server")
        }
    }
}

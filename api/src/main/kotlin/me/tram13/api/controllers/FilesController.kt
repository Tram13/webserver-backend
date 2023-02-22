package me.tram13.api.controllers

import org.springframework.core.io.UrlResource
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.io.File
import java.nio.file.Path
import java.nio.file.Paths

@RestController
class FilesController {

    private val downloadDirectory: Path = Paths.get("mnt", "hdd", "data", "webserver_data")

    @GetMapping(
        value = ["/lille_2023"],
        produces = [MediaType.APPLICATION_OCTET_STREAM_VALUE]
    )
    fun getLilleZip(): ResponseEntity<File> {
        val urlResource = UrlResource(downloadDirectory.resolve("lille_2023.zip").toString())
        return ResponseEntity
            .status(HttpStatus.OK)
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + urlResource.filename + "\"")
            .body(urlResource.file)
    }
}

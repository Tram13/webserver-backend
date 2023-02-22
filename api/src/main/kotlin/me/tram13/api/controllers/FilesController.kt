package me.tram13.api.controllers

import org.springframework.core.io.UrlResource
import org.springframework.http.ContentDisposition
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.net.MalformedURLException
import java.nio.file.Path
import java.nio.file.Paths

@RestController
class FilesController {

    private val downloadDirectory: Path = Paths.get("/", "mnt", "hdd", "data", "webserver_data")
    // TODO //
    // DEZE SHIT WERKT NIET, enkel op windows als ik het lokaal run?
    @GetMapping("/lille_2023")
    fun getLilleZip(): ResponseEntity<out Any> {
        val filePath = Paths.get(downloadDirectory.resolve("lille_2023.zip").toString())
        return try {
            val urlResource = UrlResource(filePath.toAbsolutePath().toUri())
            print(urlResource.toString())
            // Creating headers
            val headers = HttpHeaders()
            headers.contentType = MediaType.APPLICATION_OCTET_STREAM
            headers.contentDisposition = ContentDisposition.attachment().filename(filePath.fileName.toString()).build()
            headers.contentLength = urlResource.contentLength()
            // Creating response
            ResponseEntity
                .status(HttpStatus.OK)
                .headers(headers)
                .body(urlResource)
        } catch (e: MalformedURLException) {
            e.printStackTrace()
            ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body("File not found on server: ${filePath.toUri()}")
        }
    }
}

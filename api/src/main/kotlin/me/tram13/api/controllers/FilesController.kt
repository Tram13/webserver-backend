package me.tram13.api.controllers

import org.springframework.core.io.Resource
import org.springframework.core.io.UrlResource
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.io.FileNotFoundException
import java.nio.file.Path
import java.nio.file.Paths

@RestController
class FilesController {

    private val downloadDirectory: Path = Paths.get("/mnt/hdd/data/webserver_data")

    @GetMapping(
        value = ["/lille_2O23"],
        produces = [MediaType.APPLICATION_OCTET_STREAM_VALUE]
    )
    fun getLilleZip(): ResponseEntity<out Any> {
        val fileName = "lille_2023.zip"
        return when (val res = getFile(fileName).getOrNull()) {
            is Resource -> ResponseEntity.status(HttpStatus.OK)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; file=${fileName}")
                .body<Resource>(res)

            else -> ResponseEntity.status(HttpStatus.EXPECTATION_FAILED)
                .body("Could not download file: $fileName")
        }
    }

    fun getFile(filename: String): Result<Resource> {
        return runCatching {
            val filePath: Path = downloadDirectory.resolve(filename)
            val resource: Resource = UrlResource(filePath.toUri())
            if (resource.exists() || resource.isReadable)
                resource
            else throw FileNotFoundException("The file does not exist or is not readable!")
        }.onFailure {
            print("File not found/does not exist")
        }
    }
}

package me.tram13.api.controllers

import org.springframework.beans.factory.annotation.Value
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.io.File
import java.nio.file.Path
import java.nio.file.Paths
import java.util.*

@RestController
class RootController {

    @Value("\${deployment-url}")
    private lateinit var apiUrl: String

    private fun data(): HashMap<String, String> {
        val content: HashMap<String, String> = HashMap()

        val rootDirectory: Path = Paths.get("").toAbsolutePath()
        val relativePath: Path = Path.of("src", "main", "kotlin", "me", "tram13", "api", "controllers")
        val controllersDir = File(rootDirectory.toString(), relativePath.toString())
        controllersDir.walk().forEach { file ->
            if (file.isFile) {
                val controller: String = file.nameWithoutExtension.dropLast(10).lowercase(Locale.getDefault())
                val url = "$apiUrl/$controller"
                content[controller] = url
            }
        }

        // Rootcontroller heeft speciale waarde
        content["root"] = apiUrl
        return content
    }

    @GetMapping("/")
    fun getContent(): HashMap<String, String> {
        return data()
    }
}
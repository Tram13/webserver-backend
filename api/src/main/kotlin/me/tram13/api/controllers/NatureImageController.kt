package me.tram13.api.controllers


import com.github.kittinunf.fuel.httpGet
import org.springframework.boot.configurationprocessor.json.JSONObject
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController


@RestController
class NatureImageController {
    private fun parseResolution(title: String): Pair<Int, Int> {
        val pattern = Regex("[0-9]+[ Xx×]+[0-9]+")
        return if (pattern.containsMatchIn(title)) {
            val resolutionString = pattern.find(title)!!.value
            val widthReg = Regex("^[0-9]+")
            val heightReg = Regex("[0-9]+$")
            val width = widthReg.find(resolutionString)!!.value.toInt()
            val height = heightReg.find(resolutionString)!!.value.toInt()
            Pair(width, height)
        } else {
            Pair(0, 0)
        }
    }

    private fun parseStringToList(input: String): List<JSONObject> {
        var depth = 0
        var start = 0
        val templist: MutableList<String> = mutableListOf()
        for (i in input.indices) {
            if (input[i] == '{') {
                depth++
            } else if (input[i] == '}') {
                depth--
            } else if (depth == 1) {
                start = i + 1
            } else if (depth == 0) {
                templist.add(input.substring(start, i))
            }
        }
        val resultlist: MutableList<JSONObject> = mutableListOf()
        templist.forEach { post ->
            if (post != "") {
                resultlist.add(JSONObject(post))
            }
        }
        return resultlist
    }

    private fun getTopImageOfSubreddit(subreddit: String): String {
        val callUrl = "https://www.reddit.com/r/$subreddit/top.json"
        val response = callUrl.httpGet().header("User-agent", "api.tram13.me bot").responseString(Charsets.UTF_8).second
        val body = JSONObject(response.body().asString("application/json"))
        val posts = parseStringToList(JSONObject(body["data"].toString())["children"].toString())
        return getBestPost(posts)["url"].toString()
    }

    private fun getBestPost(posts: List<JSONObject>): JSONObject {
        var postIteratorIndex = 0
        var hasGoodResolution = false
        while (postIteratorIndex < posts.size && !hasGoodResolution) {
            val imageJson = posts[postIteratorIndex]
            hasGoodResolution = checkResolution(imageJson)
            postIteratorIndex++
        }
        // Minus 1 because while-loop will always add 1 after each loop, even if it has good resolution
        return posts[postIteratorIndex - 1]
    }

    private fun checkResolution(imageJson: JSONObject): Boolean {
        val resolution = parseResolution(imageJson["title"].toString())
        val width = resolution.first
        val height = resolution.second
        val aspectRatio: Double = width / height.toDouble()
        println(aspectRatio)
        return width >= 3000 && height >= 2000 && aspectRatio > 1
    }

    @GetMapping("/natureimage")
    fun getContent(): HashMap<String, String> {
        return hashMapOf(
            "url" to getTopImageOfSubreddit("earthporn")
        )
    }
}
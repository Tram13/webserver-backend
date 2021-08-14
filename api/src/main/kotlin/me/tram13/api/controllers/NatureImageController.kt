package me.tram13.api.controllers


import com.github.kittinunf.fuel.httpGet
import org.springframework.boot.configurationprocessor.json.JSONArray
import org.springframework.boot.configurationprocessor.json.JSONObject
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.servlet.view.RedirectView


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

    private fun parseStringToList(input: String): JSONArray {
        return JSONArray(input)
    }

    private fun getTopImageOfSubreddit(subreddit: String): String {
        val callUrl = "https://www.reddit.com/r/$subreddit/top.json"
        val response = callUrl.httpGet().header("User-agent", "api.tram13.me bot").responseString(Charsets.UTF_8).second
        val body = JSONObject(response.body().asString("application/json"))
        val posts = JSONArray(JSONObject(body["data"].toString())["children"].toString())
        return getBestPost(posts)["url"].toString()
    }

    private fun getBestPost(posts: JSONArray): JSONObject {
        var postIteratorIndex = 0
        var hasGoodResolution = false
        var bestPost = JSONObject()
        while (postIteratorIndex < posts.length() && !hasGoodResolution) {
            val imageJson = posts[postIteratorIndex] as JSONObject
            val dataJson = imageJson["data"] as JSONObject
            hasGoodResolution = checkResolution(dataJson)
            if (hasGoodResolution) {
                bestPost = dataJson
            }
            postIteratorIndex++
        }
        return bestPost
    }

    private fun checkResolution(dataJson: JSONObject): Boolean {
        val resolution = parseResolution(dataJson["title"].toString())
        val width = resolution.first
        val height = resolution.second
        val aspectRatio: Double = width / height.toDouble()
        return width >= 3000 && height >= 2000 && aspectRatio > 1
    }

    @GetMapping("/natureimage")
    fun redirect(): RedirectView {
        return RedirectView(getTopImageOfSubreddit("earthporn"))
    }
}
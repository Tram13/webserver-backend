package me.tram13.api.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView

@RestController
public class SelabController {

    @GetMapping("/image1")
    fun redirect(): RedirectView {
        return RedirectView("https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiv_-SVuen3AhUjQUEAHexQAPAQyCl6BAgVEAM&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU")
    }
}

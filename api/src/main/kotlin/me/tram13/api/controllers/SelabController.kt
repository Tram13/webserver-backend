package me.tram13.api.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView

@RestController
public class SelabController {

    @GetMapping("/Simulatie_omgeving")
    fun redirect(): RedirectView {
        return RedirectView("https://selabenv.tram13.me")
    }
}

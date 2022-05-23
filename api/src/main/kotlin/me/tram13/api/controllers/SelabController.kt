package me.tram13.api.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView

@RestController
public class SelabController {

    @GetMapping("/Simulatie_omgeving")
    fun redirectSimEnv(): RedirectView {
        return RedirectView("https://selabenv.tram13.me")
    }

    @GetMapping("/all_results")
    fun redirectRes(): RedirectView {
        return RedirectView("https://selabenv.tram13.me/Recordings/resultaten.png")
    }

    @GetMapping("/workspaces")
    fun redirectWorkspaces(): RedirectView {
        return RedirectView("https://selabenv.tram13.me/workspaces/workspaces.html")
    }

    @GetMapping("/image_reinforcement_learning")
    fun redirectRL(): RedirectView {
        return RedirectView("https://selabenv.tram13.me/Recordings/rl_progress.mp4")
    }
}

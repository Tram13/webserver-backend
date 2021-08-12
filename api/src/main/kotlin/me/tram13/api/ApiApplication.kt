package me.tram13.api

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
// TODO: check of 'open' nog steeds nodig is
open class ApiApplication

fun main(args: Array<String>) {
	runApplication<ApiApplication>(*args)
}

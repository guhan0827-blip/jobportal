package com.example.jobportal.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Apitest {

        @GetMapping("/test")
        public String test() {
            return "Backend Working";
        }
    }


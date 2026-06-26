package com.example.jobportal.controller;

import com.example.jobportal.Repository.Jobpostrepo;
import com.example.jobportal.entity.Jobpost;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JobPostController {
    @Autowired
    private Jobpostrepo jobpostrepo;

    @GetMapping("/jobapp")
    public List<Jobpost> getallJobPost(){
      return   jobpostrepo.findAll();

    }
    @PostMapping("/jobapp")
    public Jobpost postjob(@RequestBody Jobpost jobpost){
       return jobpostrepo.save(jobpost);
    }

    @GetMapping("/SpecificJob")
    public List<Jobpost> specificjobfetch(@RequestParam String title){

        return jobpostrepo.findByJobTitleContainingIgnoreCase(title);
    }
}

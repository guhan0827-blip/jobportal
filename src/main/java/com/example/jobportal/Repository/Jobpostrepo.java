package com.example.jobportal.Repository;

import com.example.jobportal.entity.Jobpost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Jobpostrepo extends JpaRepository<Jobpost,Long> {

    List<Jobpost> findByJobTitleContainingIgnoreCase(String keyword);

}


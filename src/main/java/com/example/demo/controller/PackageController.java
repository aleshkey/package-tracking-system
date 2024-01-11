package com.example.demo.controller;

import com.example.demo.model.Package;
import com.example.demo.payload.response.MessageResponse;
import com.example.demo.service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/packages")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 2000,
        allowedHeaders = "*", allowCredentials = "true")
public class PackageController {
    @Autowired
    private PackageService packageService;

    @GetMapping("/all")
    public ResponseEntity<Object> getAll(Principal principal){
        List<Package> packages = packageService.getAll(principal);
        return new ResponseEntity<>(packages, HttpStatus.OK);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Object> add(@PathVariable("id") String id, Principal principal){
        System.out.println(id);
        if (packageService.addPackage(Long.parseLong(id), principal)){
            return new ResponseEntity<>(new MessageResponse("Package was added"), HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(new MessageResponse("Package wasnt added"), HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> get(@PathVariable("id") String id){
        return new ResponseEntity<>(packageService.getById(Long.parseLong(id)), HttpStatus.OK);
    }


    @PostMapping("/{id}/delete")
    public ResponseEntity<Object> delete(@PathVariable("id") String id, Principal principal){
        if (packageService.deletePackage(Long.parseLong(id), principal)){
            return new ResponseEntity<>(new MessageResponse("Package was deleted"), HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(new MessageResponse("Package wasnt deleted"), HttpStatus.BAD_REQUEST);
    }


}

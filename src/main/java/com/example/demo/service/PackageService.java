package com.example.demo.service;

import com.example.demo.model.Package;
import com.example.demo.model.User;
import com.example.demo.repository.PackageRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@Service
public class PackageService {

    @Autowired
    private PackageRepository packageRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Package> getAll(Principal principal){
        User user = getUserByPrincipal(principal);
        return user.getPackages();
    }

    public boolean addPackage(Long packageId, Principal principal){
        User user = getUserByPrincipal(principal);
        Optional<Package> p = packageRepository.findById(packageId);
        var ref = new Object() {
            boolean res = false;
        };
        p.ifPresent(aPackage -> {
            user.getPackages().add(aPackage);
            p.get().getUsers().add(user);
            packageRepository.save(p.get());
            userRepository.save(user);
            ref.res = true;
        });
        return ref.res;
    }

    public Package getById(Long id){
        return packageRepository.findById(id).get();
    }

    public boolean deletePackage(Long packageId, Principal principal){
        User user = getUserByPrincipal(principal);
        Optional<Package> p = packageRepository.findById(packageId);
        var ref = new Object() {
            boolean res = false;
        };
        p.ifPresent(aPackage -> {
            user.getPackages().remove(aPackage);
            aPackage.getUsers().remove(user);
            packageRepository.save(aPackage);
            userRepository.save(user);
            ref.res = true;
        });
        return ref.res;
    }


    private User getUserByPrincipal(Principal principal){
        return userRepository.findByUsernameIgnoreCase(principal.getName()).orElseThrow(() -> {
            throw new UsernameNotFoundException("User "+principal.getName()+" not found");
        });
    }

}

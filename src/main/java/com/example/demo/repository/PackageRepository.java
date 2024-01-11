package com.example.demo.repository;

import com.example.demo.model.Package;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface PackageRepository extends JpaRepository<Package, Long> {}

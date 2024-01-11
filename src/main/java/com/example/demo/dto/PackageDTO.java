package com.example.demo.dto;

import lombok.Data;

@Data
public class PackageDTO {

    private Long id;

    private String content;

    private double weight;

    private String deliveryMethod;

    private String status;

    private Long userId;

}

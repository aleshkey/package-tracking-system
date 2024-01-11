package com.example.demo.validators;

import com.example.demo.annotations.PasswordMatches;
import com.example.demo.payload.request.SignupRequest;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PasswordMatchesValidator implements ConstraintValidator<PasswordMatches, Object> {

    @Override
    public void initialize(PasswordMatches constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Object o, ConstraintValidatorContext constraintValidatorContext) {
        SignupRequest userSignUpRequest = (SignupRequest) o;
        return userSignUpRequest.getPassword().equals(userSignUpRequest.getConfirmPassword());
    }
}

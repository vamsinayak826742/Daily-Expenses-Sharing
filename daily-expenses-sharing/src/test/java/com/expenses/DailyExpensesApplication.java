package com.expenses;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.expenses")
public class DailyExpensesApplication {

    public static void main(String[] args) {
        SpringApplication.run(DailyExpensesApplication.class, args);
    }
}

# Daily Expenses Sharing Application

## Description
The **Daily Expenses Sharing Application** is a web-based application that allows users to manage their expenses effectively. Users can create accounts, add expenses, retrieve individual user expenses, and generate overall expense reports. The application also includes features for validating user inputs and ensuring proper expense splitting among users. It is designed with a focus on simplicity and user-friendliness, making it easy for anyone to track their daily expenses.

## Features
- **User Management**
  - Create user accounts
  - Retrieve user details
- **Expense Management**
  - Add new expenses
  - Retrieve expenses associated with individual users
  - View overall expenses
  - Download balance sheets
- **Data Validation**
  - Validate user inputs
  - Ensure that percentages in the expense splitting method add up to 100%
- **API Documentation**
  - Interactive API documentation using Swagger

## Technologies Used
- **Java**: Backend development
- **Spring Boot**: Framework for building the application
- **Spring Data JPA**: Data access layer
- **H2 Database**: In-memory database for testing
- **Maven**: Dependency management and build tool
- **Swagger**: API documentation
- **Lombok**: Reducing boilerplate code

## Setup and Installation Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/vamsinayak826742/Daily-Expenses-Sharing.git
   cd Daily-Expenses-Sharing
   ```

2. **Install Dependencies**
   Ensure you have Java (JDK 11 or later) and Maven installed. Run the following command to install dependencies:
   ```bash
   mvn clean install
   ```

3. **Run the Application**
   You can run the application using the following command:
   ```bash
   mvn spring-boot:run
   ```

4. **Access the Application**
   Open your browser and go to `http://localhost:8080`.

5. **API Documentation**
   Visit `http://localhost:8080/swagger-ui/` to view the interactive API documentation.

## Usage
- Use the provided API endpoints to create users and manage expenses. Refer to the Swagger documentation for detailed information on available endpoints and their usage.

## Contribution
Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions or improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### How to Use This README

1. **Update Links**: Ensure the repository link and any other URLs are correct.
2. **License**: If you have a specific license, include it in a separate `LICENSE` file in your repository.
3. **Additional Sections**: You can add more sections if necessary, such as troubleshooting or known issues.

Once you have made the necessary adjustments, you can create the `README.md` file in your project's root directory and push it to your GitHub repository. This will give visitors a clear understanding of your project and how to use it!

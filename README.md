# JournalApplication

JournalApplication is a Spring Boot-based journaling web application that allows users to track thoughts and moods. The application focuses on core Spring Boot features, MongoDB integration, REST APIs, and email notifications.

---

## Features

- User registration and management
- CRUD operations for journal entries
- Email notifications using Gmail SMTP
- Environment-based configuration using YAML and environment variables
- Unit testing with JUnit and Mockito
- Simplified project structure using Lombok annotations
- MongoDB integration with `MongoTemplate` and advanced queries

---

## Tech Stack

- **Backend:** Java, Spring Boot, Spring Data MongoDB, Spring Data JPA
- **Database:** MongoDB
- **Email:** Gmail SMTP
- **Build Tool:** Maven
- **Testing:** JUnit, Mockito
- **Version Control:** Git & GitHub

---

## Project Structure

- `@SpringBootApplication` entry point
- `@Service` and `@Component` annotated beans for business logic
- Advanced MongoDB queries with `MongoTemplate` and `Criteria`
- Configuration with YAML and environment variables
- Unit and integration testing using JUnit and Mockito
- Simplified coding using Project Lombok

---

## Getting Started

### Prerequisites

- Java 17+
- Maven 3+
- MongoDB instance
- Gmail account for email notifications

### Clone Repository

```bash
git clone https://github.com/Harsh-Jaiman/JournalApplication.git
cd JournalApplication

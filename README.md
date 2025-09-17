# JournalApplication

JournalApplication is a Spring Boot-based journaling web application that allows users to track thoughts and moods. The application focuses on core Spring Boot features, MongoDB integration, REST APIs, email notifications, and is containerized using Docker.

---

## Features

- User registration and management
- CRUD operations for journal entries
- Email notifications using Gmail SMTP
- Environment-based configuration using YAML and environment variables
- Unit testing with JUnit and Mockito
- Simplified project structure using Lombok annotations
- MongoDB integration with `MongoTemplate` and advanced queries
- Containerized with Docker for easy deployment

---

## Tech Stack

- **Backend:** Java, Spring Boot, Spring Data MongoDB, Spring Data JPA
- **Database:** MongoDB
- **Email:** Gmail SMTP
- **Build Tool:** Maven
- **Testing:** JUnit, Mockito
- **Containerization:** Docker
- **Version Control:** Git & GitHub

---

## Project Structure

- `@SpringBootApplication` entry point
- `@Service` and `@Component` annotated beans for business logic
- Advanced MongoDB queries with `MongoTemplate` and `Criteria`
- Configuration with YAML and environment variables
- Unit and integration testing using JUnit and Mockito
- Simplified coding using Project Lombok
- Dockerized application for container-based deployment

---

## Getting Started

### Prerequisites

- Java 17+
- Maven 3+
- Docker
- MongoDB instance
- Gmail account for email notifications

### Clone Repository

```bash
git clone https://github.com/Harsh-Jaiman/JournalApplication.git
cd JournalApplication
```

###Environment Variables

1) Create a .env file in the root directory:
JAVA_EMAIL=your_email@gmail.com
JAVA_EMAIL_PASSWORD=your_email_password
MONGODB_URI=mongodb://username:password@host:port/journaldb
SERVER_PORT=8080


2). Replace the values with your credentials.

3). Run Locally (Maven)

4). Clone the repository:
git clone https://github.com/Harsh-Jaiman/JournalApplication.git
cd JournalApplication

5). Run the app with Maven:
mvn spring-boot:run

6). Open your browser at:
http://localhost:8080/journal

##Run with Docker
1). Build Docker image:
docker build -t journalapp .

2). Run Docker container:
docker run -p 8080:8080 --env-file .env journalapp

3). Access the app at:
http://localhost:8080/journal

##Testing
1). Unit tests included with JUnit & Mockito
Run tests with:
mvn test

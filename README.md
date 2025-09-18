# JournalApplication

**JournalApplication** is a full-stack journaling web application that allows users to track their thoughts, moods, and daily reflections.

* **Backend:** Built with Spring Boot (MongoDB, REST APIs, JWT, Docker)
* **Frontend:** Scaffolded using Bolt AI with React + Vite — showcasing how AI can accelerate prototyping

---

## ✨ Features

* User registration & management
* CRUD operations for journal entries
* Email notifications via Gmail SMTP
* JWT authentication for secure access
* Environment-based configuration with YAML & `.env`
* Unit testing with JUnit & Mockito
* Advanced MongoDB queries with MongoTemplate & Criteria
* Simplified code using Lombok annotations
* Dockerized for deployment
* React + Vite frontend (AI-assisted)

---

## 🛠 Tech Stack

**Backend**

* Java 17+, Spring Boot, Spring Data MongoDB, Spring Data JPA
* MongoDB
* Gmail SMTP
* Maven
* JUnit, Mockito
* Docker
* Git & GitHub
* JWT authentication

**Frontend (AI-assisted)**

* React + Vite
* TailwindCSS
* React Router
* Lucide Icons

---

## 🚀 Getting Started

### Prerequisites

* Java 17+
* Maven 3+
* Docker
* Node.js (18+) & npm
* MongoDB instance
* Gmail account for email notifications

---

### 🔧 Backend Setup

```bash
cd backend
mvn spring-boot:run
```

App runs at 👉 [http://localhost:8080/journal](http://localhost:8080/journal)

**Environment Variables (.env in backend root):**

```
JAVA_EMAIL=your_email@gmail.com
JAVA_EMAIL_PASSWORD=your_email_password
MONGODB_URI=mongodb://username:password@host:port/journaldb
SERVER_PORT=8080
```

**Run with Docker:**

```bash
docker build -t journalapp .
docker run -p 8080:8080 --env-file .env journalapp
```

---

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at 👉 [http://localhost:5173](http://localhost:5173)

Make sure backend is running at `http://localhost:8080`. Update `frontend/src/services/api.js`:

```js
export const API_BASE_URL = "http://localhost:8080/api";
```

---

### 🧪 Testing

Run backend unit tests:

```bash
cd backend
mvn test
```

---

🔥 This project highlights **core backend engineering skills** + **modern AI-assisted frontend development**.

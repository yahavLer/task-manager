# Task Manager

Task Manager application built with:

- **Frontend:** React + TypeScript
- **Backend:** Java + Spring Boot
- **Database:** PostgreSQL
- **Containerization:** Docker Compose

The system allows creating, updating, deleting, filtering, and managing tasks, including assigning a responsible user.

---

## Prerequisites

make sure the following are installed:

- **Docker Desktop**
- **Java 17**
- **Node.js**
- **npm**

> Docker Desktop must be running, since PostgreSQL is started using Docker Compose.

---

## Project Structure

```text
task-manager/         -> Spring Boot backend + Docker Compose
task-manager-front/   -> React frontend
```

## Start PostgreSQL with Docker
- Open Docker Desktop.
- Open a CMD terminal and run:

```bash
cd task-manager
docker compose up
```

## Run the backend
- Open a CMD terminal and run:

```bash
cd task-manager
.\gradlew bootRun
```
- The backend will start locally on: http://localhost:8080
- Swagger ui : http://localhost:8080/swagger-ui/index.html#/

## Run the frontend
- Open a CMD terminal and run:

```bash
cd task-manager-front
npm install
npm run dev
```

- The frontend will start locally on: http://localhost:5173

## Main Features
- Create a new task
- Update an existing task
- Delete tasks
- Update task status directly from the tasks page
- Filter tasks by:
- priority
- status
- due date
- Assign a responsible user to a task
- Search users by first name, last name, or full name
## API Endpoints
# Task Endpoints
- POST /api/tasks/create — Create a new task
- GET /api/tasks/get/{taskId} — Get a task by ID
- GET /api/tasks/getAll — Get all tasks
- PUT /api/tasks/update/{taskId} — Update an existing task
- PUT /api/tasks/updateStatus/{taskId}/status/{status} — Update only the task status
- DELETE /api/tasks/delete/{taskId} — Delete a task
- DELETE /api/tasks/deleteAll — Delete all tasks
- GET /api/tasks/getTaskByStatus?status=... — Get tasks by status
- GET /api/tasks/getTaskByPriority?priority=... — Get tasks by priority
- GET /api/tasks/getTaskByDueDate?dueDate=... — Get tasks by due date
# User Endpoints
- POST /api/users/create — Create a new user
- GET /api/users/get/{userId} — Get a user by ID
- PUT /api/users/update/{userId} — Update user details
- DELETE /api/users/delete/{userId} — Delete a user
- GET /api/users/getAll — Get all users
- GET /api/users/search?query=... — Search users by first name, last name, or full name


## Example create task

```JSON
{
  "title": "Read book",
  "description": "Read 20 pages",
  "status": "PENDING",
  "priority": "MEDIUM",
  "dueDate": "2026-04-30",
  "userId": "user-uuid-here"
}
```

## Example create user

```JSON
{
  "firstName": "Yahav",
  "lastName": "Ler",
  "email": "yahavler.1@gmail.com",
  "phoneNumber": "0509298115",
  "password": "12345678"
}
```



# 🌐 LearnSphere - Course Learning App

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)  
[![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![JWT](https://img.shields.io/badge/JWT-000000?logo=JSONWebTokens&logoColor=white)](https://jwt.io/)  

---

## 🚀 Project Overview
**LearnSphere** is a learning platform connecting students and teachers. Teachers can create and manage courses, lessons, and topics while tracking performance. Students can browse courses, track progress, provide feedback, and follow teachers for personalized learning.

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Language:** TypeScript  
- **Authentication:** Passport.js, JWT  

---

## ✨ Features

### 🔑 Authentication
- Users can register with name, email, and password  
- Two roles: `Student` and `Teacher`  

### 👨‍🏫 Teacher Features
- **Content Management:** Create, update, delete courses, lessons, topics  
- **Performance Tracking:** View student views, likes, feedback  
- **Student Interaction:** Monitor engagement and followers  

### 👩‍🎓 Student Features
- **Course Interaction:** Browse, enroll, track lesson progress automatically  
- **Feedback & Engagement:** Like courses, provide feedback, participate in quizzes  
- **Teacher Interaction:** Follow favorite teachers  

---

## 💻 Installation

```bash
# Clone repository
git clone https://github.com/IsmailHossen87/LernShere 

🌐 Live Backend Demo: [Click here to access the live backend](https://learnsphere-backend.onrender.com)


# Navigate to project folder
cd LernShere

# Install dependencies
npm install

# Run development server
npm run dev


##API Routes
# Base URL:/api/v1

| Route                                     | Method | Access          | Description                       |
| ----------------------------------------- | ------ | --------------- | --------------------------------- |
| /auth/login                               | POST   | Public          | Login with email & password       |
| /user/register                            | POST   | Public          | Register a new user               |
| /user/me                                  | GET    | Student/Teacher | Get current logged-in user info   |
| /course                                   | POST   | Teacher         | Create a course                   |
| /course/getAll                            | GET    | Teacher         | Get all courses                   |
| /course/\:id                              | GET    | Teacher         | Get single course                 |
| /course/\:id                              | PATCH  | Teacher         | Update a course                   |
| /course/\:id                              | DELETE | Teacher         | Delete a course                   |
| /lession                                  | POST   | Teacher         | Create a lesson                   |
| /lession                                  | GET    | Teacher         | Get all lessons                   |
| /lession/\:id                             | GET    | Teacher         | Get single lesson                 |
| /lession/\:id                             | PATCH  | Teacher         | Update lesson                     |
| /lession/\:id                             | DELETE | Teacher         | Delete lesson                     |
| /topic                                    | POST   | Teacher         | Create a topic                    |
| /topic                                    | GET    | Teacher         | Get topics by lesson              |
| /topic/\:id                               | GET    | Teacher         | Get single topic                  |
| /topic/\:id                               | PATCH  | Teacher         | Update topic                      |
| /topic/\:id                               | DELETE | Teacher         | Delete topic                      |
| /enrollment/follow                        | POST   | Student         | Follow a course                   |
| /enrollment/unfollow                      | POST   | Student         | Unfollow a course                 |
| /enrollment/progress                      | PATCH  | Student         | Update course progress            |
| /enrollment/course/students/\:courseId    | GET    | Teacher         | Get all students of a course      |
| /feedback/\:courseId                      | POST   | Student         | Add feedback                      |
| /feedback/\:courseId                      | GET    | Teacher         | Get course feedback               |
| /connection/\:teacherId                   | POST   | Student         | Follow a teacher                  |
| /connection/unfollow/\:teacherId          | POST   | Student         | Unfollow a teacher                |
| /connection/teacher/followers/\:teacherId | GET    | Teacher         | Get followers of a teacher        |
| /connection/student/following             | GET    | Student         | Get teachers student is following |
| /quiz/\:courseId                          | POST   | Teacher         | Create a quiz                     |
| /quiz/submit/\:quizId                     | POST   | Student         | Submit a quiz                     |
| /student/courses/view/\:courseId          | POST   | Student         | Track course view                 |
| /student/courses/like/\:courseId          | POST   | Student         | Track course like                 |
| /student/allCourse                        | GET    | Student         | Browse all courses                |
| /student/enroll                           | POST   | Student         | Enroll in a course                |
| /student/lessons/\:courseId               | GET    | Student         | Get course lessons                |
| /student/courses/feedback/\:courseId      | POST   | Student         | Add course feedback               |
| /student/courses/analytics/\:courseId     | GET    | Student         | View course analytics             |


## 🧪 Demo Credentials

| Role    | Email                     | Password     |
| ------- | ------------------------- | ----------- |
| Teacher | nadirexample@gmail.com    | asdfASDF11  |


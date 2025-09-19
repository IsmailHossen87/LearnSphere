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
🌐 Live Backend Demo: [Click here to access the live backend](https://learn-sphere-beige.vercel.app)

## 💻 Installation

```bash
# Clone repository
git clone https://github.com/IsmailHossen87/LernShere 

# Navigate to project folder
cd LernShere

# Install dependencies
npm install

# Run development server
npm run dev


## 💻 Installation
```

```bash
# ✨ API Routes
**Base URL: /api/v1

## Authentication
| Method | Endpoint    | Description                 |
| ------ | ----------- | --------------------------- |
| POST   | `/auth/login` | Login with email & password |

## Users
| Method | Endpoint       | Description             |
| ------ | -------------- | ----------------------- |
| POST   | `/user/register` | Register a new user     |
| GET    | `/user/me`       | Get logged-in user info |

## Courses
| Method | Endpoint       | Description                     |
| ------ | -------------- | ------------------------------  |
| POST   | `/course`        | Create a course (Teacher only)|
| GET    | `/course/getAll` | Get all courses               |
| GET    | `/course/:id`   | Get a single course            |
| PATCH  | `/course/:id`   | Update a course (Teacher only) |
| DELETE | `/course/:id`   | Delete a course (Teacher only) |

## Lessons
| Method | Endpoint       | Description                    |
| ------ | -------------  | ------------------------------ |
| POST   | `/lession`     | Create a lesson (Teacher only) |
| GET    | `/lession`     | Get all lessons                |
| GET    | `/lession/:id` | Get a single lesson            |
| PATCH  | `/lession/:id` | Update a lesson (Teacher only)  |
| DELETE | `/lession/:id` | Delete a lesson (Teacher only)  |

## Topics
| Method | Endpoint     | Description                    |
| ------ | -----------  | -----------------------------  |
| POST   | `/topic`     | Create a topic (Teacher only)  |
| GET    | `/topic`     | Get all topics by lesson       |
| GET    | `/topic/:id` | Get single topic               |
| PATCH  | `/topic/:id` | Update a topic (Teacher only)  |
| DELETE | `/topic/:id` | Delete a topic (Teacher only)  |

##Student
| Method | Endpoint                       | Description                                                     | Access  |
| ------ | ------------------------------ | --------------------------------------------------------        | ------- |
| GET    | `student/allCourse`                   | Browse all available courses                             | Student |
| POST   | `student/enroll`                      | Enroll in a course                                       | Student |
| GET    | `student/lessons/:courseId`           | Get all lessons of a course                              | Student |
| POST   | `student/courses/view/:courseId`      | Track that the student viewed the course                 | Student |
| POST   | `student/courses/like/:courseId`      | Like a course                                            | Student |
| POST   | `student/courses/feedback/:courseId`  | Add feedback for a course                                | Student |
| GET    | `student/courses/analytics/:courseId` | Get analytics of a course (views, likes, progress, etc.) | Student |

## Enrollment
| Method | Endpoint                               | Description                                   |
| ------ | -------------------------------------- | -------------------------------------------   |
| POST   | `/enrollment/follow`                     | Follow a course (Student only)              |
| POST   | `/enrollment/unfollow`                   | Unfollow a course (Student only)            |
| PATCH  | `/enrollment/progress`                   | Update course progress (Student only)       |
| GET    | `/enrollment/course/students/:courseId` | Get all students of a course (Teacher only)  |

## Feedback
| Method | Endpoint             | Description                                   |
| ------ | -------------------- | --------------------------------------------- |
| POST   | `/feedback/:courseId` | Add feedback (Student only)                   |
| GET    | `/feedback/:courseId | Get all feedbacks for a course (Teacher only) |

##Quiz
| Method | Endpoint          | Description                | Access  |
| ------ | ----------------- | -------------------------- | ------- |
| POST   | `quiz/:courseId`      | Create a quiz for a course | Teacher |
| POST   | `quiz/submit/:quizId` | Submit a quiz by a student | Student |

## Teacher Follow
| Method | Endpoint                                  | Description                                          |
| ------ | ----------------------------------------- | ---------------------------------------------------- |
| POST   | `/connection/:teacherId`                   | Follow a teacher (Student only)                      |
| POST   | `/connection/unfollow/:teacherId`          | Unfollow a teacher (Student only)                    |
| GET    | `/connection/teacher/followers/:teacherId` | Get followers of teacher (Teacher only)              |
| GET    | `/connection/student/following`             | Get teachers the student is following (Student only) |



## 🧪 Demo Credentials
| Role    | Email                     | Password     |
| ------- | ------------------------- | ----------- |
| Teacher | nadirexample@gmail.com    | asdfASDF11  |

```
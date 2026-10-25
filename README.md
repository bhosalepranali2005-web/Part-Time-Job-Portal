# Part-Time Job Portal

A full-stack web application designed to connect job seekers with flexible part-time employment opportunities. Built using Node.js, Express, MongoDB, and EJS.

## 🚀 Features

- **User Authentication & Authorization**: Secure login and role-based access control for users and administrators.
- **Job Listings & Search**: Browse, filter, and view detailed descriptions of available part-time jobs.
- **Application Management**: Apply for jobs seamlessly with resume/file upload support.
- **Admin Dashboard**: Dedicated administrative panel to manage job postings, review applications, and oversee portal activity.
- **Responsive Interface**: Clean server-rendered views using EJS and modern client-side JavaScript.

---

## 🛠️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Mongoose ODM)
* **Templating Engine**: EJS (Embedded JavaScript)
* **Middleware**: Multer (for file uploads), custom authentication middleware

---

##⚙️ Getting Started
Prerequisites
Make sure you have the following installed on your local machine:

Node.js (v14+ recommended)

MongoDB (running locally or a cloud cluster via MongoDB Atlas)
---

## Installation & Setup
Clone the repository:

## Bash
git clone [https://github.com/bhosalepranali2005-web/part-time-job-portal.git](https://github.com/bhosalepranali2005-web/part-time-job-portal.git)
cd part-time-job-portal
Install dependencies:

## Bash
npm install
Configure environment variables:

Duplicate .env.example and rename it to .env.

Fill in your configuration values (such as PORT and MONGO_URI).

## Run the application:

For development (using nodemon):

## Bash
npm run dev
For production:

## Bash
npm start
Access the portal:
Open your browser and navigate to http://localhost:3000 (or whichever port you specified).

---

## 📄 License
This project is open-source and available under the MIT License
---


## 📁 Project Structure
```text
part-time-job-portal/
├── config/         # Database configuration
├── middleware/     # Custom authentication and upload middleware
├── models/         # Mongoose schemas (Job, Application, etc.)
├── public/         # Static assets (CSS, client-side JS)
├── routes/         # Application routes (Public, Admin)
├── uploads/        # Uploaded files (resumes, documents)
├── views/          # EJS templates (index, login, job-details, admin)
├── server.js       # Application entry point
├── package.json    # Project dependencies and scripts
└── .env.example    # Environment variables template



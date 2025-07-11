# Job Portal Using MERN Fullsatck.

A job Portal that can create new jobs using an Admin(recruiter) and also update job details and also take actions on the applied jobs that is applied by the User(Student). 

---

## Table of Contents
1. Authentication: Secure login and registration using JWT.
2. Role-Based Access: Different features for users and admins.
3. File Upload: Profile pictures and resumes are stored in Cloudinary.
4. Error Handling: Robust error messages for invalid requests.
5. Technologies Used: Frontend: React, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JSON Web Tokens (JWT)
File Storage: Cloudinary.


---

## Overview

This project appears to be a job portal application built using the MERN stack. Its primary functions likely include:

User Registration and Login:

Allows users to create accounts, log in, and manage their profiles.
Implements authentication using JWT.
Profile Management:

Users can update their personal details, upload resumes, and specify skills.
Job Listings:

Provides functionality for companies or admins to post job openings.
Users can browse, filter, and apply for jobs.
Role-Based Access:

Supports different user roles like applicants and employers, with tailored functionality for each.
Cloud Integration:

Likely uses Cloudinary to handle file uploads (e.g., resumes or profile photos).


Who Are Its Target Users?
Job Seekers:

Individuals looking for job opportunities can create accounts, upload resumes, and apply to listed positions.
Employers/Recruiters:

Companies or recruiters who need a platform to post job openings and manage applicants.
Administrators:

Likely manages user accounts, job listings, and overall platform health.


---

## Setup Instructions

### Prerequisites
1. Install [Node.js](https://nodejs.org/).
2. Install a database ( MongoDB).


### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/SubhadeepECE13/Job-Portal-Main.git
''
2. Install Dependencies: npm install
3. Start the frontend: cd frontend
4. npm run dev
5. start the backend: npm install
6. npm run dev


*****
You have to change the MongodB URI in the .env file. You can use your localhost url of MongodB. After starting the server it will connect the db and you can see the project.

And you have to change the CLOUD_NAME ,API_KEY ,API_SECRET of Cloudinary in the .env file. After changing that tou will be able to ses the all functions of the project. And you have to give a profile pic when creating a new user(student,rectuiter).



# 🏨 Hotel Booking Management System

A full-stack hotel booking system built with **MERN (MongoDB, Express, React, Node.js)**.  
It allows hotel administrators to manage rooms and customers to book available rooms easily.

---

## ✨ Features

### 🔹 Backend
- RESTful API built with **Express + TypeScript**
- MongoDB integration with **Mongoose**
- Routes for:
  - **Rooms** → Create, update, delete, fetch rooms
  - **Bookings** → Create bookings and view booking summaries
- Handles availability status automatically when a room is booked

### 🔹 Frontend
- Built with **React + Vite + TailwindCSS**
- Responsive UI for **mobile, tablet, and desktop**
- Features:
  - View list of rooms
  - Room details page
  - Book a room (with validation for future check-in date)
  - Create, edit, and delete rooms
  - Booking summary dashboard
  - Pagination support for room listing

---

## 📂 Project Structure
```bash
Hotel Booking/
│
├── Backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── .gitignore
└── README.md
```

## ⚙️ Backend Setup

### Prerequisites
- Node.js >= 18
- MongoDB (local or cloud via [MongoDB Atlas](https://www.mongodb.com/atlas))

### 1. Install dependencies
```bash
cd backend
npm install
```
## 2. Environment variables

Create a .env file inside the backend/ folder:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## 3. Run the backend (development mode)
```bash
npm run dev
```
## Frontend Setup
### 1. Install dependencies
```bash
cd frontend
npm install
```
### 2. Run the frontend
```bash
npm run dev
```
## 🛠️ Tech Stack

- Frontend → React, Vite, TailwindCSS, React Router

- Backend → Express, TypeScript, MongoDB, Mongoose

- Dev Tools → ts-node-dev, dotenv, cors

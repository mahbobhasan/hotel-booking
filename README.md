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


---

## 📖 API Documentation

Base URL:  http://localhost:5000/api

---

### 🛏️ Rooms API — `/api/rooms`

#### 1. Get all rooms (with pagination)
**Query Params:**
- `page` (optional, default = 1)
**Response:**
```json
{
  "totalPages": a number will be returned from backend
  "rooms": [
    {
      "_id": "64f6e92a1d23",
      "roomNo": "101",
      "type": "Deluxe",
      "description": "Spacious room with balcony",
      "beds": 2,
      "pricePerNight": 100,
      "available": true
    }
  ]
}
```
#### 2.Get single room
```bash
GET /api/rooms/:id
```
-Response:
```json
{
  "_id": "64f6e92a1d23",
  "roomNo": "101",
  "type": "Deluxe",
  "description": "Spacious room with balcony",
  "beds": 2,
  "pricePerNight": 100,
  "available": true
}
```
#### 3. Create new room
```bash
POST /api/rooms
```
- body:
```json
{
  "roomNo": "102",
  "type": "Standard",
  "description": "Cozy room for budget travelers",
  "beds": 1,
  "pricePerNight": 50,
  "available": true
}
```
- Response:
```json
{
  "room": { ... }
}
```

#### 4. Update a room
```bash
PUT /api/rooms/:id
```
- body
```json
{
  "type": "Executive Suite",
  "pricePerNight": 150,
  "available": false
}
```
- Response
```json
{
  "room": { ... }
}
```
#### 5.Delete room
```bash
DELETE /api/rooms/:id
```
- Response
```json
{
  "message": "Room deleted successfully"
}
```

### 📅 Booking API — /api/bookings
#### 1. Create a booking
```bash
POST /api/bookings
```
- body
```json
{
  "roomId": "64f6e92a1d23",
  "guestName": "John Doe",
  "nights": 3,
  "checkInDate": "2025-09-20"
}
```
- Response
```json
{
  "booking": {
    "_id": "64f6eb91ab23",
    "roomId": "64f6e92a1d23",
    "guestName": "John Doe",
    "nights": 3,
    "checkInDate": "2025-09-20"
  }
}
```

#### 2. Get aggregated booking summary
```bash
GET /api/bookings/summary

```
- Response
```josn
[
  {
    "roomId": "64f6e92a1d23",
    "roomNo": "101",
    "type": "Deluxe",
    "totalNights": 5,
    "bookings": 2
  },
  {
    "roomId": "64f6e92b1a45",
    "roomNo": "102",
    "type": "Standard",
    "totalNights": 3,
    "bookings": 1
  }
]
```

## Screenshots
<img width="1366" height="733" alt="image" src="https://github.com/user-attachments/assets/fd3427a2-e20a-46c5-afac-5d9b3d69c339" />
<img width="1335" height="643" alt="image" src="https://github.com/user-attachments/assets/8bcaea16-e50e-4538-aeac-8c22e8d65281" />
<img width="1007" height="616" alt="image" src="https://github.com/user-attachments/assets/45ce8f7f-c649-4bc9-bc7c-f9b6a02d3b6e" />
<img width="1018" height="623" alt="image" src="https://github.com/user-attachments/assets/f1ff5d82-0963-44d5-974f-6c04680cf41b" />
<img width="1016" height="608" alt="image" src="https://github.com/user-attachments/assets/f190c5f3-0413-4f59-ac4a-413c851171f2" />

<img width="1134" height="451" alt="image" src="https://github.com/user-attachments/assets/7fc12c6a-c1a1-4060-be3e-96b6cf9f9082" />




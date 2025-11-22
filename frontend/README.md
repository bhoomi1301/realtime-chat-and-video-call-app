# Streamify - Realtime Chat & Video Calling App

## 🚀 Overview

Streamify is a modern real-time chat and video calling application built with **MERN Stack + Stream API**, offering seamless messaging, video calls, friend management, notifications, authentication (JWT), and a clean UI powered by React and TailwindCSS.

---

## 📌 Features

* 🔐 User Authentication (Signup/Login) with JWT
* 💬 Real-time One-to-One Chat
* 📹 High-quality Video Calls (Stream SDK)
* 👥 Friend Requests & Friend Management
* 🔔 Notification System
* 🎨 Light/Dark Theme Switching
* 🌍 Multi-language support
* 🧩 Modular and Maintainable Code Architecture

---

## 🛠️ Tech Stack

### **Frontend:**

* React
* Vite
* TailwindCSS
* Axios

### **Backend:**

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Stream Chat & Video

### **Tools:**

* Git & GitHub
* Postman (for testing APIs)
* VS Code

---

## 📁 Project Structure

```
streamify/
│── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
│── frontend/
│   ├── public/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── main.jsx
│
└── package.json
```

---

## ⚙️ Setup Instructions

### **1️⃣ Clone the Repository**

```bash
git clone  https://github.com/bhoomi1301/realtime-chat-and-video-call-app.git
cd streamify
```

### **2️⃣ Install Dependencies**

#### Backend:

```bash
cd backend
npm install
```

#### Frontend:

```bash
cd ../frontend
npm install
```

### **3️⃣ Add Environment Variables**

Create a `.env` file inside **backend/**:

```
PORT=8000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=xxxx
STREAM_SECRET=xxxx
```

---

## ▶️ Run the Project

### Backend:

```bash
npm run dev
```

### Frontend:

```bash
npm run dev
```

---

## 🖼️ Screenshots

> 📌 Add your screenshots in the **frontend/public/screenshots** folder and embed them here.

### **📌 Home Page**

```
![Home Page](./frontend/public/screenshots/home.png)
```<img width="1863" height="915" alt="home" src="https://github.com/user-attachments/assets/57d7e40e-ecd3-46ac-a8bb-417382938618" />


### **📌 Chat Page**

```
![Chat Page](./frontend/public/screenshots/chat.png)
```

### **📌 Login Page**
<img width="1845" height="906" alt="chat" src="https://github.com/user-attachments/assets/8300391d-c210-4a26-8657-ed9432356d51" />

```
![Login](./frontend/public/screenshots/login.png)
```

---<img width="1795" height="888" alt="login" src="https://github.com/user-attachments/assets/1f897b0f-8519-4398-b3b0-34e08fa1b96b" />


## 🔮 Future Enhancements

* Group chat & group video calling
* Voice messages
* Online/offline user indicator
* Typing indicator
* Chat search and filters
* Media sharing (images, files)
* Push notifications
* Improved UI animations

---

## 🤝 Contributing

1. Fork this repo
2. Create a branch: `git checkout -b feature-xyz`
3. Commit changes: `git commit -m "Added xyz feature"`
4. Push: `git push origin feature-xyz`
5. Open a pull request

---

## 📝 License

This project is licensed under the **MIT License**.

---

## 👩‍💻 Developer

**Bhoomika N.S**

> MCA | Full-Stack Developer | MERN | Stream SDK

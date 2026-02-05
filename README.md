# 🍽️ Lavilla Restaurant Website

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/) 
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) 
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) 
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/) 
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/) 
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/) 

# LavillaRestaurant

A full-stack restaurant management system built to support real-world operations such as menu management, orders, and backend data handling.

This project demonstrates end-to-end development — from a React frontend to a Flask backend, relational databases, migrations, and CI/CD workflows.

---

## 🧩 Problem Statement

Many small restaurants rely on manual or fragmented tools to manage menus and orders, which leads to inefficiencies and errors.

LavillaRestaurant explores how a modern web stack can be used to build a scalable, maintainable system that supports restaurant operations with clean UX and reliable backend logic.

---

## 🏗 Architecture Overview

**Frontend**
- React (JavaScript)
- Component-based architecture
- API-driven state management
- Responsive UI design

**Backend**
- Flask (Python)
- RESTful API design
- Business logic separated from routing

**Database**
- PostgreSQL (production-ready)
- SQLite (local development)
- Alembic for schema migrations

**DevOps**
- CI/CD pipelines for automated testing and deployment
- Environment-based configuration

---

## ✨ Features

- React-based frontend consuming Flask APIs
- REST endpoints for core restaurant operations
- Database schema versioning using Alembic
- Support for multiple environments (dev / prod)
- Clean separation of concerns across layers

---

## 🛠 Tech Stack

**Frontend**
- JavaScript (ES6+)
- React
- HTML5 / CSS3

**Backend**
- Python
- Flask

**Database**
- PostgreSQL
- SQLite
- Alembic migrations

**Tooling**
- Git & GitHub
- CI/CD pipelines

---

## ⚙️ Getting Started

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
flask db upgrade
flask run

---

## 🚀 Table of Contents

- [🎯 Features](#-features)  
- [🛠️ Technologies Used](#-technologies-used)  
- [💻 Installation](#-installation)  
- [📦 Usage](#-usage)  
- [📂 Folder Structure](#-folder-structure)  
- [🤝 Contributing](#-contributing)  
- [📄 License](#-license)  

---

## 🎯 Features

- 🍔 **Dynamic Menu Pages** – View food & drinks menus with images, prices, and descriptions  
- 📝 **Reservation System** – Book tables online with validation  
- 🖼️ **Gallery Page** – Browse restaurant and event photos  
- 📖 **About Page** – Learn about the restaurant and chefs  
- 📱 **Responsive Design** – Works perfectly on desktop, tablet, and mobile  
- ⚡ **Smooth Navigation** – Fast and intuitive routing with React Router  

---

## 🛠️ Technologies Used

### Frontend
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/) 
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)  
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)  
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)  

### Backend
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)  
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)  

### Database
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)  
[![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)  
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)  

### Other Tools
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)  
[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)  
[![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/)  
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)  

---

## 💻 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/shikokkot/lavilla-restaurant.git
```
## Navigate to the project directory:
```bash
Copy code
cd lavilla-restaurant
```
## Install frontend dependencies:

```bash
Copy code
cd client
npm install
```
## Install backend dependencies:

```bash
Copy code
cd ../server
npm install
```

## Start the development server:

```bash
Copy code
In the server folder
npm run dev
```

# In the client folder
```bash
npm start
Open your browser:
http://localhost:3000
```

## 📦 Usage
```
Explore pages via the top navigation menu

View dishes & drinks in the Menu section

Fill the Reservation Form to book a table

Browse Gallery images

Check About and Contact for more information
```

## 📂 Folder Structure
```bash
Copy code
lavilla-restaurant/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components (Menu, Hero, Buttons)
│   │   ├── pages/          # Individual pages (Home, About, Menu, Contact)
│   │   ├── assets/         # Images, fonts, icons
│   │   └── App.js
├── server/                 # Node.js backend
│   ├── routes/             # API routes (e.g., reservations)
│   ├── controllers/        # Logic for handling requests
│   ├── models/             # Database models
│   └── server.js
├── README.md
└── package.json
```
## 🤝 Contributing
```
Contributions are welcome!

Fork the repository
```
Create a new branch:

```bash
Copy code
git checkout -b feature/YourFeatureName
Make your changes and commit:
```
```bash
Copy code
git commit -m "Add your message"
Push your branch and open a Pull Request
```

## 📄 License
This project is licensed under the MIT License.

yaml
Copy code

---  

 


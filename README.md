
# Lavilla Restaurant Website

Welcome to the Lavilla Restaurant Website project! This is a modern, responsive web application for a restaurant, built with **React** for the frontend and **Node.js** for the backend. The website allows users to explore the menu, make reservations, view galleries, and learn more about the restaurant.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Dynamic Menu Pages**: Browse food and drinks menus with images, prices, and descriptions.  
- **Reservation System**: Make online reservations with form validation.  
- **Gallery Page**: View images of the restaurant and past events.  
- **About Page**: Learn about the restaurant, its story, and chefs.  
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.  
- **Smooth Navigation**: Fast and intuitive routing with React Router.  

---

## Technologies Used

- **Frontend**:  
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)  
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)  
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)  

- **Backend**:  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)  
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)  

- **Database**:  
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)  
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)  
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)  

- **Other Tools**:  
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)  
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)  
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)  
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
 

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shikokoti/lavilla-restaurant.git
```
## 2. Navigate to the project director
```bash
cd lavilla-restaurant
```
## 3. Install dependencies for frontend:

```bash
cd client
npm install
```
## 4. Install dependencies for backend:

```bash
cd ../server
npm install
```
## Start the development server:

# In the server folder
```bash 
npm run dev
```
## In the client folder
```bash
npm start
```
Open your browser and navigate to http://localhost:3000.
```

Usage

Navigate through the pages using the menu bar.

View dishes and drinks in the Menu section.

Fill in the Reservation Form to book a table.

Browse the Gallery to see restaurant photos.

Check About and Contact for more information.

```

## Folder Structure

```
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
## Contributing

Contributions are welcome! To contribute:

Fork the repository.

Create a new branch:

git checkout -b feature/YourFeatureName


Make your changes and commit:

git commit -m "Add your message"


Push to your branch and open a Pull Request.

License

This project is licensed under the MIT License.
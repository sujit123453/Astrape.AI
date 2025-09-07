NATURALS E-Commerce Project - Submission Notes
📋 Project Overview
A full-stack e-commerce web application for natural products with modern UI/UX, authentication, and shopping cart functionality.

🛠️ Tech Stack
Frontend
React 18 with Vite

React Router for navigation

Tailwind CSS for styling

Lucide React for icons

Axios for API calls

Context API for state management

Backend
Node.js with Express.js

MongoDB with Mongoose

JWT for authentication

bcryptjs for password hashing

CORS enabled

🚀 Features Implemented
Authentication System
✅ User signup/login with JWT tokens

✅ Password hashing with bcrypt

✅ Persistent login sessions

✅ Protected routes and navigation

✅ Auto-logout functionality

E-Commerce Functionality
✅ Product catalog with 5 natural products

✅ Shopping cart with add/remove/quantity controls

✅ Cart persistence across browser sessions

✅ Search and filter products by category

✅ Responsive product cards with images

UI/UX Design
✅ Modern glass-morphism design

✅ Responsive layout (mobile-first)

✅ Smooth animations and transitions

✅ Clean white/gray color scheme

✅ Professional navbar with conditional rendering

📁 Project Structure
Astrape.AI/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # State management
│   │   ├── assets/        # Images and static files
│   │   └── main.jsx       # App entry point
│   └── .env               # Environment variables
└── server/                # Backend (Node.js + Express)
    ├── controllers/       # Business logic
    ├── models/           # Database schemas
    ├── routes/           # API endpoints
    ├── configs/          # Database configuration
    └── .env              # Server environment variables

Copy
🔧 Setup Instructions
Prerequisites
Node.js (v16+)

MongoDB Atlas account

Git

Installation Steps
Clone Repository

git clone <repository-url>
cd Astrape.AI

Copy
bash
Backend Setup

cd server
npm install
# Create .env file with:
# JWT_SECRET=your_jwt_secret
# MONGODB_URI=your_mongodb_connection_string
npm run server

Copy
bash
Frontend Setup

cd client
npm install
# Create .env file with:
# VITE_API_URL=http://localhost:3000
npm run dev

Copy
bash
🌐 API Endpoints
Authentication
POST /api/auth/signup - User registration

POST /api/auth/login - User login

Features
JWT token-based authentication

Password validation (min 6 characters)

Unique email validation

Secure password hashing

📱 Pages & Components
Pages
Home - Hero section with search/filter + Footer

Products - Product catalog with add to cart

Cart - Shopping cart management

Login/Signup - Authentication forms

About/Contact - Static pages

Key Components
Navbar - Conditional rendering based on auth status

Hero - Search functionality with category filters

Footer - Company information and links

AuthContext - Global authentication state

CartContext - Global cart state management

🎨 Design Features
Visual Elements
Glass-morphism cards with backdrop blur

Gradient buttons and hover effects

Responsive grid layouts

Professional typography

Consistent color scheme (gray/white/blue)

User Experience
Smooth page transitions

Loading states for API calls

Error handling with user feedback

Form validation and success messages

Persistent cart and login sessions

🔒 Security Features
JWT token authentication

Password hashing with bcrypt

Input validation on both frontend/backend

CORS configuration

Environment variable protection

Secure token storage in localStorage

📊 Database Schema
User Model
{
  email: String (required, unique),
  fullname: String (required),
  password: String (required, hashed),
  timestamps: true
}

Copy
javascript
Product Data
5 natural products with images

Categories: Natural Sweetener, Beverages, Oils, Skin Care, Bath & Body

Price range: ₹75 - ₹499

🚀 Deployment Ready
Environment Configuration
Frontend: Vite environment variables

Backend: Node.js environment variables

Database: MongoDB Atlas cloud database

CORS: Configured for cross-origin requests

Production Considerations
Environment-specific API URLs

Secure JWT secret keys

Database connection optimization

Error logging and monitoring

📈 Future Enhancements
Payment gateway integration

Order management system

Product reviews and ratings

Admin dashboard

Email notifications

Advanced search filters

Wishlist functionality

🎯 Project Highlights
Full-Stack Implementation - Complete MERN stack application

Modern UI/UX - Professional design with animations

Authentication System - Secure JWT-based auth

State Management - Context API for global state

Responsive Design - Mobile-first approach

Cart Functionality - Complete e-commerce cart system

Search & Filter - Advanced product discovery

Code Quality - Clean, maintainable code structure

Developed by: [sujit kumar]
Submission Date: [07/08/2025]
Project Duration: [3days]

# 📚 Library Management System (Frontend)

A modern, responsive, and type-safe frontend for a Library Management System built with **React**, **TypeScript**, and **Redux Toolkit Query**. This application enables users to manage books, perform CRUD operations, borrow books, and view a summary of borrowed books by integrating with a RESTful backend API. It features a clean, minimalist UI with seamless navigation and user-friendly interactions using **Tailwind CSS** and **shadcn/ui** components.

---

## 📘 Project Overview

The Minimal Library Management System (Frontend) provides an intuitive interface for managing a library's book inventory and borrowing process. It leverages **Redux Toolkit Query** for efficient API integration and state management, ensuring a smooth and responsive user experience. Designed with responsiveness and type-safety in mind, the app also includes toast notifications and optimistic UI updates for improved UX.

---

## Live Site

[Visit Library Management System Live Site]((https://library-management-system-frontend-ecru.vercel.app/))
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen)](https://library-management-system-frontend-ecru.vercel.app/))

## 🛠️ Technology Stack

- **React** – Component-based UI library for building interactive interfaces.
- **TypeScript** – Ensures type-safe development and better code maintainability.
- **Redux Toolkit + RTK Query** – Manages state and API interactions efficiently.
- **Tailwind CSS + shadcn/ui** – Provides a minimalist and responsive UI design.
- **React Router** – Handles client-side routing for seamless navigation.
- **Sonner** – Displays toast notifications for success and error messages.

---

## ✨ Features

### 📖 Public Routes

- No authentication required.
- All core book and borrowing features are accessible.

### 📚 Book Management

- **Book List Table**

  - Columns: Title, Author, Genre, ISBN, Copies, Availability, Actions.
  - Actions: View, Edit, Delete, Borrow.

- **Add New Book**

  - Form with fields: Title, Author, Genre, ISBN, Description, Copies.
  - Redirects to book list after submission with UI update.

- **Edit Book**

  - Pre-filled form for editing book data.
  - Validates and updates availability accordingly.

- **Delete Book**

  - Confirmation dialog before deletion.
  - UI reflects deletion immediately.

- **View Book Details**
  - Full details: Title, Author, Genre, ISBN, Description, Copies, Availability.

### 🔄 Borrow Book

- Borrow form includes:
  - Quantity (number input), Due Date (date picker).
  - Validates availability and updates the UI optimistically.
  - Redirects to borrow summary upon submission.

### 📊 Borrow Summary

- Aggregated view of borrowed books.
- Columns: Book Title, ISBN, Total Quantity Borrowed.
- Data is retrieved via a backend aggregation API.

### 🧩 Landing Page Components

- **Navbar** – Navigation to:

  - All Books
  - Add Book
  - Borrow Summary

- **Book Table** – Interactive table with all CRUD and borrow operations.
- **Footer** – Contains basic site credits and metadata.

---

## 🧭 Pages

- `/books` – List all books.
- `/create-book` – Add a new book.
- `/books/:id` – View book details.
- `/edit-book/:id` – Edit an existing book.
- `/borrow/:bookId` – Borrow a selected book.
- `/borrow-summary` – View the borrow summary.

---

## 💎 UI/UX Highlights

- **Minimalist UI** – Clean design using Tailwind CSS and shadcn/ui components.
- **Responsive Layout** – Fully responsive for mobile, tablet, and desktop devices.
- **User Experience** – Easy navigation, clearly labeled buttons, and simple forms with toast notifications for feedback.
- **Toast Notifications** – Success and error messages displayed using Sonner.
- **Optimistic UI** – UI updates immediately after API calls, improving perceived performance.
- **Type-Safe Forms** – TypeScript interfaces ensure type safety for all form inputs.

---

## ⚙️ Installation

### 🔧 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Running backend API at `http://localhost:5000`

> 🔁 If your backend runs elsewhere, update the base URL in `src/redux/api/bookApi.ts`.

---

### 🚀 Setup

```bash
# Clone the repository
git clone <repository-url>
cd library-management-system/frontend

# Install dependencies
npm install

# Start the development server
npm run dev

# App runs at:
# http://localhost:5173


# 🚀 Usage

### *Access the Application*
- Open: `http://localhost:5173` in your browser.
- Default page: `/books` (displays the list of all books)

### *Add a Book*
- Navigate to `/create-book` via the Navbar
- Fill out the form and submit to add a new book

### *View Book Details*
- Click the **"View"** button on a book in the table
- It will take you to `/books/:id`

### *Edit a Book*
- Click the **"Edit"** button to go to `/edit-book/:id`
- Update the fields and submit the form to save changes

### *Delete a Book*
- Click the **"Delete"** button to open a confirmation dialog
- Confirm to remove the book

### *Borrow a Book*
- Click the **"Borrow"** button to go to `/borrow/:bookId`
- Enter quantity and due date, then submit the form

### *View Borrow Summary*
- Navigate to `/borrow-summary` to view the aggregated list of borrowed books

---

# 🔌 API Integration

The frontend uses **Redux Toolkit Query** to consume the following backend API endpoints:

### *Book Endpoints*
- `POST /api/books` - Create a new book
- `GET /api/books` - Retrieve all books
- `GET /api/books/:bookId` - Retrieve a book by ID
- `PUT /api/books/:bookId` - Update a book by ID
- `DELETE /api/books/:bookId` - Delete a book by ID

### *Borrow Endpoints*
- `POST /api/borrow` - Borrow a book
- `GET /api/borrow` - Retrieve borrowed books summary


```

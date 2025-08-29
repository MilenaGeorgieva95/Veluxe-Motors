# :car: [Veluxe Motors](https://veluxe-motors.web.app/)

## 📌[https://veluxe-motors.web.app/](https://veluxe-motors.web.app/)

**Veluxe Motors** is a modern **Single Page Application (SPA)** built with **React.js**, providing an interactive platform for users to create, manage, and engage with content. The project connects to **Back4App** as the back-end and is deployed using **Firebase**.

---

## 📌 Features

### 🔓 Public Features (Accessible Without Authentication)

- **Home Page** – Overview of the platform.
- **Catalog Page** – View all created vehicle posts.
- **Details Page** – Access specific post information.
- **User Authentication** – Login and Register forms.
- **Search Functionality** – Search vehicle posts by minimum/maximum price range.

### 🔒 Private Features (Available for Registered Users)

- **Create New Posts** – Users can add new posts.
- **Edit / Delete Own Posts** – Users can modify or remove their content.
- **My Posts Section** – View and manage posts created by the user.
- **Like System** – Users can like posts.
- **Appointments System** – Users can add, edit, and delete appointments and car bookings.

---

## 🏗 Project Architecture

### 📂 Folder Structure

```
veluxe-motors
│── /veluxe-motors-app           # Sprout Hub project folder
│   ├── /public                  # Static assets
│   ├── /src                          # Main application source code
│   │   ├── /api                      # Custom hooks to manage API requests
│   │   ├── /components               # Reusable UI components
│   │   │   ├── /user-auth            # Login, Register, Logout pages
│   │   │   ├── /navigation           # Navigation showing the relevant buttons to user/guest
│   │   │   ├── /home                 # Home page
│   │   │   ├── /about-us             # About page
│   │   │   ├── /footer               # Footer
│   │   │   ├── /deals                # Reusable Deals Bar with logos and deal card component
│   │   │   ├── /catalog              # All created posts
│   │   │   ├── /car-details          # Post details and control buttons
│   │   │   ├── /my-profile           # Registered user functionality
│   │   │   |   ├── /create-car      
│   │   │   |   ├── /my-bookings      
│   │   │   |   ├── /my-cars      
│   │   │   |   ├── /my-reservations      
│   │   │   ├── /appointment          # Create appointment functionality
│   │   │   ├── /guards               # User/Gueast route guards
│   │   │   ├── /common-buttons       # Reusable button components
│   │   │   ├── /page-title           # Reusable page banner component
│   │   │   ├── /spinner              # Reusable spinner component
│   │   ├── /contexts                 # Context API for global state management
│   │   ├── /hooks                    # Custom React hooks
│   │   ├── /utils                    # Utility functions
│   │   ├── /styles                   # External CSS styling
│   │   ├── App.js                    # Root component
│   │   ├── index.css                 # Global styles
│   │   ├── main.js                   # Application entry point
│── README.md                         # Project documentation
```

---

## 🚀 Technologies Used

- **React** – Frontend framework
- **React Hooks & Context API** – State management
- **React Router** – Client-side routing
- **Fetch API / Axios** – Communication with the Back4App back-end
- **CSS Modules** – Component styling
- **Firebase** – Deployed at Firebase
- **GitHub** – Version control connected

---

## 🔧 Local Setup & Installation

1️⃣ **Clone the Repository**

```terminal
git clone https://github.com/MilenaGeorgieva95/Veluxe-Motors.git
cd veluxe-motors-app
```

2️⃣ **Install Dependencies**

```terminal
npm install
```

3️⃣ **Access the App**  
```terminal
npm run dev
```
Visit `http://localhost:5173` in your browser.

---

## 🛠 Usage

- **Sign up / Log in** to create and manage user-profile, posts, and appointments.
- **Browse the catalog** for available posts.
- **Search by min/max price** to find relevant posts.
- **Create, edit, or delete your posts** in the _My Profile_ section.
- **Logout** to switch accounts.

---

## 🔐 Authentication & Authorization

- **Guest users**: Can only view public content.
- **Registered users**: Can create, edit, delete, make reservations, book appointments on posts.
- **Route Guards**:
  - Guests can’t access private routes (e.g., My Profile, Create Post).
  - Logged-in users can’t access login/register pages.

---

## 🎯 Key React Concepts Used

✅ **React Hooks** – `useState`, `useEffect`, `useContext`, `useReducer`  
✅ **Context API** – Global state management  
✅ **Stateless & Stateful Components** – Component-driven UI  
✅ **Bound Forms** – Controlled inputs  
✅ **Synthetic Events** – Handling user interactions  
✅ **Component Lifecycle** – `useEffect` for mounting/updating/unmounting

---

## 🛡 Error Handling & Validation

- **Form validation** to prevent invalid submissions.
- **Try/catch** blocks for API requests.
- **User-friendly messages** for errors.

---

## 🎨 UI/UX

- **Responsive design** for desktop & mobile.
- **Clean and modern styling** using Tailwind CSS, Bootstrap and external CSS files, for flexible and consistent UI.
- **Intuitive navigation** with clear visual hierarchy.
- **Reusable UI components** to ensure consistency across the application.
- **User-friendly forms and interactive elements** for better accessibility and experience.

---

## 🏗 Contributing

Want to improve **Veluxe Mottors**? Contributions are welcome!

1. **Fork the repository**
2. **Create a new branch** (`feature/new-feature`)
3. **Commit your changes**
4. **Push to GitHub & submit a PR**

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 📞 Contact

For questions or suggestions, reach out via GitHub issues.

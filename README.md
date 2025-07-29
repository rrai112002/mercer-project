# Mercor Time Tracker - Web Onboarding

This is a simple React application that serves as the web-based frontend for the mercor Time Tracker employee onboarding flow. Its primary purpose is to allow a newly invited employee to securely activate their account and set their password.

---

## ✨ Features

* **Token-Based Activation**: Securely activates user accounts using a unique token sent via email.
* **Password Creation**: Provides a clean interface for users to create and confirm their new password.
* **API Integration**: Communicates with the mercor Backend API to validate the token and update the user's account.
* **Success & Download**: After successful activation, it directs the user to a page where they can download the desktop tracking application.

---

## ⚙️ How It Works

1.  An administrator invites a new employee via the backend API.
2.  The employee receives an email containing a unique activation link (e.g., `http://localhost:3000?token=...`).
3.  The employee clicks the link and is directed to this React application.
4.  The application reads the `token` from the URL.
5.  The user enters and confirms their desired password.
6.  On submission, the app sends the `token` and the new `password` to the backend's `/api/auth/activate` endpoint.
7.  If the backend confirms the token is valid, the user's account is activated, and this app displays a success page with download links for the desktop client.

---

## 🚀 Getting Started

### Prerequisites

* Node.js and npm installed.
* The mercor Backend API must be running.

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-repo-folder>/frontend-react-app/
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
- Start the React development server.
```bash
npm start
```

The application will now be running and accessible in your browser, typically at ```http://localhost:3000```.

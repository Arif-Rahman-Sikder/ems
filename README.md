

# Employee Management System (EMS)

## Overview
EMS is a modern, real-time Employee Management System built with React and Vite. It allows an admin to assign tasks to employees, and employees to manage and update their assigned tasks. The app features a clean, responsive UI styled with Tailwind CSS, and uses React Context for global state management with persistent storage via localStorage.

## Purpose
The EMS app is designed to streamline task assignment and tracking within an organization. It enables:
- **Admins** to assign, monitor, and review the status of all employee tasks in real time.
- **Employees** to view, accept, complete, or fail tasks assigned to them, with instant updates reflected for both admin and employee dashboards.

## Features
- Secure login for admin and employees
- Admin dashboard to assign tasks and monitor all employees
- Employee dashboard to manage personal tasks
- Real-time updates for task status and counts
- Modern, responsive UI with Tailwind CSS
- Persistent data storage using localStorage
- Clean codebase with PropTypes and ESLint

## Technologies Used
- **React** (with Context API)
- **Vite** (for fast development and HMR)
- **Tailwind CSS** (for modern, utility-first styling)
- **PropTypes** (for runtime type checking)
- **localStorage** (for persistent state)

## How the App Was Made
1. **Frontend Framework:** Built with React and Vite for a fast, modular SPA experience.
2. **State Management:** Uses React Context to manage global state for users and tasks.
3. **Styling:** All UI is styled with Tailwind CSS for a clean, modern look.
4. **Persistence:** Employee, admin, and task data are stored in localStorage for persistence across sessions.
5. **Real-Time Updates:** All dashboards update instantly on any task status change.
6. **Code Quality:** PropTypes and ESLint are used to ensure code quality and maintainability.

## Getting Started
1. **Clone the repository:**
	 ```bash
	 git clone https://github.com/<your-username>/ems.git
	 cd ems
	 ```
2. **Install dependencies:**
	 ```bash
	 npm install
	 ```
3. **Start the development server:**
	 ```bash
	 npm run dev
	 ```
4. **Open the app:**
	 Visit `http://localhost:5173` in your browser.

## Login Credentials

### Admin
- **Email:** admin@example.com
- **Password:** 123

### Employees
- **Arif**
	- Email: arif@example.com
	- Password: 123
- **Arfat**
	- Email: arfat@example.com
	- Password: 123
- **Farhan**
	- Email: farhan@example.com
	- Password: 123
- **Shuvo**
	- Email: shuvo@example.com
	- Password: 123
- **Muntakim**
	- Email: muntakim@example.com
	- Password: 123


## License
This project is for learning and demonstration purposes.

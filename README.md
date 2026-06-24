# Study Streak Tracker - Full Stack Productivity Dashboard
🚀 Node.js Backend + Vanilla Frontend  
DecodeLabs Full Stack Development Internship — Project 2: Backend API Integration

---

## Overview

A simple full-stack web application to track daily study sessions and maintain a consistent study streak. Users can log their study hours by subject, view their progress, and monitor their streaks to stay motivated.

---

## Features

✅ **Add Study Sessions** — Log subject and hours studied  
✅ **Track Streak** — See consecutive days of studying  
✅ **View Statistics** — Today's hours, best day, total hours  
✅ **Session Management** — Delete sessions  
✅ **Real-time Updates** — Instant UI refresh  
✅ **Data Persistence** — Sessions saved in JSON file  

---

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** JSON file storage
- **API:** RESTful endpoints

---

## Project Structure
study-streak-tracker/

├── app.js      

├── package.json           
├── package-lock.json

├── index.html     

├── style.css                 
├── main.js 

├── data/
│   └── sessions.json  

└── README.md

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/study` | Add a new study session |
| GET | `/study` | Get all study sessions |
| GET | `/streak` | Get current streak |
| DELETE | `/study/:id` | Delete a session |

---

## How to Run

### Prerequisites
- Node.js installed

### Installation & Setup

1. **Clone the repository**
git clone <your-repo-url>

cd study-streak-tracker

2. **Install dependencies**
npm install

3. **Start the server**
npm start

4. **Open in browser**
http://localhost:3000/index.html

---

## Usage

1. Enter a subject name (e.g., DSA, Web Dev)
2. Enter hours studied (e.g., 2)
3. Click "Add Session"
4. View your stats:
   - Current streak (consecutive days)
   - Today's hours
   - Best day (highest hours in one day)
   - Total hours studied

---

## Screenshot

![Study Streak Tracker](./screenshot1.png)
![Study Streak Tracker](./screenshot2.png)


---

## Key Learnings

- RESTful API design
- Frontend-backend communication
- JSON file handling
- CRUD operations
- Form validation & error handling
- Responsive UI design

---

## Author

Built by Rishika as Project 2 for DecodeLabs Internship

---

## License

ISC

**Built during DecodeLabs Internship**  
Backend focuses on Node.js fundamentals; frontend showcases vanilla JS skills.

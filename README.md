# Study Streak Tracker - Full Stack Productivity Dashboard 
🚀 Node.js Backend + Vanilla Frontend  
DecodeLabs Full Stack Development Internship — Project 2: Backend API Integration

---

## 📖 Overview
**Study Streak Tracker** is a full-stack productivity application combining a Node.js/Express backend with a vanilla JavaScript frontend. It tracks daily study sessions, maintains streaks, stores progress persistently, and visualizes learning patterns through an intuitive dashboard.

Built as Project 2 for DecodeLabs, this project demonstrates backend API development, data persistence, and real-time frontend updates with a focus on user engagement through streak mechanics.

---

## 🚀 Live Features

📊 **Study Session Tracking** — Log daily study sessions with duration, subject, and notes  
🔥 **Streak System** — Automatic streak counting with visual indicators and milestone badges  
📈 **Progress Dashboard** — Real-time statistics: total sessions, current streak, longest streak, average duration  
📅 **Calendar View** — Visual heat-map showing study activity across weeks/months  
🎯 **Goals & Targets** — Set daily study goals with progress bars and achievement tracking  
🏆 **Badges & Milestones** — Unlock achievements at 7-day, 30-day, 100-day streaks  
📱 **Fully Responsive** — Mobile-first design; works seamlessly on phone, tablet, desktop  
💾 **Data Persistence** — Server-side storage with JSON file system; data survives app restarts  
🎨 **Beautiful UI** — Modern dashboard with animated counters, smooth transitions, and intuitive controls  

---

## 🛠 Tech Stack

**Backend:**
- Node.js runtime environment
- Express.js framework for REST API
- File-based JSON storage (data/sessions.json)
- Nodemon for development auto-restart

**Frontend:**
- HTML5 semantic markup
- CSS3 Flexbox/Grid + animations
- Vanilla JavaScript (no frameworks)
- Fetch API for backend communication
- LocalStorage for client-side caching

**No Dependencies (Frontend)** — Pure vanilla; no jQuery, Bootstrap, or React

---

## 📁 Project Structure
study-streak-tracker/

├── app.js                    # Express server & API routes

├── package.json              # Node dependencies & scripts

├── package-lock.json

├── index.html                # Dashboard frontend

├── style.css                 # Responsive styling

├── main.js                   # Frontend logic & API calls

├── data/

│   └── sessions.json         # Persistent session storage

└── README.md

---

## 🚀 Key API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/sessions` | Fetch all study sessions |
| POST | `/api/sessions` | Create new session |
| GET | `/api/stats` | Get streak & productivity stats |
| DELETE | `/api/sessions/:id` | Delete a session |
| GET | `/api/health` | Server health check |

---

## 📊 Dashboard Sections

### 1. Streak Counter
- Current active streak (days)
- Longest streak achieved
- Last session date
- Animated counter display

### 2. Today's Stats
- Sessions logged today
- Total study time today
- Goal progress bar

### 3. Session History Table
- Date, duration, subject, notes
- Delete button for each entry
- Sortable by date/duration

### 4. Add Session Form
- Date picker
- Duration input (minutes)
- Subject selection
- Notes textarea
- Submit button with validation

### 5. Calendar Heatmap
- Color-coded activity per day
- Green = more study time
- Gray = no activity
- Hover shows session count

### 6. Analytics
- Weekly study time chart
- Subject breakdown pie chart
- Goal vs actual comparison

---

## ▶️ Running Locally

### Prerequisites
- Node.js (v14+) installed

### Steps
```bash
cd study-streak-tracker
npm install
node app.js
```

Server runs at `http://localhost:3000`

Open in browser — dashboard loads automatically.

---

## 🎨 Design Highlights

- **Color Scheme:** Vibrant blue (#1e40af) + gold accents (#fbbf24)
- **Animations:** Smooth counter increments, fade-in effects, hover states
- **Mobile:** Single column on <768px; adapts form and charts
- **Desktop:** Multi-panel layout with sidebar navigation

---

## 💾 Data Storage

Sessions stored in `data/sessions.json`:
```json
{
  "sessions": [
    {
      "id": "1",
      "date": "2024-06-15",
      "duration": 45,
      "subject": "DSA",
      "notes": "Completed arrays problems",
      "timestamp": 1718414400000
    }
  ]
}
```

---

## 🔮 Future Enhancements

- **Database Integration** — PostgreSQL/MongoDB instead of JSON files
- **User Authentication** — Sign up, login, personal dashboards
- **Cloud Sync** — Store data in cloud; access across devices
- **Mobile App** — React Native or Flutter port
- **Social Features** — Leaderboards, friend streaks, challenges
- **Smart Notifications** — Reminders to study, streak warnings
- **Export Data** — Download sessions as CSV/PDF

---

## 🎯 Learning Outcomes

- Building REST APIs with Express.js
- Server-side data persistence
- Client-server communication (Fetch API)
- Form validation & error handling
- File I/O in Node.js
- Responsive full-stack design
- Git workflow & GitHub collaboration

---

## 📝 Status

✅ Project 2 Complete  
**Next:** Database integration & user authentication

---

**Built during DecodeLabs Internship**  
Backend focuses on Node.js fundamentals; frontend showcases vanilla JS skills.
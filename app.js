const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

// Data file path
const dataFilePath = path.join(__dirname, 'data', 'sessions.json');

// =========================
// Helper Functions
// =========================

function readSessions() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, 'utf-8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error reading sessions:', error);
    return [];
  }
}

function writeSessions(sessions) {
  try {
    fs.writeFileSync(
      dataFilePath,
      JSON.stringify(sessions, null, 2)
    );
    return true;
  } catch (error) {
    console.error('Error writing sessions:', error);
    return false;
  }
}

// Improved streak calculation
function calculateStreak(sessions) {
  if (sessions.length === 0) return 0;

  const uniqueDates = [
    ...new Set(sessions.map(session => session.date))
  ].sort((a, b) => new Date(b) - new Date(a));

  let streak = 1;
  let currentDate = new Date(uniqueDates[0]);

  for (let i = 1; i < uniqueDates.length; i++) {
    const prevDate = new Date(uniqueDates[i]);

    const dayDiff = Math.round(
      (currentDate - prevDate) /
      (1000 * 60 * 60 * 24)
    );

    if (dayDiff === 1) {
      streak++;
      currentDate = prevDate;
    } else {
      break;
    }
  }

  return streak;
}

// =========================
// POST /study
// Add session
// =========================

app.post('/study', (req, res) => {
  const { subject, hours } = req.body;

  if (!subject || subject.trim() === '') {
    return res.status(400).json({
      error: 'Subject is required'
    });
  }

  if (
    !hours ||
    typeof hours !== 'number' ||
    hours <= 0
  ) {
    return res.status(400).json({
      error: 'Hours must be greater than 0'
    });
  }

  if (hours > 24) {
    return res.status(400).json({
      error: 'Hours cannot exceed 24'
    });
  }

  const sessions = readSessions();

  const today = new Date()
    .toISOString()
    .split('T')[0];

  const newSession = {
    id: Date.now(),
    subject: subject.trim(),
    hours,
    date: today,
    createdAt: new Date().toISOString()
  };

  sessions.push(newSession);

  if (writeSessions(sessions)) {
    res.status(201).json({
      message: 'Study session added successfully',
      session: newSession,
      currentStreak: calculateStreak(sessions)
    });
  } else {
    res.status(500).json({
      error: 'Failed to save session'
    });
  }
});

// =========================
// GET /study
// All sessions
// =========================

app.get('/study', (req, res) => {
  const sessions = readSessions();

  const sortedSessions = [...sessions].sort(
    (a, b) =>
      new Date(b.createdAt) -
      new Date(a.createdAt)
  );

  const totalHours = sortedSessions.reduce(
    (sum, session) => sum + session.hours,
    0
  );

  res.json({
    sessions: sortedSessions,
    totalSessions: sortedSessions.length,
    totalHours: Number(totalHours.toFixed(1))
  });
});

// =========================
// GET /streak
// =========================

app.get('/streak', (req, res) => {
  const sessions = readSessions();

  const currentStreak =
    calculateStreak(sessions);

  res.json({
    currentStreak,
    totalSessions: sessions.length,
    message:
      currentStreak > 0
        ? `You're on a ${currentStreak}-day streak! 🔥`
        : 'Start your streak today!'
  });
});

// =========================
// GET /stats
// =========================

app.get('/stats', (req, res) => {
  const sessions = readSessions();

  const totalHours = sessions.reduce(
    (sum, session) => sum + session.hours,
    0
  );

  const dayMap = {};

  sessions.forEach(session => {
    dayMap[session.date] =
      (dayMap[session.date] || 0) +
      session.hours;
  });

  const bestDay = Math.max(
    ...Object.values(dayMap),
    0
  );

  const today = new Date()
    .toISOString()
    .split('T')[0];

  const todayHours = sessions
    .filter(session => session.date === today)
    .reduce(
      (sum, session) =>
        sum + session.hours,
      0
    );

  res.json({
    totalSessions: sessions.length,
    totalHours: Number(totalHours.toFixed(1)),
    todayHours: Number(todayHours.toFixed(1)),
    bestDay: Number(bestDay.toFixed(1)),
    currentStreak:
      calculateStreak(sessions)
  });
});

// =========================
// DELETE /study/:id
// =========================

app.delete('/study/:id', (req, res) => {
  const id = Number(req.params.id);

  let sessions = readSessions();

  const existingSession =
    sessions.find(
      session => session.id === id
    );

  if (!existingSession) {
    return res.status(404).json({
      error: 'Session not found'
    });
  }

  sessions = sessions.filter(
    session => session.id !== id
  );

  if (writeSessions(sessions)) {
    res.json({
      message:
        'Session deleted successfully'
    });
  } else {
    res.status(500).json({
      error: 'Failed to delete session'
    });
  }
});

// =========================
// Root Route
// =========================

app.get('/', (req, res) => {
  res.json({
    message: 'Study Streak Tracker API',
    endpoints: {
      'POST /study':
        'Add session { subject, hours }',
      'GET /study':
        'Get all sessions',
      'GET /streak':
        'Get current streak',
      'GET /stats':
        'Get dashboard stats',
      'DELETE /study/:id':
        'Delete a session'
    }
  });
});

// =========================
// 404 Route
// =========================

app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found'
  });
});

// =========================
// Start Server
// =========================

app.listen(PORT, () => {
  console.log(
    `🔥 Study Streak Tracker API running on http://localhost:${PORT}`
  );
});
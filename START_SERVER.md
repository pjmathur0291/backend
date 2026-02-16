# How to Start/Restart Backend Server

## Quick Start

### Step 1: Open Terminal
Open a new terminal window (Terminal app on Mac, or use VS Code integrated terminal)

### Step 2: Navigate to Backend Folder
```bash
cd "/Users/nareshkansara/Documents/cloudintellect website/backend"
```

### Step 3: Start the Server
```bash
npm run dev
```

### Step 4: Verify It's Running
You should see:
```
✅ MongoDB connected successfully
🚀 Server running on port 5002
📝 Environment: development
```

Then test: **http://localhost:5002/api/health**

If you see a MongoDB error but still see "Server running on port 5002", the server is up — the health URL should work. Fix MongoDB later for login/API.

---

## If Server Won't Start or Crashes

### Check 1: Install Dependencies
```bash
cd backend
npm install
```

### Check 2: Run and Watch for Errors
```bash
cd backend
npm run dev
```
- If the terminal closes immediately or shows "MongoDB connection error" and then exits, the server was crashing. It now keeps running even if MongoDB fails; health check will work.
- If you see "Server running on port 5002", open http://localhost:5002/api/health in the browser.

### Check 3: Verify MongoDB (for login/API)
Make sure `backend/.env` has correct MongoDB URI. If MongoDB fails, server still runs but login and data APIs will not work until DB connects.

### Check 4: Port in Use
If port 5002 is busy, change it in `backend/.env`:
```env
PORT=5003
```
Then set in root `.env`: `VITE_API_URL=http://localhost:5003/api`

---

## Stop Server

Press `Ctrl + C` in the terminal where server is running

---

## Restart Server

1. Stop server: `Ctrl + C`
2. Start again: `npm run dev`

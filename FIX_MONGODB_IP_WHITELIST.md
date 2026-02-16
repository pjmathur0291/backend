# Fix: MongoDB Atlas "IP not whitelisted"

Your backend is running, but MongoDB Atlas is blocking the connection because your current IP address is not allowed.

## Fix in 2 minutes

### Step 1: Open MongoDB Atlas
1. Go to **https://cloud.mongodb.com**
2. Log in to your account
3. Select your project (Cloud Intellect)

### Step 2: Open Network Access
1. In the left sidebar, under **Security**, click **Network Access**
2. Or go directly: **https://cloud.mongodb.com** → Your Project → **Network Access**

### Step 3: Add Your IP
1. Click the green **"Add IP Address"** button
2. Choose one:
   - **"Add Current IP Address"** – adds only your current IP (recommended)
   - **"Allow Access from Anywhere"** – adds `0.0.0.0/0` (all IPs; use only for quick dev testing)
3. Click **"Confirm"**

### Step 4: Wait and Restart
1. Wait **1–2 minutes** for the change to apply
2. In your terminal (where backend is running), press **Ctrl+C** to stop the server
3. Start again: **`npm run dev`**
4. You should see: **✅ MongoDB connected successfully**
5. Try logging in again at http://localhost:5173/admin/login

---

## Why this happens

- Atlas only allows connections from IPs you add in **Network Access**
- Your home/office IP can change; if it changed, Atlas will block until you add the new IP
- "Allow Access from Anywhere" (`0.0.0.0/0`) is convenient for development but less secure — use "Add Current IP Address" when possible

---

## After whitelisting

- Terminal should show: **✅ MongoDB connected successfully**
- Login should work (admin@cloudintellect.com / admin123)
- If you never created the admin user, run: **`npm run create-admin`** in the backend folder

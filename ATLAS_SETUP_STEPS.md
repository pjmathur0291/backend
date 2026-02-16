# MongoDB Atlas Setup - Step by Step Guide

Follow these steps after creating your free cluster.

## Step 1: Create Database User

After your cluster is created, you'll see a security setup screen.

1. **Create Database User** section:
   - **Username**: Enter a username (e.g., `cloudintellect` or `admin`)
   - **Password**: 
     - Click **"Autogenerate Secure Password"** (recommended) OR
     - Create your own strong password
   - **IMPORTANT**: Click **"Show Password"** and **COPY THE PASSWORD** - you'll need it for the connection string!
   - Click **"Create Database User"**

## Step 2: Configure Network Access

In the same security setup screen:

1. **Network Access** section:
   - Click **"Add My Current IP Address"** (recommended for security)
   - OR click **"Allow Access from Anywhere"** (for development only - less secure)
   - Click **"Finish and Close"**

## Step 3: Get Connection String

1. Wait for the cluster to finish deploying (usually 1-2 minutes)
2. Click the **"Connect"** button on your cluster card
3. Select **"Connect your application"**
4. Choose **"Node.js"** as the driver (version 5.5 or later)
5. You'll see a connection string that looks like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. **Copy this connection string**

## Step 4: Update Connection String

1. Replace `<username>` with your database username
2. Replace `<password>` with your database password (URL-encode special characters if needed)
3. Add your database name at the end: `/cloudintellect`

**Example:**
```
Original: mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority

Updated: mongodb+srv://cloudintellect:MyPassword123@cluster0.xxxxx.mongodb.net/cloudintellect?retryWrites=true&w=majority
```

**Note**: If your password contains special characters like `@`, `#`, `%`, etc., you need to URL-encode them:
- `@` becomes `%40`
- `#` becomes `%23`
- `%` becomes `%25`
- `&` becomes `%26`

## Step 5: Update .env File

1. Open `backend/.env` file (create it from `.env.example` if it doesn't exist)
2. Update the `MONGODB_URI` line with your connection string:

```env
MONGODB_URI=mongodb+srv://cloudintellect:yourpassword@cluster0.xxxxx.mongodb.net/cloudintellect?retryWrites=true&w=majority
```

3. Save the file

## Step 6: Test Connection

1. Open terminal in the `backend` folder
2. Install dependencies (if not done already):
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

You should see:
```
✅ MongoDB connected successfully
🚀 Server running on port 5000
```

If you see an error, check the troubleshooting section below.

## Step 7: Seed Initial Data (Optional)

After confirming the connection works, you can seed sample data:

```bash
npm run seed
```

This will create:
- Sample alumni profiles
- Sample batches
- Sample success stories
- Default admin user (email: `admin@cloudintellect.com`, password: `admin123`)

---

## Troubleshooting

### Error: "Authentication failed"

**Problem**: Username or password is incorrect in connection string.

**Solution**:
1. Double-check username and password
2. Make sure password is URL-encoded if it contains special characters
3. Verify the database user exists in Atlas (Database Access section)

### Error: "IP not whitelisted"

**Problem**: Your IP address is not in the network access list.

**Solution**:
1. Go to MongoDB Atlas → Network Access
2. Click "Add IP Address"
3. Click "Add Current IP Address"
4. Click "Confirm"

### Error: "MongoNetworkError"

**Problem**: Connection string format is incorrect or network issue.

**Solution**:
1. Verify connection string format:
   - Starts with `mongodb+srv://`
   - Contains username and password
   - Ends with database name and query parameters
2. Check your internet connection
3. Verify cluster is running (status should be "Active" in Atlas)

### Error: "Database name not found"

**Problem**: Database name in connection string doesn't exist.

**Solution**:
- MongoDB Atlas creates databases automatically when you first write data
- The database name `cloudintellect` will be created automatically when you run the seed script or make your first API call
- This is normal and expected!

---

## Quick Checklist

- [ ] Cluster created and deployed
- [ ] Database user created (username and password saved)
- [ ] IP address whitelisted
- [ ] Connection string copied
- [ ] Connection string updated with username, password, and database name
- [ ] `.env` file updated with `MONGODB_URI`
- [ ] Dependencies installed (`npm install`)
- [ ] Server started (`npm run dev`)
- [ ] Connection successful (see "✅ MongoDB connected successfully")
- [ ] Optional: Data seeded (`npm run seed`)

---

## Next Steps

Once your backend is connected and running:

1. ✅ Backend is ready!
2. Next: Set up the Admin Panel frontend
3. Test API endpoints using Postman or similar tool
4. Start managing content through the admin panel

---

## Need Help?

If you encounter any issues:
1. Check the error message carefully
2. Verify all steps above
3. Check MongoDB Atlas dashboard for cluster status
4. Review the connection string format

# MongoDB Setup Guide

This guide will help you set up MongoDB for the Cloud Intellect backend. You have two options:

## Option 1: MongoDB Atlas (Cloud - Recommended for Beginners)

MongoDB Atlas is a cloud-hosted MongoDB service that's free to start and doesn't require local installation.

### Step 1: Create MongoDB Atlas Account

1. Go to [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account (or sign in if you already have one)

### Step 2: Create a Cluster

1. After logging in, click **"Build a Database"** or **"Create"**
2. Choose **"M0 Free"** tier (Free forever)
3. Select a cloud provider (AWS, Google Cloud, or Azure)
4. Choose a region closest to you
5. Name your cluster (e.g., "CloudIntellect")
6. Click **"Create"** (takes 3-5 minutes)

### Step 3: Create Database User

1. Once cluster is created, you'll see a security setup screen
2. Create a database user:
   - **Username**: `cloudintellect` (or your choice)
   - **Password**: Click "Autogenerate Secure Password" or create your own
   - **Save the password** - you'll need it for the connection string!
3. Click **"Create Database User"**

### Step 4: Configure Network Access

1. In the security setup, click **"Add My Current IP Address"**
2. Or click **"Allow Access from Anywhere"** (for development only - use IP whitelist in production)
3. Click **"Finish and Close"**

### Step 5: Get Connection String

1. Click **"Connect"** button on your cluster
2. Choose **"Connect your application"**
3. Select **"Node.js"** as driver
4. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` with your database username
6. Replace `<password>` with your database password
7. Add database name at the end: `/cloudintellect`
   ```
   mongodb+srv://cloudintellect:yourpassword@cluster0.xxxxx.mongodb.net/cloudintellect?retryWrites=true&w=majority
   ```

### Step 6: Update .env File

1. Open `backend/.env` file
2. Update `MONGODB_URI` with your connection string:
   ```env
   MONGODB_URI=mongodb+srv://cloudintellect:yourpassword@cluster0.xxxxx.mongodb.net/cloudintellect?retryWrites=true&w=majority
   ```
3. Save the file

### Step 7: Test Connection

```bash
cd backend
npm install
npm run dev
```

You should see: `✅ MongoDB connected successfully`

---

## Option 2: Local MongoDB Installation

If you prefer to run MongoDB locally on your machine.

### macOS Installation

#### Using Homebrew (Recommended)

```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install MongoDB
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB service
brew services start mongodb-community

# Verify MongoDB is running
mongosh
```

#### Manual Installation

1. Download MongoDB Community Server from: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Select macOS and download the `.tgz` file
3. Extract and follow installation instructions

### Windows Installation

1. Download MongoDB Community Server from: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Select Windows and download the `.msi` installer
3. Run the installer:
   - Choose "Complete" installation
   - Check "Install MongoDB as a Service"
   - Choose "Run service as Network Service user"
4. MongoDB will start automatically as a Windows service

### Linux Installation (Ubuntu/Debian)

```bash
# Import MongoDB public GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Add MongoDB repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Update package database
sudo apt-get update

# Install MongoDB
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Verify MongoDB is running
mongosh
```

### Configure Local MongoDB

1. MongoDB runs on `mongodb://localhost:27017` by default
2. Update `backend/.env`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/cloudintellect
   ```

### Test Local MongoDB

```bash
# Connect to MongoDB shell
mongosh

# Or if mongosh is not available, use:
mongo

# In MongoDB shell, test connection:
show dbs
```

---

## Verify Setup

### Test Backend Connection

1. Make sure MongoDB is running (local) or cluster is active (Atlas)
2. Start the backend:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
3. You should see:
   ```
   ✅ MongoDB connected successfully
   🚀 Server running on port 5000
   ```

### Seed Initial Data (Optional)

```bash
cd backend
npm run seed
```

This will:
- Create sample data for Alumni, Batches, Success Stories, etc.
- Create a default admin user:
  - Email: `admin@cloudintellect.com`
  - Password: `admin123`

---

## Troubleshooting

### Connection Issues

**Error: "MongoNetworkError: connect ECONNREFUSED"**
- **Local MongoDB**: Make sure MongoDB service is running
  - macOS: `brew services start mongodb-community`
  - Windows: Check Services app, start MongoDB service
  - Linux: `sudo systemctl start mongod`
- **Atlas**: Check network access settings, ensure your IP is whitelisted

**Error: "Authentication failed"**
- Check username and password in connection string
- Ensure special characters in password are URL-encoded
- Verify database user exists in Atlas

**Error: "MongoServerError: bad auth"**
- Double-check username/password in `.env` file
- Make sure connection string format is correct

### Port Already in Use

If port 27017 is already in use:
```bash
# Find process using port
lsof -i :27017  # macOS/Linux
netstat -ano | findstr :27017  # Windows

# Kill the process or change MongoDB port
```

### MongoDB Not Starting

**macOS:**
```bash
# Check MongoDB logs
tail -f /usr/local/var/log/mongodb/mongo.log

# Restart service
brew services restart mongodb-community
```

**Linux:**
```bash
# Check MongoDB status
sudo systemctl status mongod

# View logs
sudo journalctl -u mongod
```

---

## Security Best Practices

### For Production:

1. **Use Strong Passwords**: Generate secure passwords for database users
2. **IP Whitelist**: Only allow specific IPs in MongoDB Atlas
3. **Enable SSL/TLS**: Use encrypted connections
4. **Regular Backups**: Set up automated backups
5. **Environment Variables**: Never commit `.env` file to git
6. **Role-Based Access**: Use least privilege principle for database users

### Connection String Security:

- Store connection strings in `.env` file (already in `.gitignore`)
- Never commit credentials to version control
- Use different databases for development and production
- Rotate passwords regularly

---

## Quick Reference

### MongoDB Atlas Connection String Format:
```
mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
```

### Local MongoDB Connection String Format:
```
mongodb://localhost:27017/<database>
```

### Useful MongoDB Commands:

```bash
# Connect to MongoDB shell
mongosh

# Show all databases
show dbs

# Use a database
use cloudintellect

# Show collections (tables)
show collections

# Find all documents in a collection
db.alumnis.find()

# Count documents
db.alumnis.countDocuments()

# Drop a collection (delete all data)
db.alumnis.drop()
```

---

## Need Help?

- MongoDB Atlas Documentation: [https://docs.atlas.mongodb.com/](https://docs.atlas.mongodb.com/)
- MongoDB Community Forum: [https://developer.mongodb.com/community/forums/](https://developer.mongodb.com/community/forums/)
- MongoDB Manual: [https://docs.mongodb.com/manual/](https://docs.mongodb.com/manual/)

# 🚀 Render Deployment Guide for Resume Builder

## ✅ What's Been Done

Your project has been successfully pushed to GitHub with proper `.gitignore` files:

**Excluded from repo (not uploaded):**

- `node_modules/` - Dependencies
- `.env` - Sensitive variables
- `uploads/` - User-generated files
- `package-lock.json` - Lock files

**Included in repo:**

- All source code
- Configuration files
- `.env.example` files (for reference)
- `render.yaml` - Deployment config
- `README.md` - Documentation

---

## 📋 Step-by-Step Deployment on Render

### Step 1: Prepare MongoDB

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account/login
3. Create a new Project
4. Create a **Free Tier Cluster**
5. Go to "Database Access" → Create a user with username/password
6. Go to "Network Access" → Add IP address `0.0.0.0/0` (allow all)
7. Click "Connect" on your cluster
8. Select "Connect your application"
9. Copy the connection string (looks like: `mongodb+srv://user:pass@cluster.mongodb.net/dbname`)
10. Replace `<password>` with your password
11. Save this URL for later

### Step 2: Deploy Backend on Render

1. Go to [Render.com](https://render.com)
2. Sign up/Login with GitHub
3. Click **"New +"** → **"Web Service"**
4. Select your repository: `react-resume-builder-web-app`
5. **Configure:**
   - **Name:** `resume-builder-api` (or any name)
   - **Root Directory:** `backend` ✅
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free

6. **Add Environment Variables:**
   - Click **"Environment"** and add:
     ```
     MONGODB_URI = mongodb+srv://your_username:your_password@cluster.mongodb.net/resume-builder
     JWT_SECRET = your-super-secret-key-here-make-it-long
     NODE_ENV = production
     ```

7. Click **"Create Web Service"** and wait for deployment (2-3 minutes)
8. ✅ Copy your **Backend URL** (e.g., `https://resume-builder-api.onrender.com`)

### Step 3: Update Frontend API URL

**After backend is deployed**, update your frontend:

1. Open [GitHub](https://github.com/NikhilSutawane29/react-resume-builder-web-app)
2. Navigate to `frontend/src/utils/apiPaths.js` (or where API URL is configured)
3. Update the API URL to your Render backend URL
4. Commit and push the change:
   ```bash
   git add .
   git commit -m "Update API URL for Render deployment"
   git push origin main
   ```

### Step 4: Deploy Frontend on Render

1. Go to [Render.com](https://render.com)
2. Click **"New +"** → **"Static Site"**
3. Select your repository: `react-resume-builder-web-app`
4. **Configure:**
   - **Name:** `resume-builder-web` (or any name)
   - **Root Directory:** `frontend` ✅
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist` ✅
   - **Instance Type:** Free

5. Click **"Create Static Site"** and wait for deployment (2-3 minutes)
6. ✅ Your frontend URL will be provided

---

## 🔍 Verify Deployment

1. **Backend:** Open `https://your-backend.onrender.com/` (should return error or welcome message)
2. **Frontend:** Open `https://your-frontend.onrender.com/` (should load your app)
3. Try signing up/logging in
4. Test creating a resume

---

## ⚠️ Important Notes

- **Free tier on Render:** Services spin down after 15 minutes of inactivity (first request takes 30 seconds)
- **Uploads folder:** User images won't persist - use cloud storage (AWS S3, Cloudinary) for production
- **Build time:** May take 3-5 minutes on first deployment

---

## 🆘 Troubleshooting

| Problem                   | Solution                                        |
| ------------------------- | ----------------------------------------------- |
| Backend won't start       | Check MongoDB URI in env vars                   |
| "Cannot connect to DB"    | Verify MongoDB connection string & IP whitelist |
| Frontend shows blank page | Check browser console, verify API URL           |
| Deployment stuck          | Check build logs in Render dashboard            |
| Images not uploading      | Check upload folder permissions & middleware    |

---

## 📞 Need Help?

1. Check Render deployment logs
2. Check MongoDB connection in MongoDB Atlas
3. Verify all environment variables are set correctly
4. Check your GitHub repo has latest code

---

**Your app is now live! 🎉**

Frontend: `https://your-frontend.onrender.com`  
Backend: `https://your-backend.onrender.com`

Repository: `https://github.com/NikhilSutawane29/react-resume-builder-web-app`

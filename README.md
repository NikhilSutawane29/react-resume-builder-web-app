# React Resume Builder - Full Stack Application

A modern web application for creating and managing resumes with multiple templates and real-time preview.

## 🚀 Features

- **Multiple Resume Templates**: Choose from various professionally designed templates
- **Real-time Preview**: See your resume as you edit it
- **User Authentication**: Secure login and signup system
- **Image Upload**: Add profile pictures and images to your resume
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Cloud-based**: Access your resumes from anywhere

## 📦 Project Structure

```
Resume-2/
├── backend/          # Node.js + Express server
│   ├── config/       # Database configuration
│   ├── controllers/  # Business logic
│   ├── middleware/   # Authentication & file upload
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API endpoints
│   └── server.js     # Main server file
└── frontend/         # React + Vite application
    ├── src/
    │   ├── components/  # React components & templates
    │   ├── pages/       # Page components
    │   ├── context/     # User context
    │   └── utils/       # Helper functions
    └── vite.config.js   # Vite configuration
```

## 🛠️ Tech Stack

### Backend

- **Node.js** & **Express.js** - REST API
- **MongoDB** - Database
- **JWT** - Authentication
- **Multer** - File upload handling
- **Cors** - Cross-origin requests

### Frontend

- **React** 18+ - UI library
- **Vite** - Build tool
- **Axios** - HTTP client
- **Context API** - State management

## 📋 Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)
- GitHub account (for deployment)
- Render account (for deployment)

## 🚀 Installation & Setup

### Backend Setup

1. Navigate to backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env` file (copy from `.env.example`):

   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your values:

   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

5. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## 🌐 Deployment on Render

### Backend Deployment

1. **Create MongoDB Cluster** (if not already done):
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free cluster
   - Get your connection string

2. **Deploy Backend to Render**:
   - Push code to GitHub (✅ Done)
   - Go to [Render](https://render.com)
   - Create new **Web Service**
   - Connect GitHub repository
   - Select branch: `main`
   - Root directory: `backend`
   - Build command: `npm install`
   - Start command: `npm start`
   - Add environment variables from `.env.example`
   - Deploy

3. **Backend URL**: Copy the deployed service URL (e.g., `https://your-app.onrender.com`)

### Frontend Deployment

1. **Update API URL**:
   - Update `REACT_APP_API_URL` in `frontend/src/utils/apiPaths.js` to your Render backend URL
   - Or create `.env` in frontend with:
     ```
     VITE_API_URL=https://your-backend.onrender.com
     ```

2. **Deploy Frontend to Render**:
   - Go to [Render](https://render.com)
   - Create new **Static Site**
   - Connect GitHub repository
   - Select branch: `main`
   - Root directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy

## 📝 API Documentation

### Authentication

- `POST /api/user/signup` - Register new user
- `POST /api/user/login` - Login user

### Resume Operations

- `GET /api/resume` - Get all resumes
- `POST /api/resume` - Create new resume
- `PUT /api/resume/:id` - Update resume
- `DELETE /api/resume/:id` - Delete resume
- `POST /api/upload` - Upload images

## 🔧 Environment Variables

Create `.env` in backend directory:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your-super-secret-key
PORT=5000
NODE_ENV=production
```

## 📱 Usage

1. **Sign up** or **Log in** to your account
2. **Create** a new resume
3. **Choose** a template
4. **Fill in** your information
5. **Upload** your profile picture
6. **Preview** in real-time
7. **Download** or **Share** your resume

## 🐛 Troubleshooting

### Backend won't start

- Check MongoDB connection string
- Ensure all environment variables are set
- Check if port 5000 is available

### Frontend API calls fail

- Verify backend is running
- Check `VITE_API_URL` is correct
- Check CORS settings in backend

### Build fails on Render

- Clear build cache
- Ensure `package.json` has all dependencies
- Check Node.js version compatibility

## 📄 License

MIT License

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📧 Contact

For support, contact: nikhil@example.com

---

**Happy Resume Building! 🎉**

# Frontend API Configuration Guide

## 📋 Overview

The frontend is now configured to use environment variables for the backend server URL. This allows you to easily switch between development, staging, and production environments.

## 🔧 Configuration Files

### 1. `.env` File (Development)

```
VITE_SERVER_URL="http://localhost:5000/"
```

### 2. `.env.example` File (Reference)

Shows all available environment variables that can be configured.

### 3. `src/utils/apiPaths.js`

- Contains the `BASE_URL` which reads from `import.meta.env.VITE_SERVER_URL`
- Defines all API endpoints paths (routes) used across the application
- Centralized location for all API endpoint definitions

### 4. `src/utils/axiosInstance.js`

- Axios instance configured with the `BASE_URL` from `apiPaths.js`
- Includes request/response interceptors for:
  - Token authentication (adds Bearer token to headers)
  - Error handling (401 redirects to home, 500 logs server errors)
  - Request timeout (10 seconds)

### 5. `src/utils/apiConfig.js` (New)

- Helper utility to debug and manage API configuration
- Provides `getApiConfig()` function to access current configuration
- Logs API configuration in development mode

## 🚀 How It Works

### Development Flow

1. Vite reads the `.env` file
2. `import.meta.env.VITE_SERVER_URL` gets the value: `"http://localhost:5000/"`
3. `apiPaths.js` exports `BASE_URL` with this value
4. `axiosInstance.js` uses `BASE_URL` as the `baseURL`
5. All components import `axiosInstance` and `API_PATHS`
6. API calls are made with full URL: `http://localhost:5000/api/auth/login`

### Component Usage Example

```javascript
import axiosInstance from "../utils/axiosInstance.js";
import { API_PATHS } from "../utils/apiPaths.js";

// Making an API call
const fetchResumes = async () => {
  const response = await axiosInstance.get(API_PATHS.RESUME.GET_ALL);
  return response.data;
};
```

## 🔄 Environment-Specific Configuration

### Development (Local)

```
VITE_SERVER_URL=http://localhost:5000/
```

### Staging

```
VITE_SERVER_URL=https://staging-api.yourdomain.com/
```

### Production / Render Deployment

```
VITE_SERVER_URL=https://your-backend.onrender.com/
```

## ✅ API Paths Available

```javascript
API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    GET_PROFILE: "/api/auth/profile",
  },
  RESUME: {
    CREATE: "/api/resume",
    GET_ALL: "/api/resume",
    GET_BY_ID: (id) => `/api/resume/${id}`,
    UPDATE: (id) => `/api/resume/${id}`,
    DELETE: (id) => `/api/resume/${id}`,
    UPLOAD_IMAGES: (id) => `/api/resume/${id}/upload-images`,
  },
  image: {
    UPLOAD_IMAGE: "api/upload/image",
  },
};
```

## 🐛 Debugging API Issues

### Check Current Configuration

In your browser console (development mode):

```
// API configuration is logged automatically
// Look for: "🔧 API Configuration:"
```

### Verify API Connection

```javascript
// In browser console
import { getApiConfig } from "./utils/apiConfig.js";
const config = getApiConfig();
console.log(config.serverUrl); // Should show your backend URL
```

### Common Issues

| Issue                   | Solution                           |
| ----------------------- | ---------------------------------- |
| 404 errors on API calls | Verify `VITE_SERVER_URL` in `.env` |
| CORS errors             | Check backend CORS configuration   |
| Token not sent          | Check localStorage for 'token' key |
| Blank page on load      | Check browser console for errors   |

## 📝 Adding New API Endpoints

To add new API endpoints:

1. Open `src/utils/apiPaths.js`
2. Add your endpoint to the appropriate section (AUTH, RESUME, etc.) or create a new section
3. Example:

```javascript
export const API_PATHS = {
  // ... existing paths ...
  USER: {
    GET_PROFILE: "/api/user/profile",
    UPDATE_PROFILE: "/api/user/profile",
    CHANGE_PASSWORD: "/api/user/change-password",
  },
};
```

4. Use in components:

```javascript
const response = await axiosInstance.get(API_PATHS.USER.GET_PROFILE);
```

## 🔐 Security Notes

- `.env` files are **not** deployed to GitHub (see `.gitignore`)
- `VITE_SERVER_URL` should point to your actual backend URL
- Never commit `.env` files with sensitive information
- Always use environment variables for different deployments

## 🎯 Deployment Checklist

- [ ] `.env` file has correct `VITE_SERVER_URL` for the environment
- [ ] Backend is running and accessible at the URL
- [ ] CORS is enabled on backend for frontend URL
- [ ] Run `npm run build` to create production build
- [ ] Test API calls work in production environment

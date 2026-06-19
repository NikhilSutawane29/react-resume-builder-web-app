// API Configuration Helper
// This file helps manage and debug API connections

export const getApiConfig = () => {
  const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:5000";

  return {
    serverUrl: serverUrl.endsWith("/") ? serverUrl.slice(0, -1) : serverUrl,
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
  };
};

// Log API configuration in development
if (import.meta.env.DEV) {
  console.log("🔧 API Configuration:", {
    SERVER_URL: import.meta.env.VITE_SERVER_URL,
    MODE: import.meta.env.MODE,
  });
}

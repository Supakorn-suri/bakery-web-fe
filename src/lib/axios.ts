import axios from "axios";

// https://axios-http.com/docs/config_defaults
export const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // CRITICAL: This sends httpOnly cookies automatically
});

// https://axios-http.com/docs/interceptors
// Request interceptor - add any custom headers if needed
apiClient.interceptors.request.use(
  (config) => {
    // Cookies are automatically sent with withCredentials: true
    // No need to manually add Authorization header
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handle errors globally
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const isAuthRoute = error.config?.url?.includes("/auth/");

    // Handle 401 errors
    if (error.response?.status === 401) {
      // Don't redirect if it's a login/register request
      if (!isAuthRoute && typeof window !== "undefined") {
        window.location.href = "/";
      }
    }

    if (error.response?.status === 403) {
      console.error("Access denied");
    }

    return Promise.reject(error);
  }
);

export default apiClient;

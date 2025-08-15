import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL ||  "https://linkedin-backend-1-0kob.onrender.com",
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true, // ✅ This is required for cookies to work
});

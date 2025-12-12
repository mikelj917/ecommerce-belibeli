import axios, { type AxiosError } from "axios";

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

API.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const { status, config } = error;
    const currentPath = window.location.pathname;
    const publicPaths = ["/"];
    const isPublicPage = publicPaths.some((path) =>
      path === "/" ? currentPath === "/" : currentPath.startsWith(path)
    );
    const isLoginPage = currentPath.startsWith("/login");

    if (status === 401 && config) {
      try {
        await API.post("/auth/refresh");
        return API(config);
      } catch (refreshError) {
        if (!isLoginPage && !isPublicPage) {
          const redirect = encodeURIComponent(
            currentPath + window.location.search
          );
          window.location.href = `/login?redirect=${redirect}`;
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default API;

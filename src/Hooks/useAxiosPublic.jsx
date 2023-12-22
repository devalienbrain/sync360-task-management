import axios from "axios";

const axiosPublic = axios.create({
  baseURL:
    "http://localhost:5000",
    // "https://sync360-task-management-server.vercel.app/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

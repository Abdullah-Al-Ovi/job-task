import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://jobtask-server-kohl.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;
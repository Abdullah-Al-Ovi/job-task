import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useTaskCollection = () => {
    const { user } = useContext(authContext)
    const axiosPublic = useAxiosPublic()
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
    
          const res = await axiosPublic.get(`/tasks/${user?.email}`)
          console.log(res.data);
          return res.data
          
        }
      })
      return [tasks, refetch]
};

export default useTaskCollection;
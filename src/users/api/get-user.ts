import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/client";

const queryFn = async () => {
    const response = await api.GET('/users')

    return response.data
}

export const useUsers = () => useQuery({
    queryKey: ['users'],
    queryFn
})
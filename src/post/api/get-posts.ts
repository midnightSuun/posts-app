import { useQuery } from "@tanstack/react-query"
import { api } from "../../api/client"

const queryFn = async () => {
    const response = await api.GET('/posts')

    return response.data
}

export const usePosts = () => useQuery({
    queryKey: ['posts'], 
    queryFn
})
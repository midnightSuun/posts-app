import { useQuery } from "@tanstack/react-query"
import type { Post } from "../../types"

const queryFn = async(postId: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await response.json() as Post

    return data
}

export const usePost = (postId: string) => useQuery({queryKey: ['posts', postId], queryFn: () => queryFn(postId)})
import { api } from '@/api'
import { useQuery } from '@tanstack/react-query'

const queryFn = async (postId: string) => {
  const response = await api.GET('/posts/{id}', { params: { path: { id: postId } } })

  return response.data
}

export const usePost = (postId: string) => useQuery({ queryKey: ['posts', postId], queryFn: () => queryFn(postId) })
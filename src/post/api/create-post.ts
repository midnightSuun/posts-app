import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Post } from '../../types'
import { api } from '../../api/client'

const mutationFn = (params: Pick<Post, 'title' | 'body'>) => {
  return api.POST('/posts', {
    body: params
  })
}

export const useCreatePost = () => {
  const queryClient = useQueryClient()

  return useMutation({ mutationFn, onSuccess: () => {
    queryClient.invalidateQueries({queryKey: ['posts']})
  } })
}

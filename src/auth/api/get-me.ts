import { api } from '@/api'
import { useSuspenseQuery } from '@tanstack/react-query'

const queryFn = async () => {
  const response = await api.GET('/users/me')

  return response.data ?? null
}

export const GET_ME_QUERY_KEY = 'me'

export const useGetMe = () =>
  useSuspenseQuery({
    queryKey: [GET_ME_QUERY_KEY],
    queryFn,
  })

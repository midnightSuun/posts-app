import { useQuery } from '@tanstack/react-query'
import { api } from '../../api/client'

const queryFn = async (page: number) => {
    const response =
        await api.GET('/users', { params: { query: { page, limit: 3 } } })

    return response.data
}

export const useUsers = (page: number) =>
    useQuery({
        queryKey: ['users', page],
        queryFn: () => queryFn(page),
    })

import { useQuery } from '@tanstack/react-query'
import { api } from '../../api/client'

const queryFn = async (page: number, q: string) => {
    const response =
        await api.GET('/users', { params: { query: { page, limit: 3 , q} } })

    return response.data
}

export const useUsers = (page: number, q: string) =>
    useQuery({
        queryKey: ['users', page, q],
        queryFn: () => queryFn(page, q),
    })

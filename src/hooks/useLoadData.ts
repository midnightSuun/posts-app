import { useEffect, useState } from 'react'

export function useLoadData<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()

                setData(data)
            } catch {
                setIsError(true)
            }
        }
        loadData()
    }, [url])

    return { data, isError }
}

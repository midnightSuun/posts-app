import type { PropsWithChildren } from 'react'
import { useGetMe } from '../api/get-me'
import { Navigate } from '@tanstack/react-router'

export const UnauthorizedGuard = ({ children }: PropsWithChildren) => {
  const { data: user } = useGetMe()

  if (user) {
    return <Navigate to="/" />
  }

  return children
}

import type { PropsWithChildren } from 'react'
import { useGetMe } from '../api/get-me'
import { Navigate } from '@tanstack/react-router'

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const { data: user } = useGetMe()

  if (!user) {
    return <Navigate to="/sign-in" />
  }

  return children
}

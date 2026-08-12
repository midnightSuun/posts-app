import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '../../auth/components/login-form'

export const Route = createFileRoute('/__public/sign-in')({
  component: LoginForm,
})

import { createFileRoute } from '@tanstack/react-router'
import { UsersView } from '../users/ui/users'

export const Route = createFileRoute('/users')({
  component: UsersView,
})
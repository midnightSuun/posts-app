import { createFileRoute } from '@tanstack/react-router'
import { UsersView } from '../../users/ui/users'

export const Route = createFileRoute('/__protected/users')({
  component: UsersView,
})
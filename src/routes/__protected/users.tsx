import { createFileRoute } from '@tanstack/react-router'
import { UsersView } from '../../users/ui/users'
import z from 'zod'

const validateSearch = z.object({
  page: z.number().default(1),
})

export const Route = createFileRoute('/__protected/users')({
  component: UsersView,
  validateSearch,
})
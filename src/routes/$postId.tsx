import { createFileRoute } from '@tanstack/react-router'
import { PostView } from '../post'

export const Route = createFileRoute('/$postId')({
  component: PostView
})
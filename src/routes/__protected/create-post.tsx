import { createFileRoute } from '@tanstack/react-router'
import { CreatePostForm } from '../../post/create-post-form'

export const Route = createFileRoute('/__protected/create-post')({
  component: CreatePostForm 
})

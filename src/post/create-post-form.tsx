import { useState } from 'react'
import { useCreatePost } from './api/create-post'
import { toast } from 'sonner'
import { Button, Flex, Input } from '@mantine/core'
import { LoginForm } from '../auth/login-form'

export function CreatePostForm() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { mutateAsync, isPending } = useCreatePost()

  const handleClick = async () => {
    await mutateAsync({ body, title })
    toast.success(`you've created a new post`)
    setTitle('')
    setBody('')
  }

  const isButtonDisabled = !title || !body || isPending

  return (
    <Flex direction='column' gap={'sm'}>
      <Input placeholder='Title' value={title} onChange={(event) => setTitle(event.target.value)} />
      <Input placeholder='Body' value={body} onChange={(event) => setBody(event.target.value)} />

      <Button fullWidth={false} disabled={isButtonDisabled} onClick={handleClick}>Create</Button>
      <LoginForm />
    </Flex>
  )
}

import { useCreatePost } from './api/create-post'
import { toast } from 'sonner'
import { Button, Flex, Input, TextInput } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormButton } from '../components/form/form-button'

const schema = z.object({
  title: z.string().min(15, { message: 'Title must be at least 15 characters long' }),
  body: z.string().min(15, { message: 'Body must be at least 15 characters long' }),
})

type FormData = z.infer<typeof schema>

const defaultValues: FormData = {
  title: '',
  body: '',
}

export function CreatePostForm() {
  const { mutateAsync } = useCreatePost()

  const { register, handleSubmit, reset, formState: { errors, isLoading, isSubmitting } } = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(schema),
  })
  const onSubmit = async (data: FormData) => {
    await mutateAsync(data)
    toast.success(`you've created a new post`)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction='column' gap={'sm'}>
        <TextInput error={errors.title?.message} disabled={isLoading} placeholder='Title' {...register('title')} />
        <TextInput error={errors.body?.message} disabled={isLoading} placeholder='Body' {...register('body')} />
        <FormButton />
      </Flex>
    </form> 
  )
}

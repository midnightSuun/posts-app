import { Button, Flex, Input } from '@mantine/core'
import { useState } from 'react'
import { useSignInWithCredentials } from '../api/sign-in-with-credentials'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { mutateAsync } = useSignInWithCredentials()

  const handleClick = async () => {
    await mutateAsync({ email, password })
  }

  return (
    <Flex>
      <Input placeholder="Login" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleClick}>Login</Button>
    </Flex>
  )
}

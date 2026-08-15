import { Button, Flex, Title } from '@mantine/core'
import Logo from './logo.svg?react'
import { Link } from '@tanstack/react-router'
import { useGetMe, useLogout } from '@/auth'

export function Header() {
  const { mutateAsync: logout } = useLogout()
  const { data: me } = useGetMe()

  return (
    <Flex align={'center'} style={{ height: '100%', padding: '0 16px' }} justify={'space-between'}>
      <Link to='/'>
        <Logo width={80} />
      </Link>

      <Flex align={'center'} gap={8}>
        <Title fw={500} order={5}>{me?.displayName ?? 'Guest'}</Title>

        <Button onClick={() => logout()}>Logout</Button>
      </Flex>
    </Flex>
  )
}

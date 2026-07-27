import { Flex } from '@mantine/core'
import Logo from './logo.svg?react'
import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <Flex align={'center'} style={{height: '100%'}}>
        <Link to='/'>
            <Logo width={80}/>
        </Link>
      
    </Flex>
  )
}

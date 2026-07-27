import { NavLink } from '@mantine/core'
import { Link } from '@tanstack/react-router'

type Route = {
  title: string
  path: string
}

const ROUTES: Route[] = [
  {
    path: '/',
    title: 'Posts',
  },
  {
    path: '/create-post',
    title: 'Create post',
  },
  {
    path: '/users',
    title: 'Users'
  }
]

export function Navbar() {
  return ROUTES.map((item) => (
    <NavLink key={item.path} label={item.title} component={Link} to={item.path} />
  ))
}

import { Table, type TableColumn } from '@/components/table'
import { useUsers } from '../api/get-user'
import type { User } from '@/types'
import dayjs from 'dayjs'
import { getRouteApi } from '@tanstack/react-router'
import { Group, Pagination } from '@mantine/core'

const route = getRouteApi('/__protected/users')

export function UsersView() {
  const { page } = route.useSearch()
  const navigate = route.useNavigate()

  const { data: users } = useUsers(page)

  const tableColumns: TableColumn<User>[] = [
    {
      label: 'User name',
      render: ({ displayName }) => displayName,
    },
    {
      label: 'Register date',
      render: ({ createdAt }) => dayjs(createdAt).format('DD.MM.YYYY'),
    },
    {
      label: 'Email',
      // @ts-expect-error openapi schema is not generated correctly
      render: ({ primaryEmail }) => primaryEmail ?? 'no email',
    },
  ]

  return (
    <>
      <Table columns={tableColumns} data={users?.data ?? []} />
      <Pagination.Root total={users?.meta.totalPages ?? 0} onChange={page => navigate({search: {page}})}>
        <Group gap={5} justify="center">
          <Pagination.First />
          <Pagination.Previous />
          <Pagination.Items />
          <Pagination.Next />
          <Pagination.Last />
        </Group>
      </Pagination.Root>
    </>
  )
}

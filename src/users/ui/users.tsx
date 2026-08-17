import { Table, type TableColumn } from '@/components/table'
import { useUsers } from '../api/get-user'
import type { User } from '@/types'
import dayjs from 'dayjs'
import { getRouteApi } from '@tanstack/react-router'
import { Group, Input, Pagination } from '@mantine/core'
import debounce from 'debounce'
import { useMemo, useState } from 'react'

const route = getRouteApi('/__protected/users')

export function UsersView() {
  const { page, q } = route.useSearch()
  const navigate = route.useNavigate()

  const [search, setSearch] = useState(q)

  const { data: users } = useUsers(page, q)

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

  const handleSearch = useMemo(
    () =>
      debounce((q: string) => {
        navigate({ search: { q, page: 1 } })
      }, 500),
    [navigate]
  )

  const handleSearchChange = (q: string) => {
    setSearch(q)
    handleSearch(q)
  }

  const handlePageChange = (page: number) => {
    navigate({ search: { q, page } })
  }

  return (
    <>
      <Input value={search} onChange={e => handleSearchChange(e.target.value)} />

      <Table columns={tableColumns} data={users?.data ?? []} />
      <Pagination.Root total={users?.meta.totalPages ?? 0} onChange={handlePageChange}>
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

import { Table, type TableColumn } from '@/components/table'
import { useUsers } from '../api/get-user'
import type { User } from '@/types'
import dayjs from 'dayjs'

export function UsersView() {
  const { data: users } = useUsers()
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

  return <Table columns={tableColumns} data={users?.data ?? []} />

  //   return (
  //     <Table>
  //       <Table.Thead>
  //         <Table.Tr>
  //           <Table.Th>User name</Table.Th>
  //           <Table.Th>Register date</Table.Th>
  //           <Table.Th>Email</Table.Th>
  //         </Table.Tr>
  //       </Table.Thead>
  //       <Table.Tbody>
  //         {users?.data.map((item) => (
  //           <Table.Tr key={item.id}>
  //             <Table.Td>{item.displayName}</Table.Td>
  //             <Table.Td>{dayjs(item.createdAt).format("DD.MM.YYYY")}</Table.Td>
  //             {/* @ts-expect-error openapi schema is not generated correctly */}
  //             <Table.Td>{item.primaryEmail ?? 'no email'}</Table.Td>
  //           </Table.Tr>
  //         ))}
  //       </Table.Tbody>
  //     </Table>
  //   )
}

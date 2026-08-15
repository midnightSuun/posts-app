import type { Key, ReactNode } from 'react'
import { Table as MantineTable } from '@mantine/core'

export type TableColumn<T> = {
  label: string
  render: (data: T) => ReactNode
}

type Props<T> = {
  data: T[]
  columns: TableColumn<T>[]
}

export const Table = <T extends { id: Key },>({ data, columns }: Props<T>) => (
  <MantineTable>
    <MantineTable.Thead>
      <MantineTable.Tr>
        {columns.map((column) => (
          <MantineTable.Th key={column.label}>{column.label}</MantineTable.Th>
        ))}
      </MantineTable.Tr>
    </MantineTable.Thead>

    <MantineTable.Tbody>
      {data.map((item) => (
        <MantineTable.Tr key={item.id}>
          {columns.map((column) => (
            <MantineTable.Td key={column.label}>{column.render(item)}</MantineTable.Td>
          ))}
        </MantineTable.Tr>
      ))}
    </MantineTable.Tbody>
  </MantineTable>
)

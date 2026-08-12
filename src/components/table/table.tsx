import type { ReactNode } from 'react'
import { Table as MantineTable } from '@mantine/core'
import styles from './table.module.css'

export type TableColumn<T> = {
  label: string
  render: (data: T) => ReactNode
}

type Props<T> = {
  data: T[]
  columns: TableColumn<T>[]
}

export const Table = <T,>(props: Props<T>) => {
  return (
    <MantineTable
      verticalSpacing="sm"
      horizontalSpacing="md"
      highlightOnHover
      withRowBorders
      classNames={{
        thead: styles.thead,
        th: styles.th,
      }}
    >
      <MantineTable.Thead>
        <MantineTable.Tr>
          {props.columns.map((column) => (
            <MantineTable.Th key={column.label}>{column.label}</MantineTable.Th>
          ))}
        </MantineTable.Tr>
      </MantineTable.Thead>
      <MantineTable.Tbody>
        {props.data.map((item, index) => (
          <MantineTable.Tr key={index}>
            {props.columns.map((column) => (
              <MantineTable.Td key={column.label}>{column.render(item)}</MantineTable.Td>
            ))}
          </MantineTable.Tr>
        ))}
      </MantineTable.Tbody>
    </MantineTable>
  )
}

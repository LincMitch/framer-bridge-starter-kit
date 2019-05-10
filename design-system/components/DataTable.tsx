import * as React from "react"
import { DataTable as _DataTable} from "@rmwc/data-table"
import '@rmwc/data-table/data-table.css';

// Types
export type Props = {
  stickyColumns?: 0 | 1;
  stickyRows?: 0 | 1;
}

// Component
export const DataTable: React.FC<Props> = ({
  stickyColumns,
  stickyRows,
  ...rest
  
} ) =>  (

    <_DataTable 
      stickyColumns={stickyColumns}
      stickyRows={stickyRows}
      {...rest} >
      </_DataTable>

)
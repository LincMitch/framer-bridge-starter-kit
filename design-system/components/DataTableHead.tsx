import * as React from "react"
import { DataTableHead as _DataTableHead} from "@rmwc/data-table"
import '@rmwc/data-table/data-table.css';

// Types
export type Props = {
}

// Component
export const DataTableHead: React.FC<Props> = ({
  ...rest
  
} ) =>  (
  
    <_DataTableHead 
      {...rest} >
      </_DataTableHead>
)
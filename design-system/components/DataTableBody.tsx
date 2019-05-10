import * as React from "react"
import { DataTableBody as _DataTableBody} from "@rmwc/data-table"
import '@rmwc/data-table/data-table.css';

// Types
export type Props = {

}

// Component
export const DataTableBody: React.FC<Props> = ({
  ...rest
  
}) =>  (
  
    <_DataTableBody 
      {...rest} >
      </_DataTableBody>
)
import * as React from "react"
import { DataTableRow as _DataTableRow} from "@rmwc/data-table"
import '@rmwc/data-table/data-table.css';

// Types
export type Props = {
  activated?: string;
  selected?: boolean;
}

// Component
export const DataTableRow: React.FC<Props> = ({
  activated,
  selected,
  ...rest
  
}) =>  (
  
    <_DataTableRow 
      activated={activated}
      selected={selected}
      {...rest} >
      </_DataTableRow>
)
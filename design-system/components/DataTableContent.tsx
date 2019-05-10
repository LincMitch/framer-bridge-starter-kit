import * as React from "react"
import { DataTableContent as _DataTableContent} from "@rmwc/data-table"
import '@rmwc/data-table/data-table.css';

// Types
export type Props = {

}

// Component
export const DataTableContent: React.FC<Props> = ({
  ...rest
  
}) =>  (
  
    <_DataTableContent 
      {...rest} >
      </_DataTableContent>
)
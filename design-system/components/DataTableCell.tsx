import * as React from "react"
import { DataTableCell as _DataTableCell} from "@rmwc/data-table"
import '@rmwc/data-table/data-table.css';

// Types
export type Props = {
  alignEnd?: string;
  alignMiddle?: boolean;
  alignStart?: boolean;

  text?: string;
}

// Component
export const DataTableCell: React.FC<Props> = ({
  alignEnd,
  alignMiddle,
  alignStart,

  text,
  ...rest
  
}) =>  (
    <_DataTableCell 
      alignEnd={alignEnd}
      alignMiddle={alignMiddle}
      alignStart={alignStart}
      {...rest} >

      {text}
      </_DataTableCell>
)
import * as React from "react"
import { DataTableRow as _DataTableRow} from "@rmwc/data-table"
import '@rmwc/data-table/data-table.css';
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


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
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_DataTableRow 
      activated={activated}
      selected={selected}
      {...rest} >
      </_DataTableRow>
    </FramerXWrapper>
)
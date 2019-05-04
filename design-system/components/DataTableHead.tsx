import * as React from "react"
import { DataTableHead as _DataTableHead} from "@rmwc/data-table"
import '@rmwc/data-table/data-table.css';
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {
}

// Component
export const DataTableHead: React.FC<Props> = ({
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_DataTableHead 
      {...rest} >
      </_DataTableHead>
    </FramerXWrapper>
)
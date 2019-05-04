import * as React from "react"
import { DataTableBody as _DataTableBody} from "@rmwc/data-table"
import '@rmwc/data-table/data-table.css';
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {

}

// Component
export const DataTableBody: React.FC<Props> = ({
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_DataTableBody 
      {...rest} >
      </_DataTableBody>
    </FramerXWrapper>
)
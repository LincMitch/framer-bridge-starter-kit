import * as React from "react"
import { DataTableContent as _DataTableContent} from "@rmwc/data-table"
import '@rmwc/data-table/data-table.css';
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {

}

// Component
export const DataTableContent: React.FC<Props> = ({
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_DataTableContent 
      {...rest} >
      </_DataTableContent>
    </FramerXWrapper>
)
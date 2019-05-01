import * as React from "react"
import { Chip as _Chip} from "@rmwc/Chip"
import "@material/chips/dist/mdc.chips.css"
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {
  checkmark?:	boolean;
  icon?: string;
  id?: string;
  label?:	string;
  selected?:	boolean;
  trailingIcon?:	string
}

// Component
export const Chip: React.FC<Props> = ({
  label,
  trailingIcon,
  checked,
  selected,
  children,
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_Chip 
      label={label} 
      trailingIcon={trailingIcon} 
      checked={checked}
      selected={selected}      
      {...rest} >
      </_Chip>
    </FramerXWrapper>
)
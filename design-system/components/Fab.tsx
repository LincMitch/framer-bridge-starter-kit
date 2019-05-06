import * as React from "react"
import { Fab as _Fab} from "@rmwc/fab"
import '@material/fab/dist/mdc.fab.css'
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {
  children?: React.ReactNode;
  exited?: boolean;
  icon?: string;
  label?: string;
  mini?: boolean;
  ripple?: boolean;
  trailingIcon?: string;
}

// Component
export const Fab: React.FC<Props> = ({
  children,
  exited,
  icon,
  label,
  mini,
  ripple,
  trailingIcon,
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_Fab 
      children={children}
      exited={exited}
      icon={icon}
      label={label}
      mini={mini}
      ripple={ripple}
      trailingIcon={trailingIcon}
      {...rest} >
    </_Fab>
  </FramerXWrapper>
)
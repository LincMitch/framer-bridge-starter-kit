import * as React from "react"
import { IconButton as _IconButton} from "@rmwc/icon-button"
import '@material/button/dist/mdc.button.css'
import FramerXWrapper from './FramerXWrapper'
import {
  processIconProps
} from "./framerx-integration"


// Types
export type Props = {
  children?: string;
  disabled?: boolean;
  icon?: string;
  label?: string;
  ripple?: boolean;
 }

// Component
export const IconButton: React.FC<Props> = ({
  children,
  disabled,
  icon,
  label,
  ripple,
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_IconButton 
      // children={children}
      disabled={disabled}
      icon={icon}
      label={label}
      ripple={ripple}
      {...rest} >
      </_IconButton>
    </FramerXWrapper>
)
import * as React from "react"
import { Toolbar as _Toolbar} from "@rmwc/toolbar"
import '@material/toolbar/dist/mdc.toolbar.css';
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {
  children?: string;
  dense?: boolean;
  disabled?: boolean;
  icon?: string;
  label?: string;
  outlined?: boolean;
  raised?: boolean;
  ripple?: boolean;
  trailingIcon?: string;
  unelevated?: boolean;
}

// Component
export const Toolbar: React.FC<Props> = ({
  children,
  dense,
  disabled,
  selected,
  icon,
  label,
  outlined,
  raised,
  ripple,
  trailingIcon,
  unelevated,
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_Toolbar 
      children={children}
      dense={dense}
      disabled={disabled}
      selected={selected}
      icon={icon}
      label={label}
      outlined={outlined}
      raised={raised}
      ripple={ripple}
      trailingIcon={trailingIcon}
      unelevated={unelevated}   
      {...rest} >
      </_Toolbar>
    </FramerXWrapper>
)
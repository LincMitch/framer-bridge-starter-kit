import * as React from "react"
import { SnackbarAction as _SnackbarAction} from "@rmwc/snackbar"
import '@material/snackbar/dist/mdc.snackbar.css';
import '@material/button/dist/mdc.button.css';
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {
  action?: string;
  // children?: string;
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
export const SnackbarAction: React.FC<Props> = ({
  action,
  // children,
  dense,
  disabled,
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
    <_SnackbarAction 
      action={action}
      // children={children}
      dense={dense}
      disabled={disabled}
      icon={icon}
      label={label}
      outlined={outlined}
      raised={raised}
      ripple={ripple}
      trailingIcon={trailingIcon}
      unelevated={unelevated}   
      {...rest} >
      </_SnackbarAction>
    </FramerXWrapper>
)
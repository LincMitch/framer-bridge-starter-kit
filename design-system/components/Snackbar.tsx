import * as React from "react"
import { Snackbar as _Snackbar} from "@rmwc/snackbar"
import '@material/snackbar/dist/mdc.snackbar.css';
import '@material/button/dist/mdc.button.css';
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {
  action?: string;
  dismissIcon?: boolean;
  dismissesOnAction?: boolean;
  icon?: string;
  leading?: string;
  message?: boolean;
  onClose?: boolean;
  onOpen?: boolean;
  open?: boolean;
  stacked?: string;
  timeout?: boolean;
}

// Component
export const Snackbar: React.FC<Props> = ({
  action,
  dismissIcon,
  dismissesOnAction,
  selected,
  icon,
  leading,
  message,
  onClose,
  onOpen,
  open,
  stacked,
  timeout,
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_Snackbar 
      action={action}
      dismissIcon={dismissIcon}
      dismissesOnAction={dismissesOnAction}
      selected={selected}
      icon={icon}
      leading={leading}
      message={message}
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      stacked={stacked}
      timeout={timeout}   
      {...rest} >
      </_Snackbar>
    </FramerXWrapper>
)
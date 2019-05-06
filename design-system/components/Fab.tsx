import * as React from "react"
import { Fab as _Fab} from "@rmwc/fab"
import '@material/fab/dist/mdc.fab.css'
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";

import { Theme } from "@rmwc/theme"

// Types
export type Props = {
  children?: React.ReactNode;
  exited?: boolean;
  icon?: string;
  label?: string;
  mini?: boolean;
  ripple?: boolean;
  trailingIcon?: string;

  theme?: string;
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
  theme,
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <Theme use={theme}>
    
      <_Fab 
        children={children}
        exited={exited}
        icon={icon}
        label={label}
        mini={mini}
        ripple={ripple}
        trailingIcon={trailingIcon}
        {...rest} 
        style={{ color: '#fff' }}
        >
      </_Fab>
    </Theme>
  </FramerXWrapper>
)
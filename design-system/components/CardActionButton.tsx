import * as React from "react"
import { CardActionButton as _CardActionButton} from "@rmwc/card"
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
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
export const CardActionButton: React.FC<Props> = ({
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
    <_CardActionButton 
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
      </_CardActionButton>
    </FramerXWrapper>
)
import * as React from "react"
import { Select as _Select} from "@rmwc/select"
import '@material/select/dist/mdc.select.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/list/dist/mdc.list.css';
import '@material/menu/dist/mdc.menu.css';
import '@material/menu-surface/dist/mdc.menu-surface.css';
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {
  // characterCount?: string;
  disabled?: boolean;
  enhanced?: boolean;
  helpText?: string;
  icon?: string;
  // inputRef
  invalid?: boolean;
  label?: string;
  // options?: enum;
  outlined?: boolean;
  placeholder?: boolean;
  required?: boolean;
  // rootProps?: object;
  value?: string;
}

// Component
export const Select: React.FC<Props> = ({
  // characterCount,
  disabled,
  enhanced,
  helpText,
  icon,
  // inputRef
  invalid,
  label,
  // options,
  outlined,
  placeholder,
  required,
  value,
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    {/* <_Select 
      // characterCount={characterCount}
      disabled={disabled}
      enhanced={enhanced}
      helpText={helpText}
      icon={icon}
      invalid={invalid}
      label={label}
      options={options}
      outlined={outlined}
      placeholder={placeholder}
      required={required}
      value={value}
      {...rest} >
      </_Select> */}
      <_Select label="Standard" options={['Cookies', 'Pizza', 'Icecream']} />
      
    </FramerXWrapper>
)
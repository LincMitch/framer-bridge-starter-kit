import * as React from "react"
import { TextField as _TextField} from "@rmwc/textfield"
import '@material/textfield/dist/mdc.textfield.css'
import '@material/floating-label/dist/mdc.floating-label.css'
import '@material/notched-outline/dist/mdc.notched-outline.css'
import '@material/line-ripple/dist/mdc.line-ripple.css'
import FramerXWrapper from './FramerXWrapper'
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {
  characterCount?: string;
  disabled?: boolean;
  fullwidth?: boolean;
  helpText?: string;
  icon?: string;
  // inputRef
  invalid?: boolean;
  label?: string;
  outlined?: boolean;
  required?: boolean;
  rootProps?: object;
  trailingIcon?: string;
  type?: string;
  value?: string;
}

// Component
export const TextField: React.FC<Props> = ({
  characterCount,
  disabled,
  fullwidth,
  helpText,
  icon,
  // inputRef
  invalid,
  label,
  outlined,
  required,
  rootProps,
  trailingIcon,
  type,
  value,
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_TextField 
      characterCount={characterCount}
      disabled={disabled}
      fullwidth={fullwidth}
      helpText={helpText}
      icon={icon}
      invalid={invalid}
      label={label}
      outlined={outlined}
      required={required}
      rootProps={rootProps}
      trailingIcon={trailingIcon}
      type={type}
      value={value}
      {...rest} >
    </_TextField>
  </FramerXWrapper>
)
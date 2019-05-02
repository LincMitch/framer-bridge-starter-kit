import * as React from "react"
import { Checkbox as _Checkbox} from "@rmwc/checkbox"
import '@material/checkbox/dist/mdc.checkbox.css';
import '@material/form-field/dist/mdc.form-field.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
  checked?: boolean;
  disabled?: boolean;
  id?: boolean;
  indeterminate?: boolean;
  // inputRef
  label?: string;
  ripple?: boolean;
  rootProps?: object;
  value?: string;
}

// Component
export const Checkbox: React.FC<Props> = ({
  checked,
  disabled,
  id,
  indeterminate,
  // inputRef
  label,
  ripple,
  rootProps,
  value,
  ...rest
  
} ) =>  (
  
  <FramerXWrapper>
    <_Checkbox 
      checked={checked}
      disabled={disabled}
      id={id}
      indeterminate={indeterminate}
      label={label}
      ripple={ripple}
      rootProps={rootProps}
      value={value}
      {...rest} >
    </_Checkbox>
  </FramerXWrapper>
)
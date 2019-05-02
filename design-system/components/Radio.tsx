import * as React from "react"
import { Radio as _Radio} from "@rmwc/radio"
import '@material/radio/dist/mdc.radio.css';
import '@material/form-field/dist/mdc.form-field.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
  checked?: boolean;
  disabled?: boolean;
  id?: boolean;
  inputRef?: boolean;
  // inputRef
  label?: string;
  ripple?: boolean;
  rootProps?: object;
  value?: string;
}

// Component
export const Radio: React.FC<Props> = ({
  checked,
  disabled,
  id,
  inputRef,
  // inputRef
  label,
  ripple,
  rootProps,
  value,
  ...rest
  
} ) =>  (
  
  <FramerXWrapper>
    <_Radio 
      checked={checked}
      disabled={disabled}
      id={id}
      inputRef={inputRef}
      label={label}
      ripple={ripple}
      rootProps={rootProps}
      value={value}
      {...rest} >
    </_Radio>
  </FramerXWrapper>
)
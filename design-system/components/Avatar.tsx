import * as React from "react"
import { Avatar as _Avatar} from "@rmwc/avatar"
import '@rmwc/avatar/avatar.css';
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {
  contain?: boolean;
  interactive?: boolean;
  name?: string;
  size?: string;
  square?: boolean;
  src?: string;
}

// Component
export const Avatar: React.FC<Props> = ({
  contain,
  interactive,
  name,
  size,
  square,
  src,
  ...rest
  
} = processsizeProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_Avatar 
      contain={contain}
      interactive={interactive}
      name={name}
      size={size}
      square={square}
      src={src}
      {...rest} >
      </_Avatar>
    </FramerXWrapper>
)
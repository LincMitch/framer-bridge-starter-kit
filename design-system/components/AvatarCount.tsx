import * as React from "react"
import { AvatarCount as _AvatarCount} from "@rmwc/avatar"
import '@rmwc/avatar/avatar.css';
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {
  interactive?: boolean;
  overflow?: string;
  size?: string;
  square?: boolean;
  value?: string;
}

// Component
export const AvatarCount: React.FC<Props> = ({
  interactive,
  overflow,
  size,
  square,
  value,
  ...rest
  
} = processsizeProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_AvatarCount 
      interactive={interactive}
      overflow={overflow}
      size={size}
      square={square}
      value={value}
      {...rest} >
      </_AvatarCount>
    </FramerXWrapper>
)
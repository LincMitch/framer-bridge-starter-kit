import * as React from "react"
import { Icon as _Icon} from "@rmwc/icon"
import '@rmwc/icon/icon.css';
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {
  icon?: string;
 }

// Component
export const Icon: React.FC<Props> = ({
  icon,
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_Icon 
      icon={icon}
      {...rest} >
      </_Icon>
    </FramerXWrapper>
)
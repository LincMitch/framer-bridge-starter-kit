import * as React from "react"
import { Icon as _Icon} from "@rmwc/icon"
import '@rmwc/icon/icon.css';
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";

import { Theme } from "@rmwc/theme"


// Types
export type Props = {
  icon?: string;
  theme?: string;
 }

// Component
export const Icon: React.FC<Props> = ({
  icon,
  theme,
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <Theme use={theme}>
      <_Icon 
        icon={icon}
        {...rest} >
      </_Icon>
    </Theme>
    </FramerXWrapper>
)
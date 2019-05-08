import * as React from "react"
import { Tab as _Tab} from "@rmwc/tabs"
import '@material/tab/dist/mdc.tab.css';
import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {
  children?: React.ReactNode;
  icon?: string;
  label?: string;
  // onInteraction?: boolean;
  restrictIndicator?: boolean;
  stacked?: boolean;
}

// Component
export const Tab: React.FC<Props> = ({
  children,
  icon,
  label,
  // onInteraction,
  restrictIndicator,
  stacked,
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
    <_Tab 
      children={children}
      icon={icon}
      label={label}
      // onInteraction={onInteraction}
      restrictIndicator={restrictIndicator}
      stacked={stacked}
      {...rest} >
      </_Tab>
    </FramerXWrapper>
)
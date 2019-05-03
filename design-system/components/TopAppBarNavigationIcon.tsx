
import * as React from "react"
import { TopAppBarNavigationIcon as _TopAppBarNavigationIcon} from "@rmwc/top-app-bar"
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
  icon?: string
}

// Component
export const TopAppBarNavigationIcon: React.FC<Props> = ({
  icon,
}) =>  (
  
  <FramerXWrapper>
    <_TopAppBarNavigationIcon icon={icon} />
    </FramerXWrapper>
)
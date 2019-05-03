
import * as React from "react"
import { TopAppBarSection as _TopAppBarSection} from "@rmwc/top-app-bar"
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
  alignEnd: boolean,
  alignStart: boolean
}

// Component
export const TopAppBarSection: React.FC<Props> = ({
  alignEnd,
  alignStart,
}) =>  (
  
  <FramerXWrapper>
    <_TopAppBarSection
      alignEnd={alignEnd}
      alignStart={alignStart} 
    />
    </FramerXWrapper>
)
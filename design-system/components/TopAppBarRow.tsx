
import * as React from "react"
import { TopAppBarRow as _TopAppBarRow} from "@rmwc/top-app-bar"
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
  children: React.ReactNode;
}

// Component
export const TopAppBarRow: React.FC<Props> = ({
  children,
}) =>  (
  
  <FramerXWrapper>
    <_TopAppBarRow
      children={children}
    />
    </FramerXWrapper>
)
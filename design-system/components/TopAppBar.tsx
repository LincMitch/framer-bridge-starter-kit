import * as React from "react"
import { TopAppBar as _TopAppBar} from "@rmwc/top-app-bar"
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
  children: React.ReactNode;

  theme?: string;
  background?: string;
}

// Component
export const TopAppBar: React.FC<Props> = ({
  children,
  theme,
  background,
}) =>  (
  
  <FramerXWrapper>
    <_TopAppBar>
      {children}
    </_TopAppBar>
    </FramerXWrapper>
)
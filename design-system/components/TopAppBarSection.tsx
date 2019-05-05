
import * as React from "react"
import { TopAppBarSection as _TopAppBarSection} from "@rmwc/top-app-bar"
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

// Types
export type Props = {
  alignEnd: boolean,
  alignStart: boolean,

  children: React.ReactNode;
}

// Component
export const TopAppBarSection: React.FC<Props> = ({
  alignEnd,
  alignStart,

  children,
}) =>  (
      <_TopAppBarSection
      alignEnd={alignEnd}
      alignStart={alignStart} >
      {children}
      </_TopAppBarSection>
)
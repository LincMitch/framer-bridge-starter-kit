
import * as React from "react"
import { SimpleTopAppBar as _SimpleTopAppBar} from "@rmwc/top-app-bar"
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
  actionItems?: object
  dense?: boolean
  endContent?: React.ReactNode
  fixed?: boolean
  navigationIcon?: string
  // onNav?: boolean
  prominent?: boolean
  // scrollTarget?: Element
  short?: boolean
  shortCollapsed?: boolean
  startContent?: React.ReactNode
  title?: string

}

// Component
export const SimpleTopAppBar: React.FC<Props> = ({
  actionItems,
  dense,
  endContent,
  fixed,
  navigationIcon,
  onNav,
  prominent,
  scrollTarget,
  short,
  shortCollapsed,
  title,
}) =>  (
  
  <FramerXWrapper>
    <_SimpleTopAppBar>
      {actionItems}
      {dense}
      {endContent}
      {fixed}
      {navigationIcon}
      {onNav}
      {prominent}
      {scrollTarget}
      {short}
      {shortCollapsed}
      {title}
    </_SimpleTopAppBar>
    </FramerXWrapper>
)
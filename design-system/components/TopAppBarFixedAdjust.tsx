
import * as React from "react"
import { TopAppBarFixedAdjust as _TopAppBarFixedAdjust} from "@rmwc/top-app-bar"
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
  dense?: boolean
  denseProminent?: boolean
  prominent?: boolean
  short?: boolean

}

// Component
export const TopAppBarFixedAdjust: React.FC<Props> = ({
  title,
}) =>  (
  
  <FramerXWrapper>
    <_TopAppBarFixedAdjust>
      {title}
    </_TopAppBarFixedAdjust>
    </FramerXWrapper>
)
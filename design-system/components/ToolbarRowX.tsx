import * as React from "react"
import { ToolbarRow as _ToolbarRow} from "@rmwc/toolbar"
import '@material/toolbar/dist/mdc.toolbar.css';
import FramerXWrapper from './FramerXWrapper';



// Types
export type Props = {
  children: React.ReactNode;
}

// Component
export const ToolbarRowX: React.FC<Props> = ({
  children,
}) =>  (
  
  <FramerXWrapper>
    <_ToolbarRow
      children={children}
    />
    </FramerXWrapper>
)
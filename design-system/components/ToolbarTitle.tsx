import * as React from "react"
import { ToolbarTitle as _ToolbarTitle} from "@rmwc/toolbar"
import '@material/toolbar/dist/mdc.toolbar.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
}

// Component
export const ToolbarTitle: React.FC<Props> = ({
}) =>  (
  
<FramerXWrapper>
  <_ToolbarTitle>
    Toolbar Title
  </_ToolbarTitle>
</FramerXWrapper>
)
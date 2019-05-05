import * as React from "react"
import { ToolbarRow as _ToolbarRow} from "@rmwc/toolbar"
import '@material/toolbar/dist/mdc.toolbar.css';




// Types
export type Props = {
  
}

// Component
export const ToolbarRow: React.FC<Props> = ({
  toolbarRows,
  externalToolbarRows,
  ...rest
}) => { 

  return (

    <_ToolbarRow
      {...rest}
    >
    

    </_ToolbarRow>

);
};
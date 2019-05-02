import * as React from "react"
import { SimpleDialog as _SimpleDialog} from "@rmwc/dialog"
import '@material/dialog/dist/mdc.dialog.css';
import '@material/button/dist/mdc.button.css';
import { Button} from "@rmwc/button"

import FramerXWrapper from './FramerXWrapper';
import {
  processIconProps
} from "./framerx-integration";


// Types
export type Props = {
  // onClose?: string;
  // onOpen?: boolean;
  // onStateChange?: string;
  open?: boolean;
  preventOutsideDismiss?: boolean;
}

// Component
export const Dialog: React.FC<Props> = ({
  onClose,
  onOpen,
  onStateChange,
  open,
  preventOutsideDismiss,
  ...rest
  
} = processIconProps(this.props)) =>  (
  
  <FramerXWrapper>
      <_SimpleDialog
        title="This is a simple dialog"
        body="You can pass the body prop or children."
        open={open}
        // onClose={evt => {
        //   console.log(evt.detail.action);
        //   setOpen(false);
        // }}
      />
    </FramerXWrapper>
)
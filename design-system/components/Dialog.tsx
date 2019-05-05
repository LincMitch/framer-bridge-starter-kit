import * as React from "react"
import { Dialog as _Dialog} from "@rmwc/dialog"
import '@material/dialog/dist/mdc.dialog.css';
import '@material/button/dist/mdc.button.css';

import FramerXWrapper from './FramerXWrapper';



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
  // onClose,
  // onOpen,
  // onStateChange,
  open,
  preventOutsideDismiss,
  ...rest
  
}) =>  (
  
  <FramerXWrapper>
      <_Dialog
        // onClose={onClose}
        // onOpen={onOpen}
        // onStateChange={onStateChange}
        open={open}
        preventOutsideDismiss={preventOutsideDismiss}
      />
    </FramerXWrapper>
)
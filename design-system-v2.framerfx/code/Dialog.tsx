import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.DialogProps & {
  width: number
  height: number
}

export class Dialog extends React.Component<Props> {
  render() {
    return <System.Dialog {...this.props} />
  }

  static defaultProps: Props = {
    open: false;
  }

  static propertyControls: PropertyControls<Props> = {
    // onClose,
    // onOpen,
    // onStateChange,
    open: { type: ControlType.Boolean, title: "Open" },   
    preventOutsideDismiss: { type: ControlType.Boolean, title: "Prevent Outside Dismiss" },   
  }
}

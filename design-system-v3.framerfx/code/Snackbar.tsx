import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.SnackbarProps & {
  width: number
  height: number
}

export class Snackbar extends React.Component<Props> {
  render() {
    return <System.Snackbar {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
    action: { type: ControlType.Boolean, title: "action" },
    dismissIcon: { type: ControlType.Boolean, title: "dismissIcon" },
    dismissesOnAction: { type: ControlType.Boolean, title: "dismissesOnAction" },
    selected: { type: ControlType.String, title: "selected" },
    icon: { type: ControlType.Boolean, title: "icon" },
    leading: { type: ControlType.Boolean, title: "leading" },
    message: { type: ControlType.Boolean, title: "message" },
    onClose: { type: ControlType.String, title: "onClose" },
    onOpen: { type: ControlType.Boolean, title: "onOpen" },   
    open: { type: ControlType.Boolean, title: "open" },   
    stacked: { type: ControlType.Boolean, title: "stacked" },   
    timeout: { type: ControlType.Boolean, title: "timeout" },   
  }
}

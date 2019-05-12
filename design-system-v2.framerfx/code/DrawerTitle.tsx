import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.DrawerTitleProps & {
}

export class DrawerTitle extends React.Component<Props> {
  render() {
    return <System.DrawerTitle {...this.props} />
  }

  static defaultProps: Props = {
  }

  static propertyControls: PropertyControls<Props> = {
    // onClose,
    // onOpen,
    // onStateChange,
    open: { type: ControlType.Boolean, title: "Open" },   
    preventOutsideDismiss: { type: ControlType.Boolean, title: "Prevent Outside Dismiss" },   

  }
}

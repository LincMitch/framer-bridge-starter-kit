import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.SimpleDialogProps & {
}

export class SimpleDialog extends React.Component<Props> {
  render() {
    return <System.SimpleDialog {...this.props} />

  
  static defaultProps: Props = {
  }

  static propertyControls: PropertyControls<Props> = {
    // acceptLabel
    // body
    // cancelLabel
    // children
    // footer
    // header
    // onClose
    // onOpen
    // onStateChange
    open: { type: ControlType.Boolean, title: "Open"},
    preventOutsideDismiss: { type: ControlType.Boolean, title: "Prevent Outside Dismiss"},
    title: { type: ControlType.String, title: "Title"},
  }
}

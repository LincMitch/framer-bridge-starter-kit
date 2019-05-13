import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.DrawerTitleProps & {
  text: string;
}

export class DrawerTitle extends React.Component<Props> {
  render() {
    const { text, ...rest } = this.props;
    return <System.DrawerTitle {...this.props} >{text}</System.DrawerTitle>
  }

  static defaultProps: Props = {
    text: "Text"
  }

  static propertyControls: PropertyControls<Props> = {
    // onClose,
    // onOpen,
    // onStateChange,
    open: { type: ControlType.Boolean, title: "Open" },   
    preventOutsideDismiss: { type: ControlType.Boolean, title: "Prevent Outside Dismiss" },   

    text: { type: ControlType.String, title: "text" },   

  }
}

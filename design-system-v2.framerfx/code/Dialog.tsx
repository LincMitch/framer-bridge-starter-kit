import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.DialogProps & {
  object: string[];
  externalObject: React.ReactNode;
  activeObjectIndex: number;
}

export class Dialog extends React.Component<Props> {
  render() {
    const { object, externalObject, ...rest } = this.props;

    let objectElements;
    objectElements = cloneFrameless(externalObject); 

    return <System.Dialog {...this.props} >{objectElements}</System.Dialog>
  }

  static defaultProps: Props = {
    activeObjectIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    // onClose,
    // onOpen,
    // onStateChange,
    open: { type: ControlType.Boolean, title: "Open" },   
    preventOutsideDismiss: { type: ControlType.Boolean, title: "Prevent Outside Dismiss" },   

    externalObject: {
      type: ControlType.ComponentInstance,
      title: "object"
    },  
    activeObjectIndex: {
      type: ControlType.Number,
      title: "Index",
      min: 0
    }

  }
}

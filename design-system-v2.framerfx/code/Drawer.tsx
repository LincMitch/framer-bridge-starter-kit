import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.DrawerProps & {
  object: string[];
  externalObject: React.ReactNode;
  activeObjectIndex: number;
}

export class Drawer extends React.Component<Props> {
  render() {
    const { object, externalObject, ...rest } = this.props;

    let objectElements;
    objectElements = cloneFrameless(externalObject); 

    return <System.Drawer {...this.props} >{objectElements}</System.Drawer>
  }

  static defaultProps: Props = {
    activeObjectIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    dismissible: { type: ControlType.Boolean, title: "Dismissible" },   
    modal: { type: ControlType.Boolean, title: "Modal" },   
    // onClose:
    // onOpen:
    open: { type: ControlType.Boolean, title: "Open" },   
    
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

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.ListItemProps & {
  object: string[];
  externalObject: React.ReactNode;
  activeObjectIndex: number;
}

export class ListItem extends React.Component<Props> {
  render() {
    const { object, externalObject, ...rest } = this.props;

    let objectElements;
    objectElements = cloneFrameless(externalObject); 

    return <System.ListItem {...this.props} >{objectElements}</System.ListItem>
  }

  static defaultProps: Props = {
    activeObjectIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    activated: { type: ControlType.Boolean, title: "activated" },
    disabled: { type: ControlType.Boolean, title: "disabled" },   
    // ripple: { type: ControlType.Boolean, title: "ripple" },   
    selected: { type: ControlType.Boolean, title: "selected" },   

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

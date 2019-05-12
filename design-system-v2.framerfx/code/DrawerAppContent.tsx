import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.DrawerAppContentProps & {
  object: string[];
  externalObject: React.ReactNode;
  activeObjectIndex: number;
}

export class DrawerAppContent extends React.Component<Props> {
  render() {
    const { object, externalObject, ...rest } = this.props;

    let objectElements;
    objectElements = cloneFrameless(externalObject); 

    return <System.DrawerAppContent {...this.props} >{objectElements}</System.DrawerAppContent>
  }

  static defaultProps: Props = {
    activeObjectIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {

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

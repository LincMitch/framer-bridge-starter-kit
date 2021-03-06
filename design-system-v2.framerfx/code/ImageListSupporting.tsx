import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.ImageListSupportingProps & {
  object: string[];
  externalObject: React.ReactNode;
  activeObjectIndex: number;
}

export class ImageListSupporting extends React.Component<Props> {
  render() {
    const { object, externalObject, ...rest } = this.props;

    let objectElements;
    objectElements = cloneFrameless(externalObject); 

    return <System.ImageListSupporting {...this.props} >{objectElements}</System.ImageListSupporting>
  }

  static defaultProps: Props = {
    activeObjectIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    masonry: { type: ControlType.Boolean, title: "Masonry" }, 
    withTextProtection: { type: ControlType.Boolean, title: "With Text Protection" }, 
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

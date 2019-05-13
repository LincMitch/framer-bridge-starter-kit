import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.GridListProps & {
  object: string[];
  externalObject: React.ReactNode;
  activeObjectIndex: number;
}

export class GridList extends React.Component<Props> {
  render() {
    const { object, externalObject, ...rest } = this.props;

    let objectElements;
    objectElements = cloneFrameless(externalObject); 

    return <System.GridList {...this.props} >{objectElements}</System.GridList>
  }

  static defaultProps: Props = {
    activeObjectIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    headerCaption: { type: ControlType.Boolean, title: "Header Caption" }, 
    tileAspect: { type: ControlType.String, title: "Tile Aspect" }, 
    tileGutter1: { type: ControlType.Boolean, title: "Tile Gutter 1" }, 
    twolineCaption: { type: ControlType.Boolean, title: "Two Line Caption" }, 
    withIconAlignStart: { type: ControlType.Boolean, title: "With Icon Align Start" },


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

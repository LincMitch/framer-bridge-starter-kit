import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.GridCellProps & {
  object: string[];
  externalObject: React.ReactNode;
  activeObjectIndex: number;
}

export class GridCell extends React.Component<Props> {
  render() {
    const { object, externalObject, ...rest } = this.props;

    let objectElements;
    objectElements = cloneFrameless(externalObject); 

    return <System.GridCell {...this.props} >1{objectElements}</System.GridCell>
  }

  static defaultProps: Props = {
    activeObjectIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    align: { type: ControlType.String, title: "align" },
    desktop: { type: ControlType.Number, title: "desktop" },   
    order: { type: ControlType.Number, title: "order" },   
    phone: { type: ControlType.Number, title: "phone" },   
    span: { type: ControlType.Number, title: "span" },   
    tablet: { type: ControlType.Number, title: "tablet" },   
    
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

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.CollapsibleListProps & {
  object: string[];
  externalObject: React.ReactNode;
  activeObjectIndex: number;
}

export class CollapsibleList extends React.Component<Props> {
  render() {
    const { object, externalObject, ...rest } = this.props;

    let objectElements;
    objectElements = cloneFrameless(externalObject); 

    // return <System.CollapsibleList {...this.props} handle={objectElements} />
    return <div>CollapsibleList</div>
  }

  static defaultProps: Props = {
    activeObjectIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    // handle: { type: ControlType.Boolean, title: "handle" },
    // onClose: { type: ControlType.Boolean, title: "onClose" },   
    // onOpen: { type: ControlType.Boolean, title: "onOpen" },   
    // open: { type: ControlType.Boolean, title: "open" },   
    // startOpen: { type: ControlType.Boolean, title: "startOpen" },
    
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

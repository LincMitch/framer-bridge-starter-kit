import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.SimpleListItemProps & {
  object: string[];
  externalObject: React.ReactNode;
  activeObjectIndex: number;
}

export class SimpleListItem extends React.Component<Props> {
  render() {
    const { object, externalObject, ...rest } = this.props;

    let objectElements;
    objectElements = cloneFrameless(externalObject); 

    return <System.SimpleListItem {...this.props} >{objectElements}</System.SimpleListItem>
  }

  static defaultProps: Props = {
    activeObjectIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    activated: { type: ControlType.Boolean, title: "activated" },
    // children: { type: ControlType.Boolean, title: "children" },
    disabled: { type: ControlType.Boolean, title: "disabled" },
    // graphic: { type: ControlType.Boolean, title: "graphic" },
    // meta: { type: ControlType.Boolean, title: "meta" },
    // metaIcon: { type: ControlType.Boolean, title: "metaIcon" },
    // ripple: { type: ControlType.Boolean, title: "ripple" },
    secondaryText: { type: ControlType.String, title: "secondaryText" },
    selected: { type: ControlType.Boolean, title: "selected" },
    text: { type: ControlType.String, title: "text" },
    
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

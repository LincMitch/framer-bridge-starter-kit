import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";

type Props = System.ChipSetProps & {
  object: string[];
  externalObject: React.ReactNode;
  activeObjectIndex: number;
}

export class ChipSet extends React.Component<Props> {
  render() {
    const { object, externalObject, ...rest } = this.props;

    let objectElements;
    objectElements = cloneFrameless(externalObject); 

    return (
      <System.ChipSet {...this.props} >{objectElements}</System.ChipSet>
    )
  }

  static defaultProps: Props = {
    activeObjectIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    dense: { type: ControlType.Boolean, title: "Dense" },

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

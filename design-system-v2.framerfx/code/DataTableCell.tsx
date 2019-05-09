import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";

type Props = System.DataTableCellProps & {
  object: string[];
  externalObject: React.ReactNode;
  activeObjectIndex: number;

  text: string;
}

export class DataTableCell extends React.Component<Props> {
  render() {
    const { object, externalObject, ...rest } = this.props;

    let objectElements;
    objectElements = cloneFrameless(externalObject); 

    return <System.DataTableCell {...this.props} >{objectElements}</System.DataTableCell>
  }

  static defaultProps: Props = {
    activeObjectIndex: 0,
    text: "Text"
  }

  static propertyControls: PropertyControls<Props> = {
    alignEnd: { type: ControlType.Boolean, title: "Align End" },
    alignMiddle: { type: ControlType.Boolean, title: "Align Middle" },
    alignStart: { type: ControlType.Boolean, title: "Align Start" },

    externalObject: {
      type: ControlType.ComponentInstance,
      title: "object"
    },  
    activeObjectIndex: {
      type: ControlType.Number,
      title: "Index",
      min: 0
    },

    text: { type: ControlType.String, title: "Text" },

  }
}

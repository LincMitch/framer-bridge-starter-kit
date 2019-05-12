import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";

type Props = System.DataTableCellProps & {
  text: string;
}

export class DataTableCell extends React.Component<Props> {
  render() {
    const { text, ...rest } = this.props;
    return <System.DataTableCell {...this.props} >{text}</System.DataTableCell>
  }

  static defaultProps: Props = {
    text: "Text"
  }

  static propertyControls: PropertyControls<Props> = {
    alignEnd: { type: ControlType.Boolean, title: "Align End" },
    alignMiddle: { type: ControlType.Boolean, title: "Align Middle" },
    alignStart: { type: ControlType.Boolean, title: "Align StartX" },
    text: { type: ControlType.String, title: "Text" },

  }
}

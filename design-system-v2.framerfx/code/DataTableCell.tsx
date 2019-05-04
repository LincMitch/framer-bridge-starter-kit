import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.DataTableCellProps & {
}

export class DataTableCell extends React.Component<Props> {
  render() {
    return <System.DataTableCell {...this.props} />
  }

  static defaultProps: Props = {
  }

  static propertyControls: PropertyControls<Props> = {
    alignEnd: { type: ControlType.Boolean, title: "Align End" },
    alignMiddle: { type: ControlType.Boolean, title: "Align Middle" },
    alignStart: { type: ControlType.Boolean, title: "Align Start" },
  }
}

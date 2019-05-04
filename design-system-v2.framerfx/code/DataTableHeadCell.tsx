import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.DataTableHeadCellProps & {

}

export class DataTableHeadCell extends React.Component<Props> {
  render() {
    return <System.DataTableHeadCell {...this.props} />
  }

  static defaultProps: Props = {

  }

  static propertyControls: PropertyControls<Props> = {
    alignEnd: { type: ControlType.Boolean, title: "Align End" },
    alignMiddle: { type: ControlType.Boolean, title: "Align Middle" },
    alignStart: { type: ControlType.Boolean, title: "Align Start" },
    // children: { type: ControlType.Boolean, title: "Children" },
    // onSortChange: { type: ControlType.Boolean, title: "On Sort Change" },
    sort: { type: ControlType.Number, title: "Sort" },
  }
}

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.DataTableProps & {
}

export class DataTable extends React.Component<Props> {
  render() {
    return <System.DataTable {...this.props} />
  }

  static defaultProps: Props = {
  }

  static propertyControls: PropertyControls<Props> = {
    // children: { type: ControlType.String, title: "Children" },
    stickyColumns: { type: ControlType.String, title: "Sticky Columns" },
    stickyRows: { type: ControlType.String, title: "Sticky Rows" },
  }
}

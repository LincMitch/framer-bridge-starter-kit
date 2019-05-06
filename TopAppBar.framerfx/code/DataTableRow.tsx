import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.DataTableRowProps & {

}

export class DataTableRow extends React.Component<Props> {
  render() {
    return <System.DataTableRow {...this.props} />
  }

  static defaultProps: Props = {

  }

  static propertyControls: PropertyControls<Props> = {
    // children: { type: ControlType.String, title: "Children" },
    activated: { type: ControlType.Boolean, title: "Activated" },
    selected: { type: ControlType.Boolean, title: "Selected" },
  }
}

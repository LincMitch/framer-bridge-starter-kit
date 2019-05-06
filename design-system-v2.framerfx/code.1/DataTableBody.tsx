import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.DataTableBodyProps & {

}

export class DataTableBody extends React.Component<Props> {
  render() {
    return <System.DataTableBody {...this.props} />
  }

  static defaultProps: Props = {

  }

  static propertyControls: PropertyControls<Props> = {

  }
}

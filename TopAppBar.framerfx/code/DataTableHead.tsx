import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.DataTableHeadProps & {

}

export class DataTableHead extends React.Component<Props> {
  render() {
    return <System.DataTableHead {...this.props} />
  }

  static defaultProps: Props = {

  }

  static propertyControls: PropertyControls<Props> = {
 
  }
}

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"

type Props = System.TopAppBarRowProps & {
  width: number
  height: number
}

export class TopAppBarRow extends React.Component<Props> {
  render() {
    // return <System.TopAppBarRow {...this.props} >{React.Children}</System.TopAppBarRow>
    return <System.TopAppBarRow {...this.props} ></System.TopAppBarRow>
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
  }
}

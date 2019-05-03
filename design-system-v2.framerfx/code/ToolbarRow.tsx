import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"

type Props = System.ToolbarRowProps & {
  width: number
  height: number
}

export class ToolbarRow extends React.Component<Props> {
  render() {
    // return <System.ToolbarRow {...this.props} >{React.Children}</System.ToolbarRow>
    return <System.ToolbarRow {...this.props} ></System.ToolbarRow>
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
  }
}

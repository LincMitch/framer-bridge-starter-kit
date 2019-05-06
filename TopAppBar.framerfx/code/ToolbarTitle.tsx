import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.ToolbarTitleProps & {
}

export class ToolbarTitle extends React.Component<Props> {
  render() {
    return <System.ToolbarTitle {...this.props} />
  }

  static defaultProps: Props = {
  }

  static propertyControls: PropertyControls<Props> = {
  }
}

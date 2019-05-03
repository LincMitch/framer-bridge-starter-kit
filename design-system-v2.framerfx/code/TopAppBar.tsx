import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.TopAppBarProps & {
}

export class TopAppBar extends React.Component<Props> {
  render() {
    return <System.TopAppBar {...this.props} />
  }

  static defaultProps: Props = {
  }

  static propertyControls: PropertyControls<Props> = {
  }
}

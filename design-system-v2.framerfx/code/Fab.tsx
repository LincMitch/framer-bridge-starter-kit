import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.FabProps & {
  width: number
  height: number
}

export class Fab extends React.Component<Props> {
  render() {
    return <System.Fab {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
    label: "Fab"
  }

  static propertyControls: PropertyControls<Props> = {
    // children: { type: ControlType.String, title: "Children" },
    exited: { type: ControlType.Boolean, title: "Exited" },
    icon: { type: ControlType.String, title: "Icon" },
    label: { type: ControlType.String, title: "Label" },
    mini: { type: ControlType.Boolean, title: "Mini" },
    ripple: { type: ControlType.Boolean, title: "Ripple" },
    trailingIcon: { type: ControlType.String, title: "Trailing Icon" },
    // size: { type: ControlType.String, title: "Size" },
  }
}

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper"

type Props = System.IconButtonProps & {
  width: number
  height: number
}

export class IconButton extends React.Component<Props> {
  render() {
    return <System.IconButton {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
    // children: { type: ControlType.String, title: "Children" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    icon: { type: ControlType.String, title: "Icon" },
    label: { type: ControlType.String, title: "Label" },
    ripple: { type: ControlType.Boolean, title: "Ripple" },
  }
}

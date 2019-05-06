import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.ButtonProps & {
  width: number
  height: number
}

export class Button extends React.Component<Props> {
  render() {
    return <System.Button {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
    disabled: false,
    label: "Button"
  }

  static propertyControls: PropertyControls<Props> = {
    // children: { type: ControlType.String, title: "Children" },
    dense: { type: ControlType.Boolean, title: "Dense" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    selected: { type: ControlType.Boolean, title: "Selected" },
    // icon: { type: ControlType.String, title: "Icon" },
    label: { type: ControlType.String, title: "Label" },
    outlined: { type: ControlType.Boolean, title: "Outlined" },
    raised: { type: ControlType.Boolean, title: "Raised" },
    ripple: { type: ControlType.Boolean, title: "Ripple" },
    trailingIcon: { type: ControlType.String, title: "TrailingIcon" },
    unelevated: { type: ControlType.Boolean, title: "Unelevated" },   
  }
}

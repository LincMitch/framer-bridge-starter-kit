import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.CardActionIconProps & {
}

export class CardActionIcon extends React.Component<Props> {
  render() {
    return <System.CardActionIcon {...this.props} />
  }

  static defaultProps: Props = {
  }

  static propertyControls: PropertyControls<Props> = {
    checked: { type: ControlType.Boolean, title: "Checked" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    icon: { type: ControlType.String, title: "Icon" },
    // icon: { type: ControlType.String, title: "Icon" },
    // onChange: { type: ControlType.String, title: "On Change" },
    // onIcon: { type: ControlType.Boolean, title: "On Icon" },
    ripple: { type: ControlType.Boolean, title: "Rripple" },
  }
}

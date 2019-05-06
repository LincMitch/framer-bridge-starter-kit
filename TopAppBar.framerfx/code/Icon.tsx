import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.IconProps & {
  width: number
  height: number
}

export class Icon extends React.Component<Props> {
  render() {
    return <System.Icon {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
    icon: "star",
    theme: ""
  }

  static propertyControls: PropertyControls<Props> = {
    icon: { type: ControlType.String, title: "Icon" },
    theme: { type: ControlType.String, title: "Theme" }
  }
}

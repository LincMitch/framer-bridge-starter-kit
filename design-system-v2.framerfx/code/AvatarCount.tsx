import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.AvatarCountProps & {
  width: number
  height: number
}

export class AvatarCount extends React.Component<Props> {
  render() {
    return <System.AvatarCount {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
    interactive: { type: ControlType.Boolean, title: "Interactive" },
    overflow: { type: ControlType.String, title: "Overflow" },
    size: { type: ControlType.String, title: "Size" },
    square: { type: ControlType.Boolean, title: "Square" },
    value: { type: ControlType.String, title: "Value" },
  }
}

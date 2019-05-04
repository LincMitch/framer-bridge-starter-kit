import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.AvatarProps & {
  width: number
  height: number
}

export class Avatar extends React.Component<Props> {
  render() {
    return <System.Avatar {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
    contain: { type: ControlType.Boolean, title: "Contain" },
    interactive: { type: ControlType.Boolean, title: "Interactive" },
    name: { type: ControlType.String, title: "Name" },
    size: { type: ControlType.String, title: "Size" },
    square: { type: ControlType.Boolean, title: "Square" },
    src: { type: ControlType.String, title: "Src" },
  }
}

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper"

type Props = System.TopAppBarNavigationIconProps & {
  icon: string
}

export class TopAppBarNavigationIcon extends React.Component<Props> {
  render() {
    return <System.TopAppBarNavigationIcon {...this.props} ></System.TopAppBarNavigationIcon>
  }

  static defaultProps: Props = {
    icon: "star",
  }

  static propertyControls: PropertyControls<Props> = {
    icon: { type: ControlType.String, title: "Icon" },
  }
}

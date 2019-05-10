import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper"

type Props = System.ElevationProps & {
  width: number
  height: number
}

export class Elevation extends React.Component<Props> {
  render() {
    return <System.Elevation {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
    z: 1,
  }

  static propertyControls: PropertyControls<Props, any> = {
    wrap:	{ type: ControlType.Boolean, title: "Wrap" },
    transition:		{ type: ControlType.Boolean, title: "Transition" },
    z: { type: ControlType.Number, title: "Z" },
    height: { type: ControlType.String, title: "Height" },
  }
}
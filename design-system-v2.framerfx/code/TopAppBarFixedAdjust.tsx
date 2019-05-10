import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper"

type Props = System.TopAppBarFixedAdjustProps & {
  dense: boolean
  denseProminent: boolean
  prominent: boolean
  short: boolean
}

export class TopAppBarFixedAdjust extends React.Component<Props> {
  render() {
    return <System.TopAppBarFixedAdjust {...this.props} ></System.TopAppBarFixedAdjust>
  }

  static defaultProps: Props = {

  }

  static propertyControls: PropertyControls<Props> = {
    dense: { type: ControlType.Boolean, title: "Dense" },
    denseProminent: { type: ControlType.Boolean, title: "Dense Prominent" },
    prominent: { type: ControlType.Boolean, title: "Prominent" },
    short: { type: ControlType.Boolean, title: "Short" },
  }
}

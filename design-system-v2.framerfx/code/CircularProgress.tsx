import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper"

type Props = System.CircularProgressProps & {
  width: number
  height: number
}

export class CircularProgress extends React.Component<Props> {
  render() {
    return <System.CircularProgress {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
    max: { type: ControlType.Number, title: "Max" },
    min: { type: ControlType.Number, title: "Min" },
    progress: { type: ControlType.Number, title: "Progress" },
    size: { type: ControlType.String, title: "Size" },
  }
}

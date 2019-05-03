import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.LinearProgressProps & {
  width: number
  height: number
}

export class LinearProgress extends React.Component<Props> {
  render() {
    return <System.LinearProgress {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
    buffer: { type: ControlType.Number, title: "buffer" },
    closed: { type: ControlType.Boolean, title: "closed" },
    progress: { type: ControlType.Number, title: "progress" },
    reversed: { type: ControlType.Boolean, title: "reversed" },
  }
}

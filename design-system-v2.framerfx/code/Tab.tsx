import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper"

type Props = System.TabProps & {
  width: number
  height: number
}

export class Tab extends React.Component<Props> {
  render() {
    return <System.Tab {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
    label: "Tab"
  }

  static propertyControls: PropertyControls<Props> = {
    icon: { type: ControlType.String, title: "Icon" },
    label: { type: ControlType.String, title: "Label" },
    // onInteraction: { type: ControlType.Boolean, title: "OnInteraction" },
    restrictIndicator: { type: ControlType.Boolean, title: "RestrictIndicator" },
    stacked: { type: ControlType.Boolean, title: "Stacked" },
  }
}

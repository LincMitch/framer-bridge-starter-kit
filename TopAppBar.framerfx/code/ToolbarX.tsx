import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.ToolbarProps & {
  width: number
  height: number
}

export class ToolbarX extends React.Component<Props> {
  render() {
    return <System.Toolbar {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
    fixed: { type: ControlType.Boolean, title: "Fixed" },
    fixedLastrowOnly: { type: ControlType.Boolean, title: "Fixed LastrowOnly" },
    flexible: { type: ControlType.Boolean, title: "Flexible" },
    flexibleDefaultBehavior: { type: ControlType.String, title: "FlexibleDefaultBehavior" },
    waterfall: { type: ControlType.Boolean, title: "Waterfall" },   
  }
}

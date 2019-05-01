import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.ButtonProps & {
  width: number
  height: number
}

export class Chip extends React.Component<Props> {
  render() {
    return <System.Chip {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
    label: "label",
  }

  static propertyControls: PropertyControls<Props, any> = {
    checkmark:	{ type: ControlType.Boolean, title: "Checkmark" },
    icon:		{ type: ControlType.String, title: "Icon" },
    id:		{ type: ControlType.String, title: "Id" },
    label: { type: ControlType.String, title: "Label" },
    selected:	{ type: ControlType.Boolean, title: "Selected" },	
    trailingIcon:		{ type: ControlType.String, title: "TrailingIcon" },
  }
}

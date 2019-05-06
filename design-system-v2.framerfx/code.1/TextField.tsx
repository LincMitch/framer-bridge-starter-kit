import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.TextFieldProps & {
  width: number
  height: number
}

export class TextField extends React.Component<Props> {
  render() {
    return <System.TextField {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
    disabled: false,
    label: "TextField"
  }

  static propertyControls: PropertyControls<Props> = {
    characterCount: { type: ControlType.Boolean, title: "Character Count"},
    disabled: { type: ControlType.Boolean, title: "Disabled"},
    fullwidth: { type: ControlType.Boolean, title: "Fullwidth"},
    helpText: { type: ControlType.String, title: "HelpText"},
    icon: { type: ControlType.String, title: "Icon"},
    invalid: { type: ControlType.Boolean, title: "Invalid"},
    label: { type: ControlType.String, title: "Label"},
    outlined: { type: ControlType.Boolean, title: "Outlined"},
    required: { type: ControlType.Boolean, title: "Required"},
    rootProps: { type: ControlType.Boolean, title: "RootProps"},
    trailingIcon: { type: ControlType.String, title: "TrailingIcon"},
    type: { type: ControlType.String, title: "Type"},
    value: { type: ControlType.String, title: "Value"},
  }
}

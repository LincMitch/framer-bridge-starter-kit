import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.CheckboxProps & {
}

export class Checkbox extends React.Component<Props> {
  render() {
    return <System.Checkbox {...this.props} />
  }

  static defaultProps: Props = {
    label: "Button"
  }

  static propertyControls: PropertyControls<Props> = {
    checked: { type: ControlType.Boolean, title: "Checked" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    id: { type: ControlType.String, title: "ID" },
    indeterminate: { type: ControlType.Boolean, title: "Indeterminate" },
    // inputRef
    label: { type: ControlType.String, title: "Label" },
    ripple: { type: ControlType.Boolean, title: "Ripple" },
    // rootProps?: object;
    value: { type: ControlType.String, title: "Value" },
  }
}

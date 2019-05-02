import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.SelectProps & {
  width: number
  height: number
}

export class Select extends React.Component<Props> {
  render() {
    return <System.Select {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
    disabled: false,
    label: "Select Menu",
    // options: {['Cookies', 'Pizza', 'Icecream']}
  }

  static propertyControls: PropertyControls<Props> = {
    disabled: { type: ControlType.Boolean, title: "Disabled"},
    enhanced: { type: ControlType.Boolean, title: "Enhanced"},
    helpText: { type: ControlType.String, title: "HelpText"},
    icon: { type: ControlType.String, title: "Icon"},
    // inputRef: { type: ControlType.Boolean, title: "InputRef"},
    invalid: { type: ControlType.Boolean, title: "Invalid"},
    label: { type: ControlType.String, title: "Label"},
    // options: {
    //   type: ControlType.Enum,
    //   defaultValue: "a",
    //   options: ["a", "b", "c"],
    //   optionTitles: ["Option A", "Option B", "Option C"],
    // },

    // options: {
    //   type: ControlType.SegmentedEnum,
    //   options: ["top", "right", "bottom", "left"],
    //   optionTitles: ["T", "R", "B", "L"],
    //   title: "Arrow"
    // },

    outlined: { type: ControlType.Boolean, title: "Outlined"},
    placeholder: { type: ControlType.String, title: "Placeholder"},
    required: { type: ControlType.Boolean, title: "Required"},
    // rootProps: { type: ControlType.Object, title: "Root Props"},
    value: { type: ControlType.String, title: "Value"},
  }
}

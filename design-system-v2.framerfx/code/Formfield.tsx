import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper"

type Props = System.FormFieldProps & {
}

export class FormField extends React.Component<Props> {
  render() {
    return <System.FormField {...this.props} />
  }

  static defaultProps: Props = {
  }

  static propertyControls: PropertyControls<Props> = {
    alignEnd: { type: ControlType.Boolean, title: "Align End" },
  }
}

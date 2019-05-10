import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper"

type Props = System.FormfieldProps & {
}

export class Formfield extends React.Component<Props> {
  render() {
    return <System.Formfield {...this.props} />
  }

  static defaultProps: Props = {
  }

  static propertyControls: PropertyControls<Props> = {
    alignEnd: { type: ControlType.Boolean, title: "Align End" },
  }
}

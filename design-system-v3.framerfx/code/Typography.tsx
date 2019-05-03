import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.TypographyProps & {
}

export class Typography extends React.Component<Props> {
  render() {
    return <System.Typography {...this.props} />
  }

  static defaultProps: Props = {
    use: "headline6",
    text: "Text",
    color: "#000",
    theme: "primary"
  }

  static propertyControls: PropertyControls<Props> = {
    use: { type: ControlType.String, title: "Use" },
    text: { type: ControlType.String, title: "Text" },
    theme: { type: ControlType.String, title: "Theme" }
  }
}

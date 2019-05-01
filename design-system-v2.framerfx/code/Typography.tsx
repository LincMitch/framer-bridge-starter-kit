import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.IconProps & {
  width: number
  height: number
}

export class Typography extends React.Component<Props> {
  render() {
    return <System.Typography {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
    use: "headline6"
    text: "Text"
  }

  static propertyControls: PropertyControls<Props> = {
    use: { type: ControlType.String, title: "Use" }
    text: { type: ControlType.String, title: "Text" }
  }
}

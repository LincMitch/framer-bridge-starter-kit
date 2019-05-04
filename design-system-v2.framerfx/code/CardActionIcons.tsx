import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"

type Props = System.CardActionIconsProps & {
  width: number
  height: number
}

export class CardActionIcons extends React.Component<Props> {
  render() {
    // return <System.CardActionIcons {...this.props} >{React.Children}</System.CardActionIcons>
    return <System.CardActionIcons {...this.props} ></System.CardActionIcons>
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
  }
}

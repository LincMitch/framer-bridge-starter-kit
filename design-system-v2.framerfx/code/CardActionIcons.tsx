import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"

type Props = System.CardActionIconsProps & {

}

export class CardActionIcons extends React.Component<Props> {
  render() {
    // return <System.CardActionIcons {...this.props} >{React.Children}</System.CardActionIcons>
    return <System.CardActionIcons {...this.props} ></System.CardActionIcons>
  }

  static defaultProps: Props = {

  }

  static propertyControls: PropertyControls<Props> = {
  }
}

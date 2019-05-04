import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"

type Props = System.CardActionButtonsProps & {
  width: number
  height: number
}

export class CardActionButtons extends React.Component<Props> {
  render() {
    // return <System.CardActionButtons {...this.props} >{React.Children}</System.CardActionButtons>
    return <System.CardActionButtons {...this.props} ></System.CardActionButtons>
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
  }
}

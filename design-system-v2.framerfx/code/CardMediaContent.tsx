import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"

type Props = System.CardMediaContentProps & {
  width: number
  height: number
}

export class CardMediaContent extends React.Component<Props> {
  render() {
    // return <System.CardMediaContent {...this.props} >{React.Children}</System.CardMediaContent>
    return <System.CardMediaContent {...this.props} ></System.CardMediaContent>
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
  }
}

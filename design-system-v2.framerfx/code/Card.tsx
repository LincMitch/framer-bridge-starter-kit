import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"

type Props = System.CardProps & {
  width: number
  height: number
}

export class Card extends React.Component<Props> {
  render() {
    // return <System.Card {...this.props} >{React.Children}</System.Card>
    return <System.Card {...this.props} ></System.Card>
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
  }
}

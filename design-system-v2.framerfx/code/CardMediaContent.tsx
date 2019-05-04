import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"

type Props = System.CardMediaContentProps & {

}

export class CardMediaContent extends React.Component<Props> {
  render() {
    // return <System.CardMediaContent {...this.props} >{React.Children}</System.CardMediaContent>
    return <System.CardMediaContent {...this.props} ></System.CardMediaContent>
  }

  static defaultProps: Props = {

  }

  static propertyControls: PropertyControls<Props> = {
  }
}

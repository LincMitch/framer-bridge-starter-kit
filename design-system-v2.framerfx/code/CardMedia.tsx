import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.CardMediaProps & {

}

export class CardMedia extends React.Component<Props> {
  render() {
    return <System.CardMedia {...this.props} />
  }

  static defaultProps: Props = {
    sixteenByNine: false,
  }

  static propertyControls: PropertyControls<Props> = {
    sixteenByNine: { type: ControlType.Boolean, title: "SixteenByNine" },
    square: { type: ControlType.Boolean, title: "Square" },
  }
}

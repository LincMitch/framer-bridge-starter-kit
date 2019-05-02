import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.CardMediaProps & {
  width: number
  height: number
}

export class CardMedia extends React.Component<Props> {
  render() {
    return <System.CardMedia {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
    sixteenByNine: true,
  }

  static propertyControls: PropertyControls<Props> = {
    sixteenByNine: { type: ControlType.Boolean, title: "SixteenByNine" },
    square: { type: ControlType.Boolean, title: "Square" },
  }
}

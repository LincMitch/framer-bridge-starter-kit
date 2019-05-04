import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"

type Props = System.CardActionsProps & {
  width: number
  height: number
}

export class CardActions extends React.Component<Props> {
  render() {
    // return <System.CardActions {...this.props} >{React.Children}</System.CardActions>
    return <System.CardActions {...this.props} ></System.CardActions>
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
  }
}

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"

type Props = System.CardPrimaryActionProps & {
  width: number
  height: number
}

export class CardPrimaryAction extends React.Component<Props> {
  render() {
    // return <System.CardPrimaryAction {...this.props} >{React.Children}</System.CardPrimaryAction>
    return <System.CardPrimaryAction {...this.props} ></System.CardPrimaryAction>
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
  }
}

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper"

type Props = System.CardActionButtonProps & {

}

export class CardActionButton extends React.Component<Props> {
  render() {

    return <System.CardActionButton {...this.props} />
  }

  static defaultProps: Props = {
    label: "Button"
  }

  static propertyControls: PropertyControls<Props> = {
    danger: { type: ControlType.Boolean, title: "Danger" },
    dense: { type: ControlType.Boolean, title: "Dense" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    icon: { type: ControlType.String, title: "Icon" },
    label: { type: ControlType.String, title: "Label" },
    outlined: { type: ControlType.Boolean, title: "Outlined" },
    raised: { type: ControlType.Boolean, title: "Raised" },
    ripple: { type: ControlType.Boolean, title: "Ripple" },
    trailingIcon: { type: ControlType.String, title: "TrailingIcon" },
    unelevated: { type: ControlType.Boolean, title: "Unelevated" },  
  }
}

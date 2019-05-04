import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"

type Props = System.AvatarGroupProps & {
  width: number
  height: number
}

export class AvatarGroup extends React.Component<Props> {
  render() {
    // return <System.AvatarGroup {...this.props} >{React.Children}</System.AvatarGroup>
    return <System.AvatarGroup {...this.props} ></System.AvatarGroup>
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
    dense: { type: ControlType.Boolean, title: "Dense" },
  }
}

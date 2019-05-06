import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.TopAppBarActionItemProps & {
  icon: string
}

export class TopAppBarActionItem extends React.Component<Props> {
  render() {
    return <System.TopAppBarActionItem {...this.props} ></System.TopAppBarActionItem>
  }

  static defaultProps: Props = {
    icon: "star",
  }

  static propertyControls: PropertyControls<Props> = {
    icon: { type: ControlType.String, title: "Icon" },
  }
}

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.GridTileIconProps & {
  
}

export class GridTileIcon extends React.Component<Props> {
  render() {
    return <System.GridTileIcon {...this.props} />
  }

  static defaultProps: Props = {
  }

  static propertyControls: PropertyControls<Props> = {
    icon: { type: ControlType.String, title: "Icon" },   

  }
}

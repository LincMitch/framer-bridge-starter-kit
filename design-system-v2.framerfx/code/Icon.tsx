import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper"

import {
  themePropertyControls,
} from "./framerx-integration";

type Props = System.IconProps & {
}

export class Icon extends React.Component<Props> {
  render() {
    const { icon, ...rest } = this.props;

    return (
      <FramerXWrapper>
        <System.Icon {...this.props}/>
      </FramerXWrapper>
    )
  }

  static defaultProps: Props = {
    icon: "star",
  }

  static propertyControls: PropertyControls<Props> = {
    icon: { type: ControlType.String, title: "Icon" },
    ...themePropertyControls("typography")
  }
}

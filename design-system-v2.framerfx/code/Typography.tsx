import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper"

import {
  themePropertyControls,
} from "./framerx-integration";


type Props = System.TypographyProps & {
  text: string;
}

export class Typography extends React.Component<Props> {
  render() {
    const { text, ...rest } = this.props;

    return (
      <FramerXWrapper>
        <System.Typography {...this.props} >
          {text}
        </System.Typography>
      </FramerXWrapper>
    )
  }

  static defaultProps: Props = {
    use: "headline6",
    text: "Text",
  }

  static propertyControls: PropertyControls<Props> = {
    use: { type: ControlType.String, title: "Use" },
    text: { type: ControlType.String, title: "Text" },
    ...themePropertyControls("typography")
  }
}

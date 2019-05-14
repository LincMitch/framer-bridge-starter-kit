import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper"

type Props = System.TopAppBarTitleProps & {
  text: string;
}

export class TopAppBarTitle extends React.Component<Props> {
  render() {
    const { text, ...rest } = this.props;
    return <System.TopAppBarTitle {...this.props} >{text}</System.TopAppBarTitle>
  }

  static defaultProps: Props = {
    text: "Text",
  }

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
  }
}

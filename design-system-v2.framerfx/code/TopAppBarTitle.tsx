import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper"

type Props = System.TopAppBarTitleProps & {
  title: string;
}

export class TopAppBarTitle extends React.Component<Props> {
  render() {
    return <System.TopAppBarTitle {...this.props} />
  }

  static defaultProps: Props = {
    title: "Title",
  }

  static propertyControls: PropertyControls<Props> = {
    title: { type: ControlType.String, title: "Title" },
  }
}

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.ListGroupSubheaderProps & {
  text: string,
}

export class ListGroupSubheader extends React.Component<Props> {
  render() {
    const { text, ...rest } = this.props;
    return <System.ListGroupSubheader {...this.props} >{text}</System.ListGroupSubheader>
  }

  static defaultProps: Props = {
    text: "Text",
  }

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "text" },   

  }
}

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.ListItemSecondaryTextProps & {
  text: string,
}

export class ListItemSecondaryText extends React.Component<Props> {
  render() {
    const { text, ...rest } = this.props;
    return <System.ListItemSecondaryText {...this.props} >{text}</System.ListItemSecondaryText>
  }

  static defaultProps: Props = {
    text: "Text",
  }

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "text" },   
  }
}

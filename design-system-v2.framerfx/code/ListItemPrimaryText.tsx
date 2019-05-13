import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.ListItemPrimaryTextProps & {
  text: string,
}

export class ListItemPrimaryText extends React.Component<Props> {
  render() {
    const { text, ...rest } = this.props;
    return <System.ListItemPrimaryText {...this.props} >{text}</System.ListItemPrimaryText>
  }

  static defaultProps: Props = {
    text: "Text",
  }

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "text" },   

  }
}

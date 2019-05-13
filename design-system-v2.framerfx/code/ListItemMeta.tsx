import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.ListItemMetaProps & {
  text: string,
}

export class ListItemMeta extends React.Component<Props> {
  render() {
    const { text, ...rest } = this.props;
    return <System.ListItemMeta {...this.props} >{text}</System.ListItemMeta>
  }

  static defaultProps: Props = {
    text: "Text",
  }

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "text" },   

  }
}

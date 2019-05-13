import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.ImageListLabelProps & {
  text: string,
}

export class ImageListLabel extends React.Component<Props> {
  render() {
    const { text, ...rest } = this.props;
    return <System.ImageListLabel {...this.props} >{text}</System.ImageListLabel>
  }

  static defaultProps: Props = {
    text: "Text",
  }

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "text" },   

  }
}

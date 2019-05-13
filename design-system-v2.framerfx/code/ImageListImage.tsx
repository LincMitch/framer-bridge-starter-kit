import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.ImageListImageProps & {
  src: string,
}

export class ImageListImage extends React.Component<Props> {
  render() {
    const { src, ...rest } = this.props;
    return <System.ImageListImage src={src}  />
  }

  static defaultProps: Props = {
    src: "Src",
  }

  static propertyControls: PropertyControls<Props> = {
    src: { type: ControlType.String, title: "Src" },   

  }
}

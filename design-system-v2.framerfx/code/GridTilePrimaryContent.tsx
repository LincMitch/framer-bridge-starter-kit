import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.GridTilePrimaryContentProps & {
}

export class GridTilePrimaryContent extends React.Component<Props> {
  render() {
    // return <System.GridTilePrimaryContent {...this.props} />
    return <div>Grid Tile Primary Content</div>
  }

  static defaultProps: Props = {
    src: "https://rmwc.io/images/backgrounds/mb-bg-fb-06.png",
    alt: "Alt"
  }

  static propertyControls: PropertyControls<Props> = {
    src: {
      type: ControlType.File,
      allowedFileTypes: ["png"],
    },
    alt: { type: ControlType.String, title: "Alt" }
  }
}

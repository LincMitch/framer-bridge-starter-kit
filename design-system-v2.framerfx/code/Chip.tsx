import * as React from "react"
import * as System from "../../design-system"
import FramerXWrapper from "./FramerXWrapper"

type Props = System.ChipProps & {
}

export class Chip extends React.Component<Props> {
  render() {
    return <System.Chip {...this.props} />
  }

  static defaultProps: Props = {
    label: "label",
  }

}

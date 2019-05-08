import * as React from "react"
import * as System from "../../design-system"

type Props = System.ChipProps & {
}

export class Chip extends React.Component<Props> {
  render() {
    return <System.Chip2 {...this.props} />
  }

  static defaultProps: Props = {
    label: "label",
  }

}

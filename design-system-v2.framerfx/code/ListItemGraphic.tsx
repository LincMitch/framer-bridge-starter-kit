import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.ListItemGraphicProps & {

}

export class ListItemGraphic extends React.Component<Props> {
  render() {
    const {  ...rest } = this.props;
    return <System.ListItemGraphic {...this.props} />
  }

  static defaultProps: Props = {
    icon: "star",
  }

  static propertyControls: PropertyControls<Props> = {
    icon: { type: ControlType.String, title: "Icon" },   
  }
}

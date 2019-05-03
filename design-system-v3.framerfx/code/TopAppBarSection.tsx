import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"

type Props = System.TopAppBarSectionProps & {
}

export class TopAppBarSection extends React.Component<Props> {
  render() {
    // return <System.TopAppBarSection {...this.props} >{React.Children}</System.TopAppBarSection>
    return <System.TopAppBarSection {...this.props} ></System.TopAppBarSection>
  }

  static defaultProps: Props = {
  }

  static propertyControls: PropertyControls<Props> = {
    alignEnd: { type: ControlType.Boolean, title: "Align End" },
    alignStart: { type: ControlType.Boolean, title: "Align Start" }
  }
}

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"

type Props = System.TopAppBarSectionProps & {
  width: number
  height: number
}

export class TopAppBarSection extends React.Component<Props> {
  render() {
    // return <System.TopAppBarSection {...this.props} >{React.Children}</System.TopAppBarSection>
    return <System.TopAppBarSection {...this.props} ></System.TopAppBarSection>
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
  }

  static propertyControls: PropertyControls<Props> = {
  }
}

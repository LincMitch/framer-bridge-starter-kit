import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.TopAppBarTitleProps & {

}

export class TopAppBarTitle extends React.Component<Props> {
  render() {
    return <System.TopAppBarTitle {...this.props} ></System.TopAppBarTitle>
  }

  static defaultProps: Props = {

  }

  static propertyControls: PropertyControls<Props> = {
  }
}

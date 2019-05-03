import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.SimpleTopAppBarProps & {
  actionItems: object
  dense: boolean
  endContent: React.ReactNode
  fixed: boolean
  navigationIcon: string
  // onNav: boolean
  prominent: boolean
  // scrollTarget: Element
  short: boolean
  shortCollapsed: boolean
  startContent: React.ReactNode
  title: string
}

export class SimpleTopAppBar extends React.Component<Props> {
  render() {
    return <System.SimpleTopAppBar {...this.props} ></System.SimpleTopAppBar>
  }

  static defaultProps: Props = {

  }

  static propertyControls: PropertyControls<Props> = {
    // actionItems?: object
    dense:  { type: ControlType.Boolean, title: "Dense" },
    // endContent: React.ReactNod
    fixed:  { type: ControlType.Boolean, title: "Fixed" },
    navigationIcon:  { type: ControlType.String, title: "NavigationIcon" },
    // onNav:  { type: ControlType.Boolean, title: "Dense" },
    prominent:  { type: ControlType.Boolean, title: "Prominent" },
    // scrollTarget: Element
    short:  { type: ControlType.Boolean, title: "Dense" },
    shortCollapsed:  { type: ControlType.Boolean, title: "Short" },
    // startContent: React.ReactNode
    title:  { type: ControlType.String, title: "Title" },
  }
}

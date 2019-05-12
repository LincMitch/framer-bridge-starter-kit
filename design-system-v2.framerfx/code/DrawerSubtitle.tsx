import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.DrawerSubtitleProps & {
  text: string
}

export class DrawerSubtitle extends React.Component<Props> {
  render() {
    
    return <System.DrawerSubtitle {...this.props} />
  }

  static defaultProps: Props = {
  }

  static propertyControls: PropertyControls<Props> = {

  }
}

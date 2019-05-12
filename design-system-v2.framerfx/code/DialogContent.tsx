import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.DialogContentProps & {

}

export class DialogContent extends React.Component<Props> {
  render() {

    return <System.DialogContent {...this.props} />
  }

  
  static defaultProps: Props = {
  }

  static propertyControls: PropertyControls<Props> = {
    // children: { type: ControlType.String, title: "Children" },
    stickyColumns: { type: ControlType.String, title: "Sticky Columns" },
    stickyRows: { type: ControlType.String, title: "Sticky Rows" },
}

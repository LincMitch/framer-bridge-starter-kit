import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";

type Props = System.TopAppBarTitleProps & {
  title: string;
}

export class TopAppBarTitle extends React.Component<Props> {
  render() {
    return <System.TopAppBarTitle {...this.props} ></System.TopAppBarTitle>
  }

  static defaultProps: Props = {
    title: "Title",
  }

  static propertyControls: PropertyControls<Props> = {
    title: { type: ControlType.String, title: "Title" },
  }
}

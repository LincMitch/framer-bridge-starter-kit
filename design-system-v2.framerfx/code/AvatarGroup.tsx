import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";

type Props = System.AvatarGroupProps & {

}

export class AvatarGroup extends React.Component<Props> {
  render() {
    return (
      <System.AvatarGroup {...this.props} />
    )
  }

  static defaultProps: Props = {
  }

  static propertyControls: PropertyControls<Props> = {
    dense: { type: ControlType.Boolean, title: "Dense" },


  }
}

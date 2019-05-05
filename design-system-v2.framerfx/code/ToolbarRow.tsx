import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";

type Props = System.ToolbarRowProps & {
  toolbarTitles: string[];
  externalToolbarTitles: React.ReactNode;
  activeToolbarTitlesIndex: number;
}

export class ToolbarRow extends React.Component<Props> {
  render() {
    const { toolbarTitles, externalToolbarTitles, ...rest } = this.props;

    let toolbarTitleElements;
    toolbarTitleElements = cloneFrameless(externalToolbarTitles); 
    return <System.ToolbarRow {...this.props} >{toolbarTitleElements}</System.ToolbarRow>
  }

  static defaultProps: Props = {

  }

  static propertyControls: PropertyControls<Props> = {
    externalToolbarTitles: {
      type: ControlType.ComponentInstance,
      title: "ToolbarTitles"
    },
  }
}

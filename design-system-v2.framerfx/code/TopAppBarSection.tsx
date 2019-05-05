import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";

type Props = System.TopAppBarSectionProps & {
  //Title and... in this Section
  topAppBarTitles: string[];
  externalTopAppBarTitles: React.ReactNode;
  activeTopAppBarTitlesIndex: number;
}

export class TopAppBarSection extends React.Component<Props> {
  render() {
    const { topAppBarTitles, externalTopAppBarTitles, ...rest } = this.props;

    let topAppBarTitleElements;
    topAppBarTitleElements = cloneFrameless(externalTopAppBarTitles); 
    return <System.TopAppBarSection {...this.props} >{topAppBarTitleElements}</System.TopAppBarSection>
  }

  static defaultProps: Props = {
    activeTopAppBarTitlesIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    alignEnd: { type: ControlType.Boolean, title: "Align End" },
    alignStart: { type: ControlType.Boolean, title: "Align Start" },

    externalTopAppBarTitles: {
      type: ControlType.ComponentInstance,
      title: "Top App Bar Titles"
    },

  }
}

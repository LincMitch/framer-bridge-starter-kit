import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.TopAppBarRowProps & {
  //Sections in this row
  topAppBarSections: string[];
  externalTopAppBarSections: React.ReactNode;
  activeTopAppBarSectionsIndex: number;
}

export class TopAppBarRow extends React.Component<Props> {
  render() {
    const { topAppBarSections, externalTopAppBarSections, ...rest } = this.props;

    let topAppBarSectionElements;
    topAppBarSectionElements = cloneFrameless(externalTopAppBarSections); 
    return <System.TopAppBarRow {...this.props} >{topAppBarSectionElements}</System.TopAppBarRow>
  }

  static defaultProps: Props = {
    activeTopAppBarSectionsIndex: 0

  }

  static propertyControls: PropertyControls<Props> = {
    externalTopAppBarSections: {
      type: ControlType.ComponentInstance,
      title: "Top App Bar Section"
    },
    activeTopAppBarSectionsIndex: {
      type: ControlType.Number,
      title: "Index",
      min: 0
    }
  }
  
}

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";

type Props = System.TopAppBarProps & {
  topAppBarRows: string[];
  externalTopAppBarRows: React.ReactNode;
  activeTopAppBarRowsIndex: number;

  background: string;
}

export class TopAppBar extends React.Component<Props> {
  render() {
    const { topAppBarRows, externalTopAppBarRows, ...rest } = this.props;

    let topAppBarRowElements;
    topAppBarRowElements = cloneFrameless(externalTopAppBarRows); 
    return <System.TopAppBar {...this.props} >{topAppBarRowElements}</System.TopAppBar>
  }

  static defaultProps: Props = {
    activeTopAppBarRowsIndex: 0,
    theme: "secondary",
    background: "lime"
  }

  static propertyControls: PropertyControls<Props> = {
    fixed: { type: ControlType.Boolean, title: "Fixed" },
    fixedLastrowOnly: { type: ControlType.Boolean, title: "Fixed LastrowOnly" },
    flexible: { type: ControlType.Boolean, title: "Flexible" },
    flexibleDefaultBehavior: { type: ControlType.String, title: "FlexibleDefaultBehavior" },
    waterfall: { type: ControlType.Boolean, title: "Waterfall" },   

    externalTopAppBarRows: {
      type: ControlType.ComponentInstance,
      title: "TopAppBarRows"
    },
    activeTopAppBarRowsIndex: {
      type: ControlType.Number,
      title: "Index",
      min: 0
    },

    theme: { type: ControlType.String, title: "Theme" }
  }
}

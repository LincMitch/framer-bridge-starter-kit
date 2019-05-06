import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";

type Props = System.TypographyProps & {
  typography: string[];
  externalTypography: React.ReactNode;
  activeTypographyIndex: number;
}

export class CardMediaContent extends React.Component<Props> {
  render() {
    const { typography, externalTypography, ...rest } = this.props;

    let typographyElements;
    typographyElements = cloneFrameless(externalTypography); 
    return <System.CardMediaContent {...this.props} >{typographyElements}</System.CardMediaContent>
  }

  static defaultProps: Props = {
    activeTypographyIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {

    externalTypography: {
      type: ControlType.ComponentInstance,
      title: "Typography"
    },
    activeTypographyIndex: {
      type: ControlType.Number,
      title: "Index",
      min: 0
    }
  }
}

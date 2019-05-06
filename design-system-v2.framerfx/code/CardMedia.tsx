import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";

type Props = System.CardMediaProps & {
  cardMediaContent: string[];
  externalCardMediaContent: React.ReactNode;
  activeCardMediaContentIndex: number;
}

export class CardMedia extends React.Component<Props> {
  render() {
    const { cardMediaContent, externalCardMediaContent, ...rest } = this.props;

    let topAppBarRowElements;
    topAppBarRowElements = cloneFrameless(externalCardMediaContent); 
    return <System.CardMedia {...this.props} >{topAppBarRowElements}</System.CardMedia>
  }

  static defaultProps: Props = {
    sixteenByNine: false,

    activeCardMediaContentIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    sixteenByNine: { type: ControlType.Boolean, title: "SixteenByNine" },
    square: { type: ControlType.Boolean, title: "Square" },

    externalCardMediaContent: {
      type: ControlType.ComponentInstance,
      title: "CardMediaContent"
    },
    activeCardMediaContentIndex: {
      type: ControlType.Number,
      title: "Index",
      min: 0
    }
  }
}

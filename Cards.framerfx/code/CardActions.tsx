import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.CardActionsProps & {
  cardPrimaryActionsAndButtons: string[];
  externalCardPrimaryActionsAndButtons: React.ReactNode;
  activeCardPrimaryActionsAndButtonsIndex: number;
}

export class CardActions extends React.Component<Props> {
  render() {
    const { cardPrimaryActionsAndButtons, externalCardPrimaryActionsAndButtons, ...rest } = this.props;

    let topAppBarRowElements;
    topAppBarRowElements = cloneFrameless(externalCardPrimaryActionsAndButtons); 
    return <System.CardActions {...this.props} >{topAppBarRowElements}</System.CardActions>
  }

  static defaultProps: Props = {
    activeCardPrimaryActionsAndButtonsIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {

    externalCardPrimaryActionsAndButtons: {
      type: ControlType.ComponentInstance,
      title: "CardPrimaryActionsAndButtons"
    },
    activeCardPrimaryActionsAndButtonsIndex: {
      type: ControlType.Number,
      title: "Index",
      min: 0
    }
  }
}

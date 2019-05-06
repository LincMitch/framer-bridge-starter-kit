import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";

type Props = System.CardActionButtonsProps & {
  cardActionButton: string[];
  externalCardActionButton: React.ReactNode;
  activeCardActionButtonIndex: number;
}

export class CardActionButtons extends React.Component<Props> {
  render() {
    const { cardActionButton, externalCardActionButton, ...rest } = this.props;

    let topAppBarRowElements;
    topAppBarRowElements = cloneFrameless(externalCardActionButton); 
    return <System.CardActionButtons {...this.props} >{topAppBarRowElements}</System.CardActionButtons>
  }

  static defaultProps: Props = {
    activeCardActionButtonIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    externalCardActionButton: {
      type: ControlType.ComponentInstance,
      title: "CardActionButton"
    },
    activeCardActionButtonIndex: {
      type: ControlType.Number,
      title: "Index",
      min: 0
    }
  }
}

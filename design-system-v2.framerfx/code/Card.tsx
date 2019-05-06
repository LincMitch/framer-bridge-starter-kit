import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";

type Props = System.CardProps & {
  cardStandardAndPrimaryAction: string[];
  externalCardStandardAndPrimaryAction: React.ReactNode;
  activeCardStandardAndPrimaryActionIndex: number;
}

export class Card extends React.Component<Props> {
  render() {
    const { cardStandardAndPrimaryAction, externalCardStandardAndPrimaryAction, ...rest } = this.props;

    let cardStandardAndPrimaryActionElements;
    cardStandardAndPrimaryActionElements = cloneFrameless(externalCardStandardAndPrimaryAction); 
    return <System.Card {...this.props} >{cardStandardAndPrimaryActionElements}</System.Card>
  }

  static defaultProps: Props = {
    activeCardStandardAndPrimaryActionIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {

    externalCardStandardAndPrimaryAction: {
      type: ControlType.ComponentInstance,
      title: "CardStandardAndPrimaryAction"
    },
    activeCardStandardAndPrimaryActionIndex: {
      type: ControlType.Number,
      title: "Index",
      min: 0
    }
  }
}

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.CardActionIconsProps & {
  cardPrimaryAction: string[];
  externalCardPrimaryAction: React.ReactNode;
  activeCardPrimaryActionIndex: number;
}

export class CardActionIcons extends React.Component<Props> {
  render() {
    const { cardPrimaryAction, externalCardPrimaryAction, ...rest } = this.props;

    let topAppBarRowElements;
    topAppBarRowElements = cloneFrameless(externalCardPrimaryAction); 
    return <System.CardActionIcons {...this.props} >{topAppBarRowElements}</System.CardActionIcons>
  }

  static defaultProps: Props = {
    activeCardPrimaryActionIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {

    externalCardPrimaryAction: {
      type: ControlType.ComponentInstance,
      title: "CardPrimaryAction"
    },
    activeCardPrimaryActionIndex: {
      type: ControlType.Number,
      title: "Index",
      min: 0
    }
  }
}

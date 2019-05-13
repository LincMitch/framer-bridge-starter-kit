import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Scroll } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.CardMediaProps & {
  cardMedia: string[];
  externalCardMedia: React.ReactNode;
  activeCardMediaIndex: number;
}

export class CardPrimaryAction extends React.Component<Props> {
  render() {
    const { cardMedia, externalCardMedia, ...rest } = this.props;

    let cardMediaElements;
    cardMediaElements = cloneFrameless(externalCardMedia); 
    return <System.CardPrimaryAction {...this.props} >{cardMediaElements}</System.CardPrimaryAction>
  }

  static defaultProps: Props = {
    activeCardMediaIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    externalCardMedia: {
      type: ControlType.ComponentInstance,
      title: "CardMedia"
    },
    activeCardMediaIndex: {
      type: ControlType.Number,
      title: "Index",
      min: 0
    }
  }
}

import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.CardMediaProps & {
  object: string[];
  externalObject: React.ReactNode;
  activeObjectIndex: number;
}

export class CardMedia extends React.Component<Props> {
  render() {
    const { object, externalObject, ...rest } = this.props;

    let objectElements;
    objectElements = cloneFrameless(externalObject); 
    return (<System.CardMedia {...this.props} style={{
      backgroundImage: 'url(https://rmwc.io/images/backgrounds/mb-bg-fb-16.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '300px'
    }}
    >{objectElements}</System.CardMedia>)
  }

  static defaultProps: Props = {
    sixteenByNine: false,
    activeObjectIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    sixteenByNine: { type: ControlType.Boolean, title: "SixteenByNine" },
    square: { type: ControlType.Boolean, title: "Square" },
    
    externalObject: {
      type: ControlType.ComponentInstance,
      title: "object"
    },  
    activeObjectIndex: {
      type: ControlType.Number,
      title: "Index",
      min: 0
    }
  }
}

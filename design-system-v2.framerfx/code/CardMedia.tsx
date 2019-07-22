import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"
import styled from 'styled-components'



type Props = System.CardMediaProps & {
  object: string[];
  externalObject: React.ReactNode;
  activeObjectIndex: number;
  image: string
}


const StyledCardMedia = styled(System.CardMedia)`
color: red;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
  background-image: ${props => props.image};
`

export class CardMedia extends React.Component<Props> {
  render() {
    const { image, object, externalObject, ...rest } = this.props;

    let objectElements;
    objectElements = cloneFrameless(externalObject); 
    return (<StyledCardMedia {...this.props}
    >{objectElements}</StyledCardMedia>)
  }

  static defaultProps: Props = {
    sixteenByNine: false,
    activeObjectIndex: 0,
    image: "url('https://rmwc.io/images/backgrounds/mb-bg-fb-16.png')"
  }

  static propertyControls: PropertyControls<Props> = {
    // On selecting sixteenByNine or square the content is pushed below the Frame 
    sixteenByNine: { type: ControlType.Boolean, title: "SixteenByNine" },
    square: { type: ControlType.Boolean, title: "Square" },

    image: { type: ControlType.String, title: "Image"},
    
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



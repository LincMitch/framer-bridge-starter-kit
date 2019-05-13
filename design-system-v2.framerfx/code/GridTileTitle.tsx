import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";
import FramerXWrapper from "./FramerXWrapper"

type Props = System.GridTileTitleProps & {
  text: string;
}

export class GridTileTitle extends React.Component<Props> {
  render() {
    const { text, ...rest } = this.props;
    return <System.GridTileTitle {...this.props} >{text}</System.GridTileTitle>
  }

  static defaultProps: Props = {
    text: "Text"
  }

  static propertyControls: PropertyControls<Props> = {

    text: { type: ControlType.String, title: "text" },   

  }
}

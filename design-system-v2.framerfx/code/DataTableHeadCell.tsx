import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper"

type Props = System.DataTableHeadCellProps & {
  text: string;
}

export class DataTableHeadCell extends React.Component<Props> {
  render() {
    return <System.DataTableHeadCell {...this.props} />
  }

  static defaultProps: Props = {
    text: "Text",
  }

  static propertyControls: PropertyControls<Props> = {
    alignEnd: { type: ControlType.Boolean, title: "Align End" },
    alignMiddle: { type: ControlType.Boolean, title: "Align Middle" },
    alignStart: { type: ControlType.Boolean, title: "Align Start" },
    // onSortChange
    sort: { type: ControlType.Number, title: "Align Start" },

    text: { type: ControlType.String, title: "Text" },
  }
}

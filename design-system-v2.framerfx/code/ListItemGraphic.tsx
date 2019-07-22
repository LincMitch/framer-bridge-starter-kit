import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import FramerXWrapper from "./FramerXWrapper";
import {
  themePropertyControls,
  spacingPropertyControls,
  processSpacingProps
} from "./framerx-integration";


type Props = System.ListItemGraphicProps & {

}

export class ListItemGraphic extends React.Component<Props> {
  render() {
    const {  ...rest } = this.props;
    return (
      <FramerXWrapper>
        <System.ListItemGraphic {...this.props} />
      </FramerXWrapper>
    )
  }

  static defaultProps: Props = {
    icon: "star",
  }

  static propertyControls: PropertyControls<Props> = {
    icon: { type: ControlType.String, title: "Icon" },   
    ...themePropertyControls("typography"),
    ...spacingPropertyControls()
  }
}

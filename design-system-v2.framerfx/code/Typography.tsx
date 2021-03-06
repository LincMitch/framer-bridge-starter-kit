import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import "@material/typography/dist/mdc.typography.css";

// ***
// THIS NEEDS TO COME FROM SYSTEM.TYPOGRAPHY. BUT HOW DO YOU AUTO POPULATE VARIANTS?
// ***
import { Typography as _Typography, TypographyT } from "@rmwc/typography";
import FramerXWrapper from "./FramerXWrapper";
import {
  themePropertyControls,
  spacingPropertyControls,
  processSpacingProps
} from "./framerx-integration";

type Props = { text: string; variant: TypographyT; tag: string };

export class Typography extends React.Component<Props> {
  render() {
    const { text, variant, ...rest } = processSpacingProps(this.props);
    return (
      <FramerXWrapper>
        <_Typography use={variant} {...rest}>
          {text}
          
        </_Typography>
      </FramerXWrapper>
    );
  }

  static defaultProps: Props = {
    variant: "body1",
    text: "Hello world",
    tag: "div"
  };

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
    variant: {
      type: ControlType.Enum,
      title: "variant",
      options: [
        "headline1",
        "headline2",
        "headline3",
        "headline4",
        "headline5",
        "headline6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "button",
        "overline"
      ]
    },
    tag: {
      type: ControlType.Enum,
      title: "Tag",
      options: ["div", "span", "h1", "h2", "h3", "h4", "h5"]
    },
    ...themePropertyControls("typography"),
    ...spacingPropertyControls()
  };
}

_Typography.displayName = "Typography";

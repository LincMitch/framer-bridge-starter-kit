import * as React from "react"
import {
  Frame,
  FrameProps,
  addPropertyControls,
  ControlType,
} from "framer"
import * as System from "../../design-system"
import {
  themePropertyControls,
} from "./framerx-integration";
import FramerXWrapper from "./FramerXWrapper"

// import FramerXWrapper from "./FramerXWrapper"

type Props = Partial<FrameProps> &
    Partial<{
        // optional props
        // photo: string
    }> & {
        // required props
        text: string
    }


    export const TopAppBarTitle = (props: Props) => {
      // Destructure out all the custom props
      // const { style, ...rest } = props
      const { text, style, ...rest } = props;
  
      return (
          <FramerXWrapper
                // First, declare any custom props that may be overrided
              // borderRadius={"100%"}
              // backgroundColor={"lime"}
              // Next, spread in all the container props
              {...rest}
              // Finally, declare any forced props
              // backgroundColor={"#0099ff"}

              style={{
                  // color: "#FFF",
                  // If you're using style, spread in props.style too
                  ...style,
              }}
          >
              {/* <System.TopAppBarTitle {...this.props} ></System.TopAppBarTitle> */}
              <System.TopAppBarTitle {...rest}>
                {text}
              </System.TopAppBarTitle>
          </FramerXWrapper>
      )
  }

  TopAppBarTitle.defaultProps = {
    height: 48, // set default props to control starting size on canvas
    width: 48,
    text: "Title"
    // and set defaults for any required props
}

addPropertyControls(TopAppBarTitle, {
  ...themePropertyControls("typography"),
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Title",
  },
  // color: {
  //   title: "Color",
  //   type: ControlType.Color,
  //   defaultValue: "none",
  // },
  // backgroundColor: {
  //     title: "Background Color",
  //     type: ControlType.Color,
  //     defaultValue: "none",
  // },

})
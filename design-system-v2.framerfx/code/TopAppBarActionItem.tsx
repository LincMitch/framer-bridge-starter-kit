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
  iconPropertyControls, 
  processIconProps
} from "./framerx-integration";
import FramerXWrapper from "./FramerXWrapper"

// import FramerXWrapper from "./FramerXWrapper"

type Props = Partial<FrameProps> &
    Partial<{
        // optional props
        // photo: string
    }> & {
        // required props
        // icon: string
    }


    export const TopAppBarActionItem = (props: Props) => {
      // Destructure out all the custom props
      // const { style, ...rest } = props
      const { style, ...rest } = processIconProps(props);
  
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
              {/* <System.TopAppBarActionItem {...this.props} ></System.TopAppBarActionItem> */}
              <System.TopAppBarActionItem {...rest} ></System.TopAppBarActionItem>
          </FramerXWrapper>
      )
  }

  TopAppBarActionItem.defaultProps = {
    height: 48, // set default props to control starting size on canvas
    width: 48,
    // and set defaults for any required props
}

addPropertyControls(TopAppBarActionItem, {
  ...iconPropertyControls(),
  ...themePropertyControls("icon"),
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "none",
  },
  backgroundColor: {
      title: "Background Color",
      type: ControlType.Color,
      defaultValue: "none",
  },
  borderRadius: {
    title: "Border Radius",
    type: ControlType.Number,
    defaultValue: 100,
  },
  // checked: {
  //   title: "Checked",
  //   type: ControlType.Boolean,
  //   defaultValue: undefined,
  // },
  // disabled: {
  //   title: "Disabled",
  //   type: ControlType.Boolean,
  //   defaultValue: undefined,
  // },
  // onChange: {
  //   title: "On Change",
  //   type: ControlType.,
  //   defaultValue: undefined,
  // },
  // onIcon: {
  //   title: "On Icon",
  //   type: ControlType.,
  //   defaultValue: undefined,
  // },
  // ripple: {
  //   title: "Ripple",
  //   type: ControlType.,
  //   defaultValue: undefined,
  // },
})
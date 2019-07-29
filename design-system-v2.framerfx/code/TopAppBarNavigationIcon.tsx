import * as React from "react"
import {
  Frame,
  FrameProps,
  addPropertyControls,
  ControlType,
  RenderTarget
} from "framer"
import { useLocation, useRouter } from "wouter"
import { useData, animations } from "./SharedData"
import * as System from "../../design-system"
import {
  themePropertyControls,
  iconPropertyControls, 
  processIconProps
} from "./framerx-integration";

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api
const animationsArray = Object.keys(animations)
// Set default properties


type Props = Partial<FrameProps> &
    Partial<{
        // optional props
        // photo: string
    }> & {
        // required props
        // icon: string
    }


    export const TopAppBarNavigationIcon = (props: Props) => {
      // Destructure out all the custom props
      // const { style, ...rest } = props
      const { style, ...rest } = processIconProps(props);
      const [toggle, setToggle] = useData()
      const router = useRouter()
      const [location, setLocation] = useLocation()
      const handleLocation = () => {
          router.animation = animations[props.animation]
          setLocation(`/preview/${props.path.toLowerCase()}`)
      }
      if (RenderTarget.current() === RenderTarget.thumbnail) {
        return (
            <Frame
                size={"100%"}
                background="Black"
                radius="20%"
            >
                <Frame size="70%" background="transparent" center>
                    <svg width="100%" height="100%" viewBox="0 0 207 213">
                        <g fill="none" stroke-width="10" stroke="#FFF">
                            <path d="M56.8 117L54 117C33 117 16 100 16 79L16 79C16 58 33 41 54 41L94 41C115 41 132 58 132 79L132 81C132 100.9 115.9 117 96 117L96 117" />
                            <path d="M146.5 77L146.5 77C167.2 77 184 93.8 184 114.5L184 115C184 136 167 153 146 153L106 153C85 153 68 136 68 115L68 115C68 94 85 77 106 77L113 77" />
                        </g>
                    </svg>
                </Frame>
            </Frame>
        )
    } else
        return (
                <System.TopAppBarNavigationIcon
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
                onClick={handleLocation}/>

        )
  }

  TopAppBarNavigationIcon.defaultProps = {
    height: 48, // set default props to control starting size on canvas
    width: 48,
    path: "",
    animation: animationsArray[0],
    // and set defaults for any required props
}

addPropertyControls(TopAppBarNavigationIcon, {
  ...iconPropertyControls(),
  path: {
    type: ControlType.String,
    title: "Path",
    placeholder: "Artboard name",
  },
  animation: {
      type: ControlType.Enum,
      defaultValue: animationsArray[0],
      options: animationsArray,
      optionTitles: animationsArray,
  },
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
  checked: {
    title: "Checked",
    type: ControlType.Boolean,
    defaultValue: undefined,
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: undefined,
  }
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
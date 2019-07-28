import * as React from "react"
import { useLocation, useRouter } from "wouter"
import { Frame, addPropertyControls, ControlType, RenderTarget } from "framer"
import { AnimatePresence } from "framer-motion"
import { animations, useData } from "./SharedData"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api
const animationsArray = Object.keys(animations)

Navigation.defaultProps = {
    animation: animationsArray[0],
    firstPath: "home",
    toggleHotposts: true,
}

addPropertyControls(Navigation, {
    children: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.ComponentInstance,
        },
    },
    animation: {
        type: ControlType.Enum,
        defaultValue: animationsArray[0],
        options: animationsArray,
        optionTitles: animationsArray,
    },
    firstPath: {
        type: ControlType.String,
        title: "First Path",
        placeholder: "Nome artboard",
    },
    toggleHotposts: {
        type: ControlType.Boolean,
        title: "Show hotspots",
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
})
export function Navigation(props) {
    const [toggle, setToggle] = useData()
    const router = useRouter()
    const [location, setLocation] = useLocation()

    router.animation = router.animation || animations[props.animation]

    React.useEffect(() => {
        if (RenderTarget.current() === RenderTarget.canvas)
            setToggle(props.toggleHotposts)
    }, [props.toggleHotposts])

    if (RenderTarget.current() === RenderTarget.canvas) {
        return props.children.map((el, i) => {
            return (
                el.props.name.toLowerCase() === props.firstPath && (
                    <Frame size={"100%"} background="transparent" key={i}>
                        {el}
                    </Frame>
                )
            )
        })
    } else if (
        RenderTarget.current() === RenderTarget.thumbnail ||
        RenderTarget.current() === RenderTarget.export
    ) {
        return (
            <Frame
                size={"100%"}
                // background="linear-gradient(180deg, rgba(61, 242, 248) 0%, rgba(6, 165, 194) 100%)"
                background="lime"
                radius="20%"
            >
                <Frame size="70%" background="transparent" center>
                    <svg width="100%" height="100%" viewBox="0 0 284 284">
                        <g
                            fill="none"
                            stroke-width="15"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M 62 100 L 25 137 L 259.5 137 L 222.5 100" />
                            <path d="M 62 170 L 25 137 L 259.5 137 L 222.5 170" />
                        </g>
                    </svg>
                </Frame>
            </Frame>
        )
    } else
        return (
            <AnimatePresence initial={false} style={{ overflow: "hidden" }}>
                {props.children.map((el, i) => {
                    const loc =
                        location === "/preview/" ||
                        location === "/_app/resources/Vekter/preview.html"
                            ? "/preview/" + props.firstPath
                            : location

                    return (
                        loc === "/preview/" + el.props.name.toLowerCase() && (
                            <Frame
                                size={"100%"}
                                background="pink"
                                key={i}
                                {...router.animation}
                            >
                                {el}
                            </Frame>
                        )
                    )
                })}
            </AnimatePresence>
        )
}

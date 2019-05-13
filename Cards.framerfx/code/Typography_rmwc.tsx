import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { Typography } from "@rmwc/typography"
import "@material/typography/dist/mdc.typography.css"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Typography_rmwc(props) {
    return <Typography use={props.use}>{props.text}</Typography>
}

Typography_rmwc.defaultProps = {
    text: "Hello World!",
    use: "body1",
}

addPropertyControls(Typography_rmwc, {
    text: { type: ControlType.String, title: "Text" },
    use: { type: ControlType.String, title: "Use" },
})


import * as React from "react"
import { CardMediaContent as _CardMediaContent} from "@rmwc/card"
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';


// Types
export type Props = {
  children: React.ReactNode;
}

// Component
export const CardMediaContent: React.FC<Props> = ({
  children,
}) =>  (
  <_CardMediaContent>
    {children}
  </_CardMediaContent>
)
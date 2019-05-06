
import * as React from "react"
import { CardActionIcons as _CardActionIcons} from "@rmwc/card"
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
  children: React.ReactNode;
}

// Component
export const CardActionIcons: React.FC<Props> = ({
  children,
}) =>  (
  
  <FramerXWrapper>
    <_CardActionIcons>
      {children}
    </_CardActionIcons>
  </FramerXWrapper>
)
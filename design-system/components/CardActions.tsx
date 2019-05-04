
import * as React from "react"
import { CardActions as _CardActions} from "@rmwc/card"
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
  children: React.ReactNode;
}

// Component
export const CardActions: React.FC<Props> = ({
  children,
}) =>  (
  
  <FramerXWrapper>
    <_CardActions
      children={children}
    />
    </FramerXWrapper>
)

import * as React from "react"
import { CardPrimaryAction as _CardPrimaryAction} from "@rmwc/card"
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
  children: React.ReactNode;
}

// Component
export const CardPrimaryAction: React.FC<Props> = ({
  children,
}) =>  (
  
  <FramerXWrapper>
    <_CardPrimaryAction
      children={children}
    />
    </FramerXWrapper>
)
import * as React from "react"
import { Typography as _Typography} from "@rmwc/typography"
import '@material/typography/dist/mdc.typography.css';
import FramerXWrapper from './FramerXWrapper';

import { Theme } from "@rmwc/theme"
import '@material/theme/dist/mdc.theme.css';
// import { theme } from "../theme"
import styled from "styled-components"

// Types
export type Props = {
  use: string;
  text: string;
  color: string;
  theme: string;
 }

// Component
export const Typography: React.FC<Props> = ({
  use,
  text,
  theme,
  ...rest
  
} ) =>  (
  
  <FramerXWrapper>
    <Theme use={theme}>
      <Styled_Typography 
        use={use}
        {...rest} >
        {text}
        </Styled_Typography>
      </Theme>
    </FramerXWrapper>
)


const Styled_Typography = styled(_Typography)`
`
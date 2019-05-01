import * as React from "react"
import { Typography as _Typography} from "@rmwc/typography"
import '@material/typography/dist/mdc.typography.css';
import FramerXWrapper from './FramerXWrapper';


// Types
export type Props = {
  use: string;
  text: string;
 }

// Component
export const Typography: React.FC<Props> = ({
  use,
  text,
  ...rest
  
} ) =>  (
  
  <FramerXWrapper>
    <_Typography 
      use={use}
      {...rest} >
      {text}
      </_Typography>
    </FramerXWrapper>
)
import * as React from "react"
import { LinearProgress as _LinearProgress} from "@rmwc/linear-progress"
import '@material/linear-progress/dist/mdc.linear-progress.css';
import FramerXWrapper from './FramerXWrapper';


// Types
export type Props = {
  buffer?: number;
  closed?: boolean;
  progress?: number;
  reversed?: boolean;
}

// Component
export const LinearProgress: React.FC<Props> = ({
  buffer,
  closed,
  progress,
  reversed,
  ...rest
  
}) =>  (
  
  <FramerXWrapper>
    <_LinearProgress 
      buffer={buffer}
      closed={closed}
      progress={progress}
      reversed={reversed}
      {...rest} >
      </_LinearProgress>
    </FramerXWrapper>
)
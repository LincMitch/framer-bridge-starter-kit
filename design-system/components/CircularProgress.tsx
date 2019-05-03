import * as React from "react"
import { CircularProgress as _CircularProgress} from "@rmwc/circular-progress
import '@rmwc/circular-progress/circular-progress.css';
import FramerXWrapper from './FramerXWrapper';


// Types
export type Props = {
  max?: number;
  min?: number;
  progress?: number;
  size?: string;
}

// Component
export const CircularProgress: React.FC<Props> = ({
  max,
  min,
  progress,
  size,
  ...rest
  
}) =>  (
  
  <FramerXWrapper>
    <_CircularProgress 
      max={max}
      min={min}
      progress={progress}
      size={size}
      {...rest} >
      </_CircularProgress>
    </FramerXWrapper>
)
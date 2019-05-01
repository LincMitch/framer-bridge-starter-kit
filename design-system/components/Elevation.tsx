import * as React from "react"
import { Elevation as _Elevation} from "@rmwc/Elevation"
import '@material/elevation/dist/mdc.elevation.css';



// Types
export type Props = {
  height: string;
  width: string;
  transition?: boolean;
  wrap?: boolean;
  z?: number;
}

// Component
export const Elevation: React.FC<Props> = ({
  height,
  width,
  transition,
  wrap,
  z,
  ...rest
  
}) =>  (
    <_Elevation  z={z} wrap={wrap}>  
      <span>Elevation</span>
    </_Elevation>
)

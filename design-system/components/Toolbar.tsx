import * as React from "react"
import { Toolbar as _Toolbar} from "@rmwc/toolbar"
import '@material/toolbar/dist/mdc.toolbar.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
  fixed?: string;
  fixedLastrowOnly?: boolean;
  flexible?: boolean;
  flexibleDefaultBehavior?: string;
  waterfall?: string;
}

// Component
export const Toolbar: React.FC<Props> = (
  {
  fixed,
  fixedLastrowOnly,
  flexible,
  waterfall,
  ...rest
} 


)  => { 

  return (
  <FramerXWrapper>
    <_Toolbar 
      fixed={fixed}
      fixedLastrowOnly={fixedLastrowOnly}
      flexible={flexible}
      waterfall={waterfall}
      {...rest} >
      
    </_Toolbar>
  </FramerXWrapper>
);
};
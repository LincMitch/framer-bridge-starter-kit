import * as React from "react"
import { Toolbar as _Toolbar} from "@rmwc/toolbar"
import '@material/toolbar/dist/mdc.toolbar.css';
import FramerXWrapper from './FramerXWrapper';

import { Theme } from "@rmwc/theme"
// Types
export type Props = {
  fixed?: string;
  fixedLastrowOnly?: boolean;
  flexible?: boolean;
  flexibleDefaultBehavior?: string;
  waterfall?: string;

  theme?: string;
}

// Component
export const Toolbar: React.FC<Props> = (
  {
  fixed,
  fixedLastrowOnly,
  flexible,
  waterfall,
  theme,
  ...rest
} 


)  => { 

  return (
  <FramerXWrapper>
    <Theme use={theme}>
      <_Toolbar 
        fixed={fixed}
        fixedLastrowOnly={fixedLastrowOnly}
        flexible={flexible}
        waterfall={waterfall}
        {...rest} >
        
      </_Toolbar>
    </Theme>
  </FramerXWrapper>
);
};
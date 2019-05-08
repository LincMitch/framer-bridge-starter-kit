import * as React from "react";
import {ChipSet, Chip} from "@rmwc/chip";
import '@material/chips/dist/mdc.chips.css';
import FramerXWrapper from './FramerXWrapper';


// Component
export const Chip2: React.FC = ({

}) =>  (
  
  <FramerXWrapper>
    <ChipSet>
      <Chip label="Cookies" />
      <Chip label="Pizza" />
      <Chip label="Icecream" />
    </ChipSet>
  </FramerXWrapper>
)

import * as React from "react"
import { AvatarGroup as _AvatarGroup} from "@rmwc/avatar"
import '@rmwc/avatar/avatar.css';
import FramerXWrapper from './FramerXWrapper';

// Types
export type Props = {
  dense: boolean;
}

// Component
export const AvatarGroup: React.FC<Props> = ({
  dense,
}) =>  (
  
  <FramerXWrapper>
    <_AvatarGroup
      dense={dense}
    />
    </FramerXWrapper>
)

import * as React from "react"
import { TopAppBarActionItem as _TopAppBarActionItem} from "@rmwc/top-app-bar"
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

// Types
export type Props = {
  icon?: string
}

// Component
export const TopAppBarActionItem: React.FC<Props> = ({
  icon,
}) =>  (
  

    <_TopAppBarActionItem icon={icon} />

)
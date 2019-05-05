
import * as React from "react"
import { TopAppBarNavigationIcon as _TopAppBarNavigationIcon} from "@rmwc/top-app-bar"
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

// Types
export type Props = {
  icon?: string
}

// Component
export const TopAppBarNavigationIcon: React.FC<Props> = ({
  icon,
}) =>  (
  

    <_TopAppBarNavigationIcon icon={icon} />

)
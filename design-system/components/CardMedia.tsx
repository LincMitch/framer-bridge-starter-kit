import * as React from "react"
import { CardMedia as _CardMedia, CardMediaContent} from "@rmwc/card"
import '@material/card/dist/mdc.card.css';

// Types
export type Props = {
  sixteenByNine?: boolean;
  square?: boolean;
}

// Component
export const CardMedia: React.FC<Props> = ({
  sixteenByNine,
  square,
  ...rest
  
} ) =>  (
  

    <_CardMedia 
      sixteenByNine={sixteenByNine}
      square={square}
      style={{
        width: "100%",
        height: "100%",
        backgroundImage:
          'url(https://material-components-web.appspot.com/images/16-9.jpg)'
      }}
      {...rest} 
      >
      </_CardMedia>

)
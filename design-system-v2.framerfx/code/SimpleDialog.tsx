import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"
import { cloneFrameless } from "../../design-system-v2.framerfx/node_modules/@framer/lintonye.learnreactdesign-ds/code/tools/framerx-utils";

type Props = System.SimpleDialogProps & {
  object: string[];
  externalObject: React.ReactNode;
  activeObjectIndex: number;
}

export class SimpleDialog extends React.Component<Props> {
  render() {
    const { object, externalObject, ...rest } = this.props;

    let objectElements;
    objectElements = cloneFrameless(externalObject); 

    return <System.SimpleDialog {...this.props} >{objectElements}</System.SimpleDialog>
  }

  
  static defaultProps: Props = {
    activeObjectIndex: 0
  }

  static propertyControls: PropertyControls<Props> = {
    // children: { type: ControlType.String, title: "Children" },
    stickyColumns: { type: ControlType.String, title: "Sticky Columns" },
    stickyRows: { type: ControlType.String, title: "Sticky Rows" },

    externalObject: {
      type: ControlType.ComponentInstance,
      title: "object"
    },  
    activeObjectIndex: {
      type: ControlType.Number,
      title: "Index",
      min: 0
    }
  }
}

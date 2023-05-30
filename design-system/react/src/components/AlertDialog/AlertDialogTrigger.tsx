import * as RAlertDialog from '@radix-ui/react-alert-dialog';
import { createElement } from 'react';

import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

export const AlertDialogTrigger =
  _unstable_createComponent<t.AlertDialogTriggerDef>(
    Components.AlertDialogTrigger,
    (props) => {
      const classes = useStyles(styles);
      const elementProps = useElementProps(props, classes.trigger);
      return createElement(RAlertDialog.AlertDialogTrigger, elementProps);
    }
  );

AlertDialogTrigger.defaultProps = {
  asChild: true,
};

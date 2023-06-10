import { createElement } from 'react';

import { _unstable_createComponent } from '../../utils';

import type { DialogFooterDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

export const DialogFooter = _unstable_createComponent<DialogFooterDef>(
  Components.DialogFooter,
  ({ as = 'footer', children, ...props }) => {
    const classes = useStyles(styles, {}, ['footer']);
    return createElement(
      as,
      { ...props, className: classes.footer.className },
      children
    );
  }
);

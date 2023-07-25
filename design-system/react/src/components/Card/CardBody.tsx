/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement } from 'react';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import type { CardBodyDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

// eslint-disable-next-line @typescript-eslint/naming-convention
const _CardBody = _unstable_createComponent<CardBodyDef>(
  Components.CardBody,
  ({ as = 'div', children, ...props }) => {
    const classes = useStyles(styles, props as any, ['body']);
    const elementProps = { ...props, className: classes.body.className };
    return createElement(as, elementProps, children);
  }
);

export const CardBody = createPolymorphicComponent<CardBodyDef>(_CardBody);

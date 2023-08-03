import { cx } from '@fuel-ui/css';
import type { ReactElement } from 'react';
import { Children, cloneElement } from 'react';
import { createComponent } from '~/utils';

import type { ButtonProps } from '..';
import { Button } from '..';

import { useDrawer } from '.';

type ElementType = 'button';
type DrawerTriggerProps = ButtonProps & {
  asChild?: boolean;
};

export const DrawerTrigger = createComponent<
  DrawerTriggerProps,
  unknown,
  unknown,
  ElementType
>(({ className, asChild = true, children, ...props }) => {
  const classes = cx('fuel_DrawerTrigger', className);
  const { state } = useDrawer();

  function handleToggle() {
    state?.toggle();
  }

  if (asChild) {
    return (
      <>
        {Children.toArray(Children.only(children)).map((child) => {
          return cloneElement(child as ReactElement, {
            onPress: handleToggle,
            className: classes,
          });
        })}
      </>
    );
  }

  return (
    <Button {...props} onPress={handleToggle}>
      {children}
    </Button>
  );
});

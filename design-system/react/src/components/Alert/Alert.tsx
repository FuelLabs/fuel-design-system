/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Colors } from '@fuel-ui/css';
import { cx } from '@fuel-ui/css';
import { Children, cloneElement, createContext, useContext } from 'react';

import { createComponent } from '../../utils';
import type { BoxProps } from '../Box';
import { Box } from '../Box';
import { Flex } from '../Flex';
import type { Icons } from '../Icon';
import { Icon } from '../Icon';

import { AlertActions } from './AlertActions';
import { AlertButton } from './AlertButton';
import { AlertDescription } from './AlertDescription';
import { AlertTitle } from './AlertTitle';
import * as styles from './styles';

export type AlertStatus = 'info' | 'warning' | 'success' | 'error';
type ContextProps = {
  status?: AlertStatus;
};

const ctx = createContext<ContextProps>({});
export function useAlertProps() {
  return useContext(ctx);
}

export type AlertProps = BoxProps & {
  direction?: 'row' | 'column';
  status?: AlertStatus;
  color?: Colors;
};

type ObjProps = {
  id: string;
  Title: typeof AlertTitle;
  Description: typeof AlertDescription;
  Actions: typeof AlertActions;
  Button: typeof AlertButton;
};

type IconProps = {
  icon: Icons;
};

const STATUS_ICONS: Record<string, IconProps> = {
  info: { icon: 'WarningCircle' },
  warning: { icon: 'Warning' },
  success: { icon: 'CheckCircle' },
  error: { icon: 'XCircle' },
};

export const Alert = createComponent<AlertProps, ObjProps>(
  ({
    direction = 'column',
    status = 'info',
    children,
    className,
    color,
    ...props
  }) => {
    const classes = cx(
      'fuel_alert',
      className,
      styles.root({ status, direction })
    );

    const customProps = {
      ...props,
      direction,
      className: classes,
    };
    const items = Children.toArray(children).map((child: any) => {
      if (child?.type?.id === 'AlertActions') {
        return cloneElement(child);
      }
      return child;
    });

    return (
      <ctx.Provider value={{ status }}>
        <Box {...customProps}>
          <Box className="fuel_alert--icon">
            {color ? (
              <Icon color={color} {...STATUS_ICONS[status]} />
            ) : (
              <Icon {...STATUS_ICONS[status]} />
            )}
          </Box>
          <Flex className="fuel_alert--content">{items}</Flex>
        </Box>
      </ctx.Provider>
    );
  }
);

Alert.id = 'Alert';
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
Alert.Actions = AlertActions;
Alert.Button = AlertButton;

import { colorKeys } from "@fuel/css";
import { FaCalendar } from "react-icons/fa";

import { Box } from "../Box";
import { Icon } from "../Icon";

import type { ButtonProps } from "./Button";
import { Button } from "./Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "md",
      control: "select",
    },
    color: {
      options: colorKeys,
      defaultValue: "accent",
      control: "select",
    },
    variant: {
      defaultValue: "solid",
      control: "select",
    },
    leftIcon: {
      options: Icon._iconList,
      control: "select",
    },
    rightIcon: {
      options: Icon._iconList,
      control: "select",
    },
  },
};

export const Sizes = (args: ButtonProps) => (
  <Box css={styles.wrapper}>
    <Button {...args} size="xs">
      Button
    </Button>
    <Button {...args} size="sm">
      Button
    </Button>
    <Button {...args} size="md">
      Button
    </Button>
    <Button {...args} size="lg">
      Button
    </Button>
  </Box>
);

export const Variants = (args: ButtonProps) => (
  <Box css={styles.wrapper}>
    <Button {...args} variant="solid">
      Button
    </Button>
    <Button {...args} variant="outlined">
      Button
    </Button>
    <Button {...args} variant="ghost">
      Button
    </Button>
    <Button {...args} variant="link">
      Button
    </Button>
  </Box>
);

export const Colors = (args: ButtonProps) => (
  <Box css={styles.gridList}>
    {colorKeys.map((color) => (
      <Button key={color} {...args} color={color}>
        Button
      </Button>
    ))}
  </Box>
);

export const WithIcon = (args: ButtonProps) => (
  <Box css={styles.wrapper}>
    <Button {...args} leftIcon="BiCalendar" leftIconAriaLabel="calendar">
      Button
    </Button>
    <Button {...args} rightIcon="BiCalendar" leftIconAriaLabel="calendar">
      Button
    </Button>
    <Button
      {...args}
      leftIcon="BiCalendar"
      leftIconAriaLabel="calendar"
      rightIcon="BiCalendar"
      rightIconAriaLabel="calendar"
    >
      Button
    </Button>
    <Button {...args} leftIcon={FaCalendar} leftIconAriaLabel="calendar">
      Button
    </Button>
  </Box>
);

export const Loading = (args: ButtonProps) => (
  <Box css={styles.wrapper}>
    <Button {...args} isLoading>
      Button
    </Button>
  </Box>
);

export const Disabled = (args: ButtonProps) => (
  <Box css={styles.wrapper}>
    <Button {...args} isDisabled>
      Button
    </Button>
  </Box>
);

/**
 * Styles
 */
const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "$4",
  },
  gridList: {
    display: "grid",
    gap: "$4",
    gridTemplateColumns: "repeat(6, 1fr)",
  },
};

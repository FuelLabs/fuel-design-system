import { cx, styled } from "@fuel-ui/css";
import { createElement, createContext, useContext } from "react";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";
import { useFormControlProps } from "../Form/FormControl";

import { InputAddonLeft, InputAddonRight } from "./InputAddon";
import { InputElementLeft, InputElementRight } from "./InputElement";
import { InputField } from "./InputField";
import * as styles from "./styles";

export type InputSizes = "sm" | "md" | "lg";
export type InputProps = {
  size?: InputSizes;
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isFullWidth?: boolean;
  describedBy?: string;
};

const ctx = createContext<InputProps>({});
export function useInputProps() {
  return useContext(ctx);
}

const Root = styled("div");

export const Input = createComponent<InputProps>(
  ({
    size = "md",
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    isFullWidth,
    describedBy,
    className,
    children,
    ...props
  }) => {
    const formControlProps = useFormControlProps();
    const disabled =
      isDisabled ||
      isReadOnly ||
      formControlProps.isDisabled ||
      formControlProps.isReadOnly;

    const classes = cx(
      "fuel_input",
      className,
      styles.input({
        size,
        disabled,
        required: isRequired || formControlProps.isRequired,
        invalid: isInvalid || formControlProps.isInvalid,
        full: isFullWidth,
      })
    );

    const providerProps = {
      size,
      isRequired,
      isInvalid,
      isDisabled,
      isReadOnly,
      describedBy,
      ...formControlProps,
    };

    const inputProps = {
      ...props,
      className: classes,
    };

    return (
      <ctx.Provider value={providerProps}>
        {createElement(Root, inputProps, children)}
      </ctx.Provider>
    );
  }
) as CreateComponent<InputProps> & {
  id: string;
  AddonLeft: typeof InputAddonLeft;
  AddonRight: typeof InputAddonRight;
  ElementLeft: typeof InputElementLeft;
  ElementRight: typeof InputElementRight;
  Field: typeof InputField;
};

Input.id = "Input";
Input.AddonLeft = InputAddonLeft;
Input.AddonRight = InputAddonRight;
Input.ElementLeft = InputElementLeft;
Input.ElementRight = InputElementRight;
Input.Field = InputField;

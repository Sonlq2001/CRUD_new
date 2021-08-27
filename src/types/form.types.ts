import { InputHTMLAttributes } from "react";

/**
 * Export form validator types
 */
export type formValidators = "email" | "required" | "min" | "max" | "pattern";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  [key: string]: string | undefined;
};

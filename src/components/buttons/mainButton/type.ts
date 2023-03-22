import { btnColorProps } from "../../../types/colors";

export interface ButtonTypes extends btnColorProps {
  /**
   * Type of button
   */
  type?: "button" | "submit" | "reset";
  /**
   * Title of button
   */
  title: string;
  onClick: () => void;
}

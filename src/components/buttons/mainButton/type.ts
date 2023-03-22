import { btnColorType } from "../../../types/colors";

export interface ButtonTypes extends btnColorType {
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

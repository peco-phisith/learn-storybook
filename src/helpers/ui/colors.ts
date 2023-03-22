import { btnColorType } from "../../types/colors";

export const getBtnColor = ({ color }: btnColorType) => {
  switch (color) {
    case "primary":
      return "btn-primary";
    case "secondary":
      return "btn-secondary";
    case "warning":
      return "btn-warning";
    default:
      return;
  }
};

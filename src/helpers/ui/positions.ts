import { JustifyContentProps } from "../../types/positions";

export const getJustifyContent = ({ position }: JustifyContentProps) => {
  switch (position) {
    case "end":
      return "justify-end";
    case "center":
      return "justify-center";
    default:
      return;
  }
};

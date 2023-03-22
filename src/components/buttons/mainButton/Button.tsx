import { getBtnColor } from "../../../helpers/ui/colors";
import { ButtonTypes } from "./type";

const Button = ({ type = "button", title, color, onClick }: ButtonTypes) => {
  return (
    <>
      <button
        type={type}
        className={`btn ${getBtnColor({ color })}`}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};
export default Button;

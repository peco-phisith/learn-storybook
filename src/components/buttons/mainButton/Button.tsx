import { ButtonTypes } from "./type";

const Button = (props: ButtonTypes) => {
  return (
    <>
      <button type={props.type} className="btn"></button>
    </>
  );
};
export default Button;

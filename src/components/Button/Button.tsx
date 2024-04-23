import "./Button.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick}>
      <p>{text}</p>
    </button>
  );
};

export default Button;

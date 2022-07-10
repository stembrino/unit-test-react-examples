type Props = {
  label: string;
  clickHandler: () => void;
};

const Button = ({ label, clickHandler }: Props) => {
  return <button onClick={clickHandler}>{label}</button>;
};

export default Button;

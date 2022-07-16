type Props = {
  label: string;
  onClick: () => void;
  ariaLabel?: string;
};

const Button = ({ label, onClick, ariaLabel }: Props) => {
  return (
    <button onClick={onClick} aria-label={ariaLabel}>
      {label}
    </button>
  );
};

export default Button;

import { FC } from 'react';

interface IButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;

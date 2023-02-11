import { FC } from 'react';

interface IButtonProps {
  label: string;
  size?: 'small' | 'default' | 'large';
  type?: 'warning' | 'success' | 'info' | 'error' | 'default';
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  label,
  size = 'default',
  type = 'default',
  onClick,
}) => {
  const buttonColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-600';
      case 'error':
        return 'bg-red-600';
      case 'warning':
        return 'bg-orange-600';
      case 'info':
        return 'bg-cyan-600';
      default:
        return 'bg-black';
    }
  };

  const buttonSize = () => {
    switch (size) {
      case 'small':
        return 'px-4 py-2';
      case 'large':
        return 'px-12 py-8';
      default:
        return 'px-8 py-4';
    }
  };

  return (
    <button
      className={`${buttonColor()} ${buttonSize()} rounded-md text-white`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

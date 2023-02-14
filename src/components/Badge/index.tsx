import { FC } from 'react';

interface IBadgeProps {
  label: string;
  type?: 'success' | 'error' | 'warning' | 'info' | 'default';
}

const Badge: FC<IBadgeProps> = ({ label, type = 'default' }) => {
  const badgeType = () => {
    switch (type) {
      case 'success':
        return 'bg-green-100 border-green-500 text-green-500';
      case 'error':
        return 'bg-red-100 border-red-500 text-red-500';
      case 'warning':
        return 'bg-yellow-100 border-yellow-500 text-yellow-500';
      case 'info':
        return 'bg-blue-100 border-blue-500 text-blue-500';
      default:
        return 'bg-gray-100 border-gray-500 text-gray-500';
    }
  };

  return (
    <span
      className={`${badgeType()} border rounded-md py-1 px-3 text-sm select-none`}
    >
      {label}
    </span>
  );
};

export default Badge;

import React from 'react';

interface IHelpCard {
  text: string;
  count: number | string;
  color: 'blue' | 'yellow' | 'green';
}
const HelpCard = ({ text, count, color }: IHelpCard) => {
  const colorVariants = {
    green: 'bg-green-600 hover:bg-blue-700',
    yellow: 'bg-yellow-500 hover:bg-yellow-600',
    blue: 'bg-blue-500 hover:bg-blue-500',
  };

  return (
    <div
      className={`flex justify-center flex-col items-center p-8 ${colorVariants[color]} text-white rounded-lg font-bold sm:text-lg`}
    >
      <p>{text}</p>
      <p>{count}</p>
    </div>
  );
};

export default HelpCard;

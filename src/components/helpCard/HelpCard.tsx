interface IHelpCard {
  text: string;
  count: number | undefined;
  color: 'blue' | 'yellow' | 'green';
}
const HelpCard = ({ text, count, color }: IHelpCard) => {
  const colorVariants = {
    green: 'bg-green-600',
    yellow: 'bg-yellow-500',
    blue: 'bg-blue-500',
  };

  return (
    <div
      className={`flex justify-center flex-col items-center p-8 ${colorVariants[color]} text-white rounded-lg sm:text-lg w-full`}
    >
      <p>{text}</p>
      <p className="text-3xl mt-4">{count}</p>
    </div>
  );
};

export default HelpCard;

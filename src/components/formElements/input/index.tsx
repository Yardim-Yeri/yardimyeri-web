import { FC } from 'react';

interface IInputProps {
  name: string;
  placeholder: string;
  type?: 'text';
}

const Input: FC<IInputProps> = ({ name, placeholder, type = 'text ' }) => (
  <input
    name={name}
    type={type}
    placeholder={placeholder}
    className="border-black border rounded-md p-4 w-full"
  />
);

export default Input;

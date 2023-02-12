/* eslint-disable @typescript-eslint/indent */
import { ChangeEvent, FC } from 'react';

export interface IInputProps {
  name: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?:
    | 'text'
    | 'email'
    | 'tel'
    | 'password'
    | 'url'
    | 'search'
    | 'number'
    | 'date'
    | 'range'
    | 'file';
}

const Input: FC<IInputProps> = ({
  name,
  placeholder,
  type = 'text',
  onChange,
  ...props
}) => (
  <input
    {...props}
    name={name}
    type={type}
    placeholder={placeholder}
    className="border-black border rounded-md p-4 w-full"
    onChange={onChange}
  />
);

export default Input;

import { ChangeEvent, FC } from 'react';
import InputMask from 'react-input-mask';
import Input from '.';

interface IInputPhoneProps {
  name: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputPhone: FC<IInputPhoneProps> = ({ name, onChange }) => (
  <InputMask
    name={name}
    mask="9999999999"
    onChange={onChange}
  >
    {(inputProps) => <Input {...inputProps} />}
  </InputMask>
);

export default InputPhone;

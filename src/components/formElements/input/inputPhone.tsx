import { ChangeEvent, FC } from 'react';
import InputMask from 'react-input-mask';
import Input, { IInputProps } from '.';

type IInputPhoneProps = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
} & Pick<IInputProps, 'name' | 'onChange' | 'placeholder'>;

const InputPhone: FC<IInputPhoneProps> = ({ name, onChange, placeholder }) => (
  <InputMask
    name={name}
    mask="9999999999"
    onChange={onChange}
    placeholder={placeholder}
  >
    {(inputProps) => <Input {...inputProps} />}
  </InputMask>
);

export default InputPhone;

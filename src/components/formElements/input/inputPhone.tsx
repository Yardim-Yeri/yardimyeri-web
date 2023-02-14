import { ChangeEvent, FC } from 'react';
import InputMask from 'react-input-mask';

type IInputPhoneProps = {
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputPhone: FC<IInputPhoneProps> = ({ onChange, name, ...props }) => (
  <InputMask
    {...props}
    name={name}
    placeholder="Telefon numarası"
    className="border-black border rounded-md p-4 w-full"
    mask="(999) 999 9999"
    onChange={onChange}
  />
);

export default InputPhone;

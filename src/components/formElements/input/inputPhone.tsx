import { ChangeEvent, FC } from 'react';
import InputMask from 'react-input-mask';

type IInputPhoneProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputPhone: FC<IInputPhoneProps> = ({ onChange }) => (
  <InputMask
    placeholder="Telefon numarası"
    className="border-black border rounded-md p-4 w-full"
    mask="(999) 999 9999"
    onChange={onChange}
  />
);

export default InputPhone;

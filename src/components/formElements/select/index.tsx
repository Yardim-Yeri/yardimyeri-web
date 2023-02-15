import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { FC, Fragment } from 'react';

import { ISelectValues } from '@/models/HelpForm';

interface ISelectProps {
  name: string;
  items: ISelectValues[] | undefined;
  value: ISelectValues;
  onChange?: (value?: ISelectValues) => void;
  disabled?: boolean;
  buttonColorType?: 'black' | 'white';
}

const Select: FC<ISelectProps> = ({
  name,
  items = [],
  disabled,
  value,
  onChange,
  buttonColorType = 'black',
}) => {
  const listClassName = ({ active }: { active: boolean }) =>
    `relative cursor-default select-none py-2 pl-10 pr-4 ${
      active ? 'bg-black text-white' : 'text-gray-800'
    }`;
  const buttonColor =
    buttonColorType === 'black'
      ? ' bg-black text-white'
      : ' bg-white text-black border-black border rounded-md';

  return (
    <Listbox
      value={value}
      onChange={onChange}
    >
      <div
        className={`${disabled && 'pointer-events-none opacity-60'} relative`}
      >
        <Listbox.Label>{name}</Listbox.Label>
        <Listbox.Button
          className={`relative w-full cursor-pointer rounded-md p-4 pr-10 text-left sm:text-sm ${buttonColor} `}
        >
          <span className="block truncate">{value?.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
            {items.map((item) => (
              <Listbox.Option
                key={item.name}
                className={listClassName}
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                      id="sdsdsds"
                    >
                      {item?.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        <CheckIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Select;

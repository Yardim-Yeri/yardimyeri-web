import { RadioGroup as RG } from '@headlessui/react';
import { FC } from 'react';

import { IRadioValues } from '@/models/HelpForm';

interface IRadioGroupProps {
  items: IRadioValues[];
  value: any; // library multi selection desteklemiyor any olarak biraklim simdilik
  name: string;
  onChange: (value: IRadioValues) => void;
}

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-6 w-6"
  >
    <circle
      cx={12}
      cy={12}
      r={12}
      fill="#fff"
      opacity="0.2"
    />
    <path
      d="M7 13l3 3 7-7"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RadioGroup: FC<IRadioGroupProps> = ({
  items,
  value,
  onChange,
  name,
  ...props
}) => {
  return (
    <RG
      {...props}
      value={value}
      onChange={onChange}
      className="grid grid-cols-2 sm:grid-cols-3 gap-2"
    >
      {items.map((item) => {
        const isCheckted = value.some(
          (val: IRadioValues) => val.label === item.label,
        );

        return (
          <RG.Option
            key={item.id}
            value={item}
            className={`${
              isCheckted
                ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-300'
                : ''
            } ${
              isCheckted ? 'bg-black text-white' : 'bg-white'
            } relative flex cursor-pointer rounded-md p-4 shadow-md focus:outline-none select-none`}
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                <div className="text-sm">
                  <RG.Label
                    as="p"
                    className={`font-medium  ${
                      isCheckted ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.label}
                  </RG.Label>
                </div>
              </div>
              {isCheckted && (
                <div className="shrink-0 text-white">
                  <CheckIcon />
                </div>
              )}
            </div>
            {/* {({ active, checked }) => {
              return (
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <RG.Label
                        as="p"
                        className={`font-medium  ${
                          checked ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {item.label}
                      </RG.Label>
                    </div>
                  </div>
                  {checked && (
                    <div className="shrink-0 text-white">
                      <CheckIcon />
                    </div>
                  )}
                </div>
              );
            }} */}
          </RG.Option>
        );
      })}
    </RG>
  );
};

export default RadioGroup;

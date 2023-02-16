import { IRadioValues, ISelectValues } from '@/models/HelpForm';

export const generateSelectValue = (
  arr: IRadioValues[] | undefined,
): ISelectValues[] | undefined => {
  return arr?.map((item) => {
    return {
      id: item.id,
      name: item.label,
      key: item.id,
    };
  });
};

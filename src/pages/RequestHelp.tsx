import { AxiosError } from 'axios';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';

import { regexp } from '@/utils/Constants';

import Loader from '@/components/Loader';
import Button from '@/components/formElements/button';
import Input from '@/components/formElements/input';
import InputPhone from '@/components/formElements/input/inputPhone';
import RadioGroup from '@/components/formElements/radioGroup';
import SelectLocation, {
  ISelectValuesState,
} from '@/components/formElements/select/SelectLocation';
import Map from '@/components/map';
import Layout from '@/components/shared/Layout';

import { postHelpForm } from '@/api/Help';
import { getNeeds } from '@/api/Needs';
import { IResponseType } from '@/models/General';
import { FormData, IRadioValues } from '@/models/HelpForm';

const RequestHelp = () => {
  const defaultValues = {
    name: '',
    phone_number: null,
    need_type: null,
    need_type_detail: '',
    how_many_person: null,
    apartment: '',
    for_directions: '',
    province_id: undefined,
    district_id: undefined,
    neighborhood_id: undefined,
    street_id: undefined,
    lat: null,
    lng: null,
  };
  const [type, setType] = useState<IRadioValues | null>(null);
  const [locationFields, setLocationFields] = useState<ISelectValuesState>({
    province_id: null,
    district_id: null,
    neighborhood_id: null,
    street_id: null,
  });

  const methods = useForm<FormData>({
    defaultValues,
    mode: 'onChange',
  });

  const { setValue, reset, clearErrors, handleSubmit, formState, control } =
    methods;

  const { name, phone_number, how_many_person, need_type } = formState.errors;
  const formReset = () => {
    setType(null);
    setLocationFields({
      province_id: null,
      district_id: null,
      neighborhood_id: null,
      street_id: null,
    });
    reset({
      name: '',
      phone_number: '',
      need_type: undefined,
      need_type_detail: '',
      how_many_person: '',
      apartment: '',
      for_directions: '',
      lat: null,
      lng: null,
      province_id: undefined,
      district_id: undefined,
      neighborhood_id: undefined,
      street_id: undefined,
    });
  };

  const { data: needsData, isLoading: needsLoading } = useQuery<IRadioValues[]>(
    'needs',
    getNeeds,
  );

  const formSendMutation = useMutation<
    IResponseType,
    AxiosError<IResponseType>,
    FormData,
    string
  >((payload) => postHelpForm(payload), {
    onError: (error) => {
      toast.error(
        `(${error.response?.status}) ${error.response?.data?.message}`,
      );
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
      }
      formReset();
      clearErrors();
    },
  });

  const handleTypeChange = (radioValue: IRadioValues) => {
    setValue('need_type', radioValue.label);
    setType(radioValue);
    clearErrors('need_type');
  };

  const onSubmit: SubmitHandler<FormData> = (fields) => {
    formSendMutation.mutate(fields);
  };

  return (
    <Layout formLayout>
      {(formSendMutation.isLoading || needsLoading) && <Loader />}
      <Helmet>
        <title>Yardımyeri.com - Yardım talebim var</title>
      </Helmet>
      <div className="flex justify-center items-center flex-col gap-7">
        <h1 className="text-lg sm:text-4xl font-bold w-3/4 text-center leading-relaxed">
          YARDIM TALEBİM VAR
        </h1>
        <FormProvider {...methods}>
          <form
            className="w-full flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: 'Bu alan zorunludur.',
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Adınız"
                  />
                )}
              />
              <span className="text-red-600 text-sm">{name?.message}</span>
            </div>
            <div>
              <Controller
                name="phone_number"
                control={control}
                rules={{
                  required: 'Bu alan zorunludur.',
                  pattern: {
                    value: regexp.phoneNumber,
                    message: 'Doğru formatta bir telefon numarası giriniz.',
                  },
                }}
                render={({ field }) => <InputPhone {...field} />}
              />
              <span className="text-red-600 text-sm">
                {phone_number?.message}
              </span>
            </div>
            <div className="border border-black rounded-md p-4">
              <h4 className="font-semibold mb-4">İhtiyaç Türü</h4>
              {needsLoading ? (
                <Loader />
              ) : (
                needsData && (
                  <>
                    <Controller
                      name="need_type"
                      control={control}
                      rules={{
                        required: 'Bu alan zorunludur.',
                      }}
                      render={({ field }) => (
                        <RadioGroup
                          {...field}
                          value={type}
                          items={needsData}
                          onChange={handleTypeChange}
                        />
                      )}
                    />
                    <span className="text-red-600 text-sm">
                      {need_type?.message}
                    </span>
                  </>
                )
              )}
            </div>
            <Controller
              name="need_type_detail"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Varsa İhtiyaç Türü Detayı"
                />
              )}
            />
            <div>
              <Controller
                name="how_many_person"
                control={control}
                rules={{
                  required: 'Bu alan zorunludur.',
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    placeholder="Kaç Kişinin İhtiyacı Var?"
                  />
                )}
              />
              <span className="text-red-600 text-sm">
                {how_many_person?.message}
              </span>
            </div>

            <Map />
            <SelectLocation
              setLocationFields={setLocationFields}
              locationFields={locationFields}
            />
            <div>
              <Controller
                name="apartment"
                control={methods.control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Apartman"
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="for_directions"
                control={methods.control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Adres Tarifi"
                  />
                )}
              />
            </div>
            <Button
              htmlType="submit"
              label="Yardım Talebi Gönder"
            />
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
};

export default RequestHelp;

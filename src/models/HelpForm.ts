export interface IRadioValues {
  id: number;
  label: string;
}

export interface ISelectValues {
  id: number;
  name: string;
  key?: number;
}

export type FormData = {
  name: string;
  phone_number: string | null;
  need_type: string | null;
  need_type_detail?: string;
  how_many_person: string | number | null;
  apartment?: string;
  for_directions?: string;
  province_id: number | undefined;
  district_id: number | undefined;
  neighborhood_id: number | undefined;
  street_id: number | undefined;
  lat: number | null;
  lng: number | null;
};

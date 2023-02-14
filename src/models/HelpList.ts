export interface IHelpListResponse {
  data: IHelpListItem[];
  links: ILinks;
  meta: IMeta;
  success_help_count: number;
  pending_help_count: number;
  process_help_count: number;
}

export interface IHelpListItem {
  id: number;
  name: null | string;
  phone_number: string;
  need: Need;
  how_many_person: number;
  address: string;
  for_directions: null | string;
  lat: null | string;
  lng: null | string;
  status: Status;
  created_at: string;
  updated_at: Date;
}

export interface Need {
  type: string;
  detail: null;
}

export enum Status {
  YardımBekliyor = 'Yardım Bekliyor',
  YardımGeliyor = 'Yardım Geliyor',
  YardımUlaştı = 'Yardım Ulaştı',
}

export interface ILinks {
  first: string;
  last: string;
  prev: null;
  next: string;
}

export interface IMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: ILink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface ILink {
  url: null | string;
  label: string;
  active: boolean;
}

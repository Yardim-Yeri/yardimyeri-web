export interface IUseFullLinksResponse {
  success: boolean;
  message: null;
  result: IUseFullLink[];
}

export interface IUseFullLink {
  id: number;
  title: string;
  url: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

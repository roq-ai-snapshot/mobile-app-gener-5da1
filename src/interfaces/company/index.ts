import { AppInterface } from 'interfaces/app';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  app?: AppInterface[];
  user?: UserInterface;
  _count?: {
    app?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}

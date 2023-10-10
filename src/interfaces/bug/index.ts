import { AppInterface } from 'interfaces/app';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BugInterface {
  id?: string;
  name: string;
  description?: string;
  status?: string;
  severity?: number;
  app_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  app?: AppInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BugGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  app_id?: string;
  user_id?: string;
}

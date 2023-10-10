import { BugInterface } from 'interfaces/bug';
import { FeatureInterface } from 'interfaces/feature';
import { TestCaseInterface } from 'interfaces/test-case';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AppInterface {
  id?: string;
  name: string;
  version?: string;
  release_date?: any;
  platform?: string;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  bug?: BugInterface[];
  feature?: FeatureInterface[];
  test_case?: TestCaseInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    bug?: number;
    feature?: number;
    test_case?: number;
  };
}

export interface AppGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  version?: string;
  platform?: string;
  company_id?: string;
  user_id?: string;
}

/* eslint-disable */
import { type CheckSelect, fetcher, marshal, makeUrl } from '@roq/client';
import { Fetcher, SWRConfiguration } from 'swr';
import type { Prisma, app, bug, company, feature, test_case, user } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';

export type RequestOptions = Record<string, any>;
export type SWRRequestOptions<Result, Error = any> = {
  disabled?: boolean;
  initialData?: Result;
} & SWRConfiguration<Result, Error, Fetcher<Result>>;

export const defaultEndpoint = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

interface AppSDK {
  create: <T extends Prisma.appCreateArgs, R extends CheckSelect<T, app, Prisma.appGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.appCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.appCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.appCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.appUpdateArgs, R extends Prisma.appGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.appUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.appUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.appUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.appUpsertArgs, R extends Prisma.appGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.appUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.appDeleteArgs, R extends Prisma.appGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.appDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.appDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.appDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.appFindManyArgs, R extends GetFindResult<Prisma.$appPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.appFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.appCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.appCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.appFindManyArgs,
    R extends GetFindResult<Prisma.$appPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.appFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.appFindFirstArgs, R extends GetFindResult<Prisma.$appPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.appFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface BugSDK {
  create: <T extends Prisma.bugCreateArgs, R extends CheckSelect<T, bug, Prisma.bugGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.bugCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.bugCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.bugCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.bugUpdateArgs, R extends Prisma.bugGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.bugUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.bugUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.bugUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.bugUpsertArgs, R extends Prisma.bugGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.bugUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.bugDeleteArgs, R extends Prisma.bugGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.bugDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.bugDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.bugDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.bugFindManyArgs, R extends GetFindResult<Prisma.$bugPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.bugFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.bugCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.bugCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.bugFindManyArgs,
    R extends GetFindResult<Prisma.$bugPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.bugFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.bugFindFirstArgs, R extends GetFindResult<Prisma.$bugPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.bugFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface CompanySDK {
  create: <T extends Prisma.companyCreateArgs, R extends CheckSelect<T, company, Prisma.companyGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.companyCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.companyCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.companyCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.companyUpdateArgs, R extends Prisma.companyGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.companyUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.companyUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.companyUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.companyUpsertArgs, R extends Prisma.companyGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.companyUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.companyDeleteArgs, R extends Prisma.companyGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.companyDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.companyDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.companyDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.companyFindManyArgs, R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.companyCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.companyCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.companyFindManyArgs,
    R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.companyFindFirstArgs, R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.companyFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface FeatureSDK {
  create: <T extends Prisma.featureCreateArgs, R extends CheckSelect<T, feature, Prisma.featureGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.featureCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.featureCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.featureCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.featureUpdateArgs, R extends Prisma.featureGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.featureUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.featureUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.featureUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.featureUpsertArgs, R extends Prisma.featureGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.featureUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.featureDeleteArgs, R extends Prisma.featureGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.featureDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.featureDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.featureDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.featureFindManyArgs, R extends GetFindResult<Prisma.$featurePayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.featureFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.featureCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.featureCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.featureFindManyArgs,
    R extends GetFindResult<Prisma.$featurePayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.featureFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.featureFindFirstArgs, R extends GetFindResult<Prisma.$featurePayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.featureFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Test_caseSDK {
  create: <T extends Prisma.test_caseCreateArgs, R extends CheckSelect<T, test_case, Prisma.test_caseGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.test_caseCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.test_caseCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.test_caseCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.test_caseUpdateArgs, R extends Prisma.test_caseGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.test_caseUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.test_caseUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.test_caseUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.test_caseUpsertArgs, R extends Prisma.test_caseGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.test_caseUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.test_caseDeleteArgs, R extends Prisma.test_caseGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.test_caseDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.test_caseDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.test_caseDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.test_caseFindManyArgs,
    R extends GetFindResult<Prisma.$test_casePayload<DefaultArgs>, T>[],
  >(
    args: Prisma.SelectSubset<T, Prisma.test_caseFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.test_caseCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.test_caseCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.test_caseFindManyArgs,
    R extends GetFindResult<Prisma.$test_casePayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.test_caseFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.test_caseFindFirstArgs,
    R extends GetFindResult<Prisma.$test_casePayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.test_caseFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface UserSDK {
  create: <T extends Prisma.userCreateArgs, R extends CheckSelect<T, user, Prisma.userGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.userCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.userFindManyArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.userCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.userCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.userFindManyArgs,
    R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.userFindFirstArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

export class RoqClient {
  private endpoint: string;
  private baseOptions: RequestOptions;

  public app: AppSDK;

  public bug: BugSDK;

  public company: CompanySDK;

  public feature: FeatureSDK;

  public test_case: Test_caseSDK;

  public user: UserSDK;

  constructor(endpoint: string = defaultEndpoint, baseOptions: RequestOptions = {}) {
    this.endpoint = endpoint;
    this.baseOptions = baseOptions;
    this.initSDK();
  }

  private initSDK() {
    const ctx = this;

    this.app = {
      create: async function createApp<
        T extends Prisma.appCreateArgs,
        R extends CheckSelect<T, app, Prisma.appGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.appCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/app/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyApp<T extends Prisma.appCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.appCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/app/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateApp<T extends Prisma.appUpdateArgs, R extends Prisma.appGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.appUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/app/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyApp<T extends Prisma.appUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.appUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/app/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertApp<T extends Prisma.appUpsertArgs, R extends Prisma.appGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.appUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/app/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteApp<T extends Prisma.appDeleteArgs, R extends Prisma.appGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.appDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/app/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyApp<T extends Prisma.appDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.appDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/app/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyApp<
        T extends Prisma.appFindManyArgs,
        R extends GetFindResult<Prisma.$appPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.appFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/app/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countApp<T extends Prisma.appCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.appCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/app/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountApp<
        T extends Prisma.appFindManyArgs,
        R extends GetFindResult<Prisma.$appPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.appFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.app.findMany(args, options),
          ctx.app.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstApp<
        T extends Prisma.appFindFirstArgs,
        R extends GetFindResult<Prisma.$appPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.appFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/app/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.bug = {
      create: async function createBug<
        T extends Prisma.bugCreateArgs,
        R extends CheckSelect<T, bug, Prisma.bugGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.bugCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/bug/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyBug<T extends Prisma.bugCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.bugCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/bug/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateBug<T extends Prisma.bugUpdateArgs, R extends Prisma.bugGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.bugUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/bug/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyBug<T extends Prisma.bugUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.bugUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/bug/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertBug<T extends Prisma.bugUpsertArgs, R extends Prisma.bugGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.bugUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/bug/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteBug<T extends Prisma.bugDeleteArgs, R extends Prisma.bugGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.bugDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/bug/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyBug<T extends Prisma.bugDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.bugDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/bug/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyBug<
        T extends Prisma.bugFindManyArgs,
        R extends GetFindResult<Prisma.$bugPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.bugFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/bug/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countBug<T extends Prisma.bugCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.bugCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/bug/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountBug<
        T extends Prisma.bugFindManyArgs,
        R extends GetFindResult<Prisma.$bugPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.bugFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.bug.findMany(args, options),
          ctx.bug.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstBug<
        T extends Prisma.bugFindFirstArgs,
        R extends GetFindResult<Prisma.$bugPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.bugFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/bug/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.company = {
      create: async function createCompany<
        T extends Prisma.companyCreateArgs,
        R extends CheckSelect<T, company, Prisma.companyGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.companyCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/company/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyCompany<
        T extends Prisma.companyCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.companyCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/company/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateCompany<T extends Prisma.companyUpdateArgs, R extends Prisma.companyGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.companyUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/company/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyCompany<
        T extends Prisma.companyUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.companyUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/company/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertCompany<T extends Prisma.companyUpsertArgs, R extends Prisma.companyGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.companyUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/company/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteCompany<T extends Prisma.companyDeleteArgs, R extends Prisma.companyGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.companyDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/company/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyCompany<
        T extends Prisma.companyDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.companyDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/company/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyCompany<
        T extends Prisma.companyFindManyArgs,
        R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/company/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countCompany<T extends Prisma.companyCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.companyCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/company/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountCompany<
        T extends Prisma.companyFindManyArgs,
        R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.company.findMany(args, options),
          ctx.company.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstCompany<
        T extends Prisma.companyFindFirstArgs,
        R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.companyFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/company/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.feature = {
      create: async function createFeature<
        T extends Prisma.featureCreateArgs,
        R extends CheckSelect<T, feature, Prisma.featureGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.featureCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/feature/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyFeature<
        T extends Prisma.featureCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.featureCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/feature/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateFeature<T extends Prisma.featureUpdateArgs, R extends Prisma.featureGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.featureUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/feature/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyFeature<
        T extends Prisma.featureUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.featureUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/feature/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertFeature<T extends Prisma.featureUpsertArgs, R extends Prisma.featureGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.featureUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/feature/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteFeature<T extends Prisma.featureDeleteArgs, R extends Prisma.featureGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.featureDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/feature/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyFeature<
        T extends Prisma.featureDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.featureDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/feature/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyFeature<
        T extends Prisma.featureFindManyArgs,
        R extends GetFindResult<Prisma.$featurePayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.featureFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/feature/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countFeature<T extends Prisma.featureCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.featureCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/feature/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountFeature<
        T extends Prisma.featureFindManyArgs,
        R extends GetFindResult<Prisma.$featurePayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.featureFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.feature.findMany(args, options),
          ctx.feature.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstFeature<
        T extends Prisma.featureFindFirstArgs,
        R extends GetFindResult<Prisma.$featurePayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.featureFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/feature/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.test_case = {
      create: async function createTest_case<
        T extends Prisma.test_caseCreateArgs,
        R extends CheckSelect<T, test_case, Prisma.test_caseGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.test_caseCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/test_case/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyTest_case<
        T extends Prisma.test_caseCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.test_caseCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/test_case/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateTest_case<
        T extends Prisma.test_caseUpdateArgs,
        R extends Prisma.test_caseGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.test_caseUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/test_case/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyTest_case<
        T extends Prisma.test_caseUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.test_caseUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/test_case/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertTest_case<
        T extends Prisma.test_caseUpsertArgs,
        R extends Prisma.test_caseGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.test_caseUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/test_case/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteTest_case<
        T extends Prisma.test_caseDeleteArgs,
        R extends Prisma.test_caseGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.test_caseDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/test_case/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyTest_case<
        T extends Prisma.test_caseDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.test_caseDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/test_case/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyTest_case<
        T extends Prisma.test_caseFindManyArgs,
        R extends GetFindResult<Prisma.$test_casePayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.test_caseFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/test_case/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countTest_case<T extends Prisma.test_caseCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.test_caseCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/test_case/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountTest_case<
        T extends Prisma.test_caseFindManyArgs,
        R extends GetFindResult<Prisma.$test_casePayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.test_caseFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.test_case.findMany(args, options),
          ctx.test_case.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstTest_case<
        T extends Prisma.test_caseFindFirstArgs,
        R extends GetFindResult<Prisma.$test_casePayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.test_caseFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/test_case/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user = {
      create: async function createUser<
        T extends Prisma.userCreateArgs,
        R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.userCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser<T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser<T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser<T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser<T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser<T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser<T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser<T extends Prisma.userCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.userCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user.findMany(args, options),
          ctx.user.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser<
        T extends Prisma.userFindFirstArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };
  }
}

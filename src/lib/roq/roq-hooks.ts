/* eslint-disable */
import useSWR from 'swr';
import type { Prisma } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';
import { useRoqClient } from './roq-client-provider';
import { SWRRequestOptions, RequestOptions } from './roq-sdk';

export function useAppFindMany<
  T extends Prisma.appFindManyArgs,
  R extends GetFindResult<Prisma.$appPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.appFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useAppFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.app.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useAppCount<T extends Prisma.appCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.appCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useAppCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.app.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useAppFindManyWithCount<
  T extends Prisma.appFindManyArgs,
  R extends { data: GetFindResult<Prisma.$appPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.appFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useAppFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.app.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useAppFindFirst<
  T extends Prisma.appFindFirstArgs,
  R extends GetFindResult<Prisma.$appPayload<DefaultArgs>, T>,
>(args?: Prisma.SelectSubset<T, Prisma.appFindFirstArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useAppFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.app.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useBugFindMany<
  T extends Prisma.bugFindManyArgs,
  R extends GetFindResult<Prisma.$bugPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.bugFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBugFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.bug.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useBugCount<T extends Prisma.bugCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.bugCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBugCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.bug.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useBugFindManyWithCount<
  T extends Prisma.bugFindManyArgs,
  R extends { data: GetFindResult<Prisma.$bugPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.bugFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBugFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.bug.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useBugFindFirst<
  T extends Prisma.bugFindFirstArgs,
  R extends GetFindResult<Prisma.$bugPayload<DefaultArgs>, T>,
>(args?: Prisma.SelectSubset<T, Prisma.bugFindFirstArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBugFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.bug.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyFindMany<
  T extends Prisma.companyFindManyArgs,
  R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyCount<T extends Prisma.companyCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.companyCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyFindManyWithCount<
  T extends Prisma.companyFindManyArgs,
  R extends { data: GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyFindFirst<
  T extends Prisma.companyFindFirstArgs,
  R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useFeatureFindMany<
  T extends Prisma.featureFindManyArgs,
  R extends GetFindResult<Prisma.$featurePayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.featureFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useFeatureFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.feature.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useFeatureCount<T extends Prisma.featureCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.featureCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useFeatureCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.feature.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useFeatureFindManyWithCount<
  T extends Prisma.featureFindManyArgs,
  R extends { data: GetFindResult<Prisma.$featurePayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.featureFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useFeatureFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.feature.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useFeatureFindFirst<
  T extends Prisma.featureFindFirstArgs,
  R extends GetFindResult<Prisma.$featurePayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.featureFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useFeatureFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.feature.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTest_caseFindMany<
  T extends Prisma.test_caseFindManyArgs,
  R extends GetFindResult<Prisma.$test_casePayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.test_caseFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTest_caseFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.test_case.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTest_caseCount<T extends Prisma.test_caseCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.test_caseCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTest_caseCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.test_case.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTest_caseFindManyWithCount<
  T extends Prisma.test_caseFindManyArgs,
  R extends { data: GetFindResult<Prisma.$test_casePayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.test_caseFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTest_caseFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.test_case.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTest_caseFindFirst<
  T extends Prisma.test_caseFindFirstArgs,
  R extends GetFindResult<Prisma.$test_casePayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.test_caseFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTest_caseFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.test_case.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindMany<
  T extends Prisma.userFindManyArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserCount<T extends Prisma.userCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindManyWithCount<
  T extends Prisma.userFindManyArgs,
  R extends { data: GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindFirst<
  T extends Prisma.userFindFirstArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

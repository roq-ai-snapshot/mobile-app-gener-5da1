/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model app
 *
 */
export type app = $Result.DefaultSelection<Prisma.$appPayload>;
/**
 * Model bug
 *
 */
export type bug = $Result.DefaultSelection<Prisma.$bugPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model feature
 *
 */
export type feature = $Result.DefaultSelection<Prisma.$featurePayload>;
/**
 * Model test_case
 *
 */
export type test_case = $Result.DefaultSelection<Prisma.$test_casePayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Apps
 * const apps = await prisma.app.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Apps
   * const apps = await prisma.app.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.app`: Exposes CRUD operations for the **app** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Apps
   * const apps = await prisma.app.findMany()
   * ```
   */
  get app(): Prisma.appDelegate<ExtArgs>;

  /**
   * `prisma.bug`: Exposes CRUD operations for the **bug** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bugs
   * const bugs = await prisma.bug.findMany()
   * ```
   */
  get bug(): Prisma.bugDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.feature`: Exposes CRUD operations for the **feature** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Features
   * const features = await prisma.feature.findMany()
   * ```
   */
  get feature(): Prisma.featureDelegate<ExtArgs>;

  /**
   * `prisma.test_case`: Exposes CRUD operations for the **test_case** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Test_cases
   * const test_cases = await prisma.test_case.findMany()
   * ```
   */
  get test_case(): Prisma.test_caseDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    app: 'app';
    bug: 'bug';
    company: 'company';
    feature: 'feature';
    test_case: 'test_case';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'app' | 'bug' | 'company' | 'feature' | 'test_case' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      app: {
        payload: Prisma.$appPayload<ExtArgs>;
        fields: Prisma.appFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.appFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.appFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appPayload>;
          };
          findFirst: {
            args: Prisma.appFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.appFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appPayload>;
          };
          findMany: {
            args: Prisma.appFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appPayload>[];
          };
          create: {
            args: Prisma.appCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appPayload>;
          };
          createMany: {
            args: Prisma.appCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.appDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appPayload>;
          };
          update: {
            args: Prisma.appUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appPayload>;
          };
          deleteMany: {
            args: Prisma.appDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.appUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.appUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appPayload>;
          };
          aggregate: {
            args: Prisma.AppAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApp>;
          };
          groupBy: {
            args: Prisma.appGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AppGroupByOutputType>[];
          };
          count: {
            args: Prisma.appCountArgs<ExtArgs>;
            result: $Utils.Optional<AppCountAggregateOutputType> | number;
          };
        };
      };
      bug: {
        payload: Prisma.$bugPayload<ExtArgs>;
        fields: Prisma.bugFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.bugFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.bugFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload>;
          };
          findFirst: {
            args: Prisma.bugFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.bugFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload>;
          };
          findMany: {
            args: Prisma.bugFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload>[];
          };
          create: {
            args: Prisma.bugCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload>;
          };
          createMany: {
            args: Prisma.bugCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.bugDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload>;
          };
          update: {
            args: Prisma.bugUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload>;
          };
          deleteMany: {
            args: Prisma.bugDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.bugUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.bugUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload>;
          };
          aggregate: {
            args: Prisma.BugAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBug>;
          };
          groupBy: {
            args: Prisma.bugGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BugGroupByOutputType>[];
          };
          count: {
            args: Prisma.bugCountArgs<ExtArgs>;
            result: $Utils.Optional<BugCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      feature: {
        payload: Prisma.$featurePayload<ExtArgs>;
        fields: Prisma.featureFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.featureFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$featurePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.featureFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$featurePayload>;
          };
          findFirst: {
            args: Prisma.featureFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$featurePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.featureFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$featurePayload>;
          };
          findMany: {
            args: Prisma.featureFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$featurePayload>[];
          };
          create: {
            args: Prisma.featureCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$featurePayload>;
          };
          createMany: {
            args: Prisma.featureCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.featureDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$featurePayload>;
          };
          update: {
            args: Prisma.featureUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$featurePayload>;
          };
          deleteMany: {
            args: Prisma.featureDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.featureUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.featureUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$featurePayload>;
          };
          aggregate: {
            args: Prisma.FeatureAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFeature>;
          };
          groupBy: {
            args: Prisma.featureGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FeatureGroupByOutputType>[];
          };
          count: {
            args: Prisma.featureCountArgs<ExtArgs>;
            result: $Utils.Optional<FeatureCountAggregateOutputType> | number;
          };
        };
      };
      test_case: {
        payload: Prisma.$test_casePayload<ExtArgs>;
        fields: Prisma.test_caseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.test_caseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$test_casePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.test_caseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$test_casePayload>;
          };
          findFirst: {
            args: Prisma.test_caseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$test_casePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.test_caseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$test_casePayload>;
          };
          findMany: {
            args: Prisma.test_caseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$test_casePayload>[];
          };
          create: {
            args: Prisma.test_caseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$test_casePayload>;
          };
          createMany: {
            args: Prisma.test_caseCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.test_caseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$test_casePayload>;
          };
          update: {
            args: Prisma.test_caseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$test_casePayload>;
          };
          deleteMany: {
            args: Prisma.test_caseDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.test_caseUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.test_caseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$test_casePayload>;
          };
          aggregate: {
            args: Prisma.Test_caseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTest_case>;
          };
          groupBy: {
            args: Prisma.test_caseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Test_caseGroupByOutputType>[];
          };
          count: {
            args: Prisma.test_caseCountArgs<ExtArgs>;
            result: $Utils.Optional<Test_caseCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type AppCountOutputType
   */

  export type AppCountOutputType = {
    bug: number;
    feature: number;
    test_case: number;
  };

  export type AppCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bug?: boolean | AppCountOutputTypeCountBugArgs;
    feature?: boolean | AppCountOutputTypeCountFeatureArgs;
    test_case?: boolean | AppCountOutputTypeCountTest_caseArgs;
  };

  // Custom InputTypes

  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppCountOutputType
     */
    select?: AppCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeCountBugArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bugWhereInput;
  };

  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeCountFeatureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: featureWhereInput;
  };

  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeCountTest_caseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: test_caseWhereInput;
    };

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    app: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | CompanyCountOutputTypeCountAppArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountAppArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    app: number;
    bug: number;
    company: number;
    feature: number;
    test_case: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | UserCountOutputTypeCountAppArgs;
    bug?: boolean | UserCountOutputTypeCountBugArgs;
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    feature?: boolean | UserCountOutputTypeCountFeatureArgs;
    test_case?: boolean | UserCountOutputTypeCountTest_caseArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBugArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bugWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeatureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: featureWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTest_caseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: test_caseWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model app
   */

  export type AggregateApp = {
    _count: AppCountAggregateOutputType | null;
    _min: AppMinAggregateOutputType | null;
    _max: AppMaxAggregateOutputType | null;
  };

  export type AppMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    version: string | null;
    release_date: Date | null;
    platform: string | null;
    company_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    version: string | null;
    release_date: Date | null;
    platform: string | null;
    company_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppCountAggregateOutputType = {
    id: number;
    name: number;
    version: number;
    release_date: number;
    platform: number;
    company_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AppMinAggregateInputType = {
    id?: true;
    name?: true;
    version?: true;
    release_date?: true;
    platform?: true;
    company_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppMaxAggregateInputType = {
    id?: true;
    name?: true;
    version?: true;
    release_date?: true;
    platform?: true;
    company_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppCountAggregateInputType = {
    id?: true;
    name?: true;
    version?: true;
    release_date?: true;
    platform?: true;
    company_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AppAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which app to aggregate.
     */
    where?: appWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of apps to fetch.
     */
    orderBy?: appOrderByWithRelationInput | appOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: appWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` apps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` apps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned apps
     **/
    _count?: true | AppCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AppMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AppMaxAggregateInputType;
  };

  export type GetAppAggregateType<T extends AppAggregateArgs> = {
    [P in keyof T & keyof AggregateApp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApp[P]>
      : GetScalarType<T[P], AggregateApp[P]>;
  };

  export type appGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appWhereInput;
    orderBy?: appOrderByWithAggregationInput | appOrderByWithAggregationInput[];
    by: AppScalarFieldEnum[] | AppScalarFieldEnum;
    having?: appScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppCountAggregateInputType | true;
    _min?: AppMinAggregateInputType;
    _max?: AppMaxAggregateInputType;
  };

  export type AppGroupByOutputType = {
    id: string;
    name: string;
    version: string | null;
    release_date: Date | null;
    platform: string | null;
    company_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: AppCountAggregateOutputType | null;
    _min: AppMinAggregateOutputType | null;
    _max: AppMaxAggregateOutputType | null;
  };

  type GetAppGroupByPayload<T extends appGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AppGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AppGroupByOutputType[P]>
          : GetScalarType<T[P], AppGroupByOutputType[P]>;
      }
    >
  >;

  export type appSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      version?: boolean;
      release_date?: boolean;
      platform?: boolean;
      company_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      bug?: boolean | app$bugArgs<ExtArgs>;
      feature?: boolean | app$featureArgs<ExtArgs>;
      test_case?: boolean | app$test_caseArgs<ExtArgs>;
      _count?: boolean | AppCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['app']
  >;

  export type appSelectScalar = {
    id?: boolean;
    name?: boolean;
    version?: boolean;
    release_date?: boolean;
    platform?: boolean;
    company_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type appInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    bug?: boolean | app$bugArgs<ExtArgs>;
    feature?: boolean | app$featureArgs<ExtArgs>;
    test_case?: boolean | app$test_caseArgs<ExtArgs>;
    _count?: boolean | AppCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $appPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'app';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      bug: Prisma.$bugPayload<ExtArgs>[];
      feature: Prisma.$featurePayload<ExtArgs>[];
      test_case: Prisma.$test_casePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        version: string | null;
        release_date: Date | null;
        platform: string | null;
        company_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['app']
    >;
    composites: {};
  };

  type appGetPayload<S extends boolean | null | undefined | appDefaultArgs> = $Result.GetResult<Prisma.$appPayload, S>;

  type appCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    appFindManyArgs,
    'select' | 'include'
  > & {
    select?: AppCountAggregateInputType | true;
  };

  export interface appDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['app']; meta: { name: 'app' } };
    /**
     * Find zero or one App that matches the filter.
     * @param {appFindUniqueArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends appFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, appFindUniqueArgs<ExtArgs>>,
    ): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one App that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {appFindUniqueOrThrowArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends appFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first App that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appFindFirstArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends appFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, appFindFirstArgs<ExtArgs>>,
    ): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first App that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appFindFirstOrThrowArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends appFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apps
     * const apps = await prisma.app.findMany()
     *
     * // Get first 10 Apps
     * const apps = await prisma.app.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const appWithIdOnly = await prisma.app.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends appFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a App.
     * @param {appCreateArgs} args - Arguments to create a App.
     * @example
     * // Create one App
     * const App = await prisma.app.create({
     *   data: {
     *     // ... data to create a App
     *   }
     * })
     *
     **/
    create<T extends appCreateArgs<ExtArgs>>(
      args: SelectSubset<T, appCreateArgs<ExtArgs>>,
    ): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Apps.
     *     @param {appCreateManyArgs} args - Arguments to create many Apps.
     *     @example
     *     // Create many Apps
     *     const app = await prisma.app.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends appCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a App.
     * @param {appDeleteArgs} args - Arguments to delete one App.
     * @example
     * // Delete one App
     * const App = await prisma.app.delete({
     *   where: {
     *     // ... filter to delete one App
     *   }
     * })
     *
     **/
    delete<T extends appDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, appDeleteArgs<ExtArgs>>,
    ): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one App.
     * @param {appUpdateArgs} args - Arguments to update one App.
     * @example
     * // Update one App
     * const app = await prisma.app.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends appUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, appUpdateArgs<ExtArgs>>,
    ): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Apps.
     * @param {appDeleteManyArgs} args - Arguments to filter Apps to delete.
     * @example
     * // Delete a few Apps
     * const { count } = await prisma.app.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends appDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apps
     * const app = await prisma.app.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends appUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, appUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one App.
     * @param {appUpsertArgs} args - Arguments to update or create a App.
     * @example
     * // Update or create a App
     * const app = await prisma.app.upsert({
     *   create: {
     *     // ... data to create a App
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the App we want to update
     *   }
     * })
     **/
    upsert<T extends appUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, appUpsertArgs<ExtArgs>>,
    ): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appCountArgs} args - Arguments to filter Apps to count.
     * @example
     * // Count the number of Apps
     * const count = await prisma.app.count({
     *   where: {
     *     // ... the filter for the Apps we want to count
     *   }
     * })
     **/
    count<T extends appCountArgs>(
      args?: Subset<T, appCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a App.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AppAggregateArgs>(
      args: Subset<T, AppAggregateArgs>,
    ): Prisma.PrismaPromise<GetAppAggregateType<T>>;

    /**
     * Group by App.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends appGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appGroupByArgs['orderBy'] }
        : { orderBy?: appGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, appGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAppGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the app model
     */
    readonly fields: appFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for app.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    bug<T extends app$bugArgs<ExtArgs> = {}>(
      args?: Subset<T, app$bugArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'findMany'> | Null>;

    feature<T extends app$featureArgs<ExtArgs> = {}>(
      args?: Subset<T, app$featureArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$featurePayload<ExtArgs>, T, 'findMany'> | Null>;

    test_case<T extends app$test_caseArgs<ExtArgs> = {}>(
      args?: Subset<T, app$test_caseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_casePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the app model
   */
  interface appFieldRefs {
    readonly id: FieldRef<'app', 'String'>;
    readonly name: FieldRef<'app', 'String'>;
    readonly version: FieldRef<'app', 'String'>;
    readonly release_date: FieldRef<'app', 'DateTime'>;
    readonly platform: FieldRef<'app', 'String'>;
    readonly company_id: FieldRef<'app', 'String'>;
    readonly user_id: FieldRef<'app', 'String'>;
    readonly created_at: FieldRef<'app', 'DateTime'>;
    readonly updated_at: FieldRef<'app', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * app findUnique
   */
  export type appFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appInclude<ExtArgs> | null;
    /**
     * Filter, which app to fetch.
     */
    where: appWhereUniqueInput;
  };

  /**
   * app findUniqueOrThrow
   */
  export type appFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appInclude<ExtArgs> | null;
    /**
     * Filter, which app to fetch.
     */
    where: appWhereUniqueInput;
  };

  /**
   * app findFirst
   */
  export type appFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appInclude<ExtArgs> | null;
    /**
     * Filter, which app to fetch.
     */
    where?: appWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of apps to fetch.
     */
    orderBy?: appOrderByWithRelationInput | appOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for apps.
     */
    cursor?: appWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` apps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` apps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of apps.
     */
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[];
  };

  /**
   * app findFirstOrThrow
   */
  export type appFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appInclude<ExtArgs> | null;
    /**
     * Filter, which app to fetch.
     */
    where?: appWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of apps to fetch.
     */
    orderBy?: appOrderByWithRelationInput | appOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for apps.
     */
    cursor?: appWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` apps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` apps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of apps.
     */
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[];
  };

  /**
   * app findMany
   */
  export type appFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appInclude<ExtArgs> | null;
    /**
     * Filter, which apps to fetch.
     */
    where?: appWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of apps to fetch.
     */
    orderBy?: appOrderByWithRelationInput | appOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing apps.
     */
    cursor?: appWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` apps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` apps.
     */
    skip?: number;
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[];
  };

  /**
   * app create
   */
  export type appCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appInclude<ExtArgs> | null;
    /**
     * The data needed to create a app.
     */
    data: XOR<appCreateInput, appUncheckedCreateInput>;
  };

  /**
   * app createMany
   */
  export type appCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apps.
     */
    data: appCreateManyInput | appCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * app update
   */
  export type appUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appInclude<ExtArgs> | null;
    /**
     * The data needed to update a app.
     */
    data: XOR<appUpdateInput, appUncheckedUpdateInput>;
    /**
     * Choose, which app to update.
     */
    where: appWhereUniqueInput;
  };

  /**
   * app updateMany
   */
  export type appUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apps.
     */
    data: XOR<appUpdateManyMutationInput, appUncheckedUpdateManyInput>;
    /**
     * Filter which apps to update
     */
    where?: appWhereInput;
  };

  /**
   * app upsert
   */
  export type appUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appInclude<ExtArgs> | null;
    /**
     * The filter to search for the app to update in case it exists.
     */
    where: appWhereUniqueInput;
    /**
     * In case the app found by the `where` argument doesn't exist, create a new app with this data.
     */
    create: XOR<appCreateInput, appUncheckedCreateInput>;
    /**
     * In case the app was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appUpdateInput, appUncheckedUpdateInput>;
  };

  /**
   * app delete
   */
  export type appDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appInclude<ExtArgs> | null;
    /**
     * Filter which app to delete.
     */
    where: appWhereUniqueInput;
  };

  /**
   * app deleteMany
   */
  export type appDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apps to delete
     */
    where?: appWhereInput;
  };

  /**
   * app.bug
   */
  export type app$bugArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    where?: bugWhereInput;
    orderBy?: bugOrderByWithRelationInput | bugOrderByWithRelationInput[];
    cursor?: bugWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BugScalarFieldEnum | BugScalarFieldEnum[];
  };

  /**
   * app.feature
   */
  export type app$featureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature
     */
    select?: featureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: featureInclude<ExtArgs> | null;
    where?: featureWhereInput;
    orderBy?: featureOrderByWithRelationInput | featureOrderByWithRelationInput[];
    cursor?: featureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[];
  };

  /**
   * app.test_case
   */
  export type app$test_caseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_case
     */
    select?: test_caseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: test_caseInclude<ExtArgs> | null;
    where?: test_caseWhereInput;
    orderBy?: test_caseOrderByWithRelationInput | test_caseOrderByWithRelationInput[];
    cursor?: test_caseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Test_caseScalarFieldEnum | Test_caseScalarFieldEnum[];
  };

  /**
   * app without action
   */
  export type appDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appInclude<ExtArgs> | null;
  };

  /**
   * Model bug
   */

  export type AggregateBug = {
    _count: BugCountAggregateOutputType | null;
    _avg: BugAvgAggregateOutputType | null;
    _sum: BugSumAggregateOutputType | null;
    _min: BugMinAggregateOutputType | null;
    _max: BugMaxAggregateOutputType | null;
  };

  export type BugAvgAggregateOutputType = {
    severity: number | null;
  };

  export type BugSumAggregateOutputType = {
    severity: number | null;
  };

  export type BugMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    status: string | null;
    severity: number | null;
    app_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BugMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    status: string | null;
    severity: number | null;
    app_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BugCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    status: number;
    severity: number;
    app_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BugAvgAggregateInputType = {
    severity?: true;
  };

  export type BugSumAggregateInputType = {
    severity?: true;
  };

  export type BugMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    severity?: true;
    app_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BugMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    severity?: true;
    app_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BugCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    severity?: true;
    app_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BugAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bug to aggregate.
     */
    where?: bugWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bugs to fetch.
     */
    orderBy?: bugOrderByWithRelationInput | bugOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: bugWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bugs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bugs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned bugs
     **/
    _count?: true | BugCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BugAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BugSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BugMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BugMaxAggregateInputType;
  };

  export type GetBugAggregateType<T extends BugAggregateArgs> = {
    [P in keyof T & keyof AggregateBug]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBug[P]>
      : GetScalarType<T[P], AggregateBug[P]>;
  };

  export type bugGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bugWhereInput;
    orderBy?: bugOrderByWithAggregationInput | bugOrderByWithAggregationInput[];
    by: BugScalarFieldEnum[] | BugScalarFieldEnum;
    having?: bugScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BugCountAggregateInputType | true;
    _avg?: BugAvgAggregateInputType;
    _sum?: BugSumAggregateInputType;
    _min?: BugMinAggregateInputType;
    _max?: BugMaxAggregateInputType;
  };

  export type BugGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    status: string | null;
    severity: number | null;
    app_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: BugCountAggregateOutputType | null;
    _avg: BugAvgAggregateOutputType | null;
    _sum: BugSumAggregateOutputType | null;
    _min: BugMinAggregateOutputType | null;
    _max: BugMaxAggregateOutputType | null;
  };

  type GetBugGroupByPayload<T extends bugGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BugGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BugGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BugGroupByOutputType[P]>
          : GetScalarType<T[P], BugGroupByOutputType[P]>;
      }
    >
  >;

  export type bugSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      status?: boolean;
      severity?: boolean;
      app_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      app?: boolean | appDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bug']
  >;

  export type bugSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    severity?: boolean;
    app_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type bugInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | appDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $bugPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'bug';
    objects: {
      app: Prisma.$appPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        status: string | null;
        severity: number | null;
        app_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['bug']
    >;
    composites: {};
  };

  type bugGetPayload<S extends boolean | null | undefined | bugDefaultArgs> = $Result.GetResult<Prisma.$bugPayload, S>;

  type bugCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    bugFindManyArgs,
    'select' | 'include'
  > & {
    select?: BugCountAggregateInputType | true;
  };

  export interface bugDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bug']; meta: { name: 'bug' } };
    /**
     * Find zero or one Bug that matches the filter.
     * @param {bugFindUniqueArgs} args - Arguments to find a Bug
     * @example
     * // Get one Bug
     * const bug = await prisma.bug.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends bugFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bugFindUniqueArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Bug that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {bugFindUniqueOrThrowArgs} args - Arguments to find a Bug
     * @example
     * // Get one Bug
     * const bug = await prisma.bug.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends bugFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bugFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Bug that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bugFindFirstArgs} args - Arguments to find a Bug
     * @example
     * // Get one Bug
     * const bug = await prisma.bug.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends bugFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bugFindFirstArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Bug that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bugFindFirstOrThrowArgs} args - Arguments to find a Bug
     * @example
     * // Get one Bug
     * const bug = await prisma.bug.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends bugFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bugFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Bugs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bugFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bugs
     * const bugs = await prisma.bug.findMany()
     *
     * // Get first 10 Bugs
     * const bugs = await prisma.bug.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bugWithIdOnly = await prisma.bug.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends bugFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bugFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Bug.
     * @param {bugCreateArgs} args - Arguments to create a Bug.
     * @example
     * // Create one Bug
     * const Bug = await prisma.bug.create({
     *   data: {
     *     // ... data to create a Bug
     *   }
     * })
     *
     **/
    create<T extends bugCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bugCreateArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Bugs.
     *     @param {bugCreateManyArgs} args - Arguments to create many Bugs.
     *     @example
     *     // Create many Bugs
     *     const bug = await prisma.bug.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends bugCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bugCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Bug.
     * @param {bugDeleteArgs} args - Arguments to delete one Bug.
     * @example
     * // Delete one Bug
     * const Bug = await prisma.bug.delete({
     *   where: {
     *     // ... filter to delete one Bug
     *   }
     * })
     *
     **/
    delete<T extends bugDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bugDeleteArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Bug.
     * @param {bugUpdateArgs} args - Arguments to update one Bug.
     * @example
     * // Update one Bug
     * const bug = await prisma.bug.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends bugUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bugUpdateArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Bugs.
     * @param {bugDeleteManyArgs} args - Arguments to filter Bugs to delete.
     * @example
     * // Delete a few Bugs
     * const { count } = await prisma.bug.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends bugDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bugDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bugs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bugUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bugs
     * const bug = await prisma.bug.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends bugUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bugUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Bug.
     * @param {bugUpsertArgs} args - Arguments to update or create a Bug.
     * @example
     * // Update or create a Bug
     * const bug = await prisma.bug.upsert({
     *   create: {
     *     // ... data to create a Bug
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bug we want to update
     *   }
     * })
     **/
    upsert<T extends bugUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bugUpsertArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Bugs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bugCountArgs} args - Arguments to filter Bugs to count.
     * @example
     * // Count the number of Bugs
     * const count = await prisma.bug.count({
     *   where: {
     *     // ... the filter for the Bugs we want to count
     *   }
     * })
     **/
    count<T extends bugCountArgs>(
      args?: Subset<T, bugCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BugCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Bug.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BugAggregateArgs>(
      args: Subset<T, BugAggregateArgs>,
    ): Prisma.PrismaPromise<GetBugAggregateType<T>>;

    /**
     * Group by Bug.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bugGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends bugGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bugGroupByArgs['orderBy'] }
        : { orderBy?: bugGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, bugGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBugGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the bug model
     */
    readonly fields: bugFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bug.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bugClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    app<T extends appDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, appDefaultArgs<ExtArgs>>,
    ): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the bug model
   */
  interface bugFieldRefs {
    readonly id: FieldRef<'bug', 'String'>;
    readonly name: FieldRef<'bug', 'String'>;
    readonly description: FieldRef<'bug', 'String'>;
    readonly status: FieldRef<'bug', 'String'>;
    readonly severity: FieldRef<'bug', 'Int'>;
    readonly app_id: FieldRef<'bug', 'String'>;
    readonly user_id: FieldRef<'bug', 'String'>;
    readonly created_at: FieldRef<'bug', 'DateTime'>;
    readonly updated_at: FieldRef<'bug', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * bug findUnique
   */
  export type bugFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * Filter, which bug to fetch.
     */
    where: bugWhereUniqueInput;
  };

  /**
   * bug findUniqueOrThrow
   */
  export type bugFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * Filter, which bug to fetch.
     */
    where: bugWhereUniqueInput;
  };

  /**
   * bug findFirst
   */
  export type bugFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * Filter, which bug to fetch.
     */
    where?: bugWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bugs to fetch.
     */
    orderBy?: bugOrderByWithRelationInput | bugOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bugs.
     */
    cursor?: bugWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bugs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bugs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bugs.
     */
    distinct?: BugScalarFieldEnum | BugScalarFieldEnum[];
  };

  /**
   * bug findFirstOrThrow
   */
  export type bugFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * Filter, which bug to fetch.
     */
    where?: bugWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bugs to fetch.
     */
    orderBy?: bugOrderByWithRelationInput | bugOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bugs.
     */
    cursor?: bugWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bugs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bugs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bugs.
     */
    distinct?: BugScalarFieldEnum | BugScalarFieldEnum[];
  };

  /**
   * bug findMany
   */
  export type bugFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * Filter, which bugs to fetch.
     */
    where?: bugWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bugs to fetch.
     */
    orderBy?: bugOrderByWithRelationInput | bugOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing bugs.
     */
    cursor?: bugWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bugs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bugs.
     */
    skip?: number;
    distinct?: BugScalarFieldEnum | BugScalarFieldEnum[];
  };

  /**
   * bug create
   */
  export type bugCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * The data needed to create a bug.
     */
    data: XOR<bugCreateInput, bugUncheckedCreateInput>;
  };

  /**
   * bug createMany
   */
  export type bugCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bugs.
     */
    data: bugCreateManyInput | bugCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * bug update
   */
  export type bugUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * The data needed to update a bug.
     */
    data: XOR<bugUpdateInput, bugUncheckedUpdateInput>;
    /**
     * Choose, which bug to update.
     */
    where: bugWhereUniqueInput;
  };

  /**
   * bug updateMany
   */
  export type bugUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bugs.
     */
    data: XOR<bugUpdateManyMutationInput, bugUncheckedUpdateManyInput>;
    /**
     * Filter which bugs to update
     */
    where?: bugWhereInput;
  };

  /**
   * bug upsert
   */
  export type bugUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * The filter to search for the bug to update in case it exists.
     */
    where: bugWhereUniqueInput;
    /**
     * In case the bug found by the `where` argument doesn't exist, create a new bug with this data.
     */
    create: XOR<bugCreateInput, bugUncheckedCreateInput>;
    /**
     * In case the bug was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bugUpdateInput, bugUncheckedUpdateInput>;
  };

  /**
   * bug delete
   */
  export type bugDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * Filter which bug to delete.
     */
    where: bugWhereUniqueInput;
  };

  /**
   * bug deleteMany
   */
  export type bugDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bugs to delete
     */
    where?: bugWhereInput;
  };

  /**
   * bug without action
   */
  export type bugDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      zip_code?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      app?: boolean | company$appArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | company$appArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      app: Prisma.$appPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip_code: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    app<T extends company$appArgs<ExtArgs> = {}>(
      args?: Subset<T, company$appArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly city: FieldRef<'company', 'String'>;
    readonly state: FieldRef<'company', 'String'>;
    readonly zip_code: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.app
   */
  export type company$appArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appInclude<ExtArgs> | null;
    where?: appWhereInput;
    orderBy?: appOrderByWithRelationInput | appOrderByWithRelationInput[];
    cursor?: appWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model feature
   */

  export type AggregateFeature = {
    _count: FeatureCountAggregateOutputType | null;
    _avg: FeatureAvgAggregateOutputType | null;
    _sum: FeatureSumAggregateOutputType | null;
    _min: FeatureMinAggregateOutputType | null;
    _max: FeatureMaxAggregateOutputType | null;
  };

  export type FeatureAvgAggregateOutputType = {
    priority: number | null;
  };

  export type FeatureSumAggregateOutputType = {
    priority: number | null;
  };

  export type FeatureMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    status: string | null;
    priority: number | null;
    app_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type FeatureMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    status: string | null;
    priority: number | null;
    app_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type FeatureCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    status: number;
    priority: number;
    app_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type FeatureAvgAggregateInputType = {
    priority?: true;
  };

  export type FeatureSumAggregateInputType = {
    priority?: true;
  };

  export type FeatureMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    priority?: true;
    app_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type FeatureMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    priority?: true;
    app_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type FeatureCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    priority?: true;
    app_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type FeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feature to aggregate.
     */
    where?: featureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of features to fetch.
     */
    orderBy?: featureOrderByWithRelationInput | featureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: featureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` features from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` features.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned features
     **/
    _count?: true | FeatureCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FeatureAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FeatureSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FeatureMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FeatureMaxAggregateInputType;
  };

  export type GetFeatureAggregateType<T extends FeatureAggregateArgs> = {
    [P in keyof T & keyof AggregateFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeature[P]>
      : GetScalarType<T[P], AggregateFeature[P]>;
  };

  export type featureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: featureWhereInput;
    orderBy?: featureOrderByWithAggregationInput | featureOrderByWithAggregationInput[];
    by: FeatureScalarFieldEnum[] | FeatureScalarFieldEnum;
    having?: featureScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeatureCountAggregateInputType | true;
    _avg?: FeatureAvgAggregateInputType;
    _sum?: FeatureSumAggregateInputType;
    _min?: FeatureMinAggregateInputType;
    _max?: FeatureMaxAggregateInputType;
  };

  export type FeatureGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    status: string | null;
    priority: number | null;
    app_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: FeatureCountAggregateOutputType | null;
    _avg: FeatureAvgAggregateOutputType | null;
    _sum: FeatureSumAggregateOutputType | null;
    _min: FeatureMinAggregateOutputType | null;
    _max: FeatureMaxAggregateOutputType | null;
  };

  type GetFeatureGroupByPayload<T extends featureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureGroupByOutputType, T['by']> & {
        [P in keyof T & keyof FeatureGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], FeatureGroupByOutputType[P]>
          : GetScalarType<T[P], FeatureGroupByOutputType[P]>;
      }
    >
  >;

  export type featureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      status?: boolean;
      priority?: boolean;
      app_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      app?: boolean | appDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['feature']
  >;

  export type featureSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    app_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type featureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | appDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $featurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'feature';
    objects: {
      app: Prisma.$appPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        status: string | null;
        priority: number | null;
        app_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['feature']
    >;
    composites: {};
  };

  type featureGetPayload<S extends boolean | null | undefined | featureDefaultArgs> = $Result.GetResult<
    Prisma.$featurePayload,
    S
  >;

  type featureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    featureFindManyArgs,
    'select' | 'include'
  > & {
    select?: FeatureCountAggregateInputType | true;
  };

  export interface featureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feature']; meta: { name: 'feature' } };
    /**
     * Find zero or one Feature that matches the filter.
     * @param {featureFindUniqueArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends featureFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, featureFindUniqueArgs<ExtArgs>>,
    ): Prisma__featureClient<$Result.GetResult<Prisma.$featurePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Feature that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {featureFindUniqueOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends featureFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, featureFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__featureClient<
      $Result.GetResult<Prisma.$featurePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Feature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {featureFindFirstArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends featureFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, featureFindFirstArgs<ExtArgs>>,
    ): Prisma__featureClient<$Result.GetResult<Prisma.$featurePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Feature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {featureFindFirstOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends featureFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, featureFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__featureClient<$Result.GetResult<Prisma.$featurePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {featureFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Features
     * const features = await prisma.feature.findMany()
     *
     * // Get first 10 Features
     * const features = await prisma.feature.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const featureWithIdOnly = await prisma.feature.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends featureFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, featureFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$featurePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Feature.
     * @param {featureCreateArgs} args - Arguments to create a Feature.
     * @example
     * // Create one Feature
     * const Feature = await prisma.feature.create({
     *   data: {
     *     // ... data to create a Feature
     *   }
     * })
     *
     **/
    create<T extends featureCreateArgs<ExtArgs>>(
      args: SelectSubset<T, featureCreateArgs<ExtArgs>>,
    ): Prisma__featureClient<$Result.GetResult<Prisma.$featurePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Features.
     *     @param {featureCreateManyArgs} args - Arguments to create many Features.
     *     @example
     *     // Create many Features
     *     const feature = await prisma.feature.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends featureCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, featureCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Feature.
     * @param {featureDeleteArgs} args - Arguments to delete one Feature.
     * @example
     * // Delete one Feature
     * const Feature = await prisma.feature.delete({
     *   where: {
     *     // ... filter to delete one Feature
     *   }
     * })
     *
     **/
    delete<T extends featureDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, featureDeleteArgs<ExtArgs>>,
    ): Prisma__featureClient<$Result.GetResult<Prisma.$featurePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Feature.
     * @param {featureUpdateArgs} args - Arguments to update one Feature.
     * @example
     * // Update one Feature
     * const feature = await prisma.feature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends featureUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, featureUpdateArgs<ExtArgs>>,
    ): Prisma__featureClient<$Result.GetResult<Prisma.$featurePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Features.
     * @param {featureDeleteManyArgs} args - Arguments to filter Features to delete.
     * @example
     * // Delete a few Features
     * const { count } = await prisma.feature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends featureDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, featureDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {featureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends featureUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, featureUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Feature.
     * @param {featureUpsertArgs} args - Arguments to update or create a Feature.
     * @example
     * // Update or create a Feature
     * const feature = await prisma.feature.upsert({
     *   create: {
     *     // ... data to create a Feature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feature we want to update
     *   }
     * })
     **/
    upsert<T extends featureUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, featureUpsertArgs<ExtArgs>>,
    ): Prisma__featureClient<$Result.GetResult<Prisma.$featurePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {featureCountArgs} args - Arguments to filter Features to count.
     * @example
     * // Count the number of Features
     * const count = await prisma.feature.count({
     *   where: {
     *     // ... the filter for the Features we want to count
     *   }
     * })
     **/
    count<T extends featureCountArgs>(
      args?: Subset<T, featureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FeatureAggregateArgs>(
      args: Subset<T, FeatureAggregateArgs>,
    ): Prisma.PrismaPromise<GetFeatureAggregateType<T>>;

    /**
     * Group by Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {featureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends featureGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: featureGroupByArgs['orderBy'] }
        : { orderBy?: featureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, featureGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the feature model
     */
    readonly fields: featureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__featureClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    app<T extends appDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, appDefaultArgs<ExtArgs>>,
    ): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the feature model
   */
  interface featureFieldRefs {
    readonly id: FieldRef<'feature', 'String'>;
    readonly name: FieldRef<'feature', 'String'>;
    readonly description: FieldRef<'feature', 'String'>;
    readonly status: FieldRef<'feature', 'String'>;
    readonly priority: FieldRef<'feature', 'Int'>;
    readonly app_id: FieldRef<'feature', 'String'>;
    readonly user_id: FieldRef<'feature', 'String'>;
    readonly created_at: FieldRef<'feature', 'DateTime'>;
    readonly updated_at: FieldRef<'feature', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * feature findUnique
   */
  export type featureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature
     */
    select?: featureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: featureInclude<ExtArgs> | null;
    /**
     * Filter, which feature to fetch.
     */
    where: featureWhereUniqueInput;
  };

  /**
   * feature findUniqueOrThrow
   */
  export type featureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature
     */
    select?: featureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: featureInclude<ExtArgs> | null;
    /**
     * Filter, which feature to fetch.
     */
    where: featureWhereUniqueInput;
  };

  /**
   * feature findFirst
   */
  export type featureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature
     */
    select?: featureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: featureInclude<ExtArgs> | null;
    /**
     * Filter, which feature to fetch.
     */
    where?: featureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of features to fetch.
     */
    orderBy?: featureOrderByWithRelationInput | featureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for features.
     */
    cursor?: featureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` features from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` features.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[];
  };

  /**
   * feature findFirstOrThrow
   */
  export type featureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature
     */
    select?: featureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: featureInclude<ExtArgs> | null;
    /**
     * Filter, which feature to fetch.
     */
    where?: featureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of features to fetch.
     */
    orderBy?: featureOrderByWithRelationInput | featureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for features.
     */
    cursor?: featureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` features from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` features.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[];
  };

  /**
   * feature findMany
   */
  export type featureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature
     */
    select?: featureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: featureInclude<ExtArgs> | null;
    /**
     * Filter, which features to fetch.
     */
    where?: featureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of features to fetch.
     */
    orderBy?: featureOrderByWithRelationInput | featureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing features.
     */
    cursor?: featureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` features from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` features.
     */
    skip?: number;
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[];
  };

  /**
   * feature create
   */
  export type featureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature
     */
    select?: featureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: featureInclude<ExtArgs> | null;
    /**
     * The data needed to create a feature.
     */
    data: XOR<featureCreateInput, featureUncheckedCreateInput>;
  };

  /**
   * feature createMany
   */
  export type featureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many features.
     */
    data: featureCreateManyInput | featureCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * feature update
   */
  export type featureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature
     */
    select?: featureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: featureInclude<ExtArgs> | null;
    /**
     * The data needed to update a feature.
     */
    data: XOR<featureUpdateInput, featureUncheckedUpdateInput>;
    /**
     * Choose, which feature to update.
     */
    where: featureWhereUniqueInput;
  };

  /**
   * feature updateMany
   */
  export type featureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update features.
     */
    data: XOR<featureUpdateManyMutationInput, featureUncheckedUpdateManyInput>;
    /**
     * Filter which features to update
     */
    where?: featureWhereInput;
  };

  /**
   * feature upsert
   */
  export type featureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature
     */
    select?: featureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: featureInclude<ExtArgs> | null;
    /**
     * The filter to search for the feature to update in case it exists.
     */
    where: featureWhereUniqueInput;
    /**
     * In case the feature found by the `where` argument doesn't exist, create a new feature with this data.
     */
    create: XOR<featureCreateInput, featureUncheckedCreateInput>;
    /**
     * In case the feature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<featureUpdateInput, featureUncheckedUpdateInput>;
  };

  /**
   * feature delete
   */
  export type featureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature
     */
    select?: featureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: featureInclude<ExtArgs> | null;
    /**
     * Filter which feature to delete.
     */
    where: featureWhereUniqueInput;
  };

  /**
   * feature deleteMany
   */
  export type featureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which features to delete
     */
    where?: featureWhereInput;
  };

  /**
   * feature without action
   */
  export type featureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature
     */
    select?: featureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: featureInclude<ExtArgs> | null;
  };

  /**
   * Model test_case
   */

  export type AggregateTest_case = {
    _count: Test_caseCountAggregateOutputType | null;
    _avg: Test_caseAvgAggregateOutputType | null;
    _sum: Test_caseSumAggregateOutputType | null;
    _min: Test_caseMinAggregateOutputType | null;
    _max: Test_caseMaxAggregateOutputType | null;
  };

  export type Test_caseAvgAggregateOutputType = {
    priority: number | null;
  };

  export type Test_caseSumAggregateOutputType = {
    priority: number | null;
  };

  export type Test_caseMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    status: string | null;
    priority: number | null;
    app_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Test_caseMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    status: string | null;
    priority: number | null;
    app_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Test_caseCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    status: number;
    priority: number;
    app_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Test_caseAvgAggregateInputType = {
    priority?: true;
  };

  export type Test_caseSumAggregateInputType = {
    priority?: true;
  };

  export type Test_caseMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    priority?: true;
    app_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Test_caseMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    priority?: true;
    app_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Test_caseCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    priority?: true;
    app_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Test_caseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test_case to aggregate.
     */
    where?: test_caseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of test_cases to fetch.
     */
    orderBy?: test_caseOrderByWithRelationInput | test_caseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: test_caseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` test_cases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` test_cases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned test_cases
     **/
    _count?: true | Test_caseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Test_caseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Test_caseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Test_caseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Test_caseMaxAggregateInputType;
  };

  export type GetTest_caseAggregateType<T extends Test_caseAggregateArgs> = {
    [P in keyof T & keyof AggregateTest_case]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest_case[P]>
      : GetScalarType<T[P], AggregateTest_case[P]>;
  };

  export type test_caseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: test_caseWhereInput;
    orderBy?: test_caseOrderByWithAggregationInput | test_caseOrderByWithAggregationInput[];
    by: Test_caseScalarFieldEnum[] | Test_caseScalarFieldEnum;
    having?: test_caseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Test_caseCountAggregateInputType | true;
    _avg?: Test_caseAvgAggregateInputType;
    _sum?: Test_caseSumAggregateInputType;
    _min?: Test_caseMinAggregateInputType;
    _max?: Test_caseMaxAggregateInputType;
  };

  export type Test_caseGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    status: string | null;
    priority: number | null;
    app_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Test_caseCountAggregateOutputType | null;
    _avg: Test_caseAvgAggregateOutputType | null;
    _sum: Test_caseSumAggregateOutputType | null;
    _min: Test_caseMinAggregateOutputType | null;
    _max: Test_caseMaxAggregateOutputType | null;
  };

  type GetTest_caseGroupByPayload<T extends test_caseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Test_caseGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Test_caseGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Test_caseGroupByOutputType[P]>
          : GetScalarType<T[P], Test_caseGroupByOutputType[P]>;
      }
    >
  >;

  export type test_caseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        description?: boolean;
        status?: boolean;
        priority?: boolean;
        app_id?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        app?: boolean | appDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['test_case']
    >;

  export type test_caseSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    app_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type test_caseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | appDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $test_casePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'test_case';
    objects: {
      app: Prisma.$appPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        status: string | null;
        priority: number | null;
        app_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['test_case']
    >;
    composites: {};
  };

  type test_caseGetPayload<S extends boolean | null | undefined | test_caseDefaultArgs> = $Result.GetResult<
    Prisma.$test_casePayload,
    S
  >;

  type test_caseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    test_caseFindManyArgs,
    'select' | 'include'
  > & {
    select?: Test_caseCountAggregateInputType | true;
  };

  export interface test_caseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['test_case']; meta: { name: 'test_case' } };
    /**
     * Find zero or one Test_case that matches the filter.
     * @param {test_caseFindUniqueArgs} args - Arguments to find a Test_case
     * @example
     * // Get one Test_case
     * const test_case = await prisma.test_case.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends test_caseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, test_caseFindUniqueArgs<ExtArgs>>,
    ): Prisma__test_caseClient<
      $Result.GetResult<Prisma.$test_casePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Test_case that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {test_caseFindUniqueOrThrowArgs} args - Arguments to find a Test_case
     * @example
     * // Get one Test_case
     * const test_case = await prisma.test_case.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends test_caseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, test_caseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__test_caseClient<
      $Result.GetResult<Prisma.$test_casePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Test_case that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_caseFindFirstArgs} args - Arguments to find a Test_case
     * @example
     * // Get one Test_case
     * const test_case = await prisma.test_case.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends test_caseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, test_caseFindFirstArgs<ExtArgs>>,
    ): Prisma__test_caseClient<
      $Result.GetResult<Prisma.$test_casePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Test_case that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_caseFindFirstOrThrowArgs} args - Arguments to find a Test_case
     * @example
     * // Get one Test_case
     * const test_case = await prisma.test_case.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends test_caseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, test_caseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__test_caseClient<
      $Result.GetResult<Prisma.$test_casePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Test_cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_caseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test_cases
     * const test_cases = await prisma.test_case.findMany()
     *
     * // Get first 10 Test_cases
     * const test_cases = await prisma.test_case.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const test_caseWithIdOnly = await prisma.test_case.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends test_caseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, test_caseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_casePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Test_case.
     * @param {test_caseCreateArgs} args - Arguments to create a Test_case.
     * @example
     * // Create one Test_case
     * const Test_case = await prisma.test_case.create({
     *   data: {
     *     // ... data to create a Test_case
     *   }
     * })
     *
     **/
    create<T extends test_caseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, test_caseCreateArgs<ExtArgs>>,
    ): Prisma__test_caseClient<$Result.GetResult<Prisma.$test_casePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Test_cases.
     *     @param {test_caseCreateManyArgs} args - Arguments to create many Test_cases.
     *     @example
     *     // Create many Test_cases
     *     const test_case = await prisma.test_case.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends test_caseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, test_caseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Test_case.
     * @param {test_caseDeleteArgs} args - Arguments to delete one Test_case.
     * @example
     * // Delete one Test_case
     * const Test_case = await prisma.test_case.delete({
     *   where: {
     *     // ... filter to delete one Test_case
     *   }
     * })
     *
     **/
    delete<T extends test_caseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, test_caseDeleteArgs<ExtArgs>>,
    ): Prisma__test_caseClient<$Result.GetResult<Prisma.$test_casePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Test_case.
     * @param {test_caseUpdateArgs} args - Arguments to update one Test_case.
     * @example
     * // Update one Test_case
     * const test_case = await prisma.test_case.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends test_caseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, test_caseUpdateArgs<ExtArgs>>,
    ): Prisma__test_caseClient<$Result.GetResult<Prisma.$test_casePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Test_cases.
     * @param {test_caseDeleteManyArgs} args - Arguments to filter Test_cases to delete.
     * @example
     * // Delete a few Test_cases
     * const { count } = await prisma.test_case.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends test_caseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, test_caseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Test_cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_caseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test_cases
     * const test_case = await prisma.test_case.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends test_caseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, test_caseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Test_case.
     * @param {test_caseUpsertArgs} args - Arguments to update or create a Test_case.
     * @example
     * // Update or create a Test_case
     * const test_case = await prisma.test_case.upsert({
     *   create: {
     *     // ... data to create a Test_case
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test_case we want to update
     *   }
     * })
     **/
    upsert<T extends test_caseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, test_caseUpsertArgs<ExtArgs>>,
    ): Prisma__test_caseClient<$Result.GetResult<Prisma.$test_casePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Test_cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_caseCountArgs} args - Arguments to filter Test_cases to count.
     * @example
     * // Count the number of Test_cases
     * const count = await prisma.test_case.count({
     *   where: {
     *     // ... the filter for the Test_cases we want to count
     *   }
     * })
     **/
    count<T extends test_caseCountArgs>(
      args?: Subset<T, test_caseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test_caseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Test_case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_caseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Test_caseAggregateArgs>(
      args: Subset<T, Test_caseAggregateArgs>,
    ): Prisma.PrismaPromise<GetTest_caseAggregateType<T>>;

    /**
     * Group by Test_case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_caseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends test_caseGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: test_caseGroupByArgs['orderBy'] }
        : { orderBy?: test_caseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, test_caseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTest_caseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the test_case model
     */
    readonly fields: test_caseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for test_case.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__test_caseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    app<T extends appDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, appDefaultArgs<ExtArgs>>,
    ): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the test_case model
   */
  interface test_caseFieldRefs {
    readonly id: FieldRef<'test_case', 'String'>;
    readonly name: FieldRef<'test_case', 'String'>;
    readonly description: FieldRef<'test_case', 'String'>;
    readonly status: FieldRef<'test_case', 'String'>;
    readonly priority: FieldRef<'test_case', 'Int'>;
    readonly app_id: FieldRef<'test_case', 'String'>;
    readonly user_id: FieldRef<'test_case', 'String'>;
    readonly created_at: FieldRef<'test_case', 'DateTime'>;
    readonly updated_at: FieldRef<'test_case', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * test_case findUnique
   */
  export type test_caseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_case
     */
    select?: test_caseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: test_caseInclude<ExtArgs> | null;
    /**
     * Filter, which test_case to fetch.
     */
    where: test_caseWhereUniqueInput;
  };

  /**
   * test_case findUniqueOrThrow
   */
  export type test_caseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_case
     */
    select?: test_caseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: test_caseInclude<ExtArgs> | null;
    /**
     * Filter, which test_case to fetch.
     */
    where: test_caseWhereUniqueInput;
  };

  /**
   * test_case findFirst
   */
  export type test_caseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_case
     */
    select?: test_caseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: test_caseInclude<ExtArgs> | null;
    /**
     * Filter, which test_case to fetch.
     */
    where?: test_caseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of test_cases to fetch.
     */
    orderBy?: test_caseOrderByWithRelationInput | test_caseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for test_cases.
     */
    cursor?: test_caseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` test_cases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` test_cases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of test_cases.
     */
    distinct?: Test_caseScalarFieldEnum | Test_caseScalarFieldEnum[];
  };

  /**
   * test_case findFirstOrThrow
   */
  export type test_caseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_case
     */
    select?: test_caseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: test_caseInclude<ExtArgs> | null;
    /**
     * Filter, which test_case to fetch.
     */
    where?: test_caseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of test_cases to fetch.
     */
    orderBy?: test_caseOrderByWithRelationInput | test_caseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for test_cases.
     */
    cursor?: test_caseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` test_cases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` test_cases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of test_cases.
     */
    distinct?: Test_caseScalarFieldEnum | Test_caseScalarFieldEnum[];
  };

  /**
   * test_case findMany
   */
  export type test_caseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_case
     */
    select?: test_caseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: test_caseInclude<ExtArgs> | null;
    /**
     * Filter, which test_cases to fetch.
     */
    where?: test_caseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of test_cases to fetch.
     */
    orderBy?: test_caseOrderByWithRelationInput | test_caseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing test_cases.
     */
    cursor?: test_caseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` test_cases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` test_cases.
     */
    skip?: number;
    distinct?: Test_caseScalarFieldEnum | Test_caseScalarFieldEnum[];
  };

  /**
   * test_case create
   */
  export type test_caseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_case
     */
    select?: test_caseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: test_caseInclude<ExtArgs> | null;
    /**
     * The data needed to create a test_case.
     */
    data: XOR<test_caseCreateInput, test_caseUncheckedCreateInput>;
  };

  /**
   * test_case createMany
   */
  export type test_caseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many test_cases.
     */
    data: test_caseCreateManyInput | test_caseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * test_case update
   */
  export type test_caseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_case
     */
    select?: test_caseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: test_caseInclude<ExtArgs> | null;
    /**
     * The data needed to update a test_case.
     */
    data: XOR<test_caseUpdateInput, test_caseUncheckedUpdateInput>;
    /**
     * Choose, which test_case to update.
     */
    where: test_caseWhereUniqueInput;
  };

  /**
   * test_case updateMany
   */
  export type test_caseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update test_cases.
     */
    data: XOR<test_caseUpdateManyMutationInput, test_caseUncheckedUpdateManyInput>;
    /**
     * Filter which test_cases to update
     */
    where?: test_caseWhereInput;
  };

  /**
   * test_case upsert
   */
  export type test_caseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_case
     */
    select?: test_caseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: test_caseInclude<ExtArgs> | null;
    /**
     * The filter to search for the test_case to update in case it exists.
     */
    where: test_caseWhereUniqueInput;
    /**
     * In case the test_case found by the `where` argument doesn't exist, create a new test_case with this data.
     */
    create: XOR<test_caseCreateInput, test_caseUncheckedCreateInput>;
    /**
     * In case the test_case was found with the provided `where` argument, update it with this data.
     */
    update: XOR<test_caseUpdateInput, test_caseUncheckedUpdateInput>;
  };

  /**
   * test_case delete
   */
  export type test_caseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_case
     */
    select?: test_caseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: test_caseInclude<ExtArgs> | null;
    /**
     * Filter which test_case to delete.
     */
    where: test_caseWhereUniqueInput;
  };

  /**
   * test_case deleteMany
   */
  export type test_caseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test_cases to delete
     */
    where?: test_caseWhereInput;
  };

  /**
   * test_case without action
   */
  export type test_caseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_case
     */
    select?: test_caseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: test_caseInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      app?: boolean | user$appArgs<ExtArgs>;
      bug?: boolean | user$bugArgs<ExtArgs>;
      company?: boolean | user$companyArgs<ExtArgs>;
      feature?: boolean | user$featureArgs<ExtArgs>;
      test_case?: boolean | user$test_caseArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | user$appArgs<ExtArgs>;
    bug?: boolean | user$bugArgs<ExtArgs>;
    company?: boolean | user$companyArgs<ExtArgs>;
    feature?: boolean | user$featureArgs<ExtArgs>;
    test_case?: boolean | user$test_caseArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      app: Prisma.$appPayload<ExtArgs>[];
      bug: Prisma.$bugPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>[];
      feature: Prisma.$featurePayload<ExtArgs>[];
      test_case: Prisma.$test_casePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    app<T extends user$appArgs<ExtArgs> = {}>(
      args?: Subset<T, user$appArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, 'findMany'> | Null>;

    bug<T extends user$bugArgs<ExtArgs> = {}>(
      args?: Subset<T, user$bugArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    feature<T extends user$featureArgs<ExtArgs> = {}>(
      args?: Subset<T, user$featureArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$featurePayload<ExtArgs>, T, 'findMany'> | Null>;

    test_case<T extends user$test_caseArgs<ExtArgs> = {}>(
      args?: Subset<T, user$test_caseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_casePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.app
   */
  export type user$appArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appInclude<ExtArgs> | null;
    where?: appWhereInput;
    orderBy?: appOrderByWithRelationInput | appOrderByWithRelationInput[];
    cursor?: appWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[];
  };

  /**
   * user.bug
   */
  export type user$bugArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    where?: bugWhereInput;
    orderBy?: bugOrderByWithRelationInput | bugOrderByWithRelationInput[];
    cursor?: bugWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BugScalarFieldEnum | BugScalarFieldEnum[];
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.feature
   */
  export type user$featureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature
     */
    select?: featureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: featureInclude<ExtArgs> | null;
    where?: featureWhereInput;
    orderBy?: featureOrderByWithRelationInput | featureOrderByWithRelationInput[];
    cursor?: featureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[];
  };

  /**
   * user.test_case
   */
  export type user$test_caseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_case
     */
    select?: test_caseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: test_caseInclude<ExtArgs> | null;
    where?: test_caseWhereInput;
    orderBy?: test_caseOrderByWithRelationInput | test_caseOrderByWithRelationInput[];
    cursor?: test_caseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Test_caseScalarFieldEnum | Test_caseScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AppScalarFieldEnum: {
    id: 'id';
    name: 'name';
    version: 'version';
    release_date: 'release_date';
    platform: 'platform';
    company_id: 'company_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AppScalarFieldEnum = (typeof AppScalarFieldEnum)[keyof typeof AppScalarFieldEnum];

  export const BugScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    status: 'status';
    severity: 'severity';
    app_id: 'app_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BugScalarFieldEnum = (typeof BugScalarFieldEnum)[keyof typeof BugScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const FeatureScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    status: 'status';
    priority: 'priority';
    app_id: 'app_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum];

  export const Test_caseScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    status: 'status';
    priority: 'priority';
    app_id: 'app_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Test_caseScalarFieldEnum = (typeof Test_caseScalarFieldEnum)[keyof typeof Test_caseScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type appWhereInput = {
    AND?: appWhereInput | appWhereInput[];
    OR?: appWhereInput[];
    NOT?: appWhereInput | appWhereInput[];
    id?: UuidFilter<'app'> | string;
    name?: StringFilter<'app'> | string;
    version?: StringNullableFilter<'app'> | string | null;
    release_date?: DateTimeNullableFilter<'app'> | Date | string | null;
    platform?: StringNullableFilter<'app'> | string | null;
    company_id?: UuidFilter<'app'> | string;
    user_id?: UuidFilter<'app'> | string;
    created_at?: DateTimeFilter<'app'> | Date | string;
    updated_at?: DateTimeFilter<'app'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    bug?: BugListRelationFilter;
    feature?: FeatureListRelationFilter;
    test_case?: Test_caseListRelationFilter;
  };

  export type appOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    version?: SortOrderInput | SortOrder;
    release_date?: SortOrderInput | SortOrder;
    platform?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    bug?: bugOrderByRelationAggregateInput;
    feature?: featureOrderByRelationAggregateInput;
    test_case?: test_caseOrderByRelationAggregateInput;
  };

  export type appWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: appWhereInput | appWhereInput[];
      OR?: appWhereInput[];
      NOT?: appWhereInput | appWhereInput[];
      name?: StringFilter<'app'> | string;
      version?: StringNullableFilter<'app'> | string | null;
      release_date?: DateTimeNullableFilter<'app'> | Date | string | null;
      platform?: StringNullableFilter<'app'> | string | null;
      company_id?: UuidFilter<'app'> | string;
      user_id?: UuidFilter<'app'> | string;
      created_at?: DateTimeFilter<'app'> | Date | string;
      updated_at?: DateTimeFilter<'app'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      bug?: BugListRelationFilter;
      feature?: FeatureListRelationFilter;
      test_case?: Test_caseListRelationFilter;
    },
    'id'
  >;

  export type appOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    version?: SortOrderInput | SortOrder;
    release_date?: SortOrderInput | SortOrder;
    platform?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: appCountOrderByAggregateInput;
    _max?: appMaxOrderByAggregateInput;
    _min?: appMinOrderByAggregateInput;
  };

  export type appScalarWhereWithAggregatesInput = {
    AND?: appScalarWhereWithAggregatesInput | appScalarWhereWithAggregatesInput[];
    OR?: appScalarWhereWithAggregatesInput[];
    NOT?: appScalarWhereWithAggregatesInput | appScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'app'> | string;
    name?: StringWithAggregatesFilter<'app'> | string;
    version?: StringNullableWithAggregatesFilter<'app'> | string | null;
    release_date?: DateTimeNullableWithAggregatesFilter<'app'> | Date | string | null;
    platform?: StringNullableWithAggregatesFilter<'app'> | string | null;
    company_id?: UuidWithAggregatesFilter<'app'> | string;
    user_id?: UuidWithAggregatesFilter<'app'> | string;
    created_at?: DateTimeWithAggregatesFilter<'app'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'app'> | Date | string;
  };

  export type bugWhereInput = {
    AND?: bugWhereInput | bugWhereInput[];
    OR?: bugWhereInput[];
    NOT?: bugWhereInput | bugWhereInput[];
    id?: UuidFilter<'bug'> | string;
    name?: StringFilter<'bug'> | string;
    description?: StringNullableFilter<'bug'> | string | null;
    status?: StringNullableFilter<'bug'> | string | null;
    severity?: IntNullableFilter<'bug'> | number | null;
    app_id?: UuidFilter<'bug'> | string;
    user_id?: UuidFilter<'bug'> | string;
    created_at?: DateTimeFilter<'bug'> | Date | string;
    updated_at?: DateTimeFilter<'bug'> | Date | string;
    app?: XOR<AppRelationFilter, appWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type bugOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    severity?: SortOrderInput | SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    app?: appOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type bugWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: bugWhereInput | bugWhereInput[];
      OR?: bugWhereInput[];
      NOT?: bugWhereInput | bugWhereInput[];
      name?: StringFilter<'bug'> | string;
      description?: StringNullableFilter<'bug'> | string | null;
      status?: StringNullableFilter<'bug'> | string | null;
      severity?: IntNullableFilter<'bug'> | number | null;
      app_id?: UuidFilter<'bug'> | string;
      user_id?: UuidFilter<'bug'> | string;
      created_at?: DateTimeFilter<'bug'> | Date | string;
      updated_at?: DateTimeFilter<'bug'> | Date | string;
      app?: XOR<AppRelationFilter, appWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type bugOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    severity?: SortOrderInput | SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: bugCountOrderByAggregateInput;
    _avg?: bugAvgOrderByAggregateInput;
    _max?: bugMaxOrderByAggregateInput;
    _min?: bugMinOrderByAggregateInput;
    _sum?: bugSumOrderByAggregateInput;
  };

  export type bugScalarWhereWithAggregatesInput = {
    AND?: bugScalarWhereWithAggregatesInput | bugScalarWhereWithAggregatesInput[];
    OR?: bugScalarWhereWithAggregatesInput[];
    NOT?: bugScalarWhereWithAggregatesInput | bugScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'bug'> | string;
    name?: StringWithAggregatesFilter<'bug'> | string;
    description?: StringNullableWithAggregatesFilter<'bug'> | string | null;
    status?: StringNullableWithAggregatesFilter<'bug'> | string | null;
    severity?: IntNullableWithAggregatesFilter<'bug'> | number | null;
    app_id?: UuidWithAggregatesFilter<'bug'> | string;
    user_id?: UuidWithAggregatesFilter<'bug'> | string;
    created_at?: DateTimeWithAggregatesFilter<'bug'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'bug'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    state?: StringNullableFilter<'company'> | string | null;
    zip_code?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    app?: AppListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    app?: appOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      city?: StringNullableFilter<'company'> | string | null;
      state?: StringNullableFilter<'company'> | string | null;
      zip_code?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      app?: AppListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    city?: StringNullableWithAggregatesFilter<'company'> | string | null;
    state?: StringNullableWithAggregatesFilter<'company'> | string | null;
    zip_code?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type featureWhereInput = {
    AND?: featureWhereInput | featureWhereInput[];
    OR?: featureWhereInput[];
    NOT?: featureWhereInput | featureWhereInput[];
    id?: UuidFilter<'feature'> | string;
    name?: StringFilter<'feature'> | string;
    description?: StringNullableFilter<'feature'> | string | null;
    status?: StringNullableFilter<'feature'> | string | null;
    priority?: IntNullableFilter<'feature'> | number | null;
    app_id?: UuidFilter<'feature'> | string;
    user_id?: UuidFilter<'feature'> | string;
    created_at?: DateTimeFilter<'feature'> | Date | string;
    updated_at?: DateTimeFilter<'feature'> | Date | string;
    app?: XOR<AppRelationFilter, appWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type featureOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    priority?: SortOrderInput | SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    app?: appOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type featureWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: featureWhereInput | featureWhereInput[];
      OR?: featureWhereInput[];
      NOT?: featureWhereInput | featureWhereInput[];
      name?: StringFilter<'feature'> | string;
      description?: StringNullableFilter<'feature'> | string | null;
      status?: StringNullableFilter<'feature'> | string | null;
      priority?: IntNullableFilter<'feature'> | number | null;
      app_id?: UuidFilter<'feature'> | string;
      user_id?: UuidFilter<'feature'> | string;
      created_at?: DateTimeFilter<'feature'> | Date | string;
      updated_at?: DateTimeFilter<'feature'> | Date | string;
      app?: XOR<AppRelationFilter, appWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type featureOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    priority?: SortOrderInput | SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: featureCountOrderByAggregateInput;
    _avg?: featureAvgOrderByAggregateInput;
    _max?: featureMaxOrderByAggregateInput;
    _min?: featureMinOrderByAggregateInput;
    _sum?: featureSumOrderByAggregateInput;
  };

  export type featureScalarWhereWithAggregatesInput = {
    AND?: featureScalarWhereWithAggregatesInput | featureScalarWhereWithAggregatesInput[];
    OR?: featureScalarWhereWithAggregatesInput[];
    NOT?: featureScalarWhereWithAggregatesInput | featureScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'feature'> | string;
    name?: StringWithAggregatesFilter<'feature'> | string;
    description?: StringNullableWithAggregatesFilter<'feature'> | string | null;
    status?: StringNullableWithAggregatesFilter<'feature'> | string | null;
    priority?: IntNullableWithAggregatesFilter<'feature'> | number | null;
    app_id?: UuidWithAggregatesFilter<'feature'> | string;
    user_id?: UuidWithAggregatesFilter<'feature'> | string;
    created_at?: DateTimeWithAggregatesFilter<'feature'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'feature'> | Date | string;
  };

  export type test_caseWhereInput = {
    AND?: test_caseWhereInput | test_caseWhereInput[];
    OR?: test_caseWhereInput[];
    NOT?: test_caseWhereInput | test_caseWhereInput[];
    id?: UuidFilter<'test_case'> | string;
    name?: StringFilter<'test_case'> | string;
    description?: StringNullableFilter<'test_case'> | string | null;
    status?: StringNullableFilter<'test_case'> | string | null;
    priority?: IntNullableFilter<'test_case'> | number | null;
    app_id?: UuidFilter<'test_case'> | string;
    user_id?: UuidFilter<'test_case'> | string;
    created_at?: DateTimeFilter<'test_case'> | Date | string;
    updated_at?: DateTimeFilter<'test_case'> | Date | string;
    app?: XOR<AppRelationFilter, appWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type test_caseOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    priority?: SortOrderInput | SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    app?: appOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type test_caseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: test_caseWhereInput | test_caseWhereInput[];
      OR?: test_caseWhereInput[];
      NOT?: test_caseWhereInput | test_caseWhereInput[];
      name?: StringFilter<'test_case'> | string;
      description?: StringNullableFilter<'test_case'> | string | null;
      status?: StringNullableFilter<'test_case'> | string | null;
      priority?: IntNullableFilter<'test_case'> | number | null;
      app_id?: UuidFilter<'test_case'> | string;
      user_id?: UuidFilter<'test_case'> | string;
      created_at?: DateTimeFilter<'test_case'> | Date | string;
      updated_at?: DateTimeFilter<'test_case'> | Date | string;
      app?: XOR<AppRelationFilter, appWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type test_caseOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    priority?: SortOrderInput | SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: test_caseCountOrderByAggregateInput;
    _avg?: test_caseAvgOrderByAggregateInput;
    _max?: test_caseMaxOrderByAggregateInput;
    _min?: test_caseMinOrderByAggregateInput;
    _sum?: test_caseSumOrderByAggregateInput;
  };

  export type test_caseScalarWhereWithAggregatesInput = {
    AND?: test_caseScalarWhereWithAggregatesInput | test_caseScalarWhereWithAggregatesInput[];
    OR?: test_caseScalarWhereWithAggregatesInput[];
    NOT?: test_caseScalarWhereWithAggregatesInput | test_caseScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'test_case'> | string;
    name?: StringWithAggregatesFilter<'test_case'> | string;
    description?: StringNullableWithAggregatesFilter<'test_case'> | string | null;
    status?: StringNullableWithAggregatesFilter<'test_case'> | string | null;
    priority?: IntNullableWithAggregatesFilter<'test_case'> | number | null;
    app_id?: UuidWithAggregatesFilter<'test_case'> | string;
    user_id?: UuidWithAggregatesFilter<'test_case'> | string;
    created_at?: DateTimeWithAggregatesFilter<'test_case'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'test_case'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    app?: AppListRelationFilter;
    bug?: BugListRelationFilter;
    company?: CompanyListRelationFilter;
    feature?: FeatureListRelationFilter;
    test_case?: Test_caseListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    app?: appOrderByRelationAggregateInput;
    bug?: bugOrderByRelationAggregateInput;
    company?: companyOrderByRelationAggregateInput;
    feature?: featureOrderByRelationAggregateInput;
    test_case?: test_caseOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      app?: AppListRelationFilter;
      bug?: BugListRelationFilter;
      company?: CompanyListRelationFilter;
      feature?: FeatureListRelationFilter;
      test_case?: Test_caseListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type appCreateInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutAppInput;
    user: userCreateNestedOneWithoutAppInput;
    bug?: bugCreateNestedManyWithoutAppInput;
    feature?: featureCreateNestedManyWithoutAppInput;
    test_case?: test_caseCreateNestedManyWithoutAppInput;
  };

  export type appUncheckedCreateInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    company_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugUncheckedCreateNestedManyWithoutAppInput;
    feature?: featureUncheckedCreateNestedManyWithoutAppInput;
    test_case?: test_caseUncheckedCreateNestedManyWithoutAppInput;
  };

  export type appUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutAppNestedInput;
    user?: userUpdateOneRequiredWithoutAppNestedInput;
    bug?: bugUpdateManyWithoutAppNestedInput;
    feature?: featureUpdateManyWithoutAppNestedInput;
    test_case?: test_caseUpdateManyWithoutAppNestedInput;
  };

  export type appUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUncheckedUpdateManyWithoutAppNestedInput;
    feature?: featureUncheckedUpdateManyWithoutAppNestedInput;
    test_case?: test_caseUncheckedUpdateManyWithoutAppNestedInput;
  };

  export type appCreateManyInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    company_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bugCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    severity?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    app: appCreateNestedOneWithoutBugInput;
    user: userCreateNestedOneWithoutBugInput;
  };

  export type bugUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    severity?: number | null;
    app_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bugUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    severity?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUpdateOneRequiredWithoutBugNestedInput;
    user?: userUpdateOneRequiredWithoutBugNestedInput;
  };

  export type bugUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    severity?: NullableIntFieldUpdateOperationsInput | number | null;
    app_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bugCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    severity?: number | null;
    app_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bugUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    severity?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bugUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    severity?: NullableIntFieldUpdateOperationsInput | number | null;
    app_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    app?: appCreateNestedManyWithoutCompanyInput;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    app?: appUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    app?: appUpdateManyWithoutCompanyNestedInput;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    app?: appUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type featureCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    app: appCreateNestedOneWithoutFeatureInput;
    user: userCreateNestedOneWithoutFeatureInput;
  };

  export type featureUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    app_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type featureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUpdateOneRequiredWithoutFeatureNestedInput;
    user?: userUpdateOneRequiredWithoutFeatureNestedInput;
  };

  export type featureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    app_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type featureCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    app_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type featureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type featureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    app_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type test_caseCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    app: appCreateNestedOneWithoutTest_caseInput;
    user: userCreateNestedOneWithoutTest_caseInput;
  };

  export type test_caseUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    app_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type test_caseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUpdateOneRequiredWithoutTest_caseNestedInput;
    user?: userUpdateOneRequiredWithoutTest_caseNestedInput;
  };

  export type test_caseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    app_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type test_caseCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    app_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type test_caseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type test_caseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    app_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    app?: appCreateNestedManyWithoutUserInput;
    bug?: bugCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    feature?: featureCreateNestedManyWithoutUserInput;
    test_case?: test_caseCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    app?: appUncheckedCreateNestedManyWithoutUserInput;
    bug?: bugUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    feature?: featureUncheckedCreateNestedManyWithoutUserInput;
    test_case?: test_caseUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUpdateManyWithoutUserNestedInput;
    bug?: bugUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    feature?: featureUpdateManyWithoutUserNestedInput;
    test_case?: test_caseUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUncheckedUpdateManyWithoutUserNestedInput;
    bug?: bugUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    feature?: featureUncheckedUpdateManyWithoutUserNestedInput;
    test_case?: test_caseUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type BugListRelationFilter = {
    every?: bugWhereInput;
    some?: bugWhereInput;
    none?: bugWhereInput;
  };

  export type FeatureListRelationFilter = {
    every?: featureWhereInput;
    some?: featureWhereInput;
    none?: featureWhereInput;
  };

  export type Test_caseListRelationFilter = {
    every?: test_caseWhereInput;
    some?: test_caseWhereInput;
    none?: test_caseWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type bugOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type featureOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type test_caseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type appCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    version?: SortOrder;
    release_date?: SortOrder;
    platform?: SortOrder;
    company_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    version?: SortOrder;
    release_date?: SortOrder;
    platform?: SortOrder;
    company_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    version?: SortOrder;
    release_date?: SortOrder;
    platform?: SortOrder;
    company_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type AppRelationFilter = {
    is?: appWhereInput;
    isNot?: appWhereInput;
  };

  export type bugCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    severity?: SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bugAvgOrderByAggregateInput = {
    severity?: SortOrder;
  };

  export type bugMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    severity?: SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bugMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    severity?: SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bugSumOrderByAggregateInput = {
    severity?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type AppListRelationFilter = {
    every?: appWhereInput;
    some?: appWhereInput;
    none?: appWhereInput;
  };

  export type appOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type featureCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    priority?: SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type featureAvgOrderByAggregateInput = {
    priority?: SortOrder;
  };

  export type featureMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    priority?: SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type featureMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    priority?: SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type featureSumOrderByAggregateInput = {
    priority?: SortOrder;
  };

  export type test_caseCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    priority?: SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type test_caseAvgOrderByAggregateInput = {
    priority?: SortOrder;
  };

  export type test_caseMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    priority?: SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type test_caseMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    priority?: SortOrder;
    app_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type test_caseSumOrderByAggregateInput = {
    priority?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyCreateNestedOneWithoutAppInput = {
    create?: XOR<companyCreateWithoutAppInput, companyUncheckedCreateWithoutAppInput>;
    connectOrCreate?: companyCreateOrConnectWithoutAppInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutAppInput = {
    create?: XOR<userCreateWithoutAppInput, userUncheckedCreateWithoutAppInput>;
    connectOrCreate?: userCreateOrConnectWithoutAppInput;
    connect?: userWhereUniqueInput;
  };

  export type bugCreateNestedManyWithoutAppInput = {
    create?:
      | XOR<bugCreateWithoutAppInput, bugUncheckedCreateWithoutAppInput>
      | bugCreateWithoutAppInput[]
      | bugUncheckedCreateWithoutAppInput[];
    connectOrCreate?: bugCreateOrConnectWithoutAppInput | bugCreateOrConnectWithoutAppInput[];
    createMany?: bugCreateManyAppInputEnvelope;
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
  };

  export type featureCreateNestedManyWithoutAppInput = {
    create?:
      | XOR<featureCreateWithoutAppInput, featureUncheckedCreateWithoutAppInput>
      | featureCreateWithoutAppInput[]
      | featureUncheckedCreateWithoutAppInput[];
    connectOrCreate?: featureCreateOrConnectWithoutAppInput | featureCreateOrConnectWithoutAppInput[];
    createMany?: featureCreateManyAppInputEnvelope;
    connect?: featureWhereUniqueInput | featureWhereUniqueInput[];
  };

  export type test_caseCreateNestedManyWithoutAppInput = {
    create?:
      | XOR<test_caseCreateWithoutAppInput, test_caseUncheckedCreateWithoutAppInput>
      | test_caseCreateWithoutAppInput[]
      | test_caseUncheckedCreateWithoutAppInput[];
    connectOrCreate?: test_caseCreateOrConnectWithoutAppInput | test_caseCreateOrConnectWithoutAppInput[];
    createMany?: test_caseCreateManyAppInputEnvelope;
    connect?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
  };

  export type bugUncheckedCreateNestedManyWithoutAppInput = {
    create?:
      | XOR<bugCreateWithoutAppInput, bugUncheckedCreateWithoutAppInput>
      | bugCreateWithoutAppInput[]
      | bugUncheckedCreateWithoutAppInput[];
    connectOrCreate?: bugCreateOrConnectWithoutAppInput | bugCreateOrConnectWithoutAppInput[];
    createMany?: bugCreateManyAppInputEnvelope;
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
  };

  export type featureUncheckedCreateNestedManyWithoutAppInput = {
    create?:
      | XOR<featureCreateWithoutAppInput, featureUncheckedCreateWithoutAppInput>
      | featureCreateWithoutAppInput[]
      | featureUncheckedCreateWithoutAppInput[];
    connectOrCreate?: featureCreateOrConnectWithoutAppInput | featureCreateOrConnectWithoutAppInput[];
    createMany?: featureCreateManyAppInputEnvelope;
    connect?: featureWhereUniqueInput | featureWhereUniqueInput[];
  };

  export type test_caseUncheckedCreateNestedManyWithoutAppInput = {
    create?:
      | XOR<test_caseCreateWithoutAppInput, test_caseUncheckedCreateWithoutAppInput>
      | test_caseCreateWithoutAppInput[]
      | test_caseUncheckedCreateWithoutAppInput[];
    connectOrCreate?: test_caseCreateOrConnectWithoutAppInput | test_caseCreateOrConnectWithoutAppInput[];
    createMany?: test_caseCreateManyAppInputEnvelope;
    connect?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type companyUpdateOneRequiredWithoutAppNestedInput = {
    create?: XOR<companyCreateWithoutAppInput, companyUncheckedCreateWithoutAppInput>;
    connectOrCreate?: companyCreateOrConnectWithoutAppInput;
    upsert?: companyUpsertWithoutAppInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutAppInput, companyUpdateWithoutAppInput>,
      companyUncheckedUpdateWithoutAppInput
    >;
  };

  export type userUpdateOneRequiredWithoutAppNestedInput = {
    create?: XOR<userCreateWithoutAppInput, userUncheckedCreateWithoutAppInput>;
    connectOrCreate?: userCreateOrConnectWithoutAppInput;
    upsert?: userUpsertWithoutAppInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAppInput, userUpdateWithoutAppInput>,
      userUncheckedUpdateWithoutAppInput
    >;
  };

  export type bugUpdateManyWithoutAppNestedInput = {
    create?:
      | XOR<bugCreateWithoutAppInput, bugUncheckedCreateWithoutAppInput>
      | bugCreateWithoutAppInput[]
      | bugUncheckedCreateWithoutAppInput[];
    connectOrCreate?: bugCreateOrConnectWithoutAppInput | bugCreateOrConnectWithoutAppInput[];
    upsert?: bugUpsertWithWhereUniqueWithoutAppInput | bugUpsertWithWhereUniqueWithoutAppInput[];
    createMany?: bugCreateManyAppInputEnvelope;
    set?: bugWhereUniqueInput | bugWhereUniqueInput[];
    disconnect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    delete?: bugWhereUniqueInput | bugWhereUniqueInput[];
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    update?: bugUpdateWithWhereUniqueWithoutAppInput | bugUpdateWithWhereUniqueWithoutAppInput[];
    updateMany?: bugUpdateManyWithWhereWithoutAppInput | bugUpdateManyWithWhereWithoutAppInput[];
    deleteMany?: bugScalarWhereInput | bugScalarWhereInput[];
  };

  export type featureUpdateManyWithoutAppNestedInput = {
    create?:
      | XOR<featureCreateWithoutAppInput, featureUncheckedCreateWithoutAppInput>
      | featureCreateWithoutAppInput[]
      | featureUncheckedCreateWithoutAppInput[];
    connectOrCreate?: featureCreateOrConnectWithoutAppInput | featureCreateOrConnectWithoutAppInput[];
    upsert?: featureUpsertWithWhereUniqueWithoutAppInput | featureUpsertWithWhereUniqueWithoutAppInput[];
    createMany?: featureCreateManyAppInputEnvelope;
    set?: featureWhereUniqueInput | featureWhereUniqueInput[];
    disconnect?: featureWhereUniqueInput | featureWhereUniqueInput[];
    delete?: featureWhereUniqueInput | featureWhereUniqueInput[];
    connect?: featureWhereUniqueInput | featureWhereUniqueInput[];
    update?: featureUpdateWithWhereUniqueWithoutAppInput | featureUpdateWithWhereUniqueWithoutAppInput[];
    updateMany?: featureUpdateManyWithWhereWithoutAppInput | featureUpdateManyWithWhereWithoutAppInput[];
    deleteMany?: featureScalarWhereInput | featureScalarWhereInput[];
  };

  export type test_caseUpdateManyWithoutAppNestedInput = {
    create?:
      | XOR<test_caseCreateWithoutAppInput, test_caseUncheckedCreateWithoutAppInput>
      | test_caseCreateWithoutAppInput[]
      | test_caseUncheckedCreateWithoutAppInput[];
    connectOrCreate?: test_caseCreateOrConnectWithoutAppInput | test_caseCreateOrConnectWithoutAppInput[];
    upsert?: test_caseUpsertWithWhereUniqueWithoutAppInput | test_caseUpsertWithWhereUniqueWithoutAppInput[];
    createMany?: test_caseCreateManyAppInputEnvelope;
    set?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    disconnect?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    delete?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    connect?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    update?: test_caseUpdateWithWhereUniqueWithoutAppInput | test_caseUpdateWithWhereUniqueWithoutAppInput[];
    updateMany?: test_caseUpdateManyWithWhereWithoutAppInput | test_caseUpdateManyWithWhereWithoutAppInput[];
    deleteMany?: test_caseScalarWhereInput | test_caseScalarWhereInput[];
  };

  export type bugUncheckedUpdateManyWithoutAppNestedInput = {
    create?:
      | XOR<bugCreateWithoutAppInput, bugUncheckedCreateWithoutAppInput>
      | bugCreateWithoutAppInput[]
      | bugUncheckedCreateWithoutAppInput[];
    connectOrCreate?: bugCreateOrConnectWithoutAppInput | bugCreateOrConnectWithoutAppInput[];
    upsert?: bugUpsertWithWhereUniqueWithoutAppInput | bugUpsertWithWhereUniqueWithoutAppInput[];
    createMany?: bugCreateManyAppInputEnvelope;
    set?: bugWhereUniqueInput | bugWhereUniqueInput[];
    disconnect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    delete?: bugWhereUniqueInput | bugWhereUniqueInput[];
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    update?: bugUpdateWithWhereUniqueWithoutAppInput | bugUpdateWithWhereUniqueWithoutAppInput[];
    updateMany?: bugUpdateManyWithWhereWithoutAppInput | bugUpdateManyWithWhereWithoutAppInput[];
    deleteMany?: bugScalarWhereInput | bugScalarWhereInput[];
  };

  export type featureUncheckedUpdateManyWithoutAppNestedInput = {
    create?:
      | XOR<featureCreateWithoutAppInput, featureUncheckedCreateWithoutAppInput>
      | featureCreateWithoutAppInput[]
      | featureUncheckedCreateWithoutAppInput[];
    connectOrCreate?: featureCreateOrConnectWithoutAppInput | featureCreateOrConnectWithoutAppInput[];
    upsert?: featureUpsertWithWhereUniqueWithoutAppInput | featureUpsertWithWhereUniqueWithoutAppInput[];
    createMany?: featureCreateManyAppInputEnvelope;
    set?: featureWhereUniqueInput | featureWhereUniqueInput[];
    disconnect?: featureWhereUniqueInput | featureWhereUniqueInput[];
    delete?: featureWhereUniqueInput | featureWhereUniqueInput[];
    connect?: featureWhereUniqueInput | featureWhereUniqueInput[];
    update?: featureUpdateWithWhereUniqueWithoutAppInput | featureUpdateWithWhereUniqueWithoutAppInput[];
    updateMany?: featureUpdateManyWithWhereWithoutAppInput | featureUpdateManyWithWhereWithoutAppInput[];
    deleteMany?: featureScalarWhereInput | featureScalarWhereInput[];
  };

  export type test_caseUncheckedUpdateManyWithoutAppNestedInput = {
    create?:
      | XOR<test_caseCreateWithoutAppInput, test_caseUncheckedCreateWithoutAppInput>
      | test_caseCreateWithoutAppInput[]
      | test_caseUncheckedCreateWithoutAppInput[];
    connectOrCreate?: test_caseCreateOrConnectWithoutAppInput | test_caseCreateOrConnectWithoutAppInput[];
    upsert?: test_caseUpsertWithWhereUniqueWithoutAppInput | test_caseUpsertWithWhereUniqueWithoutAppInput[];
    createMany?: test_caseCreateManyAppInputEnvelope;
    set?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    disconnect?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    delete?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    connect?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    update?: test_caseUpdateWithWhereUniqueWithoutAppInput | test_caseUpdateWithWhereUniqueWithoutAppInput[];
    updateMany?: test_caseUpdateManyWithWhereWithoutAppInput | test_caseUpdateManyWithWhereWithoutAppInput[];
    deleteMany?: test_caseScalarWhereInput | test_caseScalarWhereInput[];
  };

  export type appCreateNestedOneWithoutBugInput = {
    create?: XOR<appCreateWithoutBugInput, appUncheckedCreateWithoutBugInput>;
    connectOrCreate?: appCreateOrConnectWithoutBugInput;
    connect?: appWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutBugInput = {
    create?: XOR<userCreateWithoutBugInput, userUncheckedCreateWithoutBugInput>;
    connectOrCreate?: userCreateOrConnectWithoutBugInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type appUpdateOneRequiredWithoutBugNestedInput = {
    create?: XOR<appCreateWithoutBugInput, appUncheckedCreateWithoutBugInput>;
    connectOrCreate?: appCreateOrConnectWithoutBugInput;
    upsert?: appUpsertWithoutBugInput;
    connect?: appWhereUniqueInput;
    update?: XOR<
      XOR<appUpdateToOneWithWhereWithoutBugInput, appUpdateWithoutBugInput>,
      appUncheckedUpdateWithoutBugInput
    >;
  };

  export type userUpdateOneRequiredWithoutBugNestedInput = {
    create?: XOR<userCreateWithoutBugInput, userUncheckedCreateWithoutBugInput>;
    connectOrCreate?: userCreateOrConnectWithoutBugInput;
    upsert?: userUpsertWithoutBugInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutBugInput, userUpdateWithoutBugInput>,
      userUncheckedUpdateWithoutBugInput
    >;
  };

  export type appCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<appCreateWithoutCompanyInput, appUncheckedCreateWithoutCompanyInput>
      | appCreateWithoutCompanyInput[]
      | appUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: appCreateOrConnectWithoutCompanyInput | appCreateOrConnectWithoutCompanyInput[];
    createMany?: appCreateManyCompanyInputEnvelope;
    connect?: appWhereUniqueInput | appWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type appUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<appCreateWithoutCompanyInput, appUncheckedCreateWithoutCompanyInput>
      | appCreateWithoutCompanyInput[]
      | appUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: appCreateOrConnectWithoutCompanyInput | appCreateOrConnectWithoutCompanyInput[];
    createMany?: appCreateManyCompanyInputEnvelope;
    connect?: appWhereUniqueInput | appWhereUniqueInput[];
  };

  export type appUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<appCreateWithoutCompanyInput, appUncheckedCreateWithoutCompanyInput>
      | appCreateWithoutCompanyInput[]
      | appUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: appCreateOrConnectWithoutCompanyInput | appCreateOrConnectWithoutCompanyInput[];
    upsert?: appUpsertWithWhereUniqueWithoutCompanyInput | appUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: appCreateManyCompanyInputEnvelope;
    set?: appWhereUniqueInput | appWhereUniqueInput[];
    disconnect?: appWhereUniqueInput | appWhereUniqueInput[];
    delete?: appWhereUniqueInput | appWhereUniqueInput[];
    connect?: appWhereUniqueInput | appWhereUniqueInput[];
    update?: appUpdateWithWhereUniqueWithoutCompanyInput | appUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: appUpdateManyWithWhereWithoutCompanyInput | appUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: appScalarWhereInput | appScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type appUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<appCreateWithoutCompanyInput, appUncheckedCreateWithoutCompanyInput>
      | appCreateWithoutCompanyInput[]
      | appUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: appCreateOrConnectWithoutCompanyInput | appCreateOrConnectWithoutCompanyInput[];
    upsert?: appUpsertWithWhereUniqueWithoutCompanyInput | appUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: appCreateManyCompanyInputEnvelope;
    set?: appWhereUniqueInput | appWhereUniqueInput[];
    disconnect?: appWhereUniqueInput | appWhereUniqueInput[];
    delete?: appWhereUniqueInput | appWhereUniqueInput[];
    connect?: appWhereUniqueInput | appWhereUniqueInput[];
    update?: appUpdateWithWhereUniqueWithoutCompanyInput | appUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: appUpdateManyWithWhereWithoutCompanyInput | appUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: appScalarWhereInput | appScalarWhereInput[];
  };

  export type appCreateNestedOneWithoutFeatureInput = {
    create?: XOR<appCreateWithoutFeatureInput, appUncheckedCreateWithoutFeatureInput>;
    connectOrCreate?: appCreateOrConnectWithoutFeatureInput;
    connect?: appWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutFeatureInput = {
    create?: XOR<userCreateWithoutFeatureInput, userUncheckedCreateWithoutFeatureInput>;
    connectOrCreate?: userCreateOrConnectWithoutFeatureInput;
    connect?: userWhereUniqueInput;
  };

  export type appUpdateOneRequiredWithoutFeatureNestedInput = {
    create?: XOR<appCreateWithoutFeatureInput, appUncheckedCreateWithoutFeatureInput>;
    connectOrCreate?: appCreateOrConnectWithoutFeatureInput;
    upsert?: appUpsertWithoutFeatureInput;
    connect?: appWhereUniqueInput;
    update?: XOR<
      XOR<appUpdateToOneWithWhereWithoutFeatureInput, appUpdateWithoutFeatureInput>,
      appUncheckedUpdateWithoutFeatureInput
    >;
  };

  export type userUpdateOneRequiredWithoutFeatureNestedInput = {
    create?: XOR<userCreateWithoutFeatureInput, userUncheckedCreateWithoutFeatureInput>;
    connectOrCreate?: userCreateOrConnectWithoutFeatureInput;
    upsert?: userUpsertWithoutFeatureInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutFeatureInput, userUpdateWithoutFeatureInput>,
      userUncheckedUpdateWithoutFeatureInput
    >;
  };

  export type appCreateNestedOneWithoutTest_caseInput = {
    create?: XOR<appCreateWithoutTest_caseInput, appUncheckedCreateWithoutTest_caseInput>;
    connectOrCreate?: appCreateOrConnectWithoutTest_caseInput;
    connect?: appWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTest_caseInput = {
    create?: XOR<userCreateWithoutTest_caseInput, userUncheckedCreateWithoutTest_caseInput>;
    connectOrCreate?: userCreateOrConnectWithoutTest_caseInput;
    connect?: userWhereUniqueInput;
  };

  export type appUpdateOneRequiredWithoutTest_caseNestedInput = {
    create?: XOR<appCreateWithoutTest_caseInput, appUncheckedCreateWithoutTest_caseInput>;
    connectOrCreate?: appCreateOrConnectWithoutTest_caseInput;
    upsert?: appUpsertWithoutTest_caseInput;
    connect?: appWhereUniqueInput;
    update?: XOR<
      XOR<appUpdateToOneWithWhereWithoutTest_caseInput, appUpdateWithoutTest_caseInput>,
      appUncheckedUpdateWithoutTest_caseInput
    >;
  };

  export type userUpdateOneRequiredWithoutTest_caseNestedInput = {
    create?: XOR<userCreateWithoutTest_caseInput, userUncheckedCreateWithoutTest_caseInput>;
    connectOrCreate?: userCreateOrConnectWithoutTest_caseInput;
    upsert?: userUpsertWithoutTest_caseInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTest_caseInput, userUpdateWithoutTest_caseInput>,
      userUncheckedUpdateWithoutTest_caseInput
    >;
  };

  export type appCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<appCreateWithoutUserInput, appUncheckedCreateWithoutUserInput>
      | appCreateWithoutUserInput[]
      | appUncheckedCreateWithoutUserInput[];
    connectOrCreate?: appCreateOrConnectWithoutUserInput | appCreateOrConnectWithoutUserInput[];
    createMany?: appCreateManyUserInputEnvelope;
    connect?: appWhereUniqueInput | appWhereUniqueInput[];
  };

  export type bugCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bugCreateWithoutUserInput, bugUncheckedCreateWithoutUserInput>
      | bugCreateWithoutUserInput[]
      | bugUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bugCreateOrConnectWithoutUserInput | bugCreateOrConnectWithoutUserInput[];
    createMany?: bugCreateManyUserInputEnvelope;
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type featureCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<featureCreateWithoutUserInput, featureUncheckedCreateWithoutUserInput>
      | featureCreateWithoutUserInput[]
      | featureUncheckedCreateWithoutUserInput[];
    connectOrCreate?: featureCreateOrConnectWithoutUserInput | featureCreateOrConnectWithoutUserInput[];
    createMany?: featureCreateManyUserInputEnvelope;
    connect?: featureWhereUniqueInput | featureWhereUniqueInput[];
  };

  export type test_caseCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<test_caseCreateWithoutUserInput, test_caseUncheckedCreateWithoutUserInput>
      | test_caseCreateWithoutUserInput[]
      | test_caseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: test_caseCreateOrConnectWithoutUserInput | test_caseCreateOrConnectWithoutUserInput[];
    createMany?: test_caseCreateManyUserInputEnvelope;
    connect?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
  };

  export type appUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<appCreateWithoutUserInput, appUncheckedCreateWithoutUserInput>
      | appCreateWithoutUserInput[]
      | appUncheckedCreateWithoutUserInput[];
    connectOrCreate?: appCreateOrConnectWithoutUserInput | appCreateOrConnectWithoutUserInput[];
    createMany?: appCreateManyUserInputEnvelope;
    connect?: appWhereUniqueInput | appWhereUniqueInput[];
  };

  export type bugUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bugCreateWithoutUserInput, bugUncheckedCreateWithoutUserInput>
      | bugCreateWithoutUserInput[]
      | bugUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bugCreateOrConnectWithoutUserInput | bugCreateOrConnectWithoutUserInput[];
    createMany?: bugCreateManyUserInputEnvelope;
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type featureUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<featureCreateWithoutUserInput, featureUncheckedCreateWithoutUserInput>
      | featureCreateWithoutUserInput[]
      | featureUncheckedCreateWithoutUserInput[];
    connectOrCreate?: featureCreateOrConnectWithoutUserInput | featureCreateOrConnectWithoutUserInput[];
    createMany?: featureCreateManyUserInputEnvelope;
    connect?: featureWhereUniqueInput | featureWhereUniqueInput[];
  };

  export type test_caseUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<test_caseCreateWithoutUserInput, test_caseUncheckedCreateWithoutUserInput>
      | test_caseCreateWithoutUserInput[]
      | test_caseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: test_caseCreateOrConnectWithoutUserInput | test_caseCreateOrConnectWithoutUserInput[];
    createMany?: test_caseCreateManyUserInputEnvelope;
    connect?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
  };

  export type appUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<appCreateWithoutUserInput, appUncheckedCreateWithoutUserInput>
      | appCreateWithoutUserInput[]
      | appUncheckedCreateWithoutUserInput[];
    connectOrCreate?: appCreateOrConnectWithoutUserInput | appCreateOrConnectWithoutUserInput[];
    upsert?: appUpsertWithWhereUniqueWithoutUserInput | appUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: appCreateManyUserInputEnvelope;
    set?: appWhereUniqueInput | appWhereUniqueInput[];
    disconnect?: appWhereUniqueInput | appWhereUniqueInput[];
    delete?: appWhereUniqueInput | appWhereUniqueInput[];
    connect?: appWhereUniqueInput | appWhereUniqueInput[];
    update?: appUpdateWithWhereUniqueWithoutUserInput | appUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: appUpdateManyWithWhereWithoutUserInput | appUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: appScalarWhereInput | appScalarWhereInput[];
  };

  export type bugUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bugCreateWithoutUserInput, bugUncheckedCreateWithoutUserInput>
      | bugCreateWithoutUserInput[]
      | bugUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bugCreateOrConnectWithoutUserInput | bugCreateOrConnectWithoutUserInput[];
    upsert?: bugUpsertWithWhereUniqueWithoutUserInput | bugUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bugCreateManyUserInputEnvelope;
    set?: bugWhereUniqueInput | bugWhereUniqueInput[];
    disconnect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    delete?: bugWhereUniqueInput | bugWhereUniqueInput[];
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    update?: bugUpdateWithWhereUniqueWithoutUserInput | bugUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bugUpdateManyWithWhereWithoutUserInput | bugUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bugScalarWhereInput | bugScalarWhereInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type featureUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<featureCreateWithoutUserInput, featureUncheckedCreateWithoutUserInput>
      | featureCreateWithoutUserInput[]
      | featureUncheckedCreateWithoutUserInput[];
    connectOrCreate?: featureCreateOrConnectWithoutUserInput | featureCreateOrConnectWithoutUserInput[];
    upsert?: featureUpsertWithWhereUniqueWithoutUserInput | featureUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: featureCreateManyUserInputEnvelope;
    set?: featureWhereUniqueInput | featureWhereUniqueInput[];
    disconnect?: featureWhereUniqueInput | featureWhereUniqueInput[];
    delete?: featureWhereUniqueInput | featureWhereUniqueInput[];
    connect?: featureWhereUniqueInput | featureWhereUniqueInput[];
    update?: featureUpdateWithWhereUniqueWithoutUserInput | featureUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: featureUpdateManyWithWhereWithoutUserInput | featureUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: featureScalarWhereInput | featureScalarWhereInput[];
  };

  export type test_caseUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<test_caseCreateWithoutUserInput, test_caseUncheckedCreateWithoutUserInput>
      | test_caseCreateWithoutUserInput[]
      | test_caseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: test_caseCreateOrConnectWithoutUserInput | test_caseCreateOrConnectWithoutUserInput[];
    upsert?: test_caseUpsertWithWhereUniqueWithoutUserInput | test_caseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: test_caseCreateManyUserInputEnvelope;
    set?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    disconnect?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    delete?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    connect?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    update?: test_caseUpdateWithWhereUniqueWithoutUserInput | test_caseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: test_caseUpdateManyWithWhereWithoutUserInput | test_caseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: test_caseScalarWhereInput | test_caseScalarWhereInput[];
  };

  export type appUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<appCreateWithoutUserInput, appUncheckedCreateWithoutUserInput>
      | appCreateWithoutUserInput[]
      | appUncheckedCreateWithoutUserInput[];
    connectOrCreate?: appCreateOrConnectWithoutUserInput | appCreateOrConnectWithoutUserInput[];
    upsert?: appUpsertWithWhereUniqueWithoutUserInput | appUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: appCreateManyUserInputEnvelope;
    set?: appWhereUniqueInput | appWhereUniqueInput[];
    disconnect?: appWhereUniqueInput | appWhereUniqueInput[];
    delete?: appWhereUniqueInput | appWhereUniqueInput[];
    connect?: appWhereUniqueInput | appWhereUniqueInput[];
    update?: appUpdateWithWhereUniqueWithoutUserInput | appUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: appUpdateManyWithWhereWithoutUserInput | appUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: appScalarWhereInput | appScalarWhereInput[];
  };

  export type bugUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bugCreateWithoutUserInput, bugUncheckedCreateWithoutUserInput>
      | bugCreateWithoutUserInput[]
      | bugUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bugCreateOrConnectWithoutUserInput | bugCreateOrConnectWithoutUserInput[];
    upsert?: bugUpsertWithWhereUniqueWithoutUserInput | bugUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bugCreateManyUserInputEnvelope;
    set?: bugWhereUniqueInput | bugWhereUniqueInput[];
    disconnect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    delete?: bugWhereUniqueInput | bugWhereUniqueInput[];
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    update?: bugUpdateWithWhereUniqueWithoutUserInput | bugUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bugUpdateManyWithWhereWithoutUserInput | bugUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bugScalarWhereInput | bugScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type featureUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<featureCreateWithoutUserInput, featureUncheckedCreateWithoutUserInput>
      | featureCreateWithoutUserInput[]
      | featureUncheckedCreateWithoutUserInput[];
    connectOrCreate?: featureCreateOrConnectWithoutUserInput | featureCreateOrConnectWithoutUserInput[];
    upsert?: featureUpsertWithWhereUniqueWithoutUserInput | featureUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: featureCreateManyUserInputEnvelope;
    set?: featureWhereUniqueInput | featureWhereUniqueInput[];
    disconnect?: featureWhereUniqueInput | featureWhereUniqueInput[];
    delete?: featureWhereUniqueInput | featureWhereUniqueInput[];
    connect?: featureWhereUniqueInput | featureWhereUniqueInput[];
    update?: featureUpdateWithWhereUniqueWithoutUserInput | featureUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: featureUpdateManyWithWhereWithoutUserInput | featureUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: featureScalarWhereInput | featureScalarWhereInput[];
  };

  export type test_caseUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<test_caseCreateWithoutUserInput, test_caseUncheckedCreateWithoutUserInput>
      | test_caseCreateWithoutUserInput[]
      | test_caseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: test_caseCreateOrConnectWithoutUserInput | test_caseCreateOrConnectWithoutUserInput[];
    upsert?: test_caseUpsertWithWhereUniqueWithoutUserInput | test_caseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: test_caseCreateManyUserInputEnvelope;
    set?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    disconnect?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    delete?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    connect?: test_caseWhereUniqueInput | test_caseWhereUniqueInput[];
    update?: test_caseUpdateWithWhereUniqueWithoutUserInput | test_caseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: test_caseUpdateManyWithWhereWithoutUserInput | test_caseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: test_caseScalarWhereInput | test_caseScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type companyCreateWithoutAppInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutAppInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutAppInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutAppInput, companyUncheckedCreateWithoutAppInput>;
  };

  export type userCreateWithoutAppInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    feature?: featureCreateNestedManyWithoutUserInput;
    test_case?: test_caseCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAppInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    feature?: featureUncheckedCreateNestedManyWithoutUserInput;
    test_case?: test_caseUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAppInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAppInput, userUncheckedCreateWithoutAppInput>;
  };

  export type bugCreateWithoutAppInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    severity?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutBugInput;
  };

  export type bugUncheckedCreateWithoutAppInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    severity?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bugCreateOrConnectWithoutAppInput = {
    where: bugWhereUniqueInput;
    create: XOR<bugCreateWithoutAppInput, bugUncheckedCreateWithoutAppInput>;
  };

  export type bugCreateManyAppInputEnvelope = {
    data: bugCreateManyAppInput | bugCreateManyAppInput[];
    skipDuplicates?: boolean;
  };

  export type featureCreateWithoutAppInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutFeatureInput;
  };

  export type featureUncheckedCreateWithoutAppInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type featureCreateOrConnectWithoutAppInput = {
    where: featureWhereUniqueInput;
    create: XOR<featureCreateWithoutAppInput, featureUncheckedCreateWithoutAppInput>;
  };

  export type featureCreateManyAppInputEnvelope = {
    data: featureCreateManyAppInput | featureCreateManyAppInput[];
    skipDuplicates?: boolean;
  };

  export type test_caseCreateWithoutAppInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTest_caseInput;
  };

  export type test_caseUncheckedCreateWithoutAppInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type test_caseCreateOrConnectWithoutAppInput = {
    where: test_caseWhereUniqueInput;
    create: XOR<test_caseCreateWithoutAppInput, test_caseUncheckedCreateWithoutAppInput>;
  };

  export type test_caseCreateManyAppInputEnvelope = {
    data: test_caseCreateManyAppInput | test_caseCreateManyAppInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithoutAppInput = {
    update: XOR<companyUpdateWithoutAppInput, companyUncheckedUpdateWithoutAppInput>;
    create: XOR<companyCreateWithoutAppInput, companyUncheckedCreateWithoutAppInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutAppInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutAppInput, companyUncheckedUpdateWithoutAppInput>;
  };

  export type companyUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutAppInput = {
    update: XOR<userUpdateWithoutAppInput, userUncheckedUpdateWithoutAppInput>;
    create: XOR<userCreateWithoutAppInput, userUncheckedCreateWithoutAppInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAppInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAppInput, userUncheckedUpdateWithoutAppInput>;
  };

  export type userUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    feature?: featureUpdateManyWithoutUserNestedInput;
    test_case?: test_caseUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    feature?: featureUncheckedUpdateManyWithoutUserNestedInput;
    test_case?: test_caseUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type bugUpsertWithWhereUniqueWithoutAppInput = {
    where: bugWhereUniqueInput;
    update: XOR<bugUpdateWithoutAppInput, bugUncheckedUpdateWithoutAppInput>;
    create: XOR<bugCreateWithoutAppInput, bugUncheckedCreateWithoutAppInput>;
  };

  export type bugUpdateWithWhereUniqueWithoutAppInput = {
    where: bugWhereUniqueInput;
    data: XOR<bugUpdateWithoutAppInput, bugUncheckedUpdateWithoutAppInput>;
  };

  export type bugUpdateManyWithWhereWithoutAppInput = {
    where: bugScalarWhereInput;
    data: XOR<bugUpdateManyMutationInput, bugUncheckedUpdateManyWithoutAppInput>;
  };

  export type bugScalarWhereInput = {
    AND?: bugScalarWhereInput | bugScalarWhereInput[];
    OR?: bugScalarWhereInput[];
    NOT?: bugScalarWhereInput | bugScalarWhereInput[];
    id?: UuidFilter<'bug'> | string;
    name?: StringFilter<'bug'> | string;
    description?: StringNullableFilter<'bug'> | string | null;
    status?: StringNullableFilter<'bug'> | string | null;
    severity?: IntNullableFilter<'bug'> | number | null;
    app_id?: UuidFilter<'bug'> | string;
    user_id?: UuidFilter<'bug'> | string;
    created_at?: DateTimeFilter<'bug'> | Date | string;
    updated_at?: DateTimeFilter<'bug'> | Date | string;
  };

  export type featureUpsertWithWhereUniqueWithoutAppInput = {
    where: featureWhereUniqueInput;
    update: XOR<featureUpdateWithoutAppInput, featureUncheckedUpdateWithoutAppInput>;
    create: XOR<featureCreateWithoutAppInput, featureUncheckedCreateWithoutAppInput>;
  };

  export type featureUpdateWithWhereUniqueWithoutAppInput = {
    where: featureWhereUniqueInput;
    data: XOR<featureUpdateWithoutAppInput, featureUncheckedUpdateWithoutAppInput>;
  };

  export type featureUpdateManyWithWhereWithoutAppInput = {
    where: featureScalarWhereInput;
    data: XOR<featureUpdateManyMutationInput, featureUncheckedUpdateManyWithoutAppInput>;
  };

  export type featureScalarWhereInput = {
    AND?: featureScalarWhereInput | featureScalarWhereInput[];
    OR?: featureScalarWhereInput[];
    NOT?: featureScalarWhereInput | featureScalarWhereInput[];
    id?: UuidFilter<'feature'> | string;
    name?: StringFilter<'feature'> | string;
    description?: StringNullableFilter<'feature'> | string | null;
    status?: StringNullableFilter<'feature'> | string | null;
    priority?: IntNullableFilter<'feature'> | number | null;
    app_id?: UuidFilter<'feature'> | string;
    user_id?: UuidFilter<'feature'> | string;
    created_at?: DateTimeFilter<'feature'> | Date | string;
    updated_at?: DateTimeFilter<'feature'> | Date | string;
  };

  export type test_caseUpsertWithWhereUniqueWithoutAppInput = {
    where: test_caseWhereUniqueInput;
    update: XOR<test_caseUpdateWithoutAppInput, test_caseUncheckedUpdateWithoutAppInput>;
    create: XOR<test_caseCreateWithoutAppInput, test_caseUncheckedCreateWithoutAppInput>;
  };

  export type test_caseUpdateWithWhereUniqueWithoutAppInput = {
    where: test_caseWhereUniqueInput;
    data: XOR<test_caseUpdateWithoutAppInput, test_caseUncheckedUpdateWithoutAppInput>;
  };

  export type test_caseUpdateManyWithWhereWithoutAppInput = {
    where: test_caseScalarWhereInput;
    data: XOR<test_caseUpdateManyMutationInput, test_caseUncheckedUpdateManyWithoutAppInput>;
  };

  export type test_caseScalarWhereInput = {
    AND?: test_caseScalarWhereInput | test_caseScalarWhereInput[];
    OR?: test_caseScalarWhereInput[];
    NOT?: test_caseScalarWhereInput | test_caseScalarWhereInput[];
    id?: UuidFilter<'test_case'> | string;
    name?: StringFilter<'test_case'> | string;
    description?: StringNullableFilter<'test_case'> | string | null;
    status?: StringNullableFilter<'test_case'> | string | null;
    priority?: IntNullableFilter<'test_case'> | number | null;
    app_id?: UuidFilter<'test_case'> | string;
    user_id?: UuidFilter<'test_case'> | string;
    created_at?: DateTimeFilter<'test_case'> | Date | string;
    updated_at?: DateTimeFilter<'test_case'> | Date | string;
  };

  export type appCreateWithoutBugInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutAppInput;
    user: userCreateNestedOneWithoutAppInput;
    feature?: featureCreateNestedManyWithoutAppInput;
    test_case?: test_caseCreateNestedManyWithoutAppInput;
  };

  export type appUncheckedCreateWithoutBugInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    company_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    feature?: featureUncheckedCreateNestedManyWithoutAppInput;
    test_case?: test_caseUncheckedCreateNestedManyWithoutAppInput;
  };

  export type appCreateOrConnectWithoutBugInput = {
    where: appWhereUniqueInput;
    create: XOR<appCreateWithoutBugInput, appUncheckedCreateWithoutBugInput>;
  };

  export type userCreateWithoutBugInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    app?: appCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    feature?: featureCreateNestedManyWithoutUserInput;
    test_case?: test_caseCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBugInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    app?: appUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    feature?: featureUncheckedCreateNestedManyWithoutUserInput;
    test_case?: test_caseUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBugInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBugInput, userUncheckedCreateWithoutBugInput>;
  };

  export type appUpsertWithoutBugInput = {
    update: XOR<appUpdateWithoutBugInput, appUncheckedUpdateWithoutBugInput>;
    create: XOR<appCreateWithoutBugInput, appUncheckedCreateWithoutBugInput>;
    where?: appWhereInput;
  };

  export type appUpdateToOneWithWhereWithoutBugInput = {
    where?: appWhereInput;
    data: XOR<appUpdateWithoutBugInput, appUncheckedUpdateWithoutBugInput>;
  };

  export type appUpdateWithoutBugInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutAppNestedInput;
    user?: userUpdateOneRequiredWithoutAppNestedInput;
    feature?: featureUpdateManyWithoutAppNestedInput;
    test_case?: test_caseUpdateManyWithoutAppNestedInput;
  };

  export type appUncheckedUpdateWithoutBugInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    feature?: featureUncheckedUpdateManyWithoutAppNestedInput;
    test_case?: test_caseUncheckedUpdateManyWithoutAppNestedInput;
  };

  export type userUpsertWithoutBugInput = {
    update: XOR<userUpdateWithoutBugInput, userUncheckedUpdateWithoutBugInput>;
    create: XOR<userCreateWithoutBugInput, userUncheckedCreateWithoutBugInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBugInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutBugInput, userUncheckedUpdateWithoutBugInput>;
  };

  export type userUpdateWithoutBugInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    feature?: featureUpdateManyWithoutUserNestedInput;
    test_case?: test_caseUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBugInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    feature?: featureUncheckedUpdateManyWithoutUserNestedInput;
    test_case?: test_caseUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutAppInput;
    bug?: bugCreateNestedManyWithoutAppInput;
    feature?: featureCreateNestedManyWithoutAppInput;
    test_case?: test_caseCreateNestedManyWithoutAppInput;
  };

  export type appUncheckedCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugUncheckedCreateNestedManyWithoutAppInput;
    feature?: featureUncheckedCreateNestedManyWithoutAppInput;
    test_case?: test_caseUncheckedCreateNestedManyWithoutAppInput;
  };

  export type appCreateOrConnectWithoutCompanyInput = {
    where: appWhereUniqueInput;
    create: XOR<appCreateWithoutCompanyInput, appUncheckedCreateWithoutCompanyInput>;
  };

  export type appCreateManyCompanyInputEnvelope = {
    data: appCreateManyCompanyInput | appCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    app?: appCreateNestedManyWithoutUserInput;
    bug?: bugCreateNestedManyWithoutUserInput;
    feature?: featureCreateNestedManyWithoutUserInput;
    test_case?: test_caseCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    app?: appUncheckedCreateNestedManyWithoutUserInput;
    bug?: bugUncheckedCreateNestedManyWithoutUserInput;
    feature?: featureUncheckedCreateNestedManyWithoutUserInput;
    test_case?: test_caseUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type appUpsertWithWhereUniqueWithoutCompanyInput = {
    where: appWhereUniqueInput;
    update: XOR<appUpdateWithoutCompanyInput, appUncheckedUpdateWithoutCompanyInput>;
    create: XOR<appCreateWithoutCompanyInput, appUncheckedCreateWithoutCompanyInput>;
  };

  export type appUpdateWithWhereUniqueWithoutCompanyInput = {
    where: appWhereUniqueInput;
    data: XOR<appUpdateWithoutCompanyInput, appUncheckedUpdateWithoutCompanyInput>;
  };

  export type appUpdateManyWithWhereWithoutCompanyInput = {
    where: appScalarWhereInput;
    data: XOR<appUpdateManyMutationInput, appUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type appScalarWhereInput = {
    AND?: appScalarWhereInput | appScalarWhereInput[];
    OR?: appScalarWhereInput[];
    NOT?: appScalarWhereInput | appScalarWhereInput[];
    id?: UuidFilter<'app'> | string;
    name?: StringFilter<'app'> | string;
    version?: StringNullableFilter<'app'> | string | null;
    release_date?: DateTimeNullableFilter<'app'> | Date | string | null;
    platform?: StringNullableFilter<'app'> | string | null;
    company_id?: UuidFilter<'app'> | string;
    user_id?: UuidFilter<'app'> | string;
    created_at?: DateTimeFilter<'app'> | Date | string;
    updated_at?: DateTimeFilter<'app'> | Date | string;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUpdateManyWithoutUserNestedInput;
    bug?: bugUpdateManyWithoutUserNestedInput;
    feature?: featureUpdateManyWithoutUserNestedInput;
    test_case?: test_caseUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUncheckedUpdateManyWithoutUserNestedInput;
    bug?: bugUncheckedUpdateManyWithoutUserNestedInput;
    feature?: featureUncheckedUpdateManyWithoutUserNestedInput;
    test_case?: test_caseUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appCreateWithoutFeatureInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutAppInput;
    user: userCreateNestedOneWithoutAppInput;
    bug?: bugCreateNestedManyWithoutAppInput;
    test_case?: test_caseCreateNestedManyWithoutAppInput;
  };

  export type appUncheckedCreateWithoutFeatureInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    company_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugUncheckedCreateNestedManyWithoutAppInput;
    test_case?: test_caseUncheckedCreateNestedManyWithoutAppInput;
  };

  export type appCreateOrConnectWithoutFeatureInput = {
    where: appWhereUniqueInput;
    create: XOR<appCreateWithoutFeatureInput, appUncheckedCreateWithoutFeatureInput>;
  };

  export type userCreateWithoutFeatureInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    app?: appCreateNestedManyWithoutUserInput;
    bug?: bugCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    test_case?: test_caseCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutFeatureInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    app?: appUncheckedCreateNestedManyWithoutUserInput;
    bug?: bugUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    test_case?: test_caseUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutFeatureInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutFeatureInput, userUncheckedCreateWithoutFeatureInput>;
  };

  export type appUpsertWithoutFeatureInput = {
    update: XOR<appUpdateWithoutFeatureInput, appUncheckedUpdateWithoutFeatureInput>;
    create: XOR<appCreateWithoutFeatureInput, appUncheckedCreateWithoutFeatureInput>;
    where?: appWhereInput;
  };

  export type appUpdateToOneWithWhereWithoutFeatureInput = {
    where?: appWhereInput;
    data: XOR<appUpdateWithoutFeatureInput, appUncheckedUpdateWithoutFeatureInput>;
  };

  export type appUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutAppNestedInput;
    user?: userUpdateOneRequiredWithoutAppNestedInput;
    bug?: bugUpdateManyWithoutAppNestedInput;
    test_case?: test_caseUpdateManyWithoutAppNestedInput;
  };

  export type appUncheckedUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUncheckedUpdateManyWithoutAppNestedInput;
    test_case?: test_caseUncheckedUpdateManyWithoutAppNestedInput;
  };

  export type userUpsertWithoutFeatureInput = {
    update: XOR<userUpdateWithoutFeatureInput, userUncheckedUpdateWithoutFeatureInput>;
    create: XOR<userCreateWithoutFeatureInput, userUncheckedCreateWithoutFeatureInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutFeatureInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutFeatureInput, userUncheckedUpdateWithoutFeatureInput>;
  };

  export type userUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUpdateManyWithoutUserNestedInput;
    bug?: bugUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    test_case?: test_caseUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUncheckedUpdateManyWithoutUserNestedInput;
    bug?: bugUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    test_case?: test_caseUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appCreateWithoutTest_caseInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutAppInput;
    user: userCreateNestedOneWithoutAppInput;
    bug?: bugCreateNestedManyWithoutAppInput;
    feature?: featureCreateNestedManyWithoutAppInput;
  };

  export type appUncheckedCreateWithoutTest_caseInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    company_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugUncheckedCreateNestedManyWithoutAppInput;
    feature?: featureUncheckedCreateNestedManyWithoutAppInput;
  };

  export type appCreateOrConnectWithoutTest_caseInput = {
    where: appWhereUniqueInput;
    create: XOR<appCreateWithoutTest_caseInput, appUncheckedCreateWithoutTest_caseInput>;
  };

  export type userCreateWithoutTest_caseInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    app?: appCreateNestedManyWithoutUserInput;
    bug?: bugCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    feature?: featureCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTest_caseInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    app?: appUncheckedCreateNestedManyWithoutUserInput;
    bug?: bugUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    feature?: featureUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTest_caseInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTest_caseInput, userUncheckedCreateWithoutTest_caseInput>;
  };

  export type appUpsertWithoutTest_caseInput = {
    update: XOR<appUpdateWithoutTest_caseInput, appUncheckedUpdateWithoutTest_caseInput>;
    create: XOR<appCreateWithoutTest_caseInput, appUncheckedCreateWithoutTest_caseInput>;
    where?: appWhereInput;
  };

  export type appUpdateToOneWithWhereWithoutTest_caseInput = {
    where?: appWhereInput;
    data: XOR<appUpdateWithoutTest_caseInput, appUncheckedUpdateWithoutTest_caseInput>;
  };

  export type appUpdateWithoutTest_caseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutAppNestedInput;
    user?: userUpdateOneRequiredWithoutAppNestedInput;
    bug?: bugUpdateManyWithoutAppNestedInput;
    feature?: featureUpdateManyWithoutAppNestedInput;
  };

  export type appUncheckedUpdateWithoutTest_caseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUncheckedUpdateManyWithoutAppNestedInput;
    feature?: featureUncheckedUpdateManyWithoutAppNestedInput;
  };

  export type userUpsertWithoutTest_caseInput = {
    update: XOR<userUpdateWithoutTest_caseInput, userUncheckedUpdateWithoutTest_caseInput>;
    create: XOR<userCreateWithoutTest_caseInput, userUncheckedCreateWithoutTest_caseInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTest_caseInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTest_caseInput, userUncheckedUpdateWithoutTest_caseInput>;
  };

  export type userUpdateWithoutTest_caseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUpdateManyWithoutUserNestedInput;
    bug?: bugUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    feature?: featureUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTest_caseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUncheckedUpdateManyWithoutUserNestedInput;
    bug?: bugUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    feature?: featureUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appCreateWithoutUserInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutAppInput;
    bug?: bugCreateNestedManyWithoutAppInput;
    feature?: featureCreateNestedManyWithoutAppInput;
    test_case?: test_caseCreateNestedManyWithoutAppInput;
  };

  export type appUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugUncheckedCreateNestedManyWithoutAppInput;
    feature?: featureUncheckedCreateNestedManyWithoutAppInput;
    test_case?: test_caseUncheckedCreateNestedManyWithoutAppInput;
  };

  export type appCreateOrConnectWithoutUserInput = {
    where: appWhereUniqueInput;
    create: XOR<appCreateWithoutUserInput, appUncheckedCreateWithoutUserInput>;
  };

  export type appCreateManyUserInputEnvelope = {
    data: appCreateManyUserInput | appCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type bugCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    severity?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    app: appCreateNestedOneWithoutBugInput;
  };

  export type bugUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    severity?: number | null;
    app_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bugCreateOrConnectWithoutUserInput = {
    where: bugWhereUniqueInput;
    create: XOR<bugCreateWithoutUserInput, bugUncheckedCreateWithoutUserInput>;
  };

  export type bugCreateManyUserInputEnvelope = {
    data: bugCreateManyUserInput | bugCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    app?: appCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    app?: appUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type featureCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    app: appCreateNestedOneWithoutFeatureInput;
  };

  export type featureUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    app_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type featureCreateOrConnectWithoutUserInput = {
    where: featureWhereUniqueInput;
    create: XOR<featureCreateWithoutUserInput, featureUncheckedCreateWithoutUserInput>;
  };

  export type featureCreateManyUserInputEnvelope = {
    data: featureCreateManyUserInput | featureCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type test_caseCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    app: appCreateNestedOneWithoutTest_caseInput;
  };

  export type test_caseUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    app_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type test_caseCreateOrConnectWithoutUserInput = {
    where: test_caseWhereUniqueInput;
    create: XOR<test_caseCreateWithoutUserInput, test_caseUncheckedCreateWithoutUserInput>;
  };

  export type test_caseCreateManyUserInputEnvelope = {
    data: test_caseCreateManyUserInput | test_caseCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type appUpsertWithWhereUniqueWithoutUserInput = {
    where: appWhereUniqueInput;
    update: XOR<appUpdateWithoutUserInput, appUncheckedUpdateWithoutUserInput>;
    create: XOR<appCreateWithoutUserInput, appUncheckedCreateWithoutUserInput>;
  };

  export type appUpdateWithWhereUniqueWithoutUserInput = {
    where: appWhereUniqueInput;
    data: XOR<appUpdateWithoutUserInput, appUncheckedUpdateWithoutUserInput>;
  };

  export type appUpdateManyWithWhereWithoutUserInput = {
    where: appScalarWhereInput;
    data: XOR<appUpdateManyMutationInput, appUncheckedUpdateManyWithoutUserInput>;
  };

  export type bugUpsertWithWhereUniqueWithoutUserInput = {
    where: bugWhereUniqueInput;
    update: XOR<bugUpdateWithoutUserInput, bugUncheckedUpdateWithoutUserInput>;
    create: XOR<bugCreateWithoutUserInput, bugUncheckedCreateWithoutUserInput>;
  };

  export type bugUpdateWithWhereUniqueWithoutUserInput = {
    where: bugWhereUniqueInput;
    data: XOR<bugUpdateWithoutUserInput, bugUncheckedUpdateWithoutUserInput>;
  };

  export type bugUpdateManyWithWhereWithoutUserInput = {
    where: bugScalarWhereInput;
    data: XOR<bugUpdateManyMutationInput, bugUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    state?: StringNullableFilter<'company'> | string | null;
    zip_code?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type featureUpsertWithWhereUniqueWithoutUserInput = {
    where: featureWhereUniqueInput;
    update: XOR<featureUpdateWithoutUserInput, featureUncheckedUpdateWithoutUserInput>;
    create: XOR<featureCreateWithoutUserInput, featureUncheckedCreateWithoutUserInput>;
  };

  export type featureUpdateWithWhereUniqueWithoutUserInput = {
    where: featureWhereUniqueInput;
    data: XOR<featureUpdateWithoutUserInput, featureUncheckedUpdateWithoutUserInput>;
  };

  export type featureUpdateManyWithWhereWithoutUserInput = {
    where: featureScalarWhereInput;
    data: XOR<featureUpdateManyMutationInput, featureUncheckedUpdateManyWithoutUserInput>;
  };

  export type test_caseUpsertWithWhereUniqueWithoutUserInput = {
    where: test_caseWhereUniqueInput;
    update: XOR<test_caseUpdateWithoutUserInput, test_caseUncheckedUpdateWithoutUserInput>;
    create: XOR<test_caseCreateWithoutUserInput, test_caseUncheckedCreateWithoutUserInput>;
  };

  export type test_caseUpdateWithWhereUniqueWithoutUserInput = {
    where: test_caseWhereUniqueInput;
    data: XOR<test_caseUpdateWithoutUserInput, test_caseUncheckedUpdateWithoutUserInput>;
  };

  export type test_caseUpdateManyWithWhereWithoutUserInput = {
    where: test_caseScalarWhereInput;
    data: XOR<test_caseUpdateManyMutationInput, test_caseUncheckedUpdateManyWithoutUserInput>;
  };

  export type bugCreateManyAppInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    severity?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type featureCreateManyAppInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type test_caseCreateManyAppInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bugUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    severity?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutBugNestedInput;
  };

  export type bugUncheckedUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    severity?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bugUncheckedUpdateManyWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    severity?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type featureUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutFeatureNestedInput;
  };

  export type featureUncheckedUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type featureUncheckedUpdateManyWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type test_caseUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTest_caseNestedInput;
  };

  export type test_caseUncheckedUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type test_caseUncheckedUpdateManyWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appCreateManyCompanyInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutAppNestedInput;
    bug?: bugUpdateManyWithoutAppNestedInput;
    feature?: featureUpdateManyWithoutAppNestedInput;
    test_case?: test_caseUpdateManyWithoutAppNestedInput;
  };

  export type appUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUncheckedUpdateManyWithoutAppNestedInput;
    feature?: featureUncheckedUpdateManyWithoutAppNestedInput;
    test_case?: test_caseUncheckedUpdateManyWithoutAppNestedInput;
  };

  export type appUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appCreateManyUserInput = {
    id?: string;
    name: string;
    version?: string | null;
    release_date?: Date | string | null;
    platform?: string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bugCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    severity?: number | null;
    app_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type featureCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    app_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type test_caseCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: string | null;
    priority?: number | null;
    app_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutAppNestedInput;
    bug?: bugUpdateManyWithoutAppNestedInput;
    feature?: featureUpdateManyWithoutAppNestedInput;
    test_case?: test_caseUpdateManyWithoutAppNestedInput;
  };

  export type appUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUncheckedUpdateManyWithoutAppNestedInput;
    feature?: featureUncheckedUpdateManyWithoutAppNestedInput;
    test_case?: test_caseUncheckedUpdateManyWithoutAppNestedInput;
  };

  export type appUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    version?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    platform?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bugUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    severity?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUpdateOneRequiredWithoutBugNestedInput;
  };

  export type bugUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    severity?: NullableIntFieldUpdateOperationsInput | number | null;
    app_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bugUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    severity?: NullableIntFieldUpdateOperationsInput | number | null;
    app_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    app?: appUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    app?: appUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type featureUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUpdateOneRequiredWithoutFeatureNestedInput;
  };

  export type featureUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    app_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type featureUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    app_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type test_caseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    app?: appUpdateOneRequiredWithoutTest_caseNestedInput;
  };

  export type test_caseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    app_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type test_caseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    priority?: NullableIntFieldUpdateOperationsInput | number | null;
    app_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use AppCountOutputTypeDefaultArgs instead
   */
  export type AppCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    AppCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use appDefaultArgs instead
   */
  export type appArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = appDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use bugDefaultArgs instead
   */
  export type bugArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = bugDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use featureDefaultArgs instead
   */
  export type featureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    featureDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use test_caseDefaultArgs instead
   */
  export type test_caseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    test_caseDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}

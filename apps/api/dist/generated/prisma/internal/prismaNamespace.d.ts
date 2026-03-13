import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
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
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Token: "Token";
    readonly Product: "Product";
    readonly ProductImage: "ProductImage";
    readonly Message: "Message";
    readonly Attachment: "Attachment";
    readonly Warehouse: "Warehouse";
    readonly StockItem: "StockItem";
    readonly Object: "Object";
    readonly Shipment: "Shipment";
    readonly ShipmentItem: "ShipmentItem";
    readonly Project: "Project";
    readonly ProjectImage: "ProjectImage";
    readonly ProjectDocument: "ProjectDocument";
    readonly Estimate: "Estimate";
    readonly EstimateItem: "EstimateItem";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "token" | "product" | "productImage" | "message" | "attachment" | "warehouse" | "stockItem" | "object" | "shipment" | "shipmentItem" | "project" | "projectImage" | "projectDocument" | "estimate" | "estimateItem";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Token: {
            payload: Prisma.$TokenPayload<ExtArgs>;
            fields: Prisma.TokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenPayload>;
                };
                findFirst: {
                    args: Prisma.TokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenPayload>;
                };
                findMany: {
                    args: Prisma.TokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenPayload>[];
                };
                create: {
                    args: Prisma.TokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenPayload>;
                };
                createMany: {
                    args: Prisma.TokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenPayload>[];
                };
                delete: {
                    args: Prisma.TokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenPayload>;
                };
                update: {
                    args: Prisma.TokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenPayload>;
                };
                deleteMany: {
                    args: Prisma.TokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenPayload>[];
                };
                upsert: {
                    args: Prisma.TokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenPayload>;
                };
                aggregate: {
                    args: Prisma.TokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateToken>;
                };
                groupBy: {
                    args: Prisma.TokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TokenCountAggregateOutputType> | number;
                };
            };
        };
        Product: {
            payload: Prisma.$ProductPayload<ExtArgs>;
            fields: Prisma.ProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findFirst: {
                    args: Prisma.ProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findMany: {
                    args: Prisma.ProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                create: {
                    args: Prisma.ProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                createMany: {
                    args: Prisma.ProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                delete: {
                    args: Prisma.ProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                update: {
                    args: Prisma.ProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                upsert: {
                    args: Prisma.ProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                aggregate: {
                    args: Prisma.ProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct>;
                };
                groupBy: {
                    args: Prisma.ProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCountAggregateOutputType> | number;
                };
            };
        };
        ProductImage: {
            payload: Prisma.$ProductImagePayload<ExtArgs>;
            fields: Prisma.ProductImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                findFirst: {
                    args: Prisma.ProductImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                findMany: {
                    args: Prisma.ProductImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>[];
                };
                create: {
                    args: Prisma.ProductImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                createMany: {
                    args: Prisma.ProductImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>[];
                };
                delete: {
                    args: Prisma.ProductImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                update: {
                    args: Prisma.ProductImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                deleteMany: {
                    args: Prisma.ProductImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>[];
                };
                upsert: {
                    args: Prisma.ProductImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                aggregate: {
                    args: Prisma.ProductImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductImage>;
                };
                groupBy: {
                    args: Prisma.ProductImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductImageCountAggregateOutputType> | number;
                };
            };
        };
        Message: {
            payload: Prisma.$MessagePayload<ExtArgs>;
            fields: Prisma.MessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findFirst: {
                    args: Prisma.MessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findMany: {
                    args: Prisma.MessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                create: {
                    args: Prisma.MessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                createMany: {
                    args: Prisma.MessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                delete: {
                    args: Prisma.MessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                update: {
                    args: Prisma.MessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                deleteMany: {
                    args: Prisma.MessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                upsert: {
                    args: Prisma.MessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                aggregate: {
                    args: Prisma.MessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessage>;
                };
                groupBy: {
                    args: Prisma.MessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageCountAggregateOutputType> | number;
                };
            };
        };
        Attachment: {
            payload: Prisma.$AttachmentPayload<ExtArgs>;
            fields: Prisma.AttachmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AttachmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>;
                };
                findFirst: {
                    args: Prisma.AttachmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>;
                };
                findMany: {
                    args: Prisma.AttachmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>[];
                };
                create: {
                    args: Prisma.AttachmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>;
                };
                createMany: {
                    args: Prisma.AttachmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AttachmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>[];
                };
                delete: {
                    args: Prisma.AttachmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>;
                };
                update: {
                    args: Prisma.AttachmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>;
                };
                deleteMany: {
                    args: Prisma.AttachmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AttachmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AttachmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>[];
                };
                upsert: {
                    args: Prisma.AttachmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttachmentPayload>;
                };
                aggregate: {
                    args: Prisma.AttachmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAttachment>;
                };
                groupBy: {
                    args: Prisma.AttachmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttachmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AttachmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttachmentCountAggregateOutputType> | number;
                };
            };
        };
        Warehouse: {
            payload: Prisma.$WarehousePayload<ExtArgs>;
            fields: Prisma.WarehouseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WarehouseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>;
                };
                findFirst: {
                    args: Prisma.WarehouseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>;
                };
                findMany: {
                    args: Prisma.WarehouseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>[];
                };
                create: {
                    args: Prisma.WarehouseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>;
                };
                createMany: {
                    args: Prisma.WarehouseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WarehouseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>[];
                };
                delete: {
                    args: Prisma.WarehouseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>;
                };
                update: {
                    args: Prisma.WarehouseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>;
                };
                deleteMany: {
                    args: Prisma.WarehouseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WarehouseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WarehouseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>[];
                };
                upsert: {
                    args: Prisma.WarehouseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>;
                };
                aggregate: {
                    args: Prisma.WarehouseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWarehouse>;
                };
                groupBy: {
                    args: Prisma.WarehouseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WarehouseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WarehouseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WarehouseCountAggregateOutputType> | number;
                };
            };
        };
        StockItem: {
            payload: Prisma.$StockItemPayload<ExtArgs>;
            fields: Prisma.StockItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StockItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StockItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>;
                };
                findFirst: {
                    args: Prisma.StockItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StockItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>;
                };
                findMany: {
                    args: Prisma.StockItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>[];
                };
                create: {
                    args: Prisma.StockItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>;
                };
                createMany: {
                    args: Prisma.StockItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StockItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>[];
                };
                delete: {
                    args: Prisma.StockItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>;
                };
                update: {
                    args: Prisma.StockItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>;
                };
                deleteMany: {
                    args: Prisma.StockItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StockItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StockItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>[];
                };
                upsert: {
                    args: Prisma.StockItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>;
                };
                aggregate: {
                    args: Prisma.StockItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStockItem>;
                };
                groupBy: {
                    args: Prisma.StockItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StockItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StockItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StockItemCountAggregateOutputType> | number;
                };
            };
        };
        Object: {
            payload: Prisma.$ObjectPayload<ExtArgs>;
            fields: Prisma.ObjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ObjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ObjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjectPayload>;
                };
                findFirst: {
                    args: Prisma.ObjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ObjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjectPayload>;
                };
                findMany: {
                    args: Prisma.ObjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjectPayload>[];
                };
                create: {
                    args: Prisma.ObjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjectPayload>;
                };
                createMany: {
                    args: Prisma.ObjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ObjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjectPayload>[];
                };
                delete: {
                    args: Prisma.ObjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjectPayload>;
                };
                update: {
                    args: Prisma.ObjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjectPayload>;
                };
                deleteMany: {
                    args: Prisma.ObjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ObjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ObjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjectPayload>[];
                };
                upsert: {
                    args: Prisma.ObjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjectPayload>;
                };
                aggregate: {
                    args: Prisma.ObjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateObject>;
                };
                groupBy: {
                    args: Prisma.ObjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ObjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ObjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ObjectCountAggregateOutputType> | number;
                };
            };
        };
        Shipment: {
            payload: Prisma.$ShipmentPayload<ExtArgs>;
            fields: Prisma.ShipmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShipmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>;
                };
                findFirst: {
                    args: Prisma.ShipmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>;
                };
                findMany: {
                    args: Prisma.ShipmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>[];
                };
                create: {
                    args: Prisma.ShipmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>;
                };
                createMany: {
                    args: Prisma.ShipmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShipmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>[];
                };
                delete: {
                    args: Prisma.ShipmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>;
                };
                update: {
                    args: Prisma.ShipmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>;
                };
                deleteMany: {
                    args: Prisma.ShipmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShipmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShipmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>[];
                };
                upsert: {
                    args: Prisma.ShipmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>;
                };
                aggregate: {
                    args: Prisma.ShipmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShipment>;
                };
                groupBy: {
                    args: Prisma.ShipmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShipmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShipmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShipmentCountAggregateOutputType> | number;
                };
            };
        };
        ShipmentItem: {
            payload: Prisma.$ShipmentItemPayload<ExtArgs>;
            fields: Prisma.ShipmentItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShipmentItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShipmentItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentItemPayload>;
                };
                findFirst: {
                    args: Prisma.ShipmentItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShipmentItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentItemPayload>;
                };
                findMany: {
                    args: Prisma.ShipmentItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentItemPayload>[];
                };
                create: {
                    args: Prisma.ShipmentItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentItemPayload>;
                };
                createMany: {
                    args: Prisma.ShipmentItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShipmentItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentItemPayload>[];
                };
                delete: {
                    args: Prisma.ShipmentItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentItemPayload>;
                };
                update: {
                    args: Prisma.ShipmentItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentItemPayload>;
                };
                deleteMany: {
                    args: Prisma.ShipmentItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShipmentItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShipmentItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentItemPayload>[];
                };
                upsert: {
                    args: Prisma.ShipmentItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentItemPayload>;
                };
                aggregate: {
                    args: Prisma.ShipmentItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShipmentItem>;
                };
                groupBy: {
                    args: Prisma.ShipmentItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShipmentItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShipmentItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShipmentItemCountAggregateOutputType> | number;
                };
            };
        };
        Project: {
            payload: Prisma.$ProjectPayload<ExtArgs>;
            fields: Prisma.ProjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                findFirst: {
                    args: Prisma.ProjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                findMany: {
                    args: Prisma.ProjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                create: {
                    args: Prisma.ProjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                createMany: {
                    args: Prisma.ProjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                delete: {
                    args: Prisma.ProjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                update: {
                    args: Prisma.ProjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                upsert: {
                    args: Prisma.ProjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                aggregate: {
                    args: Prisma.ProjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProject>;
                };
                groupBy: {
                    args: Prisma.ProjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectCountAggregateOutputType> | number;
                };
            };
        };
        ProjectImage: {
            payload: Prisma.$ProjectImagePayload<ExtArgs>;
            fields: Prisma.ProjectImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>;
                };
                findFirst: {
                    args: Prisma.ProjectImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>;
                };
                findMany: {
                    args: Prisma.ProjectImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>[];
                };
                create: {
                    args: Prisma.ProjectImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>;
                };
                createMany: {
                    args: Prisma.ProjectImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>[];
                };
                delete: {
                    args: Prisma.ProjectImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>;
                };
                update: {
                    args: Prisma.ProjectImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>[];
                };
                upsert: {
                    args: Prisma.ProjectImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectImagePayload>;
                };
                aggregate: {
                    args: Prisma.ProjectImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProjectImage>;
                };
                groupBy: {
                    args: Prisma.ProjectImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectImageCountAggregateOutputType> | number;
                };
            };
        };
        ProjectDocument: {
            payload: Prisma.$ProjectDocumentPayload<ExtArgs>;
            fields: Prisma.ProjectDocumentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectDocumentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectDocumentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectDocumentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>;
                };
                findFirst: {
                    args: Prisma.ProjectDocumentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectDocumentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectDocumentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>;
                };
                findMany: {
                    args: Prisma.ProjectDocumentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>[];
                };
                create: {
                    args: Prisma.ProjectDocumentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>;
                };
                createMany: {
                    args: Prisma.ProjectDocumentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectDocumentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>[];
                };
                delete: {
                    args: Prisma.ProjectDocumentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>;
                };
                update: {
                    args: Prisma.ProjectDocumentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectDocumentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectDocumentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectDocumentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>[];
                };
                upsert: {
                    args: Prisma.ProjectDocumentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>;
                };
                aggregate: {
                    args: Prisma.ProjectDocumentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProjectDocument>;
                };
                groupBy: {
                    args: Prisma.ProjectDocumentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectDocumentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectDocumentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectDocumentCountAggregateOutputType> | number;
                };
            };
        };
        Estimate: {
            payload: Prisma.$EstimatePayload<ExtArgs>;
            fields: Prisma.EstimateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EstimateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EstimateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimatePayload>;
                };
                findFirst: {
                    args: Prisma.EstimateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EstimateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimatePayload>;
                };
                findMany: {
                    args: Prisma.EstimateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimatePayload>[];
                };
                create: {
                    args: Prisma.EstimateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimatePayload>;
                };
                createMany: {
                    args: Prisma.EstimateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EstimateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimatePayload>[];
                };
                delete: {
                    args: Prisma.EstimateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimatePayload>;
                };
                update: {
                    args: Prisma.EstimateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimatePayload>;
                };
                deleteMany: {
                    args: Prisma.EstimateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EstimateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EstimateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimatePayload>[];
                };
                upsert: {
                    args: Prisma.EstimateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimatePayload>;
                };
                aggregate: {
                    args: Prisma.EstimateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEstimate>;
                };
                groupBy: {
                    args: Prisma.EstimateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EstimateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EstimateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EstimateCountAggregateOutputType> | number;
                };
            };
        };
        EstimateItem: {
            payload: Prisma.$EstimateItemPayload<ExtArgs>;
            fields: Prisma.EstimateItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EstimateItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimateItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EstimateItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimateItemPayload>;
                };
                findFirst: {
                    args: Prisma.EstimateItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimateItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EstimateItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimateItemPayload>;
                };
                findMany: {
                    args: Prisma.EstimateItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimateItemPayload>[];
                };
                create: {
                    args: Prisma.EstimateItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimateItemPayload>;
                };
                createMany: {
                    args: Prisma.EstimateItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EstimateItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimateItemPayload>[];
                };
                delete: {
                    args: Prisma.EstimateItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimateItemPayload>;
                };
                update: {
                    args: Prisma.EstimateItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimateItemPayload>;
                };
                deleteMany: {
                    args: Prisma.EstimateItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EstimateItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EstimateItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimateItemPayload>[];
                };
                upsert: {
                    args: Prisma.EstimateItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstimateItemPayload>;
                };
                aggregate: {
                    args: Prisma.EstimateItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEstimateItem>;
                };
                groupBy: {
                    args: Prisma.EstimateItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EstimateItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EstimateItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EstimateItemCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly password: "password";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly role: "role";
    readonly email: "email";
    readonly phone: "phone";
    readonly age: "age";
    readonly address: "address";
    readonly avatar: "avatar";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const TokenScalarFieldEnum: {
    readonly token: "token";
    readonly expires: "expires";
    readonly userId: "userId";
};
export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly category: "category";
    readonly manufacturer: "manufacturer";
    readonly imageUrl: "imageUrl";
    readonly unit: "unit";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ProductImageScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly url: "url";
};
export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly userName: "userName";
    readonly text: "text";
    readonly createdAt: "createdAt";
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const AttachmentScalarFieldEnum: {
    readonly id: "id";
    readonly messageId: "messageId";
    readonly fileName: "fileName";
    readonly fileSize: "fileSize";
    readonly fileType: "fileType";
    readonly filePath: "filePath";
    readonly uploadedAt: "uploadedAt";
};
export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum];
export declare const WarehouseScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address: "address";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum];
export declare const StockItemScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly warehouseId: "warehouseId";
    readonly quantity: "quantity";
    readonly purchasePrice: "purchasePrice";
    readonly estimatePrice: "estimatePrice";
    readonly salePrice: "salePrice";
    readonly discount: "discount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StockItemScalarFieldEnum = (typeof StockItemScalarFieldEnum)[keyof typeof StockItemScalarFieldEnum];
export declare const ObjectScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address: "address";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ObjectScalarFieldEnum = (typeof ObjectScalarFieldEnum)[keyof typeof ObjectScalarFieldEnum];
export declare const ShipmentScalarFieldEnum: {
    readonly id: "id";
    readonly warehouseId: "warehouseId";
    readonly objectId: "objectId";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum];
export declare const ShipmentItemScalarFieldEnum: {
    readonly id: "id";
    readonly shipmentId: "shipmentId";
    readonly productId: "productId";
    readonly quantity: "quantity";
    readonly createdAt: "createdAt";
};
export type ShipmentItemScalarFieldEnum = (typeof ShipmentItemScalarFieldEnum)[keyof typeof ShipmentItemScalarFieldEnum];
export declare const ProjectScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly status: "status";
};
export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];
export declare const ProjectImageScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly data: "data";
    readonly filename: "filename";
    readonly mimeType: "mimeType";
    readonly size: "size";
    readonly createdAt: "createdAt";
    readonly sortOrder: "sortOrder";
};
export type ProjectImageScalarFieldEnum = (typeof ProjectImageScalarFieldEnum)[keyof typeof ProjectImageScalarFieldEnum];
export declare const ProjectDocumentScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly data: "data";
    readonly filename: "filename";
    readonly mimeType: "mimeType";
    readonly size: "size";
    readonly createdAt: "createdAt";
    readonly docType: "docType";
};
export type ProjectDocumentScalarFieldEnum = (typeof ProjectDocumentScalarFieldEnum)[keyof typeof ProjectDocumentScalarFieldEnum];
export declare const EstimateScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly totalCost: "totalCost";
    readonly laborCost: "laborCost";
    readonly materialsCost: "materialsCost";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EstimateScalarFieldEnum = (typeof EstimateScalarFieldEnum)[keyof typeof EstimateScalarFieldEnum];
export declare const EstimateItemScalarFieldEnum: {
    readonly id: "id";
    readonly estimateId: "estimateId";
    readonly productId: "productId";
    readonly name: "name";
    readonly description: "description";
    readonly quantity: "quantity";
    readonly unit: "unit";
    readonly price: "price";
    readonly total: "total";
    readonly costType: "costType";
};
export type EstimateItemScalarFieldEnum = (typeof EstimateItemScalarFieldEnum)[keyof typeof EstimateItemScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type EnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus'>;
export type ListEnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus[]'>;
export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>;
export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>;
export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>;
export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>;
export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>;
export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>;
export type EnumCostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CostType'>;
export type ListEnumCostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CostType[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    token?: Prisma.TokenOmit;
    product?: Prisma.ProductOmit;
    productImage?: Prisma.ProductImageOmit;
    message?: Prisma.MessageOmit;
    attachment?: Prisma.AttachmentOmit;
    warehouse?: Prisma.WarehouseOmit;
    stockItem?: Prisma.StockItemOmit;
    object?: Prisma.ObjectOmit;
    shipment?: Prisma.ShipmentOmit;
    shipmentItem?: Prisma.ShipmentItemOmit;
    project?: Prisma.ProjectOmit;
    projectImage?: Prisma.ProjectImageOmit;
    projectDocument?: Prisma.ProjectDocumentOmit;
    estimate?: Prisma.EstimateOmit;
    estimateItem?: Prisma.EstimateItemOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
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
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;

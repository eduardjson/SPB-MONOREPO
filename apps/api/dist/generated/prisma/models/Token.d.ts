import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TokenModel = runtime.Types.Result.DefaultSelection<Prisma.$TokenPayload>;
export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null;
    _min: TokenMinAggregateOutputType | null;
    _max: TokenMaxAggregateOutputType | null;
};
export type TokenMinAggregateOutputType = {
    token: string | null;
    expires: Date | null;
    userId: string | null;
};
export type TokenMaxAggregateOutputType = {
    token: string | null;
    expires: Date | null;
    userId: string | null;
};
export type TokenCountAggregateOutputType = {
    token: number;
    expires: number;
    userId: number;
    _all: number;
};
export type TokenMinAggregateInputType = {
    token?: true;
    expires?: true;
    userId?: true;
};
export type TokenMaxAggregateInputType = {
    token?: true;
    expires?: true;
    userId?: true;
};
export type TokenCountAggregateInputType = {
    token?: true;
    expires?: true;
    userId?: true;
    _all?: true;
};
export type TokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TokenWhereInput;
    orderBy?: Prisma.TokenOrderByWithRelationInput | Prisma.TokenOrderByWithRelationInput[];
    cursor?: Prisma.TokenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TokenCountAggregateInputType;
    _min?: TokenMinAggregateInputType;
    _max?: TokenMaxAggregateInputType;
};
export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
    [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateToken[P]> : Prisma.GetScalarType<T[P], AggregateToken[P]>;
};
export type TokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TokenWhereInput;
    orderBy?: Prisma.TokenOrderByWithAggregationInput | Prisma.TokenOrderByWithAggregationInput[];
    by: Prisma.TokenScalarFieldEnum[] | Prisma.TokenScalarFieldEnum;
    having?: Prisma.TokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TokenCountAggregateInputType | true;
    _min?: TokenMinAggregateInputType;
    _max?: TokenMaxAggregateInputType;
};
export type TokenGroupByOutputType = {
    token: string;
    expires: Date;
    userId: string;
    _count: TokenCountAggregateOutputType | null;
    _min: TokenMinAggregateOutputType | null;
    _max: TokenMaxAggregateOutputType | null;
};
type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TokenGroupByOutputType[P]>;
}>>;
export type TokenWhereInput = {
    AND?: Prisma.TokenWhereInput | Prisma.TokenWhereInput[];
    OR?: Prisma.TokenWhereInput[];
    NOT?: Prisma.TokenWhereInput | Prisma.TokenWhereInput[];
    token?: Prisma.StringFilter<"Token"> | string;
    expires?: Prisma.DateTimeFilter<"Token"> | Date | string;
    userId?: Prisma.StringFilter<"Token"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TokenOrderByWithRelationInput = {
    token?: Prisma.SortOrder;
    expires?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type TokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string;
    AND?: Prisma.TokenWhereInput | Prisma.TokenWhereInput[];
    OR?: Prisma.TokenWhereInput[];
    NOT?: Prisma.TokenWhereInput | Prisma.TokenWhereInput[];
    expires?: Prisma.DateTimeFilter<"Token"> | Date | string;
    userId?: Prisma.StringFilter<"Token"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "token">;
export type TokenOrderByWithAggregationInput = {
    token?: Prisma.SortOrder;
    expires?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.TokenCountOrderByAggregateInput;
    _max?: Prisma.TokenMaxOrderByAggregateInput;
    _min?: Prisma.TokenMinOrderByAggregateInput;
};
export type TokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.TokenScalarWhereWithAggregatesInput | Prisma.TokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.TokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TokenScalarWhereWithAggregatesInput | Prisma.TokenScalarWhereWithAggregatesInput[];
    token?: Prisma.StringWithAggregatesFilter<"Token"> | string;
    expires?: Prisma.DateTimeWithAggregatesFilter<"Token"> | Date | string;
    userId?: Prisma.StringWithAggregatesFilter<"Token"> | string;
};
export type TokenCreateInput = {
    token: string;
    expires: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTokensInput;
};
export type TokenUncheckedCreateInput = {
    token: string;
    expires: Date | string;
    userId: string;
};
export type TokenUpdateInput = {
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expires?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTokensNestedInput;
};
export type TokenUncheckedUpdateInput = {
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expires?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TokenCreateManyInput = {
    token: string;
    expires: Date | string;
    userId: string;
};
export type TokenUpdateManyMutationInput = {
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expires?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TokenUncheckedUpdateManyInput = {
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expires?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TokenListRelationFilter = {
    every?: Prisma.TokenWhereInput;
    some?: Prisma.TokenWhereInput;
    none?: Prisma.TokenWhereInput;
};
export type TokenOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TokenCountOrderByAggregateInput = {
    token?: Prisma.SortOrder;
    expires?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type TokenMaxOrderByAggregateInput = {
    token?: Prisma.SortOrder;
    expires?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type TokenMinOrderByAggregateInput = {
    token?: Prisma.SortOrder;
    expires?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type TokenCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TokenCreateWithoutUserInput, Prisma.TokenUncheckedCreateWithoutUserInput> | Prisma.TokenCreateWithoutUserInput[] | Prisma.TokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TokenCreateOrConnectWithoutUserInput | Prisma.TokenCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TokenCreateManyUserInputEnvelope;
    connect?: Prisma.TokenWhereUniqueInput | Prisma.TokenWhereUniqueInput[];
};
export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TokenCreateWithoutUserInput, Prisma.TokenUncheckedCreateWithoutUserInput> | Prisma.TokenCreateWithoutUserInput[] | Prisma.TokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TokenCreateOrConnectWithoutUserInput | Prisma.TokenCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TokenCreateManyUserInputEnvelope;
    connect?: Prisma.TokenWhereUniqueInput | Prisma.TokenWhereUniqueInput[];
};
export type TokenUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TokenCreateWithoutUserInput, Prisma.TokenUncheckedCreateWithoutUserInput> | Prisma.TokenCreateWithoutUserInput[] | Prisma.TokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TokenCreateOrConnectWithoutUserInput | Prisma.TokenCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TokenUpsertWithWhereUniqueWithoutUserInput | Prisma.TokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TokenCreateManyUserInputEnvelope;
    set?: Prisma.TokenWhereUniqueInput | Prisma.TokenWhereUniqueInput[];
    disconnect?: Prisma.TokenWhereUniqueInput | Prisma.TokenWhereUniqueInput[];
    delete?: Prisma.TokenWhereUniqueInput | Prisma.TokenWhereUniqueInput[];
    connect?: Prisma.TokenWhereUniqueInput | Prisma.TokenWhereUniqueInput[];
    update?: Prisma.TokenUpdateWithWhereUniqueWithoutUserInput | Prisma.TokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TokenUpdateManyWithWhereWithoutUserInput | Prisma.TokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TokenScalarWhereInput | Prisma.TokenScalarWhereInput[];
};
export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TokenCreateWithoutUserInput, Prisma.TokenUncheckedCreateWithoutUserInput> | Prisma.TokenCreateWithoutUserInput[] | Prisma.TokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TokenCreateOrConnectWithoutUserInput | Prisma.TokenCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TokenUpsertWithWhereUniqueWithoutUserInput | Prisma.TokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TokenCreateManyUserInputEnvelope;
    set?: Prisma.TokenWhereUniqueInput | Prisma.TokenWhereUniqueInput[];
    disconnect?: Prisma.TokenWhereUniqueInput | Prisma.TokenWhereUniqueInput[];
    delete?: Prisma.TokenWhereUniqueInput | Prisma.TokenWhereUniqueInput[];
    connect?: Prisma.TokenWhereUniqueInput | Prisma.TokenWhereUniqueInput[];
    update?: Prisma.TokenUpdateWithWhereUniqueWithoutUserInput | Prisma.TokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TokenUpdateManyWithWhereWithoutUserInput | Prisma.TokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TokenScalarWhereInput | Prisma.TokenScalarWhereInput[];
};
export type TokenCreateWithoutUserInput = {
    token: string;
    expires: Date | string;
};
export type TokenUncheckedCreateWithoutUserInput = {
    token: string;
    expires: Date | string;
};
export type TokenCreateOrConnectWithoutUserInput = {
    where: Prisma.TokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.TokenCreateWithoutUserInput, Prisma.TokenUncheckedCreateWithoutUserInput>;
};
export type TokenCreateManyUserInputEnvelope = {
    data: Prisma.TokenCreateManyUserInput | Prisma.TokenCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TokenWhereUniqueInput;
    update: Prisma.XOR<Prisma.TokenUpdateWithoutUserInput, Prisma.TokenUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TokenCreateWithoutUserInput, Prisma.TokenUncheckedCreateWithoutUserInput>;
};
export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TokenWhereUniqueInput;
    data: Prisma.XOR<Prisma.TokenUpdateWithoutUserInput, Prisma.TokenUncheckedUpdateWithoutUserInput>;
};
export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TokenScalarWhereInput;
    data: Prisma.XOR<Prisma.TokenUpdateManyMutationInput, Prisma.TokenUncheckedUpdateManyWithoutUserInput>;
};
export type TokenScalarWhereInput = {
    AND?: Prisma.TokenScalarWhereInput | Prisma.TokenScalarWhereInput[];
    OR?: Prisma.TokenScalarWhereInput[];
    NOT?: Prisma.TokenScalarWhereInput | Prisma.TokenScalarWhereInput[];
    token?: Prisma.StringFilter<"Token"> | string;
    expires?: Prisma.DateTimeFilter<"Token"> | Date | string;
    userId?: Prisma.StringFilter<"Token"> | string;
};
export type TokenCreateManyUserInput = {
    token: string;
    expires: Date | string;
};
export type TokenUpdateWithoutUserInput = {
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expires?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TokenUncheckedUpdateWithoutUserInput = {
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expires?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TokenUncheckedUpdateManyWithoutUserInput = {
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expires?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    token?: boolean;
    expires?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["token"]>;
export type TokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    token?: boolean;
    expires?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["token"]>;
export type TokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    token?: boolean;
    expires?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["token"]>;
export type TokenSelectScalar = {
    token?: boolean;
    expires?: boolean;
    userId?: boolean;
};
export type TokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"token" | "expires" | "userId", ExtArgs["result"]["token"]>;
export type TokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Token";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        token: string;
        expires: Date;
        userId: string;
    }, ExtArgs["result"]["token"]>;
    composites: {};
};
export type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TokenPayload, S>;
export type TokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TokenCountAggregateInputType | true;
};
export interface TokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Token'];
        meta: {
            name: 'Token';
        };
    };
    findUnique<T extends TokenFindUniqueArgs>(args: Prisma.SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TokenClient<runtime.Types.Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TokenClient<runtime.Types.Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TokenFindFirstArgs>(args?: Prisma.SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__TokenClient<runtime.Types.Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TokenClient<runtime.Types.Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TokenFindManyArgs>(args?: Prisma.SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TokenCreateArgs>(args: Prisma.SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma.Prisma__TokenClient<runtime.Types.Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TokenCreateManyArgs>(args?: Prisma.SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TokenDeleteArgs>(args: Prisma.SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma.Prisma__TokenClient<runtime.Types.Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TokenUpdateArgs>(args: Prisma.SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma.Prisma__TokenClient<runtime.Types.Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TokenUpdateManyArgs>(args: Prisma.SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TokenUpsertArgs>(args: Prisma.SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma.Prisma__TokenClient<runtime.Types.Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TokenCountArgs>(args?: Prisma.Subset<T, TokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TokenCountAggregateOutputType> : number>;
    aggregate<T extends TokenAggregateArgs>(args: Prisma.Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>;
    groupBy<T extends TokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TokenGroupByArgs['orderBy'];
    } : {
        orderBy?: TokenGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TokenFieldRefs;
}
export interface Prisma__TokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TokenFieldRefs {
    readonly token: Prisma.FieldRef<"Token", 'String'>;
    readonly expires: Prisma.FieldRef<"Token", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"Token", 'String'>;
}
export type TokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TokenSelect<ExtArgs> | null;
    omit?: Prisma.TokenOmit<ExtArgs> | null;
    include?: Prisma.TokenInclude<ExtArgs> | null;
    where: Prisma.TokenWhereUniqueInput;
};
export type TokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TokenSelect<ExtArgs> | null;
    omit?: Prisma.TokenOmit<ExtArgs> | null;
    include?: Prisma.TokenInclude<ExtArgs> | null;
    where: Prisma.TokenWhereUniqueInput;
};
export type TokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TokenSelect<ExtArgs> | null;
    omit?: Prisma.TokenOmit<ExtArgs> | null;
    include?: Prisma.TokenInclude<ExtArgs> | null;
    where?: Prisma.TokenWhereInput;
    orderBy?: Prisma.TokenOrderByWithRelationInput | Prisma.TokenOrderByWithRelationInput[];
    cursor?: Prisma.TokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TokenScalarFieldEnum | Prisma.TokenScalarFieldEnum[];
};
export type TokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TokenSelect<ExtArgs> | null;
    omit?: Prisma.TokenOmit<ExtArgs> | null;
    include?: Prisma.TokenInclude<ExtArgs> | null;
    where?: Prisma.TokenWhereInput;
    orderBy?: Prisma.TokenOrderByWithRelationInput | Prisma.TokenOrderByWithRelationInput[];
    cursor?: Prisma.TokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TokenScalarFieldEnum | Prisma.TokenScalarFieldEnum[];
};
export type TokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TokenSelect<ExtArgs> | null;
    omit?: Prisma.TokenOmit<ExtArgs> | null;
    include?: Prisma.TokenInclude<ExtArgs> | null;
    where?: Prisma.TokenWhereInput;
    orderBy?: Prisma.TokenOrderByWithRelationInput | Prisma.TokenOrderByWithRelationInput[];
    cursor?: Prisma.TokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TokenScalarFieldEnum | Prisma.TokenScalarFieldEnum[];
};
export type TokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TokenSelect<ExtArgs> | null;
    omit?: Prisma.TokenOmit<ExtArgs> | null;
    include?: Prisma.TokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TokenCreateInput, Prisma.TokenUncheckedCreateInput>;
};
export type TokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TokenCreateManyInput | Prisma.TokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TokenSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TokenOmit<ExtArgs> | null;
    data: Prisma.TokenCreateManyInput | Prisma.TokenCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TokenIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TokenSelect<ExtArgs> | null;
    omit?: Prisma.TokenOmit<ExtArgs> | null;
    include?: Prisma.TokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TokenUpdateInput, Prisma.TokenUncheckedUpdateInput>;
    where: Prisma.TokenWhereUniqueInput;
};
export type TokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TokenUpdateManyMutationInput, Prisma.TokenUncheckedUpdateManyInput>;
    where?: Prisma.TokenWhereInput;
    limit?: number;
};
export type TokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TokenSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TokenUpdateManyMutationInput, Prisma.TokenUncheckedUpdateManyInput>;
    where?: Prisma.TokenWhereInput;
    limit?: number;
    include?: Prisma.TokenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TokenSelect<ExtArgs> | null;
    omit?: Prisma.TokenOmit<ExtArgs> | null;
    include?: Prisma.TokenInclude<ExtArgs> | null;
    where: Prisma.TokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.TokenCreateInput, Prisma.TokenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TokenUpdateInput, Prisma.TokenUncheckedUpdateInput>;
};
export type TokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TokenSelect<ExtArgs> | null;
    omit?: Prisma.TokenOmit<ExtArgs> | null;
    include?: Prisma.TokenInclude<ExtArgs> | null;
    where: Prisma.TokenWhereUniqueInput;
};
export type TokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TokenWhereInput;
    limit?: number;
};
export type TokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TokenSelect<ExtArgs> | null;
    omit?: Prisma.TokenOmit<ExtArgs> | null;
    include?: Prisma.TokenInclude<ExtArgs> | null;
};
export {};

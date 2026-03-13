import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ObjectModel = runtime.Types.Result.DefaultSelection<Prisma.$ObjectPayload>;
export type AggregateObject = {
    _count: ObjectCountAggregateOutputType | null;
    _min: ObjectMinAggregateOutputType | null;
    _max: ObjectMaxAggregateOutputType | null;
};
export type ObjectMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ObjectMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ObjectCountAggregateOutputType = {
    id: number;
    name: number;
    address: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ObjectMinAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ObjectMaxAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ObjectCountAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ObjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ObjectWhereInput;
    orderBy?: Prisma.ObjectOrderByWithRelationInput | Prisma.ObjectOrderByWithRelationInput[];
    cursor?: Prisma.ObjectWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ObjectCountAggregateInputType;
    _min?: ObjectMinAggregateInputType;
    _max?: ObjectMaxAggregateInputType;
};
export type GetObjectAggregateType<T extends ObjectAggregateArgs> = {
    [P in keyof T & keyof AggregateObject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateObject[P]> : Prisma.GetScalarType<T[P], AggregateObject[P]>;
};
export type ObjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ObjectWhereInput;
    orderBy?: Prisma.ObjectOrderByWithAggregationInput | Prisma.ObjectOrderByWithAggregationInput[];
    by: Prisma.ObjectScalarFieldEnum[] | Prisma.ObjectScalarFieldEnum;
    having?: Prisma.ObjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ObjectCountAggregateInputType | true;
    _min?: ObjectMinAggregateInputType;
    _max?: ObjectMaxAggregateInputType;
};
export type ObjectGroupByOutputType = {
    id: string;
    name: string;
    address: string | null;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ObjectCountAggregateOutputType | null;
    _min: ObjectMinAggregateOutputType | null;
    _max: ObjectMaxAggregateOutputType | null;
};
type GetObjectGroupByPayload<T extends ObjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ObjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ObjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ObjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ObjectGroupByOutputType[P]>;
}>>;
export type ObjectWhereInput = {
    AND?: Prisma.ObjectWhereInput | Prisma.ObjectWhereInput[];
    OR?: Prisma.ObjectWhereInput[];
    NOT?: Prisma.ObjectWhereInput | Prisma.ObjectWhereInput[];
    id?: Prisma.StringFilter<"Object"> | string;
    name?: Prisma.StringFilter<"Object"> | string;
    address?: Prisma.StringNullableFilter<"Object"> | string | null;
    description?: Prisma.StringNullableFilter<"Object"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Object"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Object"> | Date | string;
    shipments?: Prisma.ShipmentListRelationFilter;
};
export type ObjectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    shipments?: Prisma.ShipmentOrderByRelationAggregateInput;
};
export type ObjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.ObjectWhereInput | Prisma.ObjectWhereInput[];
    OR?: Prisma.ObjectWhereInput[];
    NOT?: Prisma.ObjectWhereInput | Prisma.ObjectWhereInput[];
    address?: Prisma.StringNullableFilter<"Object"> | string | null;
    description?: Prisma.StringNullableFilter<"Object"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Object"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Object"> | Date | string;
    shipments?: Prisma.ShipmentListRelationFilter;
}, "id" | "name">;
export type ObjectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ObjectCountOrderByAggregateInput;
    _max?: Prisma.ObjectMaxOrderByAggregateInput;
    _min?: Prisma.ObjectMinOrderByAggregateInput;
};
export type ObjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.ObjectScalarWhereWithAggregatesInput | Prisma.ObjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.ObjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ObjectScalarWhereWithAggregatesInput | Prisma.ObjectScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Object"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Object"> | string;
    address?: Prisma.StringNullableWithAggregatesFilter<"Object"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Object"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Object"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Object"> | Date | string;
};
export type ObjectCreateInput = {
    id?: string;
    name: string;
    address?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shipments?: Prisma.ShipmentCreateNestedManyWithoutObjectInput;
};
export type ObjectUncheckedCreateInput = {
    id?: string;
    name: string;
    address?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shipments?: Prisma.ShipmentUncheckedCreateNestedManyWithoutObjectInput;
};
export type ObjectUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipments?: Prisma.ShipmentUpdateManyWithoutObjectNestedInput;
};
export type ObjectUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipments?: Prisma.ShipmentUncheckedUpdateManyWithoutObjectNestedInput;
};
export type ObjectCreateManyInput = {
    id?: string;
    name: string;
    address?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ObjectUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ObjectUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ObjectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ObjectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ObjectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ObjectScalarRelationFilter = {
    is?: Prisma.ObjectWhereInput;
    isNot?: Prisma.ObjectWhereInput;
};
export type ObjectCreateNestedOneWithoutShipmentsInput = {
    create?: Prisma.XOR<Prisma.ObjectCreateWithoutShipmentsInput, Prisma.ObjectUncheckedCreateWithoutShipmentsInput>;
    connectOrCreate?: Prisma.ObjectCreateOrConnectWithoutShipmentsInput;
    connect?: Prisma.ObjectWhereUniqueInput;
};
export type ObjectUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: Prisma.XOR<Prisma.ObjectCreateWithoutShipmentsInput, Prisma.ObjectUncheckedCreateWithoutShipmentsInput>;
    connectOrCreate?: Prisma.ObjectCreateOrConnectWithoutShipmentsInput;
    upsert?: Prisma.ObjectUpsertWithoutShipmentsInput;
    connect?: Prisma.ObjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ObjectUpdateToOneWithWhereWithoutShipmentsInput, Prisma.ObjectUpdateWithoutShipmentsInput>, Prisma.ObjectUncheckedUpdateWithoutShipmentsInput>;
};
export type ObjectCreateWithoutShipmentsInput = {
    id?: string;
    name: string;
    address?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ObjectUncheckedCreateWithoutShipmentsInput = {
    id?: string;
    name: string;
    address?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ObjectCreateOrConnectWithoutShipmentsInput = {
    where: Prisma.ObjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ObjectCreateWithoutShipmentsInput, Prisma.ObjectUncheckedCreateWithoutShipmentsInput>;
};
export type ObjectUpsertWithoutShipmentsInput = {
    update: Prisma.XOR<Prisma.ObjectUpdateWithoutShipmentsInput, Prisma.ObjectUncheckedUpdateWithoutShipmentsInput>;
    create: Prisma.XOR<Prisma.ObjectCreateWithoutShipmentsInput, Prisma.ObjectUncheckedCreateWithoutShipmentsInput>;
    where?: Prisma.ObjectWhereInput;
};
export type ObjectUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: Prisma.ObjectWhereInput;
    data: Prisma.XOR<Prisma.ObjectUpdateWithoutShipmentsInput, Prisma.ObjectUncheckedUpdateWithoutShipmentsInput>;
};
export type ObjectUpdateWithoutShipmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ObjectUncheckedUpdateWithoutShipmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ObjectCountOutputType = {
    shipments: number;
};
export type ObjectCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shipments?: boolean | ObjectCountOutputTypeCountShipmentsArgs;
};
export type ObjectCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjectCountOutputTypeSelect<ExtArgs> | null;
};
export type ObjectCountOutputTypeCountShipmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentWhereInput;
};
export type ObjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    address?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shipments?: boolean | Prisma.Object$shipmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ObjectCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["object"]>;
export type ObjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    address?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["object"]>;
export type ObjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    address?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["object"]>;
export type ObjectSelectScalar = {
    id?: boolean;
    name?: boolean;
    address?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ObjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "address" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["object"]>;
export type ObjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shipments?: boolean | Prisma.Object$shipmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ObjectCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ObjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ObjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ObjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Object";
    objects: {
        shipments: Prisma.$ShipmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        address: string | null;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["object"]>;
    composites: {};
};
export type ObjectGetPayload<S extends boolean | null | undefined | ObjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ObjectPayload, S>;
export type ObjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ObjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ObjectCountAggregateInputType | true;
};
export interface ObjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Object'];
        meta: {
            name: 'Object';
        };
    };
    findUnique<T extends ObjectFindUniqueArgs>(args: Prisma.SelectSubset<T, ObjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ObjectClient<runtime.Types.Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ObjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ObjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ObjectClient<runtime.Types.Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ObjectFindFirstArgs>(args?: Prisma.SelectSubset<T, ObjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__ObjectClient<runtime.Types.Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ObjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ObjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ObjectClient<runtime.Types.Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ObjectFindManyArgs>(args?: Prisma.SelectSubset<T, ObjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ObjectCreateArgs>(args: Prisma.SelectSubset<T, ObjectCreateArgs<ExtArgs>>): Prisma.Prisma__ObjectClient<runtime.Types.Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ObjectCreateManyArgs>(args?: Prisma.SelectSubset<T, ObjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ObjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ObjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ObjectDeleteArgs>(args: Prisma.SelectSubset<T, ObjectDeleteArgs<ExtArgs>>): Prisma.Prisma__ObjectClient<runtime.Types.Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ObjectUpdateArgs>(args: Prisma.SelectSubset<T, ObjectUpdateArgs<ExtArgs>>): Prisma.Prisma__ObjectClient<runtime.Types.Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ObjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, ObjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ObjectUpdateManyArgs>(args: Prisma.SelectSubset<T, ObjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ObjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ObjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ObjectUpsertArgs>(args: Prisma.SelectSubset<T, ObjectUpsertArgs<ExtArgs>>): Prisma.Prisma__ObjectClient<runtime.Types.Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ObjectCountArgs>(args?: Prisma.Subset<T, ObjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ObjectCountAggregateOutputType> : number>;
    aggregate<T extends ObjectAggregateArgs>(args: Prisma.Subset<T, ObjectAggregateArgs>): Prisma.PrismaPromise<GetObjectAggregateType<T>>;
    groupBy<T extends ObjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ObjectGroupByArgs['orderBy'];
    } : {
        orderBy?: ObjectGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ObjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ObjectFieldRefs;
}
export interface Prisma__ObjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shipments<T extends Prisma.Object$shipmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Object$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ObjectFieldRefs {
    readonly id: Prisma.FieldRef<"Object", 'String'>;
    readonly name: Prisma.FieldRef<"Object", 'String'>;
    readonly address: Prisma.FieldRef<"Object", 'String'>;
    readonly description: Prisma.FieldRef<"Object", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Object", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Object", 'DateTime'>;
}
export type ObjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjectSelect<ExtArgs> | null;
    omit?: Prisma.ObjectOmit<ExtArgs> | null;
    include?: Prisma.ObjectInclude<ExtArgs> | null;
    where: Prisma.ObjectWhereUniqueInput;
};
export type ObjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjectSelect<ExtArgs> | null;
    omit?: Prisma.ObjectOmit<ExtArgs> | null;
    include?: Prisma.ObjectInclude<ExtArgs> | null;
    where: Prisma.ObjectWhereUniqueInput;
};
export type ObjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjectSelect<ExtArgs> | null;
    omit?: Prisma.ObjectOmit<ExtArgs> | null;
    include?: Prisma.ObjectInclude<ExtArgs> | null;
    where?: Prisma.ObjectWhereInput;
    orderBy?: Prisma.ObjectOrderByWithRelationInput | Prisma.ObjectOrderByWithRelationInput[];
    cursor?: Prisma.ObjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ObjectScalarFieldEnum | Prisma.ObjectScalarFieldEnum[];
};
export type ObjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjectSelect<ExtArgs> | null;
    omit?: Prisma.ObjectOmit<ExtArgs> | null;
    include?: Prisma.ObjectInclude<ExtArgs> | null;
    where?: Prisma.ObjectWhereInput;
    orderBy?: Prisma.ObjectOrderByWithRelationInput | Prisma.ObjectOrderByWithRelationInput[];
    cursor?: Prisma.ObjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ObjectScalarFieldEnum | Prisma.ObjectScalarFieldEnum[];
};
export type ObjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjectSelect<ExtArgs> | null;
    omit?: Prisma.ObjectOmit<ExtArgs> | null;
    include?: Prisma.ObjectInclude<ExtArgs> | null;
    where?: Prisma.ObjectWhereInput;
    orderBy?: Prisma.ObjectOrderByWithRelationInput | Prisma.ObjectOrderByWithRelationInput[];
    cursor?: Prisma.ObjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ObjectScalarFieldEnum | Prisma.ObjectScalarFieldEnum[];
};
export type ObjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjectSelect<ExtArgs> | null;
    omit?: Prisma.ObjectOmit<ExtArgs> | null;
    include?: Prisma.ObjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ObjectCreateInput, Prisma.ObjectUncheckedCreateInput>;
};
export type ObjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ObjectCreateManyInput | Prisma.ObjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ObjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjectSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ObjectOmit<ExtArgs> | null;
    data: Prisma.ObjectCreateManyInput | Prisma.ObjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ObjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjectSelect<ExtArgs> | null;
    omit?: Prisma.ObjectOmit<ExtArgs> | null;
    include?: Prisma.ObjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ObjectUpdateInput, Prisma.ObjectUncheckedUpdateInput>;
    where: Prisma.ObjectWhereUniqueInput;
};
export type ObjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ObjectUpdateManyMutationInput, Prisma.ObjectUncheckedUpdateManyInput>;
    where?: Prisma.ObjectWhereInput;
    limit?: number;
};
export type ObjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjectSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ObjectOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ObjectUpdateManyMutationInput, Prisma.ObjectUncheckedUpdateManyInput>;
    where?: Prisma.ObjectWhereInput;
    limit?: number;
};
export type ObjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjectSelect<ExtArgs> | null;
    omit?: Prisma.ObjectOmit<ExtArgs> | null;
    include?: Prisma.ObjectInclude<ExtArgs> | null;
    where: Prisma.ObjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ObjectCreateInput, Prisma.ObjectUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ObjectUpdateInput, Prisma.ObjectUncheckedUpdateInput>;
};
export type ObjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjectSelect<ExtArgs> | null;
    omit?: Prisma.ObjectOmit<ExtArgs> | null;
    include?: Prisma.ObjectInclude<ExtArgs> | null;
    where: Prisma.ObjectWhereUniqueInput;
};
export type ObjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ObjectWhereInput;
    limit?: number;
};
export type Object$shipmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where?: Prisma.ShipmentWhereInput;
    orderBy?: Prisma.ShipmentOrderByWithRelationInput | Prisma.ShipmentOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentScalarFieldEnum | Prisma.ShipmentScalarFieldEnum[];
};
export type ObjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjectSelect<ExtArgs> | null;
    omit?: Prisma.ObjectOmit<ExtArgs> | null;
    include?: Prisma.ObjectInclude<ExtArgs> | null;
};
export {};

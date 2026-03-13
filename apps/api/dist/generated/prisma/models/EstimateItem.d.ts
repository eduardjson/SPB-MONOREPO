import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EstimateItemModel = runtime.Types.Result.DefaultSelection<Prisma.$EstimateItemPayload>;
export type AggregateEstimateItem = {
    _count: EstimateItemCountAggregateOutputType | null;
    _avg: EstimateItemAvgAggregateOutputType | null;
    _sum: EstimateItemSumAggregateOutputType | null;
    _min: EstimateItemMinAggregateOutputType | null;
    _max: EstimateItemMaxAggregateOutputType | null;
};
export type EstimateItemAvgAggregateOutputType = {
    quantity: number | null;
    price: number | null;
    total: number | null;
};
export type EstimateItemSumAggregateOutputType = {
    quantity: number | null;
    price: number | null;
    total: number | null;
};
export type EstimateItemMinAggregateOutputType = {
    id: string | null;
    estimateId: string | null;
    productId: string | null;
    name: string | null;
    description: string | null;
    quantity: number | null;
    unit: string | null;
    price: number | null;
    total: number | null;
    costType: $Enums.CostType | null;
};
export type EstimateItemMaxAggregateOutputType = {
    id: string | null;
    estimateId: string | null;
    productId: string | null;
    name: string | null;
    description: string | null;
    quantity: number | null;
    unit: string | null;
    price: number | null;
    total: number | null;
    costType: $Enums.CostType | null;
};
export type EstimateItemCountAggregateOutputType = {
    id: number;
    estimateId: number;
    productId: number;
    name: number;
    description: number;
    quantity: number;
    unit: number;
    price: number;
    total: number;
    costType: number;
    _all: number;
};
export type EstimateItemAvgAggregateInputType = {
    quantity?: true;
    price?: true;
    total?: true;
};
export type EstimateItemSumAggregateInputType = {
    quantity?: true;
    price?: true;
    total?: true;
};
export type EstimateItemMinAggregateInputType = {
    id?: true;
    estimateId?: true;
    productId?: true;
    name?: true;
    description?: true;
    quantity?: true;
    unit?: true;
    price?: true;
    total?: true;
    costType?: true;
};
export type EstimateItemMaxAggregateInputType = {
    id?: true;
    estimateId?: true;
    productId?: true;
    name?: true;
    description?: true;
    quantity?: true;
    unit?: true;
    price?: true;
    total?: true;
    costType?: true;
};
export type EstimateItemCountAggregateInputType = {
    id?: true;
    estimateId?: true;
    productId?: true;
    name?: true;
    description?: true;
    quantity?: true;
    unit?: true;
    price?: true;
    total?: true;
    costType?: true;
    _all?: true;
};
export type EstimateItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstimateItemWhereInput;
    orderBy?: Prisma.EstimateItemOrderByWithRelationInput | Prisma.EstimateItemOrderByWithRelationInput[];
    cursor?: Prisma.EstimateItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EstimateItemCountAggregateInputType;
    _avg?: EstimateItemAvgAggregateInputType;
    _sum?: EstimateItemSumAggregateInputType;
    _min?: EstimateItemMinAggregateInputType;
    _max?: EstimateItemMaxAggregateInputType;
};
export type GetEstimateItemAggregateType<T extends EstimateItemAggregateArgs> = {
    [P in keyof T & keyof AggregateEstimateItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEstimateItem[P]> : Prisma.GetScalarType<T[P], AggregateEstimateItem[P]>;
};
export type EstimateItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstimateItemWhereInput;
    orderBy?: Prisma.EstimateItemOrderByWithAggregationInput | Prisma.EstimateItemOrderByWithAggregationInput[];
    by: Prisma.EstimateItemScalarFieldEnum[] | Prisma.EstimateItemScalarFieldEnum;
    having?: Prisma.EstimateItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EstimateItemCountAggregateInputType | true;
    _avg?: EstimateItemAvgAggregateInputType;
    _sum?: EstimateItemSumAggregateInputType;
    _min?: EstimateItemMinAggregateInputType;
    _max?: EstimateItemMaxAggregateInputType;
};
export type EstimateItemGroupByOutputType = {
    id: string;
    estimateId: string;
    productId: string | null;
    name: string;
    description: string | null;
    quantity: number;
    unit: string;
    price: number;
    total: number;
    costType: $Enums.CostType;
    _count: EstimateItemCountAggregateOutputType | null;
    _avg: EstimateItemAvgAggregateOutputType | null;
    _sum: EstimateItemSumAggregateOutputType | null;
    _min: EstimateItemMinAggregateOutputType | null;
    _max: EstimateItemMaxAggregateOutputType | null;
};
type GetEstimateItemGroupByPayload<T extends EstimateItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EstimateItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EstimateItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EstimateItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EstimateItemGroupByOutputType[P]>;
}>>;
export type EstimateItemWhereInput = {
    AND?: Prisma.EstimateItemWhereInput | Prisma.EstimateItemWhereInput[];
    OR?: Prisma.EstimateItemWhereInput[];
    NOT?: Prisma.EstimateItemWhereInput | Prisma.EstimateItemWhereInput[];
    id?: Prisma.StringFilter<"EstimateItem"> | string;
    estimateId?: Prisma.StringFilter<"EstimateItem"> | string;
    productId?: Prisma.StringNullableFilter<"EstimateItem"> | string | null;
    name?: Prisma.StringFilter<"EstimateItem"> | string;
    description?: Prisma.StringNullableFilter<"EstimateItem"> | string | null;
    quantity?: Prisma.FloatFilter<"EstimateItem"> | number;
    unit?: Prisma.StringFilter<"EstimateItem"> | string;
    price?: Prisma.FloatFilter<"EstimateItem"> | number;
    total?: Prisma.FloatFilter<"EstimateItem"> | number;
    costType?: Prisma.EnumCostTypeFilter<"EstimateItem"> | $Enums.CostType;
    estimate?: Prisma.XOR<Prisma.EstimateScalarRelationFilter, Prisma.EstimateWhereInput>;
};
export type EstimateItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    estimateId?: Prisma.SortOrder;
    productId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    costType?: Prisma.SortOrder;
    estimate?: Prisma.EstimateOrderByWithRelationInput;
};
export type EstimateItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EstimateItemWhereInput | Prisma.EstimateItemWhereInput[];
    OR?: Prisma.EstimateItemWhereInput[];
    NOT?: Prisma.EstimateItemWhereInput | Prisma.EstimateItemWhereInput[];
    estimateId?: Prisma.StringFilter<"EstimateItem"> | string;
    productId?: Prisma.StringNullableFilter<"EstimateItem"> | string | null;
    name?: Prisma.StringFilter<"EstimateItem"> | string;
    description?: Prisma.StringNullableFilter<"EstimateItem"> | string | null;
    quantity?: Prisma.FloatFilter<"EstimateItem"> | number;
    unit?: Prisma.StringFilter<"EstimateItem"> | string;
    price?: Prisma.FloatFilter<"EstimateItem"> | number;
    total?: Prisma.FloatFilter<"EstimateItem"> | number;
    costType?: Prisma.EnumCostTypeFilter<"EstimateItem"> | $Enums.CostType;
    estimate?: Prisma.XOR<Prisma.EstimateScalarRelationFilter, Prisma.EstimateWhereInput>;
}, "id">;
export type EstimateItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    estimateId?: Prisma.SortOrder;
    productId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    costType?: Prisma.SortOrder;
    _count?: Prisma.EstimateItemCountOrderByAggregateInput;
    _avg?: Prisma.EstimateItemAvgOrderByAggregateInput;
    _max?: Prisma.EstimateItemMaxOrderByAggregateInput;
    _min?: Prisma.EstimateItemMinOrderByAggregateInput;
    _sum?: Prisma.EstimateItemSumOrderByAggregateInput;
};
export type EstimateItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.EstimateItemScalarWhereWithAggregatesInput | Prisma.EstimateItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.EstimateItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EstimateItemScalarWhereWithAggregatesInput | Prisma.EstimateItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EstimateItem"> | string;
    estimateId?: Prisma.StringWithAggregatesFilter<"EstimateItem"> | string;
    productId?: Prisma.StringNullableWithAggregatesFilter<"EstimateItem"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"EstimateItem"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"EstimateItem"> | string | null;
    quantity?: Prisma.FloatWithAggregatesFilter<"EstimateItem"> | number;
    unit?: Prisma.StringWithAggregatesFilter<"EstimateItem"> | string;
    price?: Prisma.FloatWithAggregatesFilter<"EstimateItem"> | number;
    total?: Prisma.FloatWithAggregatesFilter<"EstimateItem"> | number;
    costType?: Prisma.EnumCostTypeWithAggregatesFilter<"EstimateItem"> | $Enums.CostType;
};
export type EstimateItemCreateInput = {
    id?: string;
    productId?: string | null;
    name: string;
    description?: string | null;
    quantity: number;
    unit?: string;
    price: number;
    total: number;
    costType?: $Enums.CostType;
    estimate: Prisma.EstimateCreateNestedOneWithoutItemsInput;
};
export type EstimateItemUncheckedCreateInput = {
    id?: string;
    estimateId: string;
    productId?: string | null;
    name: string;
    description?: string | null;
    quantity: number;
    unit?: string;
    price: number;
    total: number;
    costType?: $Enums.CostType;
};
export type EstimateItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    costType?: Prisma.EnumCostTypeFieldUpdateOperationsInput | $Enums.CostType;
    estimate?: Prisma.EstimateUpdateOneRequiredWithoutItemsNestedInput;
};
export type EstimateItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estimateId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    costType?: Prisma.EnumCostTypeFieldUpdateOperationsInput | $Enums.CostType;
};
export type EstimateItemCreateManyInput = {
    id?: string;
    estimateId: string;
    productId?: string | null;
    name: string;
    description?: string | null;
    quantity: number;
    unit?: string;
    price: number;
    total: number;
    costType?: $Enums.CostType;
};
export type EstimateItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    costType?: Prisma.EnumCostTypeFieldUpdateOperationsInput | $Enums.CostType;
};
export type EstimateItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estimateId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    costType?: Prisma.EnumCostTypeFieldUpdateOperationsInput | $Enums.CostType;
};
export type EstimateItemListRelationFilter = {
    every?: Prisma.EstimateItemWhereInput;
    some?: Prisma.EstimateItemWhereInput;
    none?: Prisma.EstimateItemWhereInput;
};
export type EstimateItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EstimateItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estimateId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    costType?: Prisma.SortOrder;
};
export type EstimateItemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type EstimateItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estimateId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    costType?: Prisma.SortOrder;
};
export type EstimateItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estimateId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    costType?: Prisma.SortOrder;
};
export type EstimateItemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type EstimateItemCreateNestedManyWithoutEstimateInput = {
    create?: Prisma.XOR<Prisma.EstimateItemCreateWithoutEstimateInput, Prisma.EstimateItemUncheckedCreateWithoutEstimateInput> | Prisma.EstimateItemCreateWithoutEstimateInput[] | Prisma.EstimateItemUncheckedCreateWithoutEstimateInput[];
    connectOrCreate?: Prisma.EstimateItemCreateOrConnectWithoutEstimateInput | Prisma.EstimateItemCreateOrConnectWithoutEstimateInput[];
    createMany?: Prisma.EstimateItemCreateManyEstimateInputEnvelope;
    connect?: Prisma.EstimateItemWhereUniqueInput | Prisma.EstimateItemWhereUniqueInput[];
};
export type EstimateItemUncheckedCreateNestedManyWithoutEstimateInput = {
    create?: Prisma.XOR<Prisma.EstimateItemCreateWithoutEstimateInput, Prisma.EstimateItemUncheckedCreateWithoutEstimateInput> | Prisma.EstimateItemCreateWithoutEstimateInput[] | Prisma.EstimateItemUncheckedCreateWithoutEstimateInput[];
    connectOrCreate?: Prisma.EstimateItemCreateOrConnectWithoutEstimateInput | Prisma.EstimateItemCreateOrConnectWithoutEstimateInput[];
    createMany?: Prisma.EstimateItemCreateManyEstimateInputEnvelope;
    connect?: Prisma.EstimateItemWhereUniqueInput | Prisma.EstimateItemWhereUniqueInput[];
};
export type EstimateItemUpdateManyWithoutEstimateNestedInput = {
    create?: Prisma.XOR<Prisma.EstimateItemCreateWithoutEstimateInput, Prisma.EstimateItemUncheckedCreateWithoutEstimateInput> | Prisma.EstimateItemCreateWithoutEstimateInput[] | Prisma.EstimateItemUncheckedCreateWithoutEstimateInput[];
    connectOrCreate?: Prisma.EstimateItemCreateOrConnectWithoutEstimateInput | Prisma.EstimateItemCreateOrConnectWithoutEstimateInput[];
    upsert?: Prisma.EstimateItemUpsertWithWhereUniqueWithoutEstimateInput | Prisma.EstimateItemUpsertWithWhereUniqueWithoutEstimateInput[];
    createMany?: Prisma.EstimateItemCreateManyEstimateInputEnvelope;
    set?: Prisma.EstimateItemWhereUniqueInput | Prisma.EstimateItemWhereUniqueInput[];
    disconnect?: Prisma.EstimateItemWhereUniqueInput | Prisma.EstimateItemWhereUniqueInput[];
    delete?: Prisma.EstimateItemWhereUniqueInput | Prisma.EstimateItemWhereUniqueInput[];
    connect?: Prisma.EstimateItemWhereUniqueInput | Prisma.EstimateItemWhereUniqueInput[];
    update?: Prisma.EstimateItemUpdateWithWhereUniqueWithoutEstimateInput | Prisma.EstimateItemUpdateWithWhereUniqueWithoutEstimateInput[];
    updateMany?: Prisma.EstimateItemUpdateManyWithWhereWithoutEstimateInput | Prisma.EstimateItemUpdateManyWithWhereWithoutEstimateInput[];
    deleteMany?: Prisma.EstimateItemScalarWhereInput | Prisma.EstimateItemScalarWhereInput[];
};
export type EstimateItemUncheckedUpdateManyWithoutEstimateNestedInput = {
    create?: Prisma.XOR<Prisma.EstimateItemCreateWithoutEstimateInput, Prisma.EstimateItemUncheckedCreateWithoutEstimateInput> | Prisma.EstimateItemCreateWithoutEstimateInput[] | Prisma.EstimateItemUncheckedCreateWithoutEstimateInput[];
    connectOrCreate?: Prisma.EstimateItemCreateOrConnectWithoutEstimateInput | Prisma.EstimateItemCreateOrConnectWithoutEstimateInput[];
    upsert?: Prisma.EstimateItemUpsertWithWhereUniqueWithoutEstimateInput | Prisma.EstimateItemUpsertWithWhereUniqueWithoutEstimateInput[];
    createMany?: Prisma.EstimateItemCreateManyEstimateInputEnvelope;
    set?: Prisma.EstimateItemWhereUniqueInput | Prisma.EstimateItemWhereUniqueInput[];
    disconnect?: Prisma.EstimateItemWhereUniqueInput | Prisma.EstimateItemWhereUniqueInput[];
    delete?: Prisma.EstimateItemWhereUniqueInput | Prisma.EstimateItemWhereUniqueInput[];
    connect?: Prisma.EstimateItemWhereUniqueInput | Prisma.EstimateItemWhereUniqueInput[];
    update?: Prisma.EstimateItemUpdateWithWhereUniqueWithoutEstimateInput | Prisma.EstimateItemUpdateWithWhereUniqueWithoutEstimateInput[];
    updateMany?: Prisma.EstimateItemUpdateManyWithWhereWithoutEstimateInput | Prisma.EstimateItemUpdateManyWithWhereWithoutEstimateInput[];
    deleteMany?: Prisma.EstimateItemScalarWhereInput | Prisma.EstimateItemScalarWhereInput[];
};
export type EnumCostTypeFieldUpdateOperationsInput = {
    set?: $Enums.CostType;
};
export type EstimateItemCreateWithoutEstimateInput = {
    id?: string;
    productId?: string | null;
    name: string;
    description?: string | null;
    quantity: number;
    unit?: string;
    price: number;
    total: number;
    costType?: $Enums.CostType;
};
export type EstimateItemUncheckedCreateWithoutEstimateInput = {
    id?: string;
    productId?: string | null;
    name: string;
    description?: string | null;
    quantity: number;
    unit?: string;
    price: number;
    total: number;
    costType?: $Enums.CostType;
};
export type EstimateItemCreateOrConnectWithoutEstimateInput = {
    where: Prisma.EstimateItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.EstimateItemCreateWithoutEstimateInput, Prisma.EstimateItemUncheckedCreateWithoutEstimateInput>;
};
export type EstimateItemCreateManyEstimateInputEnvelope = {
    data: Prisma.EstimateItemCreateManyEstimateInput | Prisma.EstimateItemCreateManyEstimateInput[];
    skipDuplicates?: boolean;
};
export type EstimateItemUpsertWithWhereUniqueWithoutEstimateInput = {
    where: Prisma.EstimateItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.EstimateItemUpdateWithoutEstimateInput, Prisma.EstimateItemUncheckedUpdateWithoutEstimateInput>;
    create: Prisma.XOR<Prisma.EstimateItemCreateWithoutEstimateInput, Prisma.EstimateItemUncheckedCreateWithoutEstimateInput>;
};
export type EstimateItemUpdateWithWhereUniqueWithoutEstimateInput = {
    where: Prisma.EstimateItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.EstimateItemUpdateWithoutEstimateInput, Prisma.EstimateItemUncheckedUpdateWithoutEstimateInput>;
};
export type EstimateItemUpdateManyWithWhereWithoutEstimateInput = {
    where: Prisma.EstimateItemScalarWhereInput;
    data: Prisma.XOR<Prisma.EstimateItemUpdateManyMutationInput, Prisma.EstimateItemUncheckedUpdateManyWithoutEstimateInput>;
};
export type EstimateItemScalarWhereInput = {
    AND?: Prisma.EstimateItemScalarWhereInput | Prisma.EstimateItemScalarWhereInput[];
    OR?: Prisma.EstimateItemScalarWhereInput[];
    NOT?: Prisma.EstimateItemScalarWhereInput | Prisma.EstimateItemScalarWhereInput[];
    id?: Prisma.StringFilter<"EstimateItem"> | string;
    estimateId?: Prisma.StringFilter<"EstimateItem"> | string;
    productId?: Prisma.StringNullableFilter<"EstimateItem"> | string | null;
    name?: Prisma.StringFilter<"EstimateItem"> | string;
    description?: Prisma.StringNullableFilter<"EstimateItem"> | string | null;
    quantity?: Prisma.FloatFilter<"EstimateItem"> | number;
    unit?: Prisma.StringFilter<"EstimateItem"> | string;
    price?: Prisma.FloatFilter<"EstimateItem"> | number;
    total?: Prisma.FloatFilter<"EstimateItem"> | number;
    costType?: Prisma.EnumCostTypeFilter<"EstimateItem"> | $Enums.CostType;
};
export type EstimateItemCreateManyEstimateInput = {
    id?: string;
    productId?: string | null;
    name: string;
    description?: string | null;
    quantity: number;
    unit?: string;
    price: number;
    total: number;
    costType?: $Enums.CostType;
};
export type EstimateItemUpdateWithoutEstimateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    costType?: Prisma.EnumCostTypeFieldUpdateOperationsInput | $Enums.CostType;
};
export type EstimateItemUncheckedUpdateWithoutEstimateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    costType?: Prisma.EnumCostTypeFieldUpdateOperationsInput | $Enums.CostType;
};
export type EstimateItemUncheckedUpdateManyWithoutEstimateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    costType?: Prisma.EnumCostTypeFieldUpdateOperationsInput | $Enums.CostType;
};
export type EstimateItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    estimateId?: boolean;
    productId?: boolean;
    name?: boolean;
    description?: boolean;
    quantity?: boolean;
    unit?: boolean;
    price?: boolean;
    total?: boolean;
    costType?: boolean;
    estimate?: boolean | Prisma.EstimateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["estimateItem"]>;
export type EstimateItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    estimateId?: boolean;
    productId?: boolean;
    name?: boolean;
    description?: boolean;
    quantity?: boolean;
    unit?: boolean;
    price?: boolean;
    total?: boolean;
    costType?: boolean;
    estimate?: boolean | Prisma.EstimateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["estimateItem"]>;
export type EstimateItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    estimateId?: boolean;
    productId?: boolean;
    name?: boolean;
    description?: boolean;
    quantity?: boolean;
    unit?: boolean;
    price?: boolean;
    total?: boolean;
    costType?: boolean;
    estimate?: boolean | Prisma.EstimateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["estimateItem"]>;
export type EstimateItemSelectScalar = {
    id?: boolean;
    estimateId?: boolean;
    productId?: boolean;
    name?: boolean;
    description?: boolean;
    quantity?: boolean;
    unit?: boolean;
    price?: boolean;
    total?: boolean;
    costType?: boolean;
};
export type EstimateItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "estimateId" | "productId" | "name" | "description" | "quantity" | "unit" | "price" | "total" | "costType", ExtArgs["result"]["estimateItem"]>;
export type EstimateItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estimate?: boolean | Prisma.EstimateDefaultArgs<ExtArgs>;
};
export type EstimateItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estimate?: boolean | Prisma.EstimateDefaultArgs<ExtArgs>;
};
export type EstimateItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estimate?: boolean | Prisma.EstimateDefaultArgs<ExtArgs>;
};
export type $EstimateItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EstimateItem";
    objects: {
        estimate: Prisma.$EstimatePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        estimateId: string;
        productId: string | null;
        name: string;
        description: string | null;
        quantity: number;
        unit: string;
        price: number;
        total: number;
        costType: $Enums.CostType;
    }, ExtArgs["result"]["estimateItem"]>;
    composites: {};
};
export type EstimateItemGetPayload<S extends boolean | null | undefined | EstimateItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EstimateItemPayload, S>;
export type EstimateItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EstimateItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EstimateItemCountAggregateInputType | true;
};
export interface EstimateItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EstimateItem'];
        meta: {
            name: 'EstimateItem';
        };
    };
    findUnique<T extends EstimateItemFindUniqueArgs>(args: Prisma.SelectSubset<T, EstimateItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EstimateItemClient<runtime.Types.Result.GetResult<Prisma.$EstimateItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EstimateItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EstimateItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EstimateItemClient<runtime.Types.Result.GetResult<Prisma.$EstimateItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EstimateItemFindFirstArgs>(args?: Prisma.SelectSubset<T, EstimateItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__EstimateItemClient<runtime.Types.Result.GetResult<Prisma.$EstimateItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EstimateItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EstimateItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EstimateItemClient<runtime.Types.Result.GetResult<Prisma.$EstimateItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EstimateItemFindManyArgs>(args?: Prisma.SelectSubset<T, EstimateItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstimateItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EstimateItemCreateArgs>(args: Prisma.SelectSubset<T, EstimateItemCreateArgs<ExtArgs>>): Prisma.Prisma__EstimateItemClient<runtime.Types.Result.GetResult<Prisma.$EstimateItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EstimateItemCreateManyArgs>(args?: Prisma.SelectSubset<T, EstimateItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EstimateItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EstimateItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstimateItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EstimateItemDeleteArgs>(args: Prisma.SelectSubset<T, EstimateItemDeleteArgs<ExtArgs>>): Prisma.Prisma__EstimateItemClient<runtime.Types.Result.GetResult<Prisma.$EstimateItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EstimateItemUpdateArgs>(args: Prisma.SelectSubset<T, EstimateItemUpdateArgs<ExtArgs>>): Prisma.Prisma__EstimateItemClient<runtime.Types.Result.GetResult<Prisma.$EstimateItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EstimateItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, EstimateItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EstimateItemUpdateManyArgs>(args: Prisma.SelectSubset<T, EstimateItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EstimateItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EstimateItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstimateItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EstimateItemUpsertArgs>(args: Prisma.SelectSubset<T, EstimateItemUpsertArgs<ExtArgs>>): Prisma.Prisma__EstimateItemClient<runtime.Types.Result.GetResult<Prisma.$EstimateItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EstimateItemCountArgs>(args?: Prisma.Subset<T, EstimateItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EstimateItemCountAggregateOutputType> : number>;
    aggregate<T extends EstimateItemAggregateArgs>(args: Prisma.Subset<T, EstimateItemAggregateArgs>): Prisma.PrismaPromise<GetEstimateItemAggregateType<T>>;
    groupBy<T extends EstimateItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EstimateItemGroupByArgs['orderBy'];
    } : {
        orderBy?: EstimateItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EstimateItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstimateItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EstimateItemFieldRefs;
}
export interface Prisma__EstimateItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    estimate<T extends Prisma.EstimateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EstimateDefaultArgs<ExtArgs>>): Prisma.Prisma__EstimateClient<runtime.Types.Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EstimateItemFieldRefs {
    readonly id: Prisma.FieldRef<"EstimateItem", 'String'>;
    readonly estimateId: Prisma.FieldRef<"EstimateItem", 'String'>;
    readonly productId: Prisma.FieldRef<"EstimateItem", 'String'>;
    readonly name: Prisma.FieldRef<"EstimateItem", 'String'>;
    readonly description: Prisma.FieldRef<"EstimateItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"EstimateItem", 'Float'>;
    readonly unit: Prisma.FieldRef<"EstimateItem", 'String'>;
    readonly price: Prisma.FieldRef<"EstimateItem", 'Float'>;
    readonly total: Prisma.FieldRef<"EstimateItem", 'Float'>;
    readonly costType: Prisma.FieldRef<"EstimateItem", 'CostType'>;
}
export type EstimateItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateItemSelect<ExtArgs> | null;
    omit?: Prisma.EstimateItemOmit<ExtArgs> | null;
    include?: Prisma.EstimateItemInclude<ExtArgs> | null;
    where: Prisma.EstimateItemWhereUniqueInput;
};
export type EstimateItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateItemSelect<ExtArgs> | null;
    omit?: Prisma.EstimateItemOmit<ExtArgs> | null;
    include?: Prisma.EstimateItemInclude<ExtArgs> | null;
    where: Prisma.EstimateItemWhereUniqueInput;
};
export type EstimateItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateItemSelect<ExtArgs> | null;
    omit?: Prisma.EstimateItemOmit<ExtArgs> | null;
    include?: Prisma.EstimateItemInclude<ExtArgs> | null;
    where?: Prisma.EstimateItemWhereInput;
    orderBy?: Prisma.EstimateItemOrderByWithRelationInput | Prisma.EstimateItemOrderByWithRelationInput[];
    cursor?: Prisma.EstimateItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstimateItemScalarFieldEnum | Prisma.EstimateItemScalarFieldEnum[];
};
export type EstimateItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateItemSelect<ExtArgs> | null;
    omit?: Prisma.EstimateItemOmit<ExtArgs> | null;
    include?: Prisma.EstimateItemInclude<ExtArgs> | null;
    where?: Prisma.EstimateItemWhereInput;
    orderBy?: Prisma.EstimateItemOrderByWithRelationInput | Prisma.EstimateItemOrderByWithRelationInput[];
    cursor?: Prisma.EstimateItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstimateItemScalarFieldEnum | Prisma.EstimateItemScalarFieldEnum[];
};
export type EstimateItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateItemSelect<ExtArgs> | null;
    omit?: Prisma.EstimateItemOmit<ExtArgs> | null;
    include?: Prisma.EstimateItemInclude<ExtArgs> | null;
    where?: Prisma.EstimateItemWhereInput;
    orderBy?: Prisma.EstimateItemOrderByWithRelationInput | Prisma.EstimateItemOrderByWithRelationInput[];
    cursor?: Prisma.EstimateItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstimateItemScalarFieldEnum | Prisma.EstimateItemScalarFieldEnum[];
};
export type EstimateItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateItemSelect<ExtArgs> | null;
    omit?: Prisma.EstimateItemOmit<ExtArgs> | null;
    include?: Prisma.EstimateItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstimateItemCreateInput, Prisma.EstimateItemUncheckedCreateInput>;
};
export type EstimateItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EstimateItemCreateManyInput | Prisma.EstimateItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EstimateItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EstimateItemOmit<ExtArgs> | null;
    data: Prisma.EstimateItemCreateManyInput | Prisma.EstimateItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EstimateItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EstimateItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateItemSelect<ExtArgs> | null;
    omit?: Prisma.EstimateItemOmit<ExtArgs> | null;
    include?: Prisma.EstimateItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstimateItemUpdateInput, Prisma.EstimateItemUncheckedUpdateInput>;
    where: Prisma.EstimateItemWhereUniqueInput;
};
export type EstimateItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EstimateItemUpdateManyMutationInput, Prisma.EstimateItemUncheckedUpdateManyInput>;
    where?: Prisma.EstimateItemWhereInput;
    limit?: number;
};
export type EstimateItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EstimateItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstimateItemUpdateManyMutationInput, Prisma.EstimateItemUncheckedUpdateManyInput>;
    where?: Prisma.EstimateItemWhereInput;
    limit?: number;
    include?: Prisma.EstimateItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EstimateItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateItemSelect<ExtArgs> | null;
    omit?: Prisma.EstimateItemOmit<ExtArgs> | null;
    include?: Prisma.EstimateItemInclude<ExtArgs> | null;
    where: Prisma.EstimateItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.EstimateItemCreateInput, Prisma.EstimateItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EstimateItemUpdateInput, Prisma.EstimateItemUncheckedUpdateInput>;
};
export type EstimateItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateItemSelect<ExtArgs> | null;
    omit?: Prisma.EstimateItemOmit<ExtArgs> | null;
    include?: Prisma.EstimateItemInclude<ExtArgs> | null;
    where: Prisma.EstimateItemWhereUniqueInput;
};
export type EstimateItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstimateItemWhereInput;
    limit?: number;
};
export type EstimateItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateItemSelect<ExtArgs> | null;
    omit?: Prisma.EstimateItemOmit<ExtArgs> | null;
    include?: Prisma.EstimateItemInclude<ExtArgs> | null;
};
export {};

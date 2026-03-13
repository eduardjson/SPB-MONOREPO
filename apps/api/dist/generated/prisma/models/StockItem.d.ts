import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StockItemModel = runtime.Types.Result.DefaultSelection<Prisma.$StockItemPayload>;
export type AggregateStockItem = {
    _count: StockItemCountAggregateOutputType | null;
    _avg: StockItemAvgAggregateOutputType | null;
    _sum: StockItemSumAggregateOutputType | null;
    _min: StockItemMinAggregateOutputType | null;
    _max: StockItemMaxAggregateOutputType | null;
};
export type StockItemAvgAggregateOutputType = {
    quantity: number | null;
    purchasePrice: number | null;
    estimatePrice: number | null;
    salePrice: number | null;
    discount: number | null;
};
export type StockItemSumAggregateOutputType = {
    quantity: number | null;
    purchasePrice: number | null;
    estimatePrice: number | null;
    salePrice: number | null;
    discount: number | null;
};
export type StockItemMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    warehouseId: string | null;
    quantity: number | null;
    purchasePrice: number | null;
    estimatePrice: number | null;
    salePrice: number | null;
    discount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StockItemMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    warehouseId: string | null;
    quantity: number | null;
    purchasePrice: number | null;
    estimatePrice: number | null;
    salePrice: number | null;
    discount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StockItemCountAggregateOutputType = {
    id: number;
    productId: number;
    warehouseId: number;
    quantity: number;
    purchasePrice: number;
    estimatePrice: number;
    salePrice: number;
    discount: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StockItemAvgAggregateInputType = {
    quantity?: true;
    purchasePrice?: true;
    estimatePrice?: true;
    salePrice?: true;
    discount?: true;
};
export type StockItemSumAggregateInputType = {
    quantity?: true;
    purchasePrice?: true;
    estimatePrice?: true;
    salePrice?: true;
    discount?: true;
};
export type StockItemMinAggregateInputType = {
    id?: true;
    productId?: true;
    warehouseId?: true;
    quantity?: true;
    purchasePrice?: true;
    estimatePrice?: true;
    salePrice?: true;
    discount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StockItemMaxAggregateInputType = {
    id?: true;
    productId?: true;
    warehouseId?: true;
    quantity?: true;
    purchasePrice?: true;
    estimatePrice?: true;
    salePrice?: true;
    discount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StockItemCountAggregateInputType = {
    id?: true;
    productId?: true;
    warehouseId?: true;
    quantity?: true;
    purchasePrice?: true;
    estimatePrice?: true;
    salePrice?: true;
    discount?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StockItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StockItemWhereInput;
    orderBy?: Prisma.StockItemOrderByWithRelationInput | Prisma.StockItemOrderByWithRelationInput[];
    cursor?: Prisma.StockItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StockItemCountAggregateInputType;
    _avg?: StockItemAvgAggregateInputType;
    _sum?: StockItemSumAggregateInputType;
    _min?: StockItemMinAggregateInputType;
    _max?: StockItemMaxAggregateInputType;
};
export type GetStockItemAggregateType<T extends StockItemAggregateArgs> = {
    [P in keyof T & keyof AggregateStockItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStockItem[P]> : Prisma.GetScalarType<T[P], AggregateStockItem[P]>;
};
export type StockItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StockItemWhereInput;
    orderBy?: Prisma.StockItemOrderByWithAggregationInput | Prisma.StockItemOrderByWithAggregationInput[];
    by: Prisma.StockItemScalarFieldEnum[] | Prisma.StockItemScalarFieldEnum;
    having?: Prisma.StockItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StockItemCountAggregateInputType | true;
    _avg?: StockItemAvgAggregateInputType;
    _sum?: StockItemSumAggregateInputType;
    _min?: StockItemMinAggregateInputType;
    _max?: StockItemMaxAggregateInputType;
};
export type StockItemGroupByOutputType = {
    id: string;
    productId: string;
    warehouseId: string;
    quantity: number;
    purchasePrice: number | null;
    estimatePrice: number | null;
    salePrice: number | null;
    discount: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: StockItemCountAggregateOutputType | null;
    _avg: StockItemAvgAggregateOutputType | null;
    _sum: StockItemSumAggregateOutputType | null;
    _min: StockItemMinAggregateOutputType | null;
    _max: StockItemMaxAggregateOutputType | null;
};
type GetStockItemGroupByPayload<T extends StockItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StockItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StockItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StockItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StockItemGroupByOutputType[P]>;
}>>;
export type StockItemWhereInput = {
    AND?: Prisma.StockItemWhereInput | Prisma.StockItemWhereInput[];
    OR?: Prisma.StockItemWhereInput[];
    NOT?: Prisma.StockItemWhereInput | Prisma.StockItemWhereInput[];
    id?: Prisma.StringFilter<"StockItem"> | string;
    productId?: Prisma.StringFilter<"StockItem"> | string;
    warehouseId?: Prisma.StringFilter<"StockItem"> | string;
    quantity?: Prisma.IntFilter<"StockItem"> | number;
    purchasePrice?: Prisma.FloatNullableFilter<"StockItem"> | number | null;
    estimatePrice?: Prisma.FloatNullableFilter<"StockItem"> | number | null;
    salePrice?: Prisma.FloatNullableFilter<"StockItem"> | number | null;
    discount?: Prisma.FloatNullableFilter<"StockItem"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"StockItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StockItem"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>;
};
export type StockItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimatePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    salePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
    warehouse?: Prisma.WarehouseOrderByWithRelationInput;
};
export type StockItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    productId_warehouseId?: Prisma.StockItemProductIdWarehouseIdCompoundUniqueInput;
    AND?: Prisma.StockItemWhereInput | Prisma.StockItemWhereInput[];
    OR?: Prisma.StockItemWhereInput[];
    NOT?: Prisma.StockItemWhereInput | Prisma.StockItemWhereInput[];
    productId?: Prisma.StringFilter<"StockItem"> | string;
    warehouseId?: Prisma.StringFilter<"StockItem"> | string;
    quantity?: Prisma.IntFilter<"StockItem"> | number;
    purchasePrice?: Prisma.FloatNullableFilter<"StockItem"> | number | null;
    estimatePrice?: Prisma.FloatNullableFilter<"StockItem"> | number | null;
    salePrice?: Prisma.FloatNullableFilter<"StockItem"> | number | null;
    discount?: Prisma.FloatNullableFilter<"StockItem"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"StockItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StockItem"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>;
}, "id" | "productId_warehouseId">;
export type StockItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimatePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    salePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StockItemCountOrderByAggregateInput;
    _avg?: Prisma.StockItemAvgOrderByAggregateInput;
    _max?: Prisma.StockItemMaxOrderByAggregateInput;
    _min?: Prisma.StockItemMinOrderByAggregateInput;
    _sum?: Prisma.StockItemSumOrderByAggregateInput;
};
export type StockItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.StockItemScalarWhereWithAggregatesInput | Prisma.StockItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.StockItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StockItemScalarWhereWithAggregatesInput | Prisma.StockItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StockItem"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"StockItem"> | string;
    warehouseId?: Prisma.StringWithAggregatesFilter<"StockItem"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"StockItem"> | number;
    purchasePrice?: Prisma.FloatNullableWithAggregatesFilter<"StockItem"> | number | null;
    estimatePrice?: Prisma.FloatNullableWithAggregatesFilter<"StockItem"> | number | null;
    salePrice?: Prisma.FloatNullableWithAggregatesFilter<"StockItem"> | number | null;
    discount?: Prisma.FloatNullableWithAggregatesFilter<"StockItem"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StockItem"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"StockItem"> | Date | string;
};
export type StockItemCreateInput = {
    id?: string;
    quantity?: number;
    purchasePrice?: number | null;
    estimatePrice?: number | null;
    salePrice?: number | null;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutStockItemsInput;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutStockItemsInput;
};
export type StockItemUncheckedCreateInput = {
    id?: string;
    productId: string;
    warehouseId: string;
    quantity?: number;
    purchasePrice?: number | null;
    estimatePrice?: number | null;
    salePrice?: number | null;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StockItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    estimatePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutStockItemsNestedInput;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutStockItemsNestedInput;
};
export type StockItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    estimatePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockItemCreateManyInput = {
    id?: string;
    productId: string;
    warehouseId: string;
    quantity?: number;
    purchasePrice?: number | null;
    estimatePrice?: number | null;
    salePrice?: number | null;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StockItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    estimatePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    estimatePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockItemListRelationFilter = {
    every?: Prisma.StockItemWhereInput;
    some?: Prisma.StockItemWhereInput;
    none?: Prisma.StockItemWhereInput;
};
export type StockItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StockItemProductIdWarehouseIdCompoundUniqueInput = {
    productId: string;
    warehouseId: string;
};
export type StockItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    estimatePrice?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StockItemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    estimatePrice?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
};
export type StockItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    estimatePrice?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StockItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    estimatePrice?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StockItemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    estimatePrice?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
};
export type StockItemCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutProductInput, Prisma.StockItemUncheckedCreateWithoutProductInput> | Prisma.StockItemCreateWithoutProductInput[] | Prisma.StockItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutProductInput | Prisma.StockItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.StockItemCreateManyProductInputEnvelope;
    connect?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
};
export type StockItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutProductInput, Prisma.StockItemUncheckedCreateWithoutProductInput> | Prisma.StockItemCreateWithoutProductInput[] | Prisma.StockItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutProductInput | Prisma.StockItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.StockItemCreateManyProductInputEnvelope;
    connect?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
};
export type StockItemUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutProductInput, Prisma.StockItemUncheckedCreateWithoutProductInput> | Prisma.StockItemCreateWithoutProductInput[] | Prisma.StockItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutProductInput | Prisma.StockItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.StockItemUpsertWithWhereUniqueWithoutProductInput | Prisma.StockItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.StockItemCreateManyProductInputEnvelope;
    set?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    disconnect?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    delete?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    connect?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    update?: Prisma.StockItemUpdateWithWhereUniqueWithoutProductInput | Prisma.StockItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.StockItemUpdateManyWithWhereWithoutProductInput | Prisma.StockItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.StockItemScalarWhereInput | Prisma.StockItemScalarWhereInput[];
};
export type StockItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutProductInput, Prisma.StockItemUncheckedCreateWithoutProductInput> | Prisma.StockItemCreateWithoutProductInput[] | Prisma.StockItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutProductInput | Prisma.StockItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.StockItemUpsertWithWhereUniqueWithoutProductInput | Prisma.StockItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.StockItemCreateManyProductInputEnvelope;
    set?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    disconnect?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    delete?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    connect?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    update?: Prisma.StockItemUpdateWithWhereUniqueWithoutProductInput | Prisma.StockItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.StockItemUpdateManyWithWhereWithoutProductInput | Prisma.StockItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.StockItemScalarWhereInput | Prisma.StockItemScalarWhereInput[];
};
export type StockItemCreateNestedManyWithoutWarehouseInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutWarehouseInput, Prisma.StockItemUncheckedCreateWithoutWarehouseInput> | Prisma.StockItemCreateWithoutWarehouseInput[] | Prisma.StockItemUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutWarehouseInput | Prisma.StockItemCreateOrConnectWithoutWarehouseInput[];
    createMany?: Prisma.StockItemCreateManyWarehouseInputEnvelope;
    connect?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
};
export type StockItemUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutWarehouseInput, Prisma.StockItemUncheckedCreateWithoutWarehouseInput> | Prisma.StockItemCreateWithoutWarehouseInput[] | Prisma.StockItemUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutWarehouseInput | Prisma.StockItemCreateOrConnectWithoutWarehouseInput[];
    createMany?: Prisma.StockItemCreateManyWarehouseInputEnvelope;
    connect?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
};
export type StockItemUpdateManyWithoutWarehouseNestedInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutWarehouseInput, Prisma.StockItemUncheckedCreateWithoutWarehouseInput> | Prisma.StockItemCreateWithoutWarehouseInput[] | Prisma.StockItemUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutWarehouseInput | Prisma.StockItemCreateOrConnectWithoutWarehouseInput[];
    upsert?: Prisma.StockItemUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.StockItemUpsertWithWhereUniqueWithoutWarehouseInput[];
    createMany?: Prisma.StockItemCreateManyWarehouseInputEnvelope;
    set?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    disconnect?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    delete?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    connect?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    update?: Prisma.StockItemUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.StockItemUpdateWithWhereUniqueWithoutWarehouseInput[];
    updateMany?: Prisma.StockItemUpdateManyWithWhereWithoutWarehouseInput | Prisma.StockItemUpdateManyWithWhereWithoutWarehouseInput[];
    deleteMany?: Prisma.StockItemScalarWhereInput | Prisma.StockItemScalarWhereInput[];
};
export type StockItemUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutWarehouseInput, Prisma.StockItemUncheckedCreateWithoutWarehouseInput> | Prisma.StockItemCreateWithoutWarehouseInput[] | Prisma.StockItemUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutWarehouseInput | Prisma.StockItemCreateOrConnectWithoutWarehouseInput[];
    upsert?: Prisma.StockItemUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.StockItemUpsertWithWhereUniqueWithoutWarehouseInput[];
    createMany?: Prisma.StockItemCreateManyWarehouseInputEnvelope;
    set?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    disconnect?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    delete?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    connect?: Prisma.StockItemWhereUniqueInput | Prisma.StockItemWhereUniqueInput[];
    update?: Prisma.StockItemUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.StockItemUpdateWithWhereUniqueWithoutWarehouseInput[];
    updateMany?: Prisma.StockItemUpdateManyWithWhereWithoutWarehouseInput | Prisma.StockItemUpdateManyWithWhereWithoutWarehouseInput[];
    deleteMany?: Prisma.StockItemScalarWhereInput | Prisma.StockItemScalarWhereInput[];
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type StockItemCreateWithoutProductInput = {
    id?: string;
    quantity?: number;
    purchasePrice?: number | null;
    estimatePrice?: number | null;
    salePrice?: number | null;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutStockItemsInput;
};
export type StockItemUncheckedCreateWithoutProductInput = {
    id?: string;
    warehouseId: string;
    quantity?: number;
    purchasePrice?: number | null;
    estimatePrice?: number | null;
    salePrice?: number | null;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StockItemCreateOrConnectWithoutProductInput = {
    where: Prisma.StockItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutProductInput, Prisma.StockItemUncheckedCreateWithoutProductInput>;
};
export type StockItemCreateManyProductInputEnvelope = {
    data: Prisma.StockItemCreateManyProductInput | Prisma.StockItemCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type StockItemUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.StockItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.StockItemUpdateWithoutProductInput, Prisma.StockItemUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutProductInput, Prisma.StockItemUncheckedCreateWithoutProductInput>;
};
export type StockItemUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.StockItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.StockItemUpdateWithoutProductInput, Prisma.StockItemUncheckedUpdateWithoutProductInput>;
};
export type StockItemUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.StockItemScalarWhereInput;
    data: Prisma.XOR<Prisma.StockItemUpdateManyMutationInput, Prisma.StockItemUncheckedUpdateManyWithoutProductInput>;
};
export type StockItemScalarWhereInput = {
    AND?: Prisma.StockItemScalarWhereInput | Prisma.StockItemScalarWhereInput[];
    OR?: Prisma.StockItemScalarWhereInput[];
    NOT?: Prisma.StockItemScalarWhereInput | Prisma.StockItemScalarWhereInput[];
    id?: Prisma.StringFilter<"StockItem"> | string;
    productId?: Prisma.StringFilter<"StockItem"> | string;
    warehouseId?: Prisma.StringFilter<"StockItem"> | string;
    quantity?: Prisma.IntFilter<"StockItem"> | number;
    purchasePrice?: Prisma.FloatNullableFilter<"StockItem"> | number | null;
    estimatePrice?: Prisma.FloatNullableFilter<"StockItem"> | number | null;
    salePrice?: Prisma.FloatNullableFilter<"StockItem"> | number | null;
    discount?: Prisma.FloatNullableFilter<"StockItem"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"StockItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StockItem"> | Date | string;
};
export type StockItemCreateWithoutWarehouseInput = {
    id?: string;
    quantity?: number;
    purchasePrice?: number | null;
    estimatePrice?: number | null;
    salePrice?: number | null;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutStockItemsInput;
};
export type StockItemUncheckedCreateWithoutWarehouseInput = {
    id?: string;
    productId: string;
    quantity?: number;
    purchasePrice?: number | null;
    estimatePrice?: number | null;
    salePrice?: number | null;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StockItemCreateOrConnectWithoutWarehouseInput = {
    where: Prisma.StockItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutWarehouseInput, Prisma.StockItemUncheckedCreateWithoutWarehouseInput>;
};
export type StockItemCreateManyWarehouseInputEnvelope = {
    data: Prisma.StockItemCreateManyWarehouseInput | Prisma.StockItemCreateManyWarehouseInput[];
    skipDuplicates?: boolean;
};
export type StockItemUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: Prisma.StockItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.StockItemUpdateWithoutWarehouseInput, Prisma.StockItemUncheckedUpdateWithoutWarehouseInput>;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutWarehouseInput, Prisma.StockItemUncheckedCreateWithoutWarehouseInput>;
};
export type StockItemUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: Prisma.StockItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.StockItemUpdateWithoutWarehouseInput, Prisma.StockItemUncheckedUpdateWithoutWarehouseInput>;
};
export type StockItemUpdateManyWithWhereWithoutWarehouseInput = {
    where: Prisma.StockItemScalarWhereInput;
    data: Prisma.XOR<Prisma.StockItemUpdateManyMutationInput, Prisma.StockItemUncheckedUpdateManyWithoutWarehouseInput>;
};
export type StockItemCreateManyProductInput = {
    id?: string;
    warehouseId: string;
    quantity?: number;
    purchasePrice?: number | null;
    estimatePrice?: number | null;
    salePrice?: number | null;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StockItemUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    estimatePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutStockItemsNestedInput;
};
export type StockItemUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    estimatePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockItemUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    estimatePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockItemCreateManyWarehouseInput = {
    id?: string;
    productId: string;
    quantity?: number;
    purchasePrice?: number | null;
    estimatePrice?: number | null;
    salePrice?: number | null;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StockItemUpdateWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    estimatePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutStockItemsNestedInput;
};
export type StockItemUncheckedUpdateWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    estimatePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockItemUncheckedUpdateManyWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    purchasePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    estimatePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    warehouseId?: boolean;
    quantity?: boolean;
    purchasePrice?: boolean;
    estimatePrice?: boolean;
    salePrice?: boolean;
    discount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stockItem"]>;
export type StockItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    warehouseId?: boolean;
    quantity?: boolean;
    purchasePrice?: boolean;
    estimatePrice?: boolean;
    salePrice?: boolean;
    discount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stockItem"]>;
export type StockItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    warehouseId?: boolean;
    quantity?: boolean;
    purchasePrice?: boolean;
    estimatePrice?: boolean;
    salePrice?: boolean;
    discount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stockItem"]>;
export type StockItemSelectScalar = {
    id?: boolean;
    productId?: boolean;
    warehouseId?: boolean;
    quantity?: boolean;
    purchasePrice?: boolean;
    estimatePrice?: boolean;
    salePrice?: boolean;
    discount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StockItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "warehouseId" | "quantity" | "purchasePrice" | "estimatePrice" | "salePrice" | "discount" | "createdAt" | "updatedAt", ExtArgs["result"]["stockItem"]>;
export type StockItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
};
export type StockItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
};
export type StockItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
};
export type $StockItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StockItem";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
        warehouse: Prisma.$WarehousePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        warehouseId: string;
        quantity: number;
        purchasePrice: number | null;
        estimatePrice: number | null;
        salePrice: number | null;
        discount: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["stockItem"]>;
    composites: {};
};
export type StockItemGetPayload<S extends boolean | null | undefined | StockItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StockItemPayload, S>;
export type StockItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StockItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StockItemCountAggregateInputType | true;
};
export interface StockItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StockItem'];
        meta: {
            name: 'StockItem';
        };
    };
    findUnique<T extends StockItemFindUniqueArgs>(args: Prisma.SelectSubset<T, StockItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StockItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StockItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StockItemFindFirstArgs>(args?: Prisma.SelectSubset<T, StockItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StockItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StockItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StockItemFindManyArgs>(args?: Prisma.SelectSubset<T, StockItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StockItemCreateArgs>(args: Prisma.SelectSubset<T, StockItemCreateArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StockItemCreateManyArgs>(args?: Prisma.SelectSubset<T, StockItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StockItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StockItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StockItemDeleteArgs>(args: Prisma.SelectSubset<T, StockItemDeleteArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StockItemUpdateArgs>(args: Prisma.SelectSubset<T, StockItemUpdateArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StockItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, StockItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StockItemUpdateManyArgs>(args: Prisma.SelectSubset<T, StockItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StockItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StockItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StockItemUpsertArgs>(args: Prisma.SelectSubset<T, StockItemUpsertArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StockItemCountArgs>(args?: Prisma.Subset<T, StockItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StockItemCountAggregateOutputType> : number>;
    aggregate<T extends StockItemAggregateArgs>(args: Prisma.Subset<T, StockItemAggregateArgs>): Prisma.PrismaPromise<GetStockItemAggregateType<T>>;
    groupBy<T extends StockItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StockItemGroupByArgs['orderBy'];
    } : {
        orderBy?: StockItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StockItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StockItemFieldRefs;
}
export interface Prisma__StockItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    warehouse<T extends Prisma.WarehouseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WarehouseDefaultArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StockItemFieldRefs {
    readonly id: Prisma.FieldRef<"StockItem", 'String'>;
    readonly productId: Prisma.FieldRef<"StockItem", 'String'>;
    readonly warehouseId: Prisma.FieldRef<"StockItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"StockItem", 'Int'>;
    readonly purchasePrice: Prisma.FieldRef<"StockItem", 'Float'>;
    readonly estimatePrice: Prisma.FieldRef<"StockItem", 'Float'>;
    readonly salePrice: Prisma.FieldRef<"StockItem", 'Float'>;
    readonly discount: Prisma.FieldRef<"StockItem", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"StockItem", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"StockItem", 'DateTime'>;
}
export type StockItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    where: Prisma.StockItemWhereUniqueInput;
};
export type StockItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    where: Prisma.StockItemWhereUniqueInput;
};
export type StockItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    where?: Prisma.StockItemWhereInput;
    orderBy?: Prisma.StockItemOrderByWithRelationInput | Prisma.StockItemOrderByWithRelationInput[];
    cursor?: Prisma.StockItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StockItemScalarFieldEnum | Prisma.StockItemScalarFieldEnum[];
};
export type StockItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    where?: Prisma.StockItemWhereInput;
    orderBy?: Prisma.StockItemOrderByWithRelationInput | Prisma.StockItemOrderByWithRelationInput[];
    cursor?: Prisma.StockItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StockItemScalarFieldEnum | Prisma.StockItemScalarFieldEnum[];
};
export type StockItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    where?: Prisma.StockItemWhereInput;
    orderBy?: Prisma.StockItemOrderByWithRelationInput | Prisma.StockItemOrderByWithRelationInput[];
    cursor?: Prisma.StockItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StockItemScalarFieldEnum | Prisma.StockItemScalarFieldEnum[];
};
export type StockItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StockItemCreateInput, Prisma.StockItemUncheckedCreateInput>;
};
export type StockItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StockItemCreateManyInput | Prisma.StockItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StockItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    data: Prisma.StockItemCreateManyInput | Prisma.StockItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StockItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StockItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StockItemUpdateInput, Prisma.StockItemUncheckedUpdateInput>;
    where: Prisma.StockItemWhereUniqueInput;
};
export type StockItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StockItemUpdateManyMutationInput, Prisma.StockItemUncheckedUpdateManyInput>;
    where?: Prisma.StockItemWhereInput;
    limit?: number;
};
export type StockItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StockItemUpdateManyMutationInput, Prisma.StockItemUncheckedUpdateManyInput>;
    where?: Prisma.StockItemWhereInput;
    limit?: number;
    include?: Prisma.StockItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StockItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    where: Prisma.StockItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockItemCreateInput, Prisma.StockItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StockItemUpdateInput, Prisma.StockItemUncheckedUpdateInput>;
};
export type StockItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    where: Prisma.StockItemWhereUniqueInput;
};
export type StockItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StockItemWhereInput;
    limit?: number;
};
export type StockItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    include?: Prisma.StockItemInclude<ExtArgs> | null;
};
export {};

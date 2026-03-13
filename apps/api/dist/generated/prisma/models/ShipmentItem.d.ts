import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ShipmentItemModel = runtime.Types.Result.DefaultSelection<Prisma.$ShipmentItemPayload>;
export type AggregateShipmentItem = {
    _count: ShipmentItemCountAggregateOutputType | null;
    _avg: ShipmentItemAvgAggregateOutputType | null;
    _sum: ShipmentItemSumAggregateOutputType | null;
    _min: ShipmentItemMinAggregateOutputType | null;
    _max: ShipmentItemMaxAggregateOutputType | null;
};
export type ShipmentItemAvgAggregateOutputType = {
    quantity: number | null;
};
export type ShipmentItemSumAggregateOutputType = {
    quantity: number | null;
};
export type ShipmentItemMinAggregateOutputType = {
    id: string | null;
    shipmentId: string | null;
    productId: string | null;
    quantity: number | null;
    createdAt: Date | null;
};
export type ShipmentItemMaxAggregateOutputType = {
    id: string | null;
    shipmentId: string | null;
    productId: string | null;
    quantity: number | null;
    createdAt: Date | null;
};
export type ShipmentItemCountAggregateOutputType = {
    id: number;
    shipmentId: number;
    productId: number;
    quantity: number;
    createdAt: number;
    _all: number;
};
export type ShipmentItemAvgAggregateInputType = {
    quantity?: true;
};
export type ShipmentItemSumAggregateInputType = {
    quantity?: true;
};
export type ShipmentItemMinAggregateInputType = {
    id?: true;
    shipmentId?: true;
    productId?: true;
    quantity?: true;
    createdAt?: true;
};
export type ShipmentItemMaxAggregateInputType = {
    id?: true;
    shipmentId?: true;
    productId?: true;
    quantity?: true;
    createdAt?: true;
};
export type ShipmentItemCountAggregateInputType = {
    id?: true;
    shipmentId?: true;
    productId?: true;
    quantity?: true;
    createdAt?: true;
    _all?: true;
};
export type ShipmentItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentItemWhereInput;
    orderBy?: Prisma.ShipmentItemOrderByWithRelationInput | Prisma.ShipmentItemOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShipmentItemCountAggregateInputType;
    _avg?: ShipmentItemAvgAggregateInputType;
    _sum?: ShipmentItemSumAggregateInputType;
    _min?: ShipmentItemMinAggregateInputType;
    _max?: ShipmentItemMaxAggregateInputType;
};
export type GetShipmentItemAggregateType<T extends ShipmentItemAggregateArgs> = {
    [P in keyof T & keyof AggregateShipmentItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShipmentItem[P]> : Prisma.GetScalarType<T[P], AggregateShipmentItem[P]>;
};
export type ShipmentItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentItemWhereInput;
    orderBy?: Prisma.ShipmentItemOrderByWithAggregationInput | Prisma.ShipmentItemOrderByWithAggregationInput[];
    by: Prisma.ShipmentItemScalarFieldEnum[] | Prisma.ShipmentItemScalarFieldEnum;
    having?: Prisma.ShipmentItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShipmentItemCountAggregateInputType | true;
    _avg?: ShipmentItemAvgAggregateInputType;
    _sum?: ShipmentItemSumAggregateInputType;
    _min?: ShipmentItemMinAggregateInputType;
    _max?: ShipmentItemMaxAggregateInputType;
};
export type ShipmentItemGroupByOutputType = {
    id: string;
    shipmentId: string;
    productId: string;
    quantity: number;
    createdAt: Date;
    _count: ShipmentItemCountAggregateOutputType | null;
    _avg: ShipmentItemAvgAggregateOutputType | null;
    _sum: ShipmentItemSumAggregateOutputType | null;
    _min: ShipmentItemMinAggregateOutputType | null;
    _max: ShipmentItemMaxAggregateOutputType | null;
};
type GetShipmentItemGroupByPayload<T extends ShipmentItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShipmentItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShipmentItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShipmentItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShipmentItemGroupByOutputType[P]>;
}>>;
export type ShipmentItemWhereInput = {
    AND?: Prisma.ShipmentItemWhereInput | Prisma.ShipmentItemWhereInput[];
    OR?: Prisma.ShipmentItemWhereInput[];
    NOT?: Prisma.ShipmentItemWhereInput | Prisma.ShipmentItemWhereInput[];
    id?: Prisma.StringFilter<"ShipmentItem"> | string;
    shipmentId?: Prisma.StringFilter<"ShipmentItem"> | string;
    productId?: Prisma.StringFilter<"ShipmentItem"> | string;
    quantity?: Prisma.IntFilter<"ShipmentItem"> | number;
    createdAt?: Prisma.DateTimeFilter<"ShipmentItem"> | Date | string;
    shipment?: Prisma.XOR<Prisma.ShipmentScalarRelationFilter, Prisma.ShipmentWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type ShipmentItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    shipmentId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    shipment?: Prisma.ShipmentOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type ShipmentItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    shipmentId_productId?: Prisma.ShipmentItemShipmentIdProductIdCompoundUniqueInput;
    AND?: Prisma.ShipmentItemWhereInput | Prisma.ShipmentItemWhereInput[];
    OR?: Prisma.ShipmentItemWhereInput[];
    NOT?: Prisma.ShipmentItemWhereInput | Prisma.ShipmentItemWhereInput[];
    shipmentId?: Prisma.StringFilter<"ShipmentItem"> | string;
    productId?: Prisma.StringFilter<"ShipmentItem"> | string;
    quantity?: Prisma.IntFilter<"ShipmentItem"> | number;
    createdAt?: Prisma.DateTimeFilter<"ShipmentItem"> | Date | string;
    shipment?: Prisma.XOR<Prisma.ShipmentScalarRelationFilter, Prisma.ShipmentWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id" | "shipmentId_productId">;
export type ShipmentItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    shipmentId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShipmentItemCountOrderByAggregateInput;
    _avg?: Prisma.ShipmentItemAvgOrderByAggregateInput;
    _max?: Prisma.ShipmentItemMaxOrderByAggregateInput;
    _min?: Prisma.ShipmentItemMinOrderByAggregateInput;
    _sum?: Prisma.ShipmentItemSumOrderByAggregateInput;
};
export type ShipmentItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShipmentItemScalarWhereWithAggregatesInput | Prisma.ShipmentItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShipmentItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShipmentItemScalarWhereWithAggregatesInput | Prisma.ShipmentItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShipmentItem"> | string;
    shipmentId?: Prisma.StringWithAggregatesFilter<"ShipmentItem"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"ShipmentItem"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"ShipmentItem"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShipmentItem"> | Date | string;
};
export type ShipmentItemCreateInput = {
    id?: string;
    quantity: number;
    createdAt?: Date | string;
    shipment: Prisma.ShipmentCreateNestedOneWithoutItemsInput;
    product: Prisma.ProductCreateNestedOneWithoutShipmentItemsInput;
};
export type ShipmentItemUncheckedCreateInput = {
    id?: string;
    shipmentId: string;
    productId: string;
    quantity: number;
    createdAt?: Date | string;
};
export type ShipmentItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipment?: Prisma.ShipmentUpdateOneRequiredWithoutItemsNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutShipmentItemsNestedInput;
};
export type ShipmentItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentItemCreateManyInput = {
    id?: string;
    shipmentId: string;
    productId: string;
    quantity: number;
    createdAt?: Date | string;
};
export type ShipmentItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentItemListRelationFilter = {
    every?: Prisma.ShipmentItemWhereInput;
    some?: Prisma.ShipmentItemWhereInput;
    none?: Prisma.ShipmentItemWhereInput;
};
export type ShipmentItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShipmentItemShipmentIdProductIdCompoundUniqueInput = {
    shipmentId: string;
    productId: string;
};
export type ShipmentItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shipmentId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShipmentItemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type ShipmentItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shipmentId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShipmentItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shipmentId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShipmentItemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type ShipmentItemCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ShipmentItemCreateWithoutProductInput, Prisma.ShipmentItemUncheckedCreateWithoutProductInput> | Prisma.ShipmentItemCreateWithoutProductInput[] | Prisma.ShipmentItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShipmentItemCreateOrConnectWithoutProductInput | Prisma.ShipmentItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ShipmentItemCreateManyProductInputEnvelope;
    connect?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
};
export type ShipmentItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ShipmentItemCreateWithoutProductInput, Prisma.ShipmentItemUncheckedCreateWithoutProductInput> | Prisma.ShipmentItemCreateWithoutProductInput[] | Prisma.ShipmentItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShipmentItemCreateOrConnectWithoutProductInput | Prisma.ShipmentItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ShipmentItemCreateManyProductInputEnvelope;
    connect?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
};
export type ShipmentItemUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentItemCreateWithoutProductInput, Prisma.ShipmentItemUncheckedCreateWithoutProductInput> | Prisma.ShipmentItemCreateWithoutProductInput[] | Prisma.ShipmentItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShipmentItemCreateOrConnectWithoutProductInput | Prisma.ShipmentItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ShipmentItemUpsertWithWhereUniqueWithoutProductInput | Prisma.ShipmentItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ShipmentItemCreateManyProductInputEnvelope;
    set?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    disconnect?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    delete?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    connect?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    update?: Prisma.ShipmentItemUpdateWithWhereUniqueWithoutProductInput | Prisma.ShipmentItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ShipmentItemUpdateManyWithWhereWithoutProductInput | Prisma.ShipmentItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ShipmentItemScalarWhereInput | Prisma.ShipmentItemScalarWhereInput[];
};
export type ShipmentItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentItemCreateWithoutProductInput, Prisma.ShipmentItemUncheckedCreateWithoutProductInput> | Prisma.ShipmentItemCreateWithoutProductInput[] | Prisma.ShipmentItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShipmentItemCreateOrConnectWithoutProductInput | Prisma.ShipmentItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ShipmentItemUpsertWithWhereUniqueWithoutProductInput | Prisma.ShipmentItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ShipmentItemCreateManyProductInputEnvelope;
    set?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    disconnect?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    delete?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    connect?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    update?: Prisma.ShipmentItemUpdateWithWhereUniqueWithoutProductInput | Prisma.ShipmentItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ShipmentItemUpdateManyWithWhereWithoutProductInput | Prisma.ShipmentItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ShipmentItemScalarWhereInput | Prisma.ShipmentItemScalarWhereInput[];
};
export type ShipmentItemCreateNestedManyWithoutShipmentInput = {
    create?: Prisma.XOR<Prisma.ShipmentItemCreateWithoutShipmentInput, Prisma.ShipmentItemUncheckedCreateWithoutShipmentInput> | Prisma.ShipmentItemCreateWithoutShipmentInput[] | Prisma.ShipmentItemUncheckedCreateWithoutShipmentInput[];
    connectOrCreate?: Prisma.ShipmentItemCreateOrConnectWithoutShipmentInput | Prisma.ShipmentItemCreateOrConnectWithoutShipmentInput[];
    createMany?: Prisma.ShipmentItemCreateManyShipmentInputEnvelope;
    connect?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
};
export type ShipmentItemUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: Prisma.XOR<Prisma.ShipmentItemCreateWithoutShipmentInput, Prisma.ShipmentItemUncheckedCreateWithoutShipmentInput> | Prisma.ShipmentItemCreateWithoutShipmentInput[] | Prisma.ShipmentItemUncheckedCreateWithoutShipmentInput[];
    connectOrCreate?: Prisma.ShipmentItemCreateOrConnectWithoutShipmentInput | Prisma.ShipmentItemCreateOrConnectWithoutShipmentInput[];
    createMany?: Prisma.ShipmentItemCreateManyShipmentInputEnvelope;
    connect?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
};
export type ShipmentItemUpdateManyWithoutShipmentNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentItemCreateWithoutShipmentInput, Prisma.ShipmentItemUncheckedCreateWithoutShipmentInput> | Prisma.ShipmentItemCreateWithoutShipmentInput[] | Prisma.ShipmentItemUncheckedCreateWithoutShipmentInput[];
    connectOrCreate?: Prisma.ShipmentItemCreateOrConnectWithoutShipmentInput | Prisma.ShipmentItemCreateOrConnectWithoutShipmentInput[];
    upsert?: Prisma.ShipmentItemUpsertWithWhereUniqueWithoutShipmentInput | Prisma.ShipmentItemUpsertWithWhereUniqueWithoutShipmentInput[];
    createMany?: Prisma.ShipmentItemCreateManyShipmentInputEnvelope;
    set?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    disconnect?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    delete?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    connect?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    update?: Prisma.ShipmentItemUpdateWithWhereUniqueWithoutShipmentInput | Prisma.ShipmentItemUpdateWithWhereUniqueWithoutShipmentInput[];
    updateMany?: Prisma.ShipmentItemUpdateManyWithWhereWithoutShipmentInput | Prisma.ShipmentItemUpdateManyWithWhereWithoutShipmentInput[];
    deleteMany?: Prisma.ShipmentItemScalarWhereInput | Prisma.ShipmentItemScalarWhereInput[];
};
export type ShipmentItemUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentItemCreateWithoutShipmentInput, Prisma.ShipmentItemUncheckedCreateWithoutShipmentInput> | Prisma.ShipmentItemCreateWithoutShipmentInput[] | Prisma.ShipmentItemUncheckedCreateWithoutShipmentInput[];
    connectOrCreate?: Prisma.ShipmentItemCreateOrConnectWithoutShipmentInput | Prisma.ShipmentItemCreateOrConnectWithoutShipmentInput[];
    upsert?: Prisma.ShipmentItemUpsertWithWhereUniqueWithoutShipmentInput | Prisma.ShipmentItemUpsertWithWhereUniqueWithoutShipmentInput[];
    createMany?: Prisma.ShipmentItemCreateManyShipmentInputEnvelope;
    set?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    disconnect?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    delete?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    connect?: Prisma.ShipmentItemWhereUniqueInput | Prisma.ShipmentItemWhereUniqueInput[];
    update?: Prisma.ShipmentItemUpdateWithWhereUniqueWithoutShipmentInput | Prisma.ShipmentItemUpdateWithWhereUniqueWithoutShipmentInput[];
    updateMany?: Prisma.ShipmentItemUpdateManyWithWhereWithoutShipmentInput | Prisma.ShipmentItemUpdateManyWithWhereWithoutShipmentInput[];
    deleteMany?: Prisma.ShipmentItemScalarWhereInput | Prisma.ShipmentItemScalarWhereInput[];
};
export type ShipmentItemCreateWithoutProductInput = {
    id?: string;
    quantity: number;
    createdAt?: Date | string;
    shipment: Prisma.ShipmentCreateNestedOneWithoutItemsInput;
};
export type ShipmentItemUncheckedCreateWithoutProductInput = {
    id?: string;
    shipmentId: string;
    quantity: number;
    createdAt?: Date | string;
};
export type ShipmentItemCreateOrConnectWithoutProductInput = {
    where: Prisma.ShipmentItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShipmentItemCreateWithoutProductInput, Prisma.ShipmentItemUncheckedCreateWithoutProductInput>;
};
export type ShipmentItemCreateManyProductInputEnvelope = {
    data: Prisma.ShipmentItemCreateManyProductInput | Prisma.ShipmentItemCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ShipmentItemUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ShipmentItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShipmentItemUpdateWithoutProductInput, Prisma.ShipmentItemUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ShipmentItemCreateWithoutProductInput, Prisma.ShipmentItemUncheckedCreateWithoutProductInput>;
};
export type ShipmentItemUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ShipmentItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShipmentItemUpdateWithoutProductInput, Prisma.ShipmentItemUncheckedUpdateWithoutProductInput>;
};
export type ShipmentItemUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ShipmentItemScalarWhereInput;
    data: Prisma.XOR<Prisma.ShipmentItemUpdateManyMutationInput, Prisma.ShipmentItemUncheckedUpdateManyWithoutProductInput>;
};
export type ShipmentItemScalarWhereInput = {
    AND?: Prisma.ShipmentItemScalarWhereInput | Prisma.ShipmentItemScalarWhereInput[];
    OR?: Prisma.ShipmentItemScalarWhereInput[];
    NOT?: Prisma.ShipmentItemScalarWhereInput | Prisma.ShipmentItemScalarWhereInput[];
    id?: Prisma.StringFilter<"ShipmentItem"> | string;
    shipmentId?: Prisma.StringFilter<"ShipmentItem"> | string;
    productId?: Prisma.StringFilter<"ShipmentItem"> | string;
    quantity?: Prisma.IntFilter<"ShipmentItem"> | number;
    createdAt?: Prisma.DateTimeFilter<"ShipmentItem"> | Date | string;
};
export type ShipmentItemCreateWithoutShipmentInput = {
    id?: string;
    quantity: number;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutShipmentItemsInput;
};
export type ShipmentItemUncheckedCreateWithoutShipmentInput = {
    id?: string;
    productId: string;
    quantity: number;
    createdAt?: Date | string;
};
export type ShipmentItemCreateOrConnectWithoutShipmentInput = {
    where: Prisma.ShipmentItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShipmentItemCreateWithoutShipmentInput, Prisma.ShipmentItemUncheckedCreateWithoutShipmentInput>;
};
export type ShipmentItemCreateManyShipmentInputEnvelope = {
    data: Prisma.ShipmentItemCreateManyShipmentInput | Prisma.ShipmentItemCreateManyShipmentInput[];
    skipDuplicates?: boolean;
};
export type ShipmentItemUpsertWithWhereUniqueWithoutShipmentInput = {
    where: Prisma.ShipmentItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShipmentItemUpdateWithoutShipmentInput, Prisma.ShipmentItemUncheckedUpdateWithoutShipmentInput>;
    create: Prisma.XOR<Prisma.ShipmentItemCreateWithoutShipmentInput, Prisma.ShipmentItemUncheckedCreateWithoutShipmentInput>;
};
export type ShipmentItemUpdateWithWhereUniqueWithoutShipmentInput = {
    where: Prisma.ShipmentItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShipmentItemUpdateWithoutShipmentInput, Prisma.ShipmentItemUncheckedUpdateWithoutShipmentInput>;
};
export type ShipmentItemUpdateManyWithWhereWithoutShipmentInput = {
    where: Prisma.ShipmentItemScalarWhereInput;
    data: Prisma.XOR<Prisma.ShipmentItemUpdateManyMutationInput, Prisma.ShipmentItemUncheckedUpdateManyWithoutShipmentInput>;
};
export type ShipmentItemCreateManyProductInput = {
    id?: string;
    shipmentId: string;
    quantity: number;
    createdAt?: Date | string;
};
export type ShipmentItemUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipment?: Prisma.ShipmentUpdateOneRequiredWithoutItemsNestedInput;
};
export type ShipmentItemUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentItemUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentItemCreateManyShipmentInput = {
    id?: string;
    productId: string;
    quantity: number;
    createdAt?: Date | string;
};
export type ShipmentItemUpdateWithoutShipmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutShipmentItemsNestedInput;
};
export type ShipmentItemUncheckedUpdateWithoutShipmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentItemUncheckedUpdateManyWithoutShipmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shipmentId?: boolean;
    productId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    shipment?: boolean | Prisma.ShipmentDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipmentItem"]>;
export type ShipmentItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shipmentId?: boolean;
    productId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    shipment?: boolean | Prisma.ShipmentDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipmentItem"]>;
export type ShipmentItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shipmentId?: boolean;
    productId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    shipment?: boolean | Prisma.ShipmentDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipmentItem"]>;
export type ShipmentItemSelectScalar = {
    id?: boolean;
    shipmentId?: boolean;
    productId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
};
export type ShipmentItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "shipmentId" | "productId" | "quantity" | "createdAt", ExtArgs["result"]["shipmentItem"]>;
export type ShipmentItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shipment?: boolean | Prisma.ShipmentDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ShipmentItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shipment?: boolean | Prisma.ShipmentDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ShipmentItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shipment?: boolean | Prisma.ShipmentDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $ShipmentItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShipmentItem";
    objects: {
        shipment: Prisma.$ShipmentPayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        shipmentId: string;
        productId: string;
        quantity: number;
        createdAt: Date;
    }, ExtArgs["result"]["shipmentItem"]>;
    composites: {};
};
export type ShipmentItemGetPayload<S extends boolean | null | undefined | ShipmentItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShipmentItemPayload, S>;
export type ShipmentItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShipmentItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShipmentItemCountAggregateInputType | true;
};
export interface ShipmentItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShipmentItem'];
        meta: {
            name: 'ShipmentItem';
        };
    };
    findUnique<T extends ShipmentItemFindUniqueArgs>(args: Prisma.SelectSubset<T, ShipmentItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShipmentItemClient<runtime.Types.Result.GetResult<Prisma.$ShipmentItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShipmentItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShipmentItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShipmentItemClient<runtime.Types.Result.GetResult<Prisma.$ShipmentItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShipmentItemFindFirstArgs>(args?: Prisma.SelectSubset<T, ShipmentItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShipmentItemClient<runtime.Types.Result.GetResult<Prisma.$ShipmentItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShipmentItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShipmentItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShipmentItemClient<runtime.Types.Result.GetResult<Prisma.$ShipmentItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShipmentItemFindManyArgs>(args?: Prisma.SelectSubset<T, ShipmentItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShipmentItemCreateArgs>(args: Prisma.SelectSubset<T, ShipmentItemCreateArgs<ExtArgs>>): Prisma.Prisma__ShipmentItemClient<runtime.Types.Result.GetResult<Prisma.$ShipmentItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShipmentItemCreateManyArgs>(args?: Prisma.SelectSubset<T, ShipmentItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShipmentItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShipmentItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShipmentItemDeleteArgs>(args: Prisma.SelectSubset<T, ShipmentItemDeleteArgs<ExtArgs>>): Prisma.Prisma__ShipmentItemClient<runtime.Types.Result.GetResult<Prisma.$ShipmentItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShipmentItemUpdateArgs>(args: Prisma.SelectSubset<T, ShipmentItemUpdateArgs<ExtArgs>>): Prisma.Prisma__ShipmentItemClient<runtime.Types.Result.GetResult<Prisma.$ShipmentItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShipmentItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShipmentItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShipmentItemUpdateManyArgs>(args: Prisma.SelectSubset<T, ShipmentItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShipmentItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShipmentItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShipmentItemUpsertArgs>(args: Prisma.SelectSubset<T, ShipmentItemUpsertArgs<ExtArgs>>): Prisma.Prisma__ShipmentItemClient<runtime.Types.Result.GetResult<Prisma.$ShipmentItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShipmentItemCountArgs>(args?: Prisma.Subset<T, ShipmentItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShipmentItemCountAggregateOutputType> : number>;
    aggregate<T extends ShipmentItemAggregateArgs>(args: Prisma.Subset<T, ShipmentItemAggregateArgs>): Prisma.PrismaPromise<GetShipmentItemAggregateType<T>>;
    groupBy<T extends ShipmentItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShipmentItemGroupByArgs['orderBy'];
    } : {
        orderBy?: ShipmentItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShipmentItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShipmentItemFieldRefs;
}
export interface Prisma__ShipmentItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shipment<T extends Prisma.ShipmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShipmentDefaultArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShipmentItemFieldRefs {
    readonly id: Prisma.FieldRef<"ShipmentItem", 'String'>;
    readonly shipmentId: Prisma.FieldRef<"ShipmentItem", 'String'>;
    readonly productId: Prisma.FieldRef<"ShipmentItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"ShipmentItem", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ShipmentItem", 'DateTime'>;
}
export type ShipmentItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentItemSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentItemOmit<ExtArgs> | null;
    include?: Prisma.ShipmentItemInclude<ExtArgs> | null;
    where: Prisma.ShipmentItemWhereUniqueInput;
};
export type ShipmentItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentItemSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentItemOmit<ExtArgs> | null;
    include?: Prisma.ShipmentItemInclude<ExtArgs> | null;
    where: Prisma.ShipmentItemWhereUniqueInput;
};
export type ShipmentItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentItemSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentItemOmit<ExtArgs> | null;
    include?: Prisma.ShipmentItemInclude<ExtArgs> | null;
    where?: Prisma.ShipmentItemWhereInput;
    orderBy?: Prisma.ShipmentItemOrderByWithRelationInput | Prisma.ShipmentItemOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentItemScalarFieldEnum | Prisma.ShipmentItemScalarFieldEnum[];
};
export type ShipmentItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentItemSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentItemOmit<ExtArgs> | null;
    include?: Prisma.ShipmentItemInclude<ExtArgs> | null;
    where?: Prisma.ShipmentItemWhereInput;
    orderBy?: Prisma.ShipmentItemOrderByWithRelationInput | Prisma.ShipmentItemOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentItemScalarFieldEnum | Prisma.ShipmentItemScalarFieldEnum[];
};
export type ShipmentItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentItemSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentItemOmit<ExtArgs> | null;
    include?: Prisma.ShipmentItemInclude<ExtArgs> | null;
    where?: Prisma.ShipmentItemWhereInput;
    orderBy?: Prisma.ShipmentItemOrderByWithRelationInput | Prisma.ShipmentItemOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentItemScalarFieldEnum | Prisma.ShipmentItemScalarFieldEnum[];
};
export type ShipmentItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentItemSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentItemOmit<ExtArgs> | null;
    include?: Prisma.ShipmentItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShipmentItemCreateInput, Prisma.ShipmentItemUncheckedCreateInput>;
};
export type ShipmentItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShipmentItemCreateManyInput | Prisma.ShipmentItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShipmentItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShipmentItemOmit<ExtArgs> | null;
    data: Prisma.ShipmentItemCreateManyInput | Prisma.ShipmentItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ShipmentItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ShipmentItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentItemSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentItemOmit<ExtArgs> | null;
    include?: Prisma.ShipmentItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShipmentItemUpdateInput, Prisma.ShipmentItemUncheckedUpdateInput>;
    where: Prisma.ShipmentItemWhereUniqueInput;
};
export type ShipmentItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShipmentItemUpdateManyMutationInput, Prisma.ShipmentItemUncheckedUpdateManyInput>;
    where?: Prisma.ShipmentItemWhereInput;
    limit?: number;
};
export type ShipmentItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShipmentItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShipmentItemUpdateManyMutationInput, Prisma.ShipmentItemUncheckedUpdateManyInput>;
    where?: Prisma.ShipmentItemWhereInput;
    limit?: number;
    include?: Prisma.ShipmentItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ShipmentItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentItemSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentItemOmit<ExtArgs> | null;
    include?: Prisma.ShipmentItemInclude<ExtArgs> | null;
    where: Prisma.ShipmentItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShipmentItemCreateInput, Prisma.ShipmentItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShipmentItemUpdateInput, Prisma.ShipmentItemUncheckedUpdateInput>;
};
export type ShipmentItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentItemSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentItemOmit<ExtArgs> | null;
    include?: Prisma.ShipmentItemInclude<ExtArgs> | null;
    where: Prisma.ShipmentItemWhereUniqueInput;
};
export type ShipmentItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentItemWhereInput;
    limit?: number;
};
export type ShipmentItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentItemSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentItemOmit<ExtArgs> | null;
    include?: Prisma.ShipmentItemInclude<ExtArgs> | null;
};
export {};

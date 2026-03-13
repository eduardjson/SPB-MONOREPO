import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ShipmentModel = runtime.Types.Result.DefaultSelection<Prisma.$ShipmentPayload>;
export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null;
    _min: ShipmentMinAggregateOutputType | null;
    _max: ShipmentMaxAggregateOutputType | null;
};
export type ShipmentMinAggregateOutputType = {
    id: string | null;
    warehouseId: string | null;
    objectId: string | null;
    status: $Enums.ShipmentStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShipmentMaxAggregateOutputType = {
    id: string | null;
    warehouseId: string | null;
    objectId: string | null;
    status: $Enums.ShipmentStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShipmentCountAggregateOutputType = {
    id: number;
    warehouseId: number;
    objectId: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ShipmentMinAggregateInputType = {
    id?: true;
    warehouseId?: true;
    objectId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShipmentMaxAggregateInputType = {
    id?: true;
    warehouseId?: true;
    objectId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShipmentCountAggregateInputType = {
    id?: true;
    warehouseId?: true;
    objectId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ShipmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentWhereInput;
    orderBy?: Prisma.ShipmentOrderByWithRelationInput | Prisma.ShipmentOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShipmentCountAggregateInputType;
    _min?: ShipmentMinAggregateInputType;
    _max?: ShipmentMaxAggregateInputType;
};
export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
    [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShipment[P]> : Prisma.GetScalarType<T[P], AggregateShipment[P]>;
};
export type ShipmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentWhereInput;
    orderBy?: Prisma.ShipmentOrderByWithAggregationInput | Prisma.ShipmentOrderByWithAggregationInput[];
    by: Prisma.ShipmentScalarFieldEnum[] | Prisma.ShipmentScalarFieldEnum;
    having?: Prisma.ShipmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShipmentCountAggregateInputType | true;
    _min?: ShipmentMinAggregateInputType;
    _max?: ShipmentMaxAggregateInputType;
};
export type ShipmentGroupByOutputType = {
    id: string;
    warehouseId: string;
    objectId: string;
    status: $Enums.ShipmentStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: ShipmentCountAggregateOutputType | null;
    _min: ShipmentMinAggregateOutputType | null;
    _max: ShipmentMaxAggregateOutputType | null;
};
type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShipmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShipmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShipmentGroupByOutputType[P]>;
}>>;
export type ShipmentWhereInput = {
    AND?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[];
    OR?: Prisma.ShipmentWhereInput[];
    NOT?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[];
    id?: Prisma.StringFilter<"Shipment"> | string;
    warehouseId?: Prisma.StringFilter<"Shipment"> | string;
    objectId?: Prisma.StringFilter<"Shipment"> | string;
    status?: Prisma.EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string;
    warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>;
    object?: Prisma.XOR<Prisma.ObjectScalarRelationFilter, Prisma.ObjectWhereInput>;
    items?: Prisma.ShipmentItemListRelationFilter;
};
export type ShipmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    objectId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    warehouse?: Prisma.WarehouseOrderByWithRelationInput;
    object?: Prisma.ObjectOrderByWithRelationInput;
    items?: Prisma.ShipmentItemOrderByRelationAggregateInput;
};
export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[];
    OR?: Prisma.ShipmentWhereInput[];
    NOT?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[];
    warehouseId?: Prisma.StringFilter<"Shipment"> | string;
    objectId?: Prisma.StringFilter<"Shipment"> | string;
    status?: Prisma.EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string;
    warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>;
    object?: Prisma.XOR<Prisma.ObjectScalarRelationFilter, Prisma.ObjectWhereInput>;
    items?: Prisma.ShipmentItemListRelationFilter;
}, "id">;
export type ShipmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    objectId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ShipmentCountOrderByAggregateInput;
    _max?: Prisma.ShipmentMaxOrderByAggregateInput;
    _min?: Prisma.ShipmentMinOrderByAggregateInput;
};
export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShipmentScalarWhereWithAggregatesInput | Prisma.ShipmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShipmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShipmentScalarWhereWithAggregatesInput | Prisma.ShipmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    warehouseId?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    objectId?: Prisma.StringWithAggregatesFilter<"Shipment"> | string;
    status?: Prisma.EnumShipmentStatusWithAggregatesFilter<"Shipment"> | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Shipment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Shipment"> | Date | string;
};
export type ShipmentCreateInput = {
    id?: string;
    status?: $Enums.ShipmentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutShipmentsInput;
    object: Prisma.ObjectCreateNestedOneWithoutShipmentsInput;
    items?: Prisma.ShipmentItemCreateNestedManyWithoutShipmentInput;
};
export type ShipmentUncheckedCreateInput = {
    id?: string;
    warehouseId: string;
    objectId: string;
    status?: $Enums.ShipmentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.ShipmentItemUncheckedCreateNestedManyWithoutShipmentInput;
};
export type ShipmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutShipmentsNestedInput;
    object?: Prisma.ObjectUpdateOneRequiredWithoutShipmentsNestedInput;
    items?: Prisma.ShipmentItemUpdateManyWithoutShipmentNestedInput;
};
export type ShipmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    objectId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.ShipmentItemUncheckedUpdateManyWithoutShipmentNestedInput;
};
export type ShipmentCreateManyInput = {
    id?: string;
    warehouseId: string;
    objectId: string;
    status?: $Enums.ShipmentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShipmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    objectId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentListRelationFilter = {
    every?: Prisma.ShipmentWhereInput;
    some?: Prisma.ShipmentWhereInput;
    none?: Prisma.ShipmentWhereInput;
};
export type ShipmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShipmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    objectId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShipmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    objectId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShipmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    objectId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShipmentScalarRelationFilter = {
    is?: Prisma.ShipmentWhereInput;
    isNot?: Prisma.ShipmentWhereInput;
};
export type ShipmentCreateNestedManyWithoutWarehouseInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutWarehouseInput, Prisma.ShipmentUncheckedCreateWithoutWarehouseInput> | Prisma.ShipmentCreateWithoutWarehouseInput[] | Prisma.ShipmentUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutWarehouseInput | Prisma.ShipmentCreateOrConnectWithoutWarehouseInput[];
    createMany?: Prisma.ShipmentCreateManyWarehouseInputEnvelope;
    connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
};
export type ShipmentUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutWarehouseInput, Prisma.ShipmentUncheckedCreateWithoutWarehouseInput> | Prisma.ShipmentCreateWithoutWarehouseInput[] | Prisma.ShipmentUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutWarehouseInput | Prisma.ShipmentCreateOrConnectWithoutWarehouseInput[];
    createMany?: Prisma.ShipmentCreateManyWarehouseInputEnvelope;
    connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
};
export type ShipmentUpdateManyWithoutWarehouseNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutWarehouseInput, Prisma.ShipmentUncheckedCreateWithoutWarehouseInput> | Prisma.ShipmentCreateWithoutWarehouseInput[] | Prisma.ShipmentUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutWarehouseInput | Prisma.ShipmentCreateOrConnectWithoutWarehouseInput[];
    upsert?: Prisma.ShipmentUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.ShipmentUpsertWithWhereUniqueWithoutWarehouseInput[];
    createMany?: Prisma.ShipmentCreateManyWarehouseInputEnvelope;
    set?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    disconnect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    delete?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    update?: Prisma.ShipmentUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.ShipmentUpdateWithWhereUniqueWithoutWarehouseInput[];
    updateMany?: Prisma.ShipmentUpdateManyWithWhereWithoutWarehouseInput | Prisma.ShipmentUpdateManyWithWhereWithoutWarehouseInput[];
    deleteMany?: Prisma.ShipmentScalarWhereInput | Prisma.ShipmentScalarWhereInput[];
};
export type ShipmentUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutWarehouseInput, Prisma.ShipmentUncheckedCreateWithoutWarehouseInput> | Prisma.ShipmentCreateWithoutWarehouseInput[] | Prisma.ShipmentUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutWarehouseInput | Prisma.ShipmentCreateOrConnectWithoutWarehouseInput[];
    upsert?: Prisma.ShipmentUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.ShipmentUpsertWithWhereUniqueWithoutWarehouseInput[];
    createMany?: Prisma.ShipmentCreateManyWarehouseInputEnvelope;
    set?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    disconnect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    delete?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    update?: Prisma.ShipmentUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.ShipmentUpdateWithWhereUniqueWithoutWarehouseInput[];
    updateMany?: Prisma.ShipmentUpdateManyWithWhereWithoutWarehouseInput | Prisma.ShipmentUpdateManyWithWhereWithoutWarehouseInput[];
    deleteMany?: Prisma.ShipmentScalarWhereInput | Prisma.ShipmentScalarWhereInput[];
};
export type ShipmentCreateNestedManyWithoutObjectInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutObjectInput, Prisma.ShipmentUncheckedCreateWithoutObjectInput> | Prisma.ShipmentCreateWithoutObjectInput[] | Prisma.ShipmentUncheckedCreateWithoutObjectInput[];
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutObjectInput | Prisma.ShipmentCreateOrConnectWithoutObjectInput[];
    createMany?: Prisma.ShipmentCreateManyObjectInputEnvelope;
    connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
};
export type ShipmentUncheckedCreateNestedManyWithoutObjectInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutObjectInput, Prisma.ShipmentUncheckedCreateWithoutObjectInput> | Prisma.ShipmentCreateWithoutObjectInput[] | Prisma.ShipmentUncheckedCreateWithoutObjectInput[];
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutObjectInput | Prisma.ShipmentCreateOrConnectWithoutObjectInput[];
    createMany?: Prisma.ShipmentCreateManyObjectInputEnvelope;
    connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
};
export type ShipmentUpdateManyWithoutObjectNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutObjectInput, Prisma.ShipmentUncheckedCreateWithoutObjectInput> | Prisma.ShipmentCreateWithoutObjectInput[] | Prisma.ShipmentUncheckedCreateWithoutObjectInput[];
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutObjectInput | Prisma.ShipmentCreateOrConnectWithoutObjectInput[];
    upsert?: Prisma.ShipmentUpsertWithWhereUniqueWithoutObjectInput | Prisma.ShipmentUpsertWithWhereUniqueWithoutObjectInput[];
    createMany?: Prisma.ShipmentCreateManyObjectInputEnvelope;
    set?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    disconnect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    delete?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    update?: Prisma.ShipmentUpdateWithWhereUniqueWithoutObjectInput | Prisma.ShipmentUpdateWithWhereUniqueWithoutObjectInput[];
    updateMany?: Prisma.ShipmentUpdateManyWithWhereWithoutObjectInput | Prisma.ShipmentUpdateManyWithWhereWithoutObjectInput[];
    deleteMany?: Prisma.ShipmentScalarWhereInput | Prisma.ShipmentScalarWhereInput[];
};
export type ShipmentUncheckedUpdateManyWithoutObjectNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutObjectInput, Prisma.ShipmentUncheckedCreateWithoutObjectInput> | Prisma.ShipmentCreateWithoutObjectInput[] | Prisma.ShipmentUncheckedCreateWithoutObjectInput[];
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutObjectInput | Prisma.ShipmentCreateOrConnectWithoutObjectInput[];
    upsert?: Prisma.ShipmentUpsertWithWhereUniqueWithoutObjectInput | Prisma.ShipmentUpsertWithWhereUniqueWithoutObjectInput[];
    createMany?: Prisma.ShipmentCreateManyObjectInputEnvelope;
    set?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    disconnect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    delete?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[];
    update?: Prisma.ShipmentUpdateWithWhereUniqueWithoutObjectInput | Prisma.ShipmentUpdateWithWhereUniqueWithoutObjectInput[];
    updateMany?: Prisma.ShipmentUpdateManyWithWhereWithoutObjectInput | Prisma.ShipmentUpdateManyWithWhereWithoutObjectInput[];
    deleteMany?: Prisma.ShipmentScalarWhereInput | Prisma.ShipmentScalarWhereInput[];
};
export type EnumShipmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShipmentStatus;
};
export type ShipmentCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutItemsInput, Prisma.ShipmentUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutItemsInput;
    connect?: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentCreateWithoutItemsInput, Prisma.ShipmentUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.ShipmentUpsertWithoutItemsInput;
    connect?: Prisma.ShipmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShipmentUpdateToOneWithWhereWithoutItemsInput, Prisma.ShipmentUpdateWithoutItemsInput>, Prisma.ShipmentUncheckedUpdateWithoutItemsInput>;
};
export type ShipmentCreateWithoutWarehouseInput = {
    id?: string;
    status?: $Enums.ShipmentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    object: Prisma.ObjectCreateNestedOneWithoutShipmentsInput;
    items?: Prisma.ShipmentItemCreateNestedManyWithoutShipmentInput;
};
export type ShipmentUncheckedCreateWithoutWarehouseInput = {
    id?: string;
    objectId: string;
    status?: $Enums.ShipmentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.ShipmentItemUncheckedCreateNestedManyWithoutShipmentInput;
};
export type ShipmentCreateOrConnectWithoutWarehouseInput = {
    where: Prisma.ShipmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShipmentCreateWithoutWarehouseInput, Prisma.ShipmentUncheckedCreateWithoutWarehouseInput>;
};
export type ShipmentCreateManyWarehouseInputEnvelope = {
    data: Prisma.ShipmentCreateManyWarehouseInput | Prisma.ShipmentCreateManyWarehouseInput[];
    skipDuplicates?: boolean;
};
export type ShipmentUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: Prisma.ShipmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShipmentUpdateWithoutWarehouseInput, Prisma.ShipmentUncheckedUpdateWithoutWarehouseInput>;
    create: Prisma.XOR<Prisma.ShipmentCreateWithoutWarehouseInput, Prisma.ShipmentUncheckedCreateWithoutWarehouseInput>;
};
export type ShipmentUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: Prisma.ShipmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShipmentUpdateWithoutWarehouseInput, Prisma.ShipmentUncheckedUpdateWithoutWarehouseInput>;
};
export type ShipmentUpdateManyWithWhereWithoutWarehouseInput = {
    where: Prisma.ShipmentScalarWhereInput;
    data: Prisma.XOR<Prisma.ShipmentUpdateManyMutationInput, Prisma.ShipmentUncheckedUpdateManyWithoutWarehouseInput>;
};
export type ShipmentScalarWhereInput = {
    AND?: Prisma.ShipmentScalarWhereInput | Prisma.ShipmentScalarWhereInput[];
    OR?: Prisma.ShipmentScalarWhereInput[];
    NOT?: Prisma.ShipmentScalarWhereInput | Prisma.ShipmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Shipment"> | string;
    warehouseId?: Prisma.StringFilter<"Shipment"> | string;
    objectId?: Prisma.StringFilter<"Shipment"> | string;
    status?: Prisma.EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string;
};
export type ShipmentCreateWithoutObjectInput = {
    id?: string;
    status?: $Enums.ShipmentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutShipmentsInput;
    items?: Prisma.ShipmentItemCreateNestedManyWithoutShipmentInput;
};
export type ShipmentUncheckedCreateWithoutObjectInput = {
    id?: string;
    warehouseId: string;
    status?: $Enums.ShipmentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.ShipmentItemUncheckedCreateNestedManyWithoutShipmentInput;
};
export type ShipmentCreateOrConnectWithoutObjectInput = {
    where: Prisma.ShipmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShipmentCreateWithoutObjectInput, Prisma.ShipmentUncheckedCreateWithoutObjectInput>;
};
export type ShipmentCreateManyObjectInputEnvelope = {
    data: Prisma.ShipmentCreateManyObjectInput | Prisma.ShipmentCreateManyObjectInput[];
    skipDuplicates?: boolean;
};
export type ShipmentUpsertWithWhereUniqueWithoutObjectInput = {
    where: Prisma.ShipmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShipmentUpdateWithoutObjectInput, Prisma.ShipmentUncheckedUpdateWithoutObjectInput>;
    create: Prisma.XOR<Prisma.ShipmentCreateWithoutObjectInput, Prisma.ShipmentUncheckedCreateWithoutObjectInput>;
};
export type ShipmentUpdateWithWhereUniqueWithoutObjectInput = {
    where: Prisma.ShipmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShipmentUpdateWithoutObjectInput, Prisma.ShipmentUncheckedUpdateWithoutObjectInput>;
};
export type ShipmentUpdateManyWithWhereWithoutObjectInput = {
    where: Prisma.ShipmentScalarWhereInput;
    data: Prisma.XOR<Prisma.ShipmentUpdateManyMutationInput, Prisma.ShipmentUncheckedUpdateManyWithoutObjectInput>;
};
export type ShipmentCreateWithoutItemsInput = {
    id?: string;
    status?: $Enums.ShipmentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutShipmentsInput;
    object: Prisma.ObjectCreateNestedOneWithoutShipmentsInput;
};
export type ShipmentUncheckedCreateWithoutItemsInput = {
    id?: string;
    warehouseId: string;
    objectId: string;
    status?: $Enums.ShipmentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShipmentCreateOrConnectWithoutItemsInput = {
    where: Prisma.ShipmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShipmentCreateWithoutItemsInput, Prisma.ShipmentUncheckedCreateWithoutItemsInput>;
};
export type ShipmentUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.ShipmentUpdateWithoutItemsInput, Prisma.ShipmentUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.ShipmentCreateWithoutItemsInput, Prisma.ShipmentUncheckedCreateWithoutItemsInput>;
    where?: Prisma.ShipmentWhereInput;
};
export type ShipmentUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.ShipmentWhereInput;
    data: Prisma.XOR<Prisma.ShipmentUpdateWithoutItemsInput, Prisma.ShipmentUncheckedUpdateWithoutItemsInput>;
};
export type ShipmentUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutShipmentsNestedInput;
    object?: Prisma.ObjectUpdateOneRequiredWithoutShipmentsNestedInput;
};
export type ShipmentUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    objectId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentCreateManyWarehouseInput = {
    id?: string;
    objectId: string;
    status?: $Enums.ShipmentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShipmentUpdateWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    object?: Prisma.ObjectUpdateOneRequiredWithoutShipmentsNestedInput;
    items?: Prisma.ShipmentItemUpdateManyWithoutShipmentNestedInput;
};
export type ShipmentUncheckedUpdateWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    objectId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.ShipmentItemUncheckedUpdateManyWithoutShipmentNestedInput;
};
export type ShipmentUncheckedUpdateManyWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    objectId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentCreateManyObjectInput = {
    id?: string;
    warehouseId: string;
    status?: $Enums.ShipmentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShipmentUpdateWithoutObjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutShipmentsNestedInput;
    items?: Prisma.ShipmentItemUpdateManyWithoutShipmentNestedInput;
};
export type ShipmentUncheckedUpdateWithoutObjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.ShipmentItemUncheckedUpdateManyWithoutShipmentNestedInput;
};
export type ShipmentUncheckedUpdateManyWithoutObjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentCountOutputType = {
    items: number;
};
export type ShipmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | ShipmentCountOutputTypeCountItemsArgs;
};
export type ShipmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentCountOutputTypeSelect<ExtArgs> | null;
};
export type ShipmentCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentItemWhereInput;
};
export type ShipmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    warehouseId?: boolean;
    objectId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    object?: boolean | Prisma.ObjectDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.Shipment$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ShipmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipment"]>;
export type ShipmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    warehouseId?: boolean;
    objectId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    object?: boolean | Prisma.ObjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipment"]>;
export type ShipmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    warehouseId?: boolean;
    objectId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    object?: boolean | Prisma.ObjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipment"]>;
export type ShipmentSelectScalar = {
    id?: boolean;
    warehouseId?: boolean;
    objectId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ShipmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "warehouseId" | "objectId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["shipment"]>;
export type ShipmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    object?: boolean | Prisma.ObjectDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.Shipment$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ShipmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    object?: boolean | Prisma.ObjectDefaultArgs<ExtArgs>;
};
export type ShipmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    object?: boolean | Prisma.ObjectDefaultArgs<ExtArgs>;
};
export type $ShipmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Shipment";
    objects: {
        warehouse: Prisma.$WarehousePayload<ExtArgs>;
        object: Prisma.$ObjectPayload<ExtArgs>;
        items: Prisma.$ShipmentItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        warehouseId: string;
        objectId: string;
        status: $Enums.ShipmentStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["shipment"]>;
    composites: {};
};
export type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShipmentPayload, S>;
export type ShipmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShipmentCountAggregateInputType | true;
};
export interface ShipmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Shipment'];
        meta: {
            name: 'Shipment';
        };
    };
    findUnique<T extends ShipmentFindUniqueArgs>(args: Prisma.SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShipmentFindFirstArgs>(args?: Prisma.SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShipmentFindManyArgs>(args?: Prisma.SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShipmentCreateArgs>(args: Prisma.SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShipmentCreateManyArgs>(args?: Prisma.SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShipmentDeleteArgs>(args: Prisma.SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShipmentUpdateArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShipmentUpdateManyArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShipmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShipmentUpsertArgs>(args: Prisma.SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShipmentCountArgs>(args?: Prisma.Subset<T, ShipmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShipmentCountAggregateOutputType> : number>;
    aggregate<T extends ShipmentAggregateArgs>(args: Prisma.Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>;
    groupBy<T extends ShipmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShipmentGroupByArgs['orderBy'];
    } : {
        orderBy?: ShipmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShipmentFieldRefs;
}
export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    warehouse<T extends Prisma.WarehouseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WarehouseDefaultArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    object<T extends Prisma.ObjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ObjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ObjectClient<runtime.Types.Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.Shipment$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Shipment$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShipmentFieldRefs {
    readonly id: Prisma.FieldRef<"Shipment", 'String'>;
    readonly warehouseId: Prisma.FieldRef<"Shipment", 'String'>;
    readonly objectId: Prisma.FieldRef<"Shipment", 'String'>;
    readonly status: Prisma.FieldRef<"Shipment", 'ShipmentStatus'>;
    readonly createdAt: Prisma.FieldRef<"Shipment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Shipment", 'DateTime'>;
}
export type ShipmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShipmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShipmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShipmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShipmentCreateInput, Prisma.ShipmentUncheckedCreateInput>;
};
export type ShipmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShipmentCreateManyInput | Prisma.ShipmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShipmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    data: Prisma.ShipmentCreateManyInput | Prisma.ShipmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ShipmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ShipmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShipmentUpdateInput, Prisma.ShipmentUncheckedUpdateInput>;
    where: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShipmentUpdateManyMutationInput, Prisma.ShipmentUncheckedUpdateManyInput>;
    where?: Prisma.ShipmentWhereInput;
    limit?: number;
};
export type ShipmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShipmentUpdateManyMutationInput, Prisma.ShipmentUncheckedUpdateManyInput>;
    where?: Prisma.ShipmentWhereInput;
    limit?: number;
    include?: Prisma.ShipmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ShipmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where: Prisma.ShipmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShipmentCreateInput, Prisma.ShipmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShipmentUpdateInput, Prisma.ShipmentUncheckedUpdateInput>;
};
export type ShipmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where: Prisma.ShipmentWhereUniqueInput;
};
export type ShipmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentWhereInput;
    limit?: number;
};
export type Shipment$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShipmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
};
export {};

import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EstimateModel = runtime.Types.Result.DefaultSelection<Prisma.$EstimatePayload>;
export type AggregateEstimate = {
    _count: EstimateCountAggregateOutputType | null;
    _avg: EstimateAvgAggregateOutputType | null;
    _sum: EstimateSumAggregateOutputType | null;
    _min: EstimateMinAggregateOutputType | null;
    _max: EstimateMaxAggregateOutputType | null;
};
export type EstimateAvgAggregateOutputType = {
    totalCost: number | null;
    laborCost: number | null;
    materialsCost: number | null;
};
export type EstimateSumAggregateOutputType = {
    totalCost: number | null;
    laborCost: number | null;
    materialsCost: number | null;
};
export type EstimateMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    totalCost: number | null;
    laborCost: number | null;
    materialsCost: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EstimateMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    totalCost: number | null;
    laborCost: number | null;
    materialsCost: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EstimateCountAggregateOutputType = {
    id: number;
    projectId: number;
    totalCost: number;
    laborCost: number;
    materialsCost: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EstimateAvgAggregateInputType = {
    totalCost?: true;
    laborCost?: true;
    materialsCost?: true;
};
export type EstimateSumAggregateInputType = {
    totalCost?: true;
    laborCost?: true;
    materialsCost?: true;
};
export type EstimateMinAggregateInputType = {
    id?: true;
    projectId?: true;
    totalCost?: true;
    laborCost?: true;
    materialsCost?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EstimateMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    totalCost?: true;
    laborCost?: true;
    materialsCost?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EstimateCountAggregateInputType = {
    id?: true;
    projectId?: true;
    totalCost?: true;
    laborCost?: true;
    materialsCost?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EstimateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstimateWhereInput;
    orderBy?: Prisma.EstimateOrderByWithRelationInput | Prisma.EstimateOrderByWithRelationInput[];
    cursor?: Prisma.EstimateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EstimateCountAggregateInputType;
    _avg?: EstimateAvgAggregateInputType;
    _sum?: EstimateSumAggregateInputType;
    _min?: EstimateMinAggregateInputType;
    _max?: EstimateMaxAggregateInputType;
};
export type GetEstimateAggregateType<T extends EstimateAggregateArgs> = {
    [P in keyof T & keyof AggregateEstimate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEstimate[P]> : Prisma.GetScalarType<T[P], AggregateEstimate[P]>;
};
export type EstimateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstimateWhereInput;
    orderBy?: Prisma.EstimateOrderByWithAggregationInput | Prisma.EstimateOrderByWithAggregationInput[];
    by: Prisma.EstimateScalarFieldEnum[] | Prisma.EstimateScalarFieldEnum;
    having?: Prisma.EstimateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EstimateCountAggregateInputType | true;
    _avg?: EstimateAvgAggregateInputType;
    _sum?: EstimateSumAggregateInputType;
    _min?: EstimateMinAggregateInputType;
    _max?: EstimateMaxAggregateInputType;
};
export type EstimateGroupByOutputType = {
    id: string;
    projectId: string;
    totalCost: number;
    laborCost: number | null;
    materialsCost: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: EstimateCountAggregateOutputType | null;
    _avg: EstimateAvgAggregateOutputType | null;
    _sum: EstimateSumAggregateOutputType | null;
    _min: EstimateMinAggregateOutputType | null;
    _max: EstimateMaxAggregateOutputType | null;
};
type GetEstimateGroupByPayload<T extends EstimateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EstimateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EstimateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EstimateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EstimateGroupByOutputType[P]>;
}>>;
export type EstimateWhereInput = {
    AND?: Prisma.EstimateWhereInput | Prisma.EstimateWhereInput[];
    OR?: Prisma.EstimateWhereInput[];
    NOT?: Prisma.EstimateWhereInput | Prisma.EstimateWhereInput[];
    id?: Prisma.StringFilter<"Estimate"> | string;
    projectId?: Prisma.StringFilter<"Estimate"> | string;
    totalCost?: Prisma.FloatFilter<"Estimate"> | number;
    laborCost?: Prisma.FloatNullableFilter<"Estimate"> | number | null;
    materialsCost?: Prisma.FloatNullableFilter<"Estimate"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Estimate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Estimate"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    items?: Prisma.EstimateItemListRelationFilter;
};
export type EstimateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
    laborCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    materialsCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    items?: Prisma.EstimateItemOrderByRelationAggregateInput;
};
export type EstimateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    projectId?: string;
    AND?: Prisma.EstimateWhereInput | Prisma.EstimateWhereInput[];
    OR?: Prisma.EstimateWhereInput[];
    NOT?: Prisma.EstimateWhereInput | Prisma.EstimateWhereInput[];
    totalCost?: Prisma.FloatFilter<"Estimate"> | number;
    laborCost?: Prisma.FloatNullableFilter<"Estimate"> | number | null;
    materialsCost?: Prisma.FloatNullableFilter<"Estimate"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Estimate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Estimate"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    items?: Prisma.EstimateItemListRelationFilter;
}, "id" | "projectId">;
export type EstimateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
    laborCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    materialsCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EstimateCountOrderByAggregateInput;
    _avg?: Prisma.EstimateAvgOrderByAggregateInput;
    _max?: Prisma.EstimateMaxOrderByAggregateInput;
    _min?: Prisma.EstimateMinOrderByAggregateInput;
    _sum?: Prisma.EstimateSumOrderByAggregateInput;
};
export type EstimateScalarWhereWithAggregatesInput = {
    AND?: Prisma.EstimateScalarWhereWithAggregatesInput | Prisma.EstimateScalarWhereWithAggregatesInput[];
    OR?: Prisma.EstimateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EstimateScalarWhereWithAggregatesInput | Prisma.EstimateScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Estimate"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"Estimate"> | string;
    totalCost?: Prisma.FloatWithAggregatesFilter<"Estimate"> | number;
    laborCost?: Prisma.FloatNullableWithAggregatesFilter<"Estimate"> | number | null;
    materialsCost?: Prisma.FloatNullableWithAggregatesFilter<"Estimate"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Estimate"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Estimate"> | Date | string;
};
export type EstimateCreateInput = {
    id?: string;
    totalCost?: number;
    laborCost?: number | null;
    materialsCost?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutEstimateInput;
    items?: Prisma.EstimateItemCreateNestedManyWithoutEstimateInput;
};
export type EstimateUncheckedCreateInput = {
    id?: string;
    projectId: string;
    totalCost?: number;
    laborCost?: number | null;
    materialsCost?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.EstimateItemUncheckedCreateNestedManyWithoutEstimateInput;
};
export type EstimateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    laborCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    materialsCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutEstimateNestedInput;
    items?: Prisma.EstimateItemUpdateManyWithoutEstimateNestedInput;
};
export type EstimateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    laborCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    materialsCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.EstimateItemUncheckedUpdateManyWithoutEstimateNestedInput;
};
export type EstimateCreateManyInput = {
    id?: string;
    projectId: string;
    totalCost?: number;
    laborCost?: number | null;
    materialsCost?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EstimateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    laborCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    materialsCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EstimateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    laborCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    materialsCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EstimateNullableScalarRelationFilter = {
    is?: Prisma.EstimateWhereInput | null;
    isNot?: Prisma.EstimateWhereInput | null;
};
export type EstimateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
    laborCost?: Prisma.SortOrder;
    materialsCost?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EstimateAvgOrderByAggregateInput = {
    totalCost?: Prisma.SortOrder;
    laborCost?: Prisma.SortOrder;
    materialsCost?: Prisma.SortOrder;
};
export type EstimateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
    laborCost?: Prisma.SortOrder;
    materialsCost?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EstimateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
    laborCost?: Prisma.SortOrder;
    materialsCost?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EstimateSumOrderByAggregateInput = {
    totalCost?: Prisma.SortOrder;
    laborCost?: Prisma.SortOrder;
    materialsCost?: Prisma.SortOrder;
};
export type EstimateScalarRelationFilter = {
    is?: Prisma.EstimateWhereInput;
    isNot?: Prisma.EstimateWhereInput;
};
export type EstimateCreateNestedOneWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.EstimateCreateWithoutProjectInput, Prisma.EstimateUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: Prisma.EstimateCreateOrConnectWithoutProjectInput;
    connect?: Prisma.EstimateWhereUniqueInput;
};
export type EstimateUncheckedCreateNestedOneWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.EstimateCreateWithoutProjectInput, Prisma.EstimateUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: Prisma.EstimateCreateOrConnectWithoutProjectInput;
    connect?: Prisma.EstimateWhereUniqueInput;
};
export type EstimateUpdateOneWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.EstimateCreateWithoutProjectInput, Prisma.EstimateUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: Prisma.EstimateCreateOrConnectWithoutProjectInput;
    upsert?: Prisma.EstimateUpsertWithoutProjectInput;
    disconnect?: Prisma.EstimateWhereInput | boolean;
    delete?: Prisma.EstimateWhereInput | boolean;
    connect?: Prisma.EstimateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EstimateUpdateToOneWithWhereWithoutProjectInput, Prisma.EstimateUpdateWithoutProjectInput>, Prisma.EstimateUncheckedUpdateWithoutProjectInput>;
};
export type EstimateUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.EstimateCreateWithoutProjectInput, Prisma.EstimateUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: Prisma.EstimateCreateOrConnectWithoutProjectInput;
    upsert?: Prisma.EstimateUpsertWithoutProjectInput;
    disconnect?: Prisma.EstimateWhereInput | boolean;
    delete?: Prisma.EstimateWhereInput | boolean;
    connect?: Prisma.EstimateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EstimateUpdateToOneWithWhereWithoutProjectInput, Prisma.EstimateUpdateWithoutProjectInput>, Prisma.EstimateUncheckedUpdateWithoutProjectInput>;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EstimateCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.EstimateCreateWithoutItemsInput, Prisma.EstimateUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.EstimateCreateOrConnectWithoutItemsInput;
    connect?: Prisma.EstimateWhereUniqueInput;
};
export type EstimateUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.EstimateCreateWithoutItemsInput, Prisma.EstimateUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.EstimateCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.EstimateUpsertWithoutItemsInput;
    connect?: Prisma.EstimateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EstimateUpdateToOneWithWhereWithoutItemsInput, Prisma.EstimateUpdateWithoutItemsInput>, Prisma.EstimateUncheckedUpdateWithoutItemsInput>;
};
export type EstimateCreateWithoutProjectInput = {
    id?: string;
    totalCost?: number;
    laborCost?: number | null;
    materialsCost?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.EstimateItemCreateNestedManyWithoutEstimateInput;
};
export type EstimateUncheckedCreateWithoutProjectInput = {
    id?: string;
    totalCost?: number;
    laborCost?: number | null;
    materialsCost?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.EstimateItemUncheckedCreateNestedManyWithoutEstimateInput;
};
export type EstimateCreateOrConnectWithoutProjectInput = {
    where: Prisma.EstimateWhereUniqueInput;
    create: Prisma.XOR<Prisma.EstimateCreateWithoutProjectInput, Prisma.EstimateUncheckedCreateWithoutProjectInput>;
};
export type EstimateUpsertWithoutProjectInput = {
    update: Prisma.XOR<Prisma.EstimateUpdateWithoutProjectInput, Prisma.EstimateUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.EstimateCreateWithoutProjectInput, Prisma.EstimateUncheckedCreateWithoutProjectInput>;
    where?: Prisma.EstimateWhereInput;
};
export type EstimateUpdateToOneWithWhereWithoutProjectInput = {
    where?: Prisma.EstimateWhereInput;
    data: Prisma.XOR<Prisma.EstimateUpdateWithoutProjectInput, Prisma.EstimateUncheckedUpdateWithoutProjectInput>;
};
export type EstimateUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    laborCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    materialsCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.EstimateItemUpdateManyWithoutEstimateNestedInput;
};
export type EstimateUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    laborCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    materialsCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.EstimateItemUncheckedUpdateManyWithoutEstimateNestedInput;
};
export type EstimateCreateWithoutItemsInput = {
    id?: string;
    totalCost?: number;
    laborCost?: number | null;
    materialsCost?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutEstimateInput;
};
export type EstimateUncheckedCreateWithoutItemsInput = {
    id?: string;
    projectId: string;
    totalCost?: number;
    laborCost?: number | null;
    materialsCost?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EstimateCreateOrConnectWithoutItemsInput = {
    where: Prisma.EstimateWhereUniqueInput;
    create: Prisma.XOR<Prisma.EstimateCreateWithoutItemsInput, Prisma.EstimateUncheckedCreateWithoutItemsInput>;
};
export type EstimateUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.EstimateUpdateWithoutItemsInput, Prisma.EstimateUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.EstimateCreateWithoutItemsInput, Prisma.EstimateUncheckedCreateWithoutItemsInput>;
    where?: Prisma.EstimateWhereInput;
};
export type EstimateUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.EstimateWhereInput;
    data: Prisma.XOR<Prisma.EstimateUpdateWithoutItemsInput, Prisma.EstimateUncheckedUpdateWithoutItemsInput>;
};
export type EstimateUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    laborCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    materialsCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutEstimateNestedInput;
};
export type EstimateUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    laborCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    materialsCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EstimateCountOutputType = {
    items: number;
};
export type EstimateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | EstimateCountOutputTypeCountItemsArgs;
};
export type EstimateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateCountOutputTypeSelect<ExtArgs> | null;
};
export type EstimateCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstimateItemWhereInput;
};
export type EstimateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    totalCost?: boolean;
    laborCost?: boolean;
    materialsCost?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.Estimate$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.EstimateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["estimate"]>;
export type EstimateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    totalCost?: boolean;
    laborCost?: boolean;
    materialsCost?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["estimate"]>;
export type EstimateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    totalCost?: boolean;
    laborCost?: boolean;
    materialsCost?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["estimate"]>;
export type EstimateSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    totalCost?: boolean;
    laborCost?: boolean;
    materialsCost?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EstimateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "totalCost" | "laborCost" | "materialsCost" | "createdAt" | "updatedAt", ExtArgs["result"]["estimate"]>;
export type EstimateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.Estimate$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.EstimateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EstimateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type EstimateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type $EstimatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Estimate";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        items: Prisma.$EstimateItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        totalCost: number;
        laborCost: number | null;
        materialsCost: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["estimate"]>;
    composites: {};
};
export type EstimateGetPayload<S extends boolean | null | undefined | EstimateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EstimatePayload, S>;
export type EstimateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EstimateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EstimateCountAggregateInputType | true;
};
export interface EstimateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Estimate'];
        meta: {
            name: 'Estimate';
        };
    };
    findUnique<T extends EstimateFindUniqueArgs>(args: Prisma.SelectSubset<T, EstimateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EstimateClient<runtime.Types.Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EstimateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EstimateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EstimateClient<runtime.Types.Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EstimateFindFirstArgs>(args?: Prisma.SelectSubset<T, EstimateFindFirstArgs<ExtArgs>>): Prisma.Prisma__EstimateClient<runtime.Types.Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EstimateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EstimateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EstimateClient<runtime.Types.Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EstimateFindManyArgs>(args?: Prisma.SelectSubset<T, EstimateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EstimateCreateArgs>(args: Prisma.SelectSubset<T, EstimateCreateArgs<ExtArgs>>): Prisma.Prisma__EstimateClient<runtime.Types.Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EstimateCreateManyArgs>(args?: Prisma.SelectSubset<T, EstimateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EstimateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EstimateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EstimateDeleteArgs>(args: Prisma.SelectSubset<T, EstimateDeleteArgs<ExtArgs>>): Prisma.Prisma__EstimateClient<runtime.Types.Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EstimateUpdateArgs>(args: Prisma.SelectSubset<T, EstimateUpdateArgs<ExtArgs>>): Prisma.Prisma__EstimateClient<runtime.Types.Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EstimateDeleteManyArgs>(args?: Prisma.SelectSubset<T, EstimateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EstimateUpdateManyArgs>(args: Prisma.SelectSubset<T, EstimateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EstimateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EstimateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EstimateUpsertArgs>(args: Prisma.SelectSubset<T, EstimateUpsertArgs<ExtArgs>>): Prisma.Prisma__EstimateClient<runtime.Types.Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EstimateCountArgs>(args?: Prisma.Subset<T, EstimateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EstimateCountAggregateOutputType> : number>;
    aggregate<T extends EstimateAggregateArgs>(args: Prisma.Subset<T, EstimateAggregateArgs>): Prisma.PrismaPromise<GetEstimateAggregateType<T>>;
    groupBy<T extends EstimateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EstimateGroupByArgs['orderBy'];
    } : {
        orderBy?: EstimateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EstimateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstimateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EstimateFieldRefs;
}
export interface Prisma__EstimateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.Estimate$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Estimate$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstimateItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EstimateFieldRefs {
    readonly id: Prisma.FieldRef<"Estimate", 'String'>;
    readonly projectId: Prisma.FieldRef<"Estimate", 'String'>;
    readonly totalCost: Prisma.FieldRef<"Estimate", 'Float'>;
    readonly laborCost: Prisma.FieldRef<"Estimate", 'Float'>;
    readonly materialsCost: Prisma.FieldRef<"Estimate", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Estimate", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Estimate", 'DateTime'>;
}
export type EstimateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateSelect<ExtArgs> | null;
    omit?: Prisma.EstimateOmit<ExtArgs> | null;
    include?: Prisma.EstimateInclude<ExtArgs> | null;
    where: Prisma.EstimateWhereUniqueInput;
};
export type EstimateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateSelect<ExtArgs> | null;
    omit?: Prisma.EstimateOmit<ExtArgs> | null;
    include?: Prisma.EstimateInclude<ExtArgs> | null;
    where: Prisma.EstimateWhereUniqueInput;
};
export type EstimateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateSelect<ExtArgs> | null;
    omit?: Prisma.EstimateOmit<ExtArgs> | null;
    include?: Prisma.EstimateInclude<ExtArgs> | null;
    where?: Prisma.EstimateWhereInput;
    orderBy?: Prisma.EstimateOrderByWithRelationInput | Prisma.EstimateOrderByWithRelationInput[];
    cursor?: Prisma.EstimateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstimateScalarFieldEnum | Prisma.EstimateScalarFieldEnum[];
};
export type EstimateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateSelect<ExtArgs> | null;
    omit?: Prisma.EstimateOmit<ExtArgs> | null;
    include?: Prisma.EstimateInclude<ExtArgs> | null;
    where?: Prisma.EstimateWhereInput;
    orderBy?: Prisma.EstimateOrderByWithRelationInput | Prisma.EstimateOrderByWithRelationInput[];
    cursor?: Prisma.EstimateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstimateScalarFieldEnum | Prisma.EstimateScalarFieldEnum[];
};
export type EstimateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateSelect<ExtArgs> | null;
    omit?: Prisma.EstimateOmit<ExtArgs> | null;
    include?: Prisma.EstimateInclude<ExtArgs> | null;
    where?: Prisma.EstimateWhereInput;
    orderBy?: Prisma.EstimateOrderByWithRelationInput | Prisma.EstimateOrderByWithRelationInput[];
    cursor?: Prisma.EstimateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstimateScalarFieldEnum | Prisma.EstimateScalarFieldEnum[];
};
export type EstimateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateSelect<ExtArgs> | null;
    omit?: Prisma.EstimateOmit<ExtArgs> | null;
    include?: Prisma.EstimateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstimateCreateInput, Prisma.EstimateUncheckedCreateInput>;
};
export type EstimateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EstimateCreateManyInput | Prisma.EstimateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EstimateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EstimateOmit<ExtArgs> | null;
    data: Prisma.EstimateCreateManyInput | Prisma.EstimateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EstimateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EstimateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateSelect<ExtArgs> | null;
    omit?: Prisma.EstimateOmit<ExtArgs> | null;
    include?: Prisma.EstimateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstimateUpdateInput, Prisma.EstimateUncheckedUpdateInput>;
    where: Prisma.EstimateWhereUniqueInput;
};
export type EstimateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EstimateUpdateManyMutationInput, Prisma.EstimateUncheckedUpdateManyInput>;
    where?: Prisma.EstimateWhereInput;
    limit?: number;
};
export type EstimateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EstimateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstimateUpdateManyMutationInput, Prisma.EstimateUncheckedUpdateManyInput>;
    where?: Prisma.EstimateWhereInput;
    limit?: number;
    include?: Prisma.EstimateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EstimateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateSelect<ExtArgs> | null;
    omit?: Prisma.EstimateOmit<ExtArgs> | null;
    include?: Prisma.EstimateInclude<ExtArgs> | null;
    where: Prisma.EstimateWhereUniqueInput;
    create: Prisma.XOR<Prisma.EstimateCreateInput, Prisma.EstimateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EstimateUpdateInput, Prisma.EstimateUncheckedUpdateInput>;
};
export type EstimateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateSelect<ExtArgs> | null;
    omit?: Prisma.EstimateOmit<ExtArgs> | null;
    include?: Prisma.EstimateInclude<ExtArgs> | null;
    where: Prisma.EstimateWhereUniqueInput;
};
export type EstimateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstimateWhereInput;
    limit?: number;
};
export type Estimate$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EstimateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateSelect<ExtArgs> | null;
    omit?: Prisma.EstimateOmit<ExtArgs> | null;
    include?: Prisma.EstimateInclude<ExtArgs> | null;
};
export {};

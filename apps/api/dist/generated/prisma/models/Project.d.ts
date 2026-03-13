import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProjectModel = runtime.Types.Result.DefaultSelection<Prisma.$ProjectPayload>;
export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
};
export type ProjectMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    status: $Enums.ProjectStatus | null;
};
export type ProjectMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    status: $Enums.ProjectStatus | null;
};
export type ProjectCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    status: number;
    _all: number;
};
export type ProjectMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    status?: true;
};
export type ProjectMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    status?: true;
};
export type ProjectCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    status?: true;
    _all?: true;
};
export type ProjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    cursor?: Prisma.ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProjectCountAggregateInputType;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
};
export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProject[P]> : Prisma.GetScalarType<T[P], AggregateProject[P]>;
};
export type ProjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithAggregationInput | Prisma.ProjectOrderByWithAggregationInput[];
    by: Prisma.ProjectScalarFieldEnum[] | Prisma.ProjectScalarFieldEnum;
    having?: Prisma.ProjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectCountAggregateInputType | true;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
};
export type ProjectGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    status: $Enums.ProjectStatus;
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
};
type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProjectGroupByOutputType[P]>;
}>>;
export type ProjectWhereInput = {
    AND?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    OR?: Prisma.ProjectWhereInput[];
    NOT?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    id?: Prisma.StringFilter<"Project"> | string;
    name?: Prisma.StringFilter<"Project"> | string;
    description?: Prisma.StringNullableFilter<"Project"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    status?: Prisma.EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus;
    images?: Prisma.ProjectImageListRelationFilter;
    documents?: Prisma.ProjectDocumentListRelationFilter;
    estimate?: Prisma.XOR<Prisma.EstimateNullableScalarRelationFilter, Prisma.EstimateWhereInput> | null;
};
export type ProjectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    images?: Prisma.ProjectImageOrderByRelationAggregateInput;
    documents?: Prisma.ProjectDocumentOrderByRelationAggregateInput;
    estimate?: Prisma.EstimateOrderByWithRelationInput;
};
export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    OR?: Prisma.ProjectWhereInput[];
    NOT?: Prisma.ProjectWhereInput | Prisma.ProjectWhereInput[];
    name?: Prisma.StringFilter<"Project"> | string;
    description?: Prisma.StringNullableFilter<"Project"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Project"> | Date | string;
    status?: Prisma.EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus;
    images?: Prisma.ProjectImageListRelationFilter;
    documents?: Prisma.ProjectDocumentListRelationFilter;
    estimate?: Prisma.XOR<Prisma.EstimateNullableScalarRelationFilter, Prisma.EstimateWhereInput> | null;
}, "id">;
export type ProjectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.ProjectCountOrderByAggregateInput;
    _max?: Prisma.ProjectMaxOrderByAggregateInput;
    _min?: Prisma.ProjectMinOrderByAggregateInput;
};
export type ProjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProjectScalarWhereWithAggregatesInput | Prisma.ProjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProjectScalarWhereWithAggregatesInput | Prisma.ProjectScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Project"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Project"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Project"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Project"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Project"> | Date | string;
    status?: Prisma.EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus;
};
export type ProjectCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.ProjectStatus;
    images?: Prisma.ProjectImageCreateNestedManyWithoutProjectInput;
    documents?: Prisma.ProjectDocumentCreateNestedManyWithoutProjectInput;
    estimate?: Prisma.EstimateCreateNestedOneWithoutProjectInput;
};
export type ProjectUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.ProjectStatus;
    images?: Prisma.ProjectImageUncheckedCreateNestedManyWithoutProjectInput;
    documents?: Prisma.ProjectDocumentUncheckedCreateNestedManyWithoutProjectInput;
    estimate?: Prisma.EstimateUncheckedCreateNestedOneWithoutProjectInput;
};
export type ProjectUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    images?: Prisma.ProjectImageUpdateManyWithoutProjectNestedInput;
    documents?: Prisma.ProjectDocumentUpdateManyWithoutProjectNestedInput;
    estimate?: Prisma.EstimateUpdateOneWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    images?: Prisma.ProjectImageUncheckedUpdateManyWithoutProjectNestedInput;
    documents?: Prisma.ProjectDocumentUncheckedUpdateManyWithoutProjectNestedInput;
    estimate?: Prisma.EstimateUncheckedUpdateOneWithoutProjectNestedInput;
};
export type ProjectCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.ProjectStatus;
};
export type ProjectUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
};
export type ProjectUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
};
export type ProjectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type ProjectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type ProjectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type ProjectScalarRelationFilter = {
    is?: Prisma.ProjectWhereInput;
    isNot?: Prisma.ProjectWhereInput;
};
export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus;
};
export type ProjectCreateNestedOneWithoutImagesInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutImagesInput, Prisma.ProjectUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutImagesInput;
    connect?: Prisma.ProjectWhereUniqueInput;
};
export type ProjectUpdateOneRequiredWithoutImagesNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutImagesInput, Prisma.ProjectUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutImagesInput;
    upsert?: Prisma.ProjectUpsertWithoutImagesInput;
    connect?: Prisma.ProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProjectUpdateToOneWithWhereWithoutImagesInput, Prisma.ProjectUpdateWithoutImagesInput>, Prisma.ProjectUncheckedUpdateWithoutImagesInput>;
};
export type ProjectCreateNestedOneWithoutDocumentsInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutDocumentsInput, Prisma.ProjectUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutDocumentsInput;
    connect?: Prisma.ProjectWhereUniqueInput;
};
export type ProjectUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutDocumentsInput, Prisma.ProjectUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutDocumentsInput;
    upsert?: Prisma.ProjectUpsertWithoutDocumentsInput;
    connect?: Prisma.ProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProjectUpdateToOneWithWhereWithoutDocumentsInput, Prisma.ProjectUpdateWithoutDocumentsInput>, Prisma.ProjectUncheckedUpdateWithoutDocumentsInput>;
};
export type ProjectCreateNestedOneWithoutEstimateInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutEstimateInput, Prisma.ProjectUncheckedCreateWithoutEstimateInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutEstimateInput;
    connect?: Prisma.ProjectWhereUniqueInput;
};
export type ProjectUpdateOneRequiredWithoutEstimateNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectCreateWithoutEstimateInput, Prisma.ProjectUncheckedCreateWithoutEstimateInput>;
    connectOrCreate?: Prisma.ProjectCreateOrConnectWithoutEstimateInput;
    upsert?: Prisma.ProjectUpsertWithoutEstimateInput;
    connect?: Prisma.ProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProjectUpdateToOneWithWhereWithoutEstimateInput, Prisma.ProjectUpdateWithoutEstimateInput>, Prisma.ProjectUncheckedUpdateWithoutEstimateInput>;
};
export type ProjectCreateWithoutImagesInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.ProjectStatus;
    documents?: Prisma.ProjectDocumentCreateNestedManyWithoutProjectInput;
    estimate?: Prisma.EstimateCreateNestedOneWithoutProjectInput;
};
export type ProjectUncheckedCreateWithoutImagesInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.ProjectStatus;
    documents?: Prisma.ProjectDocumentUncheckedCreateNestedManyWithoutProjectInput;
    estimate?: Prisma.EstimateUncheckedCreateNestedOneWithoutProjectInput;
};
export type ProjectCreateOrConnectWithoutImagesInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutImagesInput, Prisma.ProjectUncheckedCreateWithoutImagesInput>;
};
export type ProjectUpsertWithoutImagesInput = {
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutImagesInput, Prisma.ProjectUncheckedUpdateWithoutImagesInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutImagesInput, Prisma.ProjectUncheckedCreateWithoutImagesInput>;
    where?: Prisma.ProjectWhereInput;
};
export type ProjectUpdateToOneWithWhereWithoutImagesInput = {
    where?: Prisma.ProjectWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutImagesInput, Prisma.ProjectUncheckedUpdateWithoutImagesInput>;
};
export type ProjectUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    documents?: Prisma.ProjectDocumentUpdateManyWithoutProjectNestedInput;
    estimate?: Prisma.EstimateUpdateOneWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    documents?: Prisma.ProjectDocumentUncheckedUpdateManyWithoutProjectNestedInput;
    estimate?: Prisma.EstimateUncheckedUpdateOneWithoutProjectNestedInput;
};
export type ProjectCreateWithoutDocumentsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.ProjectStatus;
    images?: Prisma.ProjectImageCreateNestedManyWithoutProjectInput;
    estimate?: Prisma.EstimateCreateNestedOneWithoutProjectInput;
};
export type ProjectUncheckedCreateWithoutDocumentsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.ProjectStatus;
    images?: Prisma.ProjectImageUncheckedCreateNestedManyWithoutProjectInput;
    estimate?: Prisma.EstimateUncheckedCreateNestedOneWithoutProjectInput;
};
export type ProjectCreateOrConnectWithoutDocumentsInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutDocumentsInput, Prisma.ProjectUncheckedCreateWithoutDocumentsInput>;
};
export type ProjectUpsertWithoutDocumentsInput = {
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutDocumentsInput, Prisma.ProjectUncheckedUpdateWithoutDocumentsInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutDocumentsInput, Prisma.ProjectUncheckedCreateWithoutDocumentsInput>;
    where?: Prisma.ProjectWhereInput;
};
export type ProjectUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: Prisma.ProjectWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutDocumentsInput, Prisma.ProjectUncheckedUpdateWithoutDocumentsInput>;
};
export type ProjectUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    images?: Prisma.ProjectImageUpdateManyWithoutProjectNestedInput;
    estimate?: Prisma.EstimateUpdateOneWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    images?: Prisma.ProjectImageUncheckedUpdateManyWithoutProjectNestedInput;
    estimate?: Prisma.EstimateUncheckedUpdateOneWithoutProjectNestedInput;
};
export type ProjectCreateWithoutEstimateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.ProjectStatus;
    images?: Prisma.ProjectImageCreateNestedManyWithoutProjectInput;
    documents?: Prisma.ProjectDocumentCreateNestedManyWithoutProjectInput;
};
export type ProjectUncheckedCreateWithoutEstimateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    status?: $Enums.ProjectStatus;
    images?: Prisma.ProjectImageUncheckedCreateNestedManyWithoutProjectInput;
    documents?: Prisma.ProjectDocumentUncheckedCreateNestedManyWithoutProjectInput;
};
export type ProjectCreateOrConnectWithoutEstimateInput = {
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutEstimateInput, Prisma.ProjectUncheckedCreateWithoutEstimateInput>;
};
export type ProjectUpsertWithoutEstimateInput = {
    update: Prisma.XOR<Prisma.ProjectUpdateWithoutEstimateInput, Prisma.ProjectUncheckedUpdateWithoutEstimateInput>;
    create: Prisma.XOR<Prisma.ProjectCreateWithoutEstimateInput, Prisma.ProjectUncheckedCreateWithoutEstimateInput>;
    where?: Prisma.ProjectWhereInput;
};
export type ProjectUpdateToOneWithWhereWithoutEstimateInput = {
    where?: Prisma.ProjectWhereInput;
    data: Prisma.XOR<Prisma.ProjectUpdateWithoutEstimateInput, Prisma.ProjectUncheckedUpdateWithoutEstimateInput>;
};
export type ProjectUpdateWithoutEstimateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    images?: Prisma.ProjectImageUpdateManyWithoutProjectNestedInput;
    documents?: Prisma.ProjectDocumentUpdateManyWithoutProjectNestedInput;
};
export type ProjectUncheckedUpdateWithoutEstimateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    images?: Prisma.ProjectImageUncheckedUpdateManyWithoutProjectNestedInput;
    documents?: Prisma.ProjectDocumentUncheckedUpdateManyWithoutProjectNestedInput;
};
export type ProjectCountOutputType = {
    images: number;
    documents: number;
};
export type ProjectCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    images?: boolean | ProjectCountOutputTypeCountImagesArgs;
    documents?: boolean | ProjectCountOutputTypeCountDocumentsArgs;
};
export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectCountOutputTypeSelect<ExtArgs> | null;
};
export type ProjectCountOutputTypeCountImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectImageWhereInput;
};
export type ProjectCountOutputTypeCountDocumentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectDocumentWhereInput;
};
export type ProjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    status?: boolean;
    images?: boolean | Prisma.Project$imagesArgs<ExtArgs>;
    documents?: boolean | Prisma.Project$documentsArgs<ExtArgs>;
    estimate?: boolean | Prisma.Project$estimateArgs<ExtArgs>;
    _count?: boolean | Prisma.ProjectCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["project"]>;
export type ProjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    status?: boolean;
}, ExtArgs["result"]["project"]>;
export type ProjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    status?: boolean;
}, ExtArgs["result"]["project"]>;
export type ProjectSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    status?: boolean;
};
export type ProjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["project"]>;
export type ProjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    images?: boolean | Prisma.Project$imagesArgs<ExtArgs>;
    documents?: boolean | Prisma.Project$documentsArgs<ExtArgs>;
    estimate?: boolean | Prisma.Project$estimateArgs<ExtArgs>;
    _count?: boolean | Prisma.ProjectCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Project";
    objects: {
        images: Prisma.$ProjectImagePayload<ExtArgs>[];
        documents: Prisma.$ProjectDocumentPayload<ExtArgs>[];
        estimate: Prisma.$EstimatePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        status: $Enums.ProjectStatus;
    }, ExtArgs["result"]["project"]>;
    composites: {};
};
export type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProjectPayload, S>;
export type ProjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProjectCountAggregateInputType | true;
};
export interface ProjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Project'];
        meta: {
            name: 'Project';
        };
    };
    findUnique<T extends ProjectFindUniqueArgs>(args: Prisma.SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProjectFindFirstArgs>(args?: Prisma.SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProjectFindManyArgs>(args?: Prisma.SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProjectCreateArgs>(args: Prisma.SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProjectCreateManyArgs>(args?: Prisma.SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProjectDeleteArgs>(args: Prisma.SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProjectUpdateArgs>(args: Prisma.SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProjectUpdateManyArgs>(args: Prisma.SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProjectUpsertArgs>(args: Prisma.SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProjectCountArgs>(args?: Prisma.Subset<T, ProjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProjectCountAggregateOutputType> : number>;
    aggregate<T extends ProjectAggregateArgs>(args: Prisma.Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>;
    groupBy<T extends ProjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProjectGroupByArgs['orderBy'];
    } : {
        orderBy?: ProjectGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProjectFieldRefs;
}
export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    images<T extends Prisma.Project$imagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Project$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    documents<T extends Prisma.Project$documentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Project$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    estimate<T extends Prisma.Project$estimateArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Project$estimateArgs<ExtArgs>>): Prisma.Prisma__EstimateClient<runtime.Types.Result.GetResult<Prisma.$EstimatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProjectFieldRefs {
    readonly id: Prisma.FieldRef<"Project", 'String'>;
    readonly name: Prisma.FieldRef<"Project", 'String'>;
    readonly description: Prisma.FieldRef<"Project", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Project", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Project", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Project", 'ProjectStatus'>;
}
export type ProjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where: Prisma.ProjectWhereUniqueInput;
};
export type ProjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where: Prisma.ProjectWhereUniqueInput;
};
export type ProjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    cursor?: Prisma.ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectScalarFieldEnum | Prisma.ProjectScalarFieldEnum[];
};
export type ProjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    cursor?: Prisma.ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectScalarFieldEnum | Prisma.ProjectScalarFieldEnum[];
};
export type ProjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    cursor?: Prisma.ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectScalarFieldEnum | Prisma.ProjectScalarFieldEnum[];
};
export type ProjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectCreateInput, Prisma.ProjectUncheckedCreateInput>;
};
export type ProjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProjectCreateManyInput | Prisma.ProjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    data: Prisma.ProjectCreateManyInput | Prisma.ProjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectUpdateInput, Prisma.ProjectUncheckedUpdateInput>;
    where: Prisma.ProjectWhereUniqueInput;
};
export type ProjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProjectUpdateManyMutationInput, Prisma.ProjectUncheckedUpdateManyInput>;
    where?: Prisma.ProjectWhereInput;
    limit?: number;
};
export type ProjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectUpdateManyMutationInput, Prisma.ProjectUncheckedUpdateManyInput>;
    where?: Prisma.ProjectWhereInput;
    limit?: number;
};
export type ProjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where: Prisma.ProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectCreateInput, Prisma.ProjectUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProjectUpdateInput, Prisma.ProjectUncheckedUpdateInput>;
};
export type ProjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where: Prisma.ProjectWhereUniqueInput;
};
export type ProjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
    limit?: number;
};
export type Project$imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectImageSelect<ExtArgs> | null;
    omit?: Prisma.ProjectImageOmit<ExtArgs> | null;
    include?: Prisma.ProjectImageInclude<ExtArgs> | null;
    where?: Prisma.ProjectImageWhereInput;
    orderBy?: Prisma.ProjectImageOrderByWithRelationInput | Prisma.ProjectImageOrderByWithRelationInput[];
    cursor?: Prisma.ProjectImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectImageScalarFieldEnum | Prisma.ProjectImageScalarFieldEnum[];
};
export type Project$documentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ProjectDocumentOmit<ExtArgs> | null;
    include?: Prisma.ProjectDocumentInclude<ExtArgs> | null;
    where?: Prisma.ProjectDocumentWhereInput;
    orderBy?: Prisma.ProjectDocumentOrderByWithRelationInput | Prisma.ProjectDocumentOrderByWithRelationInput[];
    cursor?: Prisma.ProjectDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectDocumentScalarFieldEnum | Prisma.ProjectDocumentScalarFieldEnum[];
};
export type Project$estimateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstimateSelect<ExtArgs> | null;
    omit?: Prisma.EstimateOmit<ExtArgs> | null;
    include?: Prisma.EstimateInclude<ExtArgs> | null;
    where?: Prisma.EstimateWhereInput;
};
export type ProjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
};
export {};

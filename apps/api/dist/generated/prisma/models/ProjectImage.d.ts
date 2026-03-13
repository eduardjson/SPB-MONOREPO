import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProjectImageModel = runtime.Types.Result.DefaultSelection<Prisma.$ProjectImagePayload>;
export type AggregateProjectImage = {
    _count: ProjectImageCountAggregateOutputType | null;
    _avg: ProjectImageAvgAggregateOutputType | null;
    _sum: ProjectImageSumAggregateOutputType | null;
    _min: ProjectImageMinAggregateOutputType | null;
    _max: ProjectImageMaxAggregateOutputType | null;
};
export type ProjectImageAvgAggregateOutputType = {
    size: number | null;
    sortOrder: number | null;
};
export type ProjectImageSumAggregateOutputType = {
    size: number | null;
    sortOrder: number | null;
};
export type ProjectImageMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    data: runtime.Bytes | null;
    filename: string | null;
    mimeType: string | null;
    size: number | null;
    createdAt: Date | null;
    sortOrder: number | null;
};
export type ProjectImageMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    data: runtime.Bytes | null;
    filename: string | null;
    mimeType: string | null;
    size: number | null;
    createdAt: Date | null;
    sortOrder: number | null;
};
export type ProjectImageCountAggregateOutputType = {
    id: number;
    projectId: number;
    data: number;
    filename: number;
    mimeType: number;
    size: number;
    createdAt: number;
    sortOrder: number;
    _all: number;
};
export type ProjectImageAvgAggregateInputType = {
    size?: true;
    sortOrder?: true;
};
export type ProjectImageSumAggregateInputType = {
    size?: true;
    sortOrder?: true;
};
export type ProjectImageMinAggregateInputType = {
    id?: true;
    projectId?: true;
    data?: true;
    filename?: true;
    mimeType?: true;
    size?: true;
    createdAt?: true;
    sortOrder?: true;
};
export type ProjectImageMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    data?: true;
    filename?: true;
    mimeType?: true;
    size?: true;
    createdAt?: true;
    sortOrder?: true;
};
export type ProjectImageCountAggregateInputType = {
    id?: true;
    projectId?: true;
    data?: true;
    filename?: true;
    mimeType?: true;
    size?: true;
    createdAt?: true;
    sortOrder?: true;
    _all?: true;
};
export type ProjectImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectImageWhereInput;
    orderBy?: Prisma.ProjectImageOrderByWithRelationInput | Prisma.ProjectImageOrderByWithRelationInput[];
    cursor?: Prisma.ProjectImageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProjectImageCountAggregateInputType;
    _avg?: ProjectImageAvgAggregateInputType;
    _sum?: ProjectImageSumAggregateInputType;
    _min?: ProjectImageMinAggregateInputType;
    _max?: ProjectImageMaxAggregateInputType;
};
export type GetProjectImageAggregateType<T extends ProjectImageAggregateArgs> = {
    [P in keyof T & keyof AggregateProjectImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProjectImage[P]> : Prisma.GetScalarType<T[P], AggregateProjectImage[P]>;
};
export type ProjectImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectImageWhereInput;
    orderBy?: Prisma.ProjectImageOrderByWithAggregationInput | Prisma.ProjectImageOrderByWithAggregationInput[];
    by: Prisma.ProjectImageScalarFieldEnum[] | Prisma.ProjectImageScalarFieldEnum;
    having?: Prisma.ProjectImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectImageCountAggregateInputType | true;
    _avg?: ProjectImageAvgAggregateInputType;
    _sum?: ProjectImageSumAggregateInputType;
    _min?: ProjectImageMinAggregateInputType;
    _max?: ProjectImageMaxAggregateInputType;
};
export type ProjectImageGroupByOutputType = {
    id: string;
    projectId: string;
    data: runtime.Bytes;
    filename: string;
    mimeType: string;
    size: number;
    createdAt: Date;
    sortOrder: number;
    _count: ProjectImageCountAggregateOutputType | null;
    _avg: ProjectImageAvgAggregateOutputType | null;
    _sum: ProjectImageSumAggregateOutputType | null;
    _min: ProjectImageMinAggregateOutputType | null;
    _max: ProjectImageMaxAggregateOutputType | null;
};
type GetProjectImageGroupByPayload<T extends ProjectImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProjectImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProjectImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProjectImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProjectImageGroupByOutputType[P]>;
}>>;
export type ProjectImageWhereInput = {
    AND?: Prisma.ProjectImageWhereInput | Prisma.ProjectImageWhereInput[];
    OR?: Prisma.ProjectImageWhereInput[];
    NOT?: Prisma.ProjectImageWhereInput | Prisma.ProjectImageWhereInput[];
    id?: Prisma.StringFilter<"ProjectImage"> | string;
    projectId?: Prisma.StringFilter<"ProjectImage"> | string;
    data?: Prisma.BytesFilter<"ProjectImage"> | runtime.Bytes;
    filename?: Prisma.StringFilter<"ProjectImage"> | string;
    mimeType?: Prisma.StringFilter<"ProjectImage"> | string;
    size?: Prisma.IntFilter<"ProjectImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProjectImage"> | Date | string;
    sortOrder?: Prisma.IntFilter<"ProjectImage"> | number;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
};
export type ProjectImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
};
export type ProjectImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProjectImageWhereInput | Prisma.ProjectImageWhereInput[];
    OR?: Prisma.ProjectImageWhereInput[];
    NOT?: Prisma.ProjectImageWhereInput | Prisma.ProjectImageWhereInput[];
    projectId?: Prisma.StringFilter<"ProjectImage"> | string;
    data?: Prisma.BytesFilter<"ProjectImage"> | runtime.Bytes;
    filename?: Prisma.StringFilter<"ProjectImage"> | string;
    mimeType?: Prisma.StringFilter<"ProjectImage"> | string;
    size?: Prisma.IntFilter<"ProjectImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProjectImage"> | Date | string;
    sortOrder?: Prisma.IntFilter<"ProjectImage"> | number;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
}, "id">;
export type ProjectImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.ProjectImageCountOrderByAggregateInput;
    _avg?: Prisma.ProjectImageAvgOrderByAggregateInput;
    _max?: Prisma.ProjectImageMaxOrderByAggregateInput;
    _min?: Prisma.ProjectImageMinOrderByAggregateInput;
    _sum?: Prisma.ProjectImageSumOrderByAggregateInput;
};
export type ProjectImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProjectImageScalarWhereWithAggregatesInput | Prisma.ProjectImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProjectImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProjectImageScalarWhereWithAggregatesInput | Prisma.ProjectImageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProjectImage"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"ProjectImage"> | string;
    data?: Prisma.BytesWithAggregatesFilter<"ProjectImage"> | runtime.Bytes;
    filename?: Prisma.StringWithAggregatesFilter<"ProjectImage"> | string;
    mimeType?: Prisma.StringWithAggregatesFilter<"ProjectImage"> | string;
    size?: Prisma.IntWithAggregatesFilter<"ProjectImage"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProjectImage"> | Date | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"ProjectImage"> | number;
};
export type ProjectImageCreateInput = {
    id?: string;
    data: runtime.Bytes;
    filename: string;
    mimeType: string;
    size: number;
    createdAt?: Date | string;
    sortOrder?: number;
    project: Prisma.ProjectCreateNestedOneWithoutImagesInput;
};
export type ProjectImageUncheckedCreateInput = {
    id?: string;
    projectId: string;
    data: runtime.Bytes;
    filename: string;
    mimeType: string;
    size: number;
    createdAt?: Date | string;
    sortOrder?: number;
};
export type ProjectImageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    project?: Prisma.ProjectUpdateOneRequiredWithoutImagesNestedInput;
};
export type ProjectImageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProjectImageCreateManyInput = {
    id?: string;
    projectId: string;
    data: runtime.Bytes;
    filename: string;
    mimeType: string;
    size: number;
    createdAt?: Date | string;
    sortOrder?: number;
};
export type ProjectImageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProjectImageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProjectImageListRelationFilter = {
    every?: Prisma.ProjectImageWhereInput;
    some?: Prisma.ProjectImageWhereInput;
    none?: Prisma.ProjectImageWhereInput;
};
export type ProjectImageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProjectImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ProjectImageAvgOrderByAggregateInput = {
    size?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ProjectImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ProjectImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ProjectImageSumOrderByAggregateInput = {
    size?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ProjectImageCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ProjectImageCreateWithoutProjectInput, Prisma.ProjectImageUncheckedCreateWithoutProjectInput> | Prisma.ProjectImageCreateWithoutProjectInput[] | Prisma.ProjectImageUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectImageCreateOrConnectWithoutProjectInput | Prisma.ProjectImageCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ProjectImageCreateManyProjectInputEnvelope;
    connect?: Prisma.ProjectImageWhereUniqueInput | Prisma.ProjectImageWhereUniqueInput[];
};
export type ProjectImageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ProjectImageCreateWithoutProjectInput, Prisma.ProjectImageUncheckedCreateWithoutProjectInput> | Prisma.ProjectImageCreateWithoutProjectInput[] | Prisma.ProjectImageUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectImageCreateOrConnectWithoutProjectInput | Prisma.ProjectImageCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ProjectImageCreateManyProjectInputEnvelope;
    connect?: Prisma.ProjectImageWhereUniqueInput | Prisma.ProjectImageWhereUniqueInput[];
};
export type ProjectImageUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectImageCreateWithoutProjectInput, Prisma.ProjectImageUncheckedCreateWithoutProjectInput> | Prisma.ProjectImageCreateWithoutProjectInput[] | Prisma.ProjectImageUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectImageCreateOrConnectWithoutProjectInput | Prisma.ProjectImageCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ProjectImageUpsertWithWhereUniqueWithoutProjectInput | Prisma.ProjectImageUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ProjectImageCreateManyProjectInputEnvelope;
    set?: Prisma.ProjectImageWhereUniqueInput | Prisma.ProjectImageWhereUniqueInput[];
    disconnect?: Prisma.ProjectImageWhereUniqueInput | Prisma.ProjectImageWhereUniqueInput[];
    delete?: Prisma.ProjectImageWhereUniqueInput | Prisma.ProjectImageWhereUniqueInput[];
    connect?: Prisma.ProjectImageWhereUniqueInput | Prisma.ProjectImageWhereUniqueInput[];
    update?: Prisma.ProjectImageUpdateWithWhereUniqueWithoutProjectInput | Prisma.ProjectImageUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ProjectImageUpdateManyWithWhereWithoutProjectInput | Prisma.ProjectImageUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ProjectImageScalarWhereInput | Prisma.ProjectImageScalarWhereInput[];
};
export type ProjectImageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectImageCreateWithoutProjectInput, Prisma.ProjectImageUncheckedCreateWithoutProjectInput> | Prisma.ProjectImageCreateWithoutProjectInput[] | Prisma.ProjectImageUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectImageCreateOrConnectWithoutProjectInput | Prisma.ProjectImageCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ProjectImageUpsertWithWhereUniqueWithoutProjectInput | Prisma.ProjectImageUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ProjectImageCreateManyProjectInputEnvelope;
    set?: Prisma.ProjectImageWhereUniqueInput | Prisma.ProjectImageWhereUniqueInput[];
    disconnect?: Prisma.ProjectImageWhereUniqueInput | Prisma.ProjectImageWhereUniqueInput[];
    delete?: Prisma.ProjectImageWhereUniqueInput | Prisma.ProjectImageWhereUniqueInput[];
    connect?: Prisma.ProjectImageWhereUniqueInput | Prisma.ProjectImageWhereUniqueInput[];
    update?: Prisma.ProjectImageUpdateWithWhereUniqueWithoutProjectInput | Prisma.ProjectImageUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ProjectImageUpdateManyWithWhereWithoutProjectInput | Prisma.ProjectImageUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ProjectImageScalarWhereInput | Prisma.ProjectImageScalarWhereInput[];
};
export type BytesFieldUpdateOperationsInput = {
    set?: runtime.Bytes;
};
export type ProjectImageCreateWithoutProjectInput = {
    id?: string;
    data: runtime.Bytes;
    filename: string;
    mimeType: string;
    size: number;
    createdAt?: Date | string;
    sortOrder?: number;
};
export type ProjectImageUncheckedCreateWithoutProjectInput = {
    id?: string;
    data: runtime.Bytes;
    filename: string;
    mimeType: string;
    size: number;
    createdAt?: Date | string;
    sortOrder?: number;
};
export type ProjectImageCreateOrConnectWithoutProjectInput = {
    where: Prisma.ProjectImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectImageCreateWithoutProjectInput, Prisma.ProjectImageUncheckedCreateWithoutProjectInput>;
};
export type ProjectImageCreateManyProjectInputEnvelope = {
    data: Prisma.ProjectImageCreateManyProjectInput | Prisma.ProjectImageCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type ProjectImageUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ProjectImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProjectImageUpdateWithoutProjectInput, Prisma.ProjectImageUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.ProjectImageCreateWithoutProjectInput, Prisma.ProjectImageUncheckedCreateWithoutProjectInput>;
};
export type ProjectImageUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ProjectImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProjectImageUpdateWithoutProjectInput, Prisma.ProjectImageUncheckedUpdateWithoutProjectInput>;
};
export type ProjectImageUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.ProjectImageScalarWhereInput;
    data: Prisma.XOR<Prisma.ProjectImageUpdateManyMutationInput, Prisma.ProjectImageUncheckedUpdateManyWithoutProjectInput>;
};
export type ProjectImageScalarWhereInput = {
    AND?: Prisma.ProjectImageScalarWhereInput | Prisma.ProjectImageScalarWhereInput[];
    OR?: Prisma.ProjectImageScalarWhereInput[];
    NOT?: Prisma.ProjectImageScalarWhereInput | Prisma.ProjectImageScalarWhereInput[];
    id?: Prisma.StringFilter<"ProjectImage"> | string;
    projectId?: Prisma.StringFilter<"ProjectImage"> | string;
    data?: Prisma.BytesFilter<"ProjectImage"> | runtime.Bytes;
    filename?: Prisma.StringFilter<"ProjectImage"> | string;
    mimeType?: Prisma.StringFilter<"ProjectImage"> | string;
    size?: Prisma.IntFilter<"ProjectImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProjectImage"> | Date | string;
    sortOrder?: Prisma.IntFilter<"ProjectImage"> | number;
};
export type ProjectImageCreateManyProjectInput = {
    id?: string;
    data: runtime.Bytes;
    filename: string;
    mimeType: string;
    size: number;
    createdAt?: Date | string;
    sortOrder?: number;
};
export type ProjectImageUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProjectImageUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProjectImageUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProjectImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    data?: boolean;
    filename?: boolean;
    mimeType?: boolean;
    size?: boolean;
    createdAt?: boolean;
    sortOrder?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectImage"]>;
export type ProjectImageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    data?: boolean;
    filename?: boolean;
    mimeType?: boolean;
    size?: boolean;
    createdAt?: boolean;
    sortOrder?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectImage"]>;
export type ProjectImageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    data?: boolean;
    filename?: boolean;
    mimeType?: boolean;
    size?: boolean;
    createdAt?: boolean;
    sortOrder?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectImage"]>;
export type ProjectImageSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    data?: boolean;
    filename?: boolean;
    mimeType?: boolean;
    size?: boolean;
    createdAt?: boolean;
    sortOrder?: boolean;
};
export type ProjectImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "data" | "filename" | "mimeType" | "size" | "createdAt" | "sortOrder", ExtArgs["result"]["projectImage"]>;
export type ProjectImageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type ProjectImageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type ProjectImageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type $ProjectImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProjectImage";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        data: runtime.Bytes;
        filename: string;
        mimeType: string;
        size: number;
        createdAt: Date;
        sortOrder: number;
    }, ExtArgs["result"]["projectImage"]>;
    composites: {};
};
export type ProjectImageGetPayload<S extends boolean | null | undefined | ProjectImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProjectImagePayload, S>;
export type ProjectImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProjectImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProjectImageCountAggregateInputType | true;
};
export interface ProjectImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProjectImage'];
        meta: {
            name: 'ProjectImage';
        };
    };
    findUnique<T extends ProjectImageFindUniqueArgs>(args: Prisma.SelectSubset<T, ProjectImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProjectImageClient<runtime.Types.Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProjectImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProjectImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectImageClient<runtime.Types.Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProjectImageFindFirstArgs>(args?: Prisma.SelectSubset<T, ProjectImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProjectImageClient<runtime.Types.Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProjectImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProjectImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectImageClient<runtime.Types.Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProjectImageFindManyArgs>(args?: Prisma.SelectSubset<T, ProjectImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProjectImageCreateArgs>(args: Prisma.SelectSubset<T, ProjectImageCreateArgs<ExtArgs>>): Prisma.Prisma__ProjectImageClient<runtime.Types.Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProjectImageCreateManyArgs>(args?: Prisma.SelectSubset<T, ProjectImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProjectImageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProjectImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProjectImageDeleteArgs>(args: Prisma.SelectSubset<T, ProjectImageDeleteArgs<ExtArgs>>): Prisma.Prisma__ProjectImageClient<runtime.Types.Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProjectImageUpdateArgs>(args: Prisma.SelectSubset<T, ProjectImageUpdateArgs<ExtArgs>>): Prisma.Prisma__ProjectImageClient<runtime.Types.Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProjectImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProjectImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProjectImageUpdateManyArgs>(args: Prisma.SelectSubset<T, ProjectImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProjectImageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProjectImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProjectImageUpsertArgs>(args: Prisma.SelectSubset<T, ProjectImageUpsertArgs<ExtArgs>>): Prisma.Prisma__ProjectImageClient<runtime.Types.Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProjectImageCountArgs>(args?: Prisma.Subset<T, ProjectImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProjectImageCountAggregateOutputType> : number>;
    aggregate<T extends ProjectImageAggregateArgs>(args: Prisma.Subset<T, ProjectImageAggregateArgs>): Prisma.PrismaPromise<GetProjectImageAggregateType<T>>;
    groupBy<T extends ProjectImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProjectImageGroupByArgs['orderBy'];
    } : {
        orderBy?: ProjectImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProjectImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProjectImageFieldRefs;
}
export interface Prisma__ProjectImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProjectImageFieldRefs {
    readonly id: Prisma.FieldRef<"ProjectImage", 'String'>;
    readonly projectId: Prisma.FieldRef<"ProjectImage", 'String'>;
    readonly data: Prisma.FieldRef<"ProjectImage", 'Bytes'>;
    readonly filename: Prisma.FieldRef<"ProjectImage", 'String'>;
    readonly mimeType: Prisma.FieldRef<"ProjectImage", 'String'>;
    readonly size: Prisma.FieldRef<"ProjectImage", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ProjectImage", 'DateTime'>;
    readonly sortOrder: Prisma.FieldRef<"ProjectImage", 'Int'>;
}
export type ProjectImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectImageSelect<ExtArgs> | null;
    omit?: Prisma.ProjectImageOmit<ExtArgs> | null;
    include?: Prisma.ProjectImageInclude<ExtArgs> | null;
    where: Prisma.ProjectImageWhereUniqueInput;
};
export type ProjectImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectImageSelect<ExtArgs> | null;
    omit?: Prisma.ProjectImageOmit<ExtArgs> | null;
    include?: Prisma.ProjectImageInclude<ExtArgs> | null;
    where: Prisma.ProjectImageWhereUniqueInput;
};
export type ProjectImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProjectImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProjectImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProjectImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectImageSelect<ExtArgs> | null;
    omit?: Prisma.ProjectImageOmit<ExtArgs> | null;
    include?: Prisma.ProjectImageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectImageCreateInput, Prisma.ProjectImageUncheckedCreateInput>;
};
export type ProjectImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProjectImageCreateManyInput | Prisma.ProjectImageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProjectImageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectImageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectImageOmit<ExtArgs> | null;
    data: Prisma.ProjectImageCreateManyInput | Prisma.ProjectImageCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProjectImageIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProjectImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectImageSelect<ExtArgs> | null;
    omit?: Prisma.ProjectImageOmit<ExtArgs> | null;
    include?: Prisma.ProjectImageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectImageUpdateInput, Prisma.ProjectImageUncheckedUpdateInput>;
    where: Prisma.ProjectImageWhereUniqueInput;
};
export type ProjectImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProjectImageUpdateManyMutationInput, Prisma.ProjectImageUncheckedUpdateManyInput>;
    where?: Prisma.ProjectImageWhereInput;
    limit?: number;
};
export type ProjectImageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectImageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectImageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectImageUpdateManyMutationInput, Prisma.ProjectImageUncheckedUpdateManyInput>;
    where?: Prisma.ProjectImageWhereInput;
    limit?: number;
    include?: Prisma.ProjectImageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProjectImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectImageSelect<ExtArgs> | null;
    omit?: Prisma.ProjectImageOmit<ExtArgs> | null;
    include?: Prisma.ProjectImageInclude<ExtArgs> | null;
    where: Prisma.ProjectImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectImageCreateInput, Prisma.ProjectImageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProjectImageUpdateInput, Prisma.ProjectImageUncheckedUpdateInput>;
};
export type ProjectImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectImageSelect<ExtArgs> | null;
    omit?: Prisma.ProjectImageOmit<ExtArgs> | null;
    include?: Prisma.ProjectImageInclude<ExtArgs> | null;
    where: Prisma.ProjectImageWhereUniqueInput;
};
export type ProjectImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectImageWhereInput;
    limit?: number;
};
export type ProjectImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectImageSelect<ExtArgs> | null;
    omit?: Prisma.ProjectImageOmit<ExtArgs> | null;
    include?: Prisma.ProjectImageInclude<ExtArgs> | null;
};
export {};

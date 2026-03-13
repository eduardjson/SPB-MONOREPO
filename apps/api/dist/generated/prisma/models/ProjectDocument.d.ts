import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProjectDocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$ProjectDocumentPayload>;
export type AggregateProjectDocument = {
    _count: ProjectDocumentCountAggregateOutputType | null;
    _avg: ProjectDocumentAvgAggregateOutputType | null;
    _sum: ProjectDocumentSumAggregateOutputType | null;
    _min: ProjectDocumentMinAggregateOutputType | null;
    _max: ProjectDocumentMaxAggregateOutputType | null;
};
export type ProjectDocumentAvgAggregateOutputType = {
    size: number | null;
};
export type ProjectDocumentSumAggregateOutputType = {
    size: number | null;
};
export type ProjectDocumentMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    data: runtime.Bytes | null;
    filename: string | null;
    mimeType: string | null;
    size: number | null;
    createdAt: Date | null;
    docType: $Enums.DocumentType | null;
};
export type ProjectDocumentMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    data: runtime.Bytes | null;
    filename: string | null;
    mimeType: string | null;
    size: number | null;
    createdAt: Date | null;
    docType: $Enums.DocumentType | null;
};
export type ProjectDocumentCountAggregateOutputType = {
    id: number;
    projectId: number;
    data: number;
    filename: number;
    mimeType: number;
    size: number;
    createdAt: number;
    docType: number;
    _all: number;
};
export type ProjectDocumentAvgAggregateInputType = {
    size?: true;
};
export type ProjectDocumentSumAggregateInputType = {
    size?: true;
};
export type ProjectDocumentMinAggregateInputType = {
    id?: true;
    projectId?: true;
    data?: true;
    filename?: true;
    mimeType?: true;
    size?: true;
    createdAt?: true;
    docType?: true;
};
export type ProjectDocumentMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    data?: true;
    filename?: true;
    mimeType?: true;
    size?: true;
    createdAt?: true;
    docType?: true;
};
export type ProjectDocumentCountAggregateInputType = {
    id?: true;
    projectId?: true;
    data?: true;
    filename?: true;
    mimeType?: true;
    size?: true;
    createdAt?: true;
    docType?: true;
    _all?: true;
};
export type ProjectDocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectDocumentWhereInput;
    orderBy?: Prisma.ProjectDocumentOrderByWithRelationInput | Prisma.ProjectDocumentOrderByWithRelationInput[];
    cursor?: Prisma.ProjectDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProjectDocumentCountAggregateInputType;
    _avg?: ProjectDocumentAvgAggregateInputType;
    _sum?: ProjectDocumentSumAggregateInputType;
    _min?: ProjectDocumentMinAggregateInputType;
    _max?: ProjectDocumentMaxAggregateInputType;
};
export type GetProjectDocumentAggregateType<T extends ProjectDocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateProjectDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProjectDocument[P]> : Prisma.GetScalarType<T[P], AggregateProjectDocument[P]>;
};
export type ProjectDocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectDocumentWhereInput;
    orderBy?: Prisma.ProjectDocumentOrderByWithAggregationInput | Prisma.ProjectDocumentOrderByWithAggregationInput[];
    by: Prisma.ProjectDocumentScalarFieldEnum[] | Prisma.ProjectDocumentScalarFieldEnum;
    having?: Prisma.ProjectDocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectDocumentCountAggregateInputType | true;
    _avg?: ProjectDocumentAvgAggregateInputType;
    _sum?: ProjectDocumentSumAggregateInputType;
    _min?: ProjectDocumentMinAggregateInputType;
    _max?: ProjectDocumentMaxAggregateInputType;
};
export type ProjectDocumentGroupByOutputType = {
    id: string;
    projectId: string;
    data: runtime.Bytes;
    filename: string;
    mimeType: string;
    size: number;
    createdAt: Date;
    docType: $Enums.DocumentType;
    _count: ProjectDocumentCountAggregateOutputType | null;
    _avg: ProjectDocumentAvgAggregateOutputType | null;
    _sum: ProjectDocumentSumAggregateOutputType | null;
    _min: ProjectDocumentMinAggregateOutputType | null;
    _max: ProjectDocumentMaxAggregateOutputType | null;
};
type GetProjectDocumentGroupByPayload<T extends ProjectDocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProjectDocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProjectDocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProjectDocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProjectDocumentGroupByOutputType[P]>;
}>>;
export type ProjectDocumentWhereInput = {
    AND?: Prisma.ProjectDocumentWhereInput | Prisma.ProjectDocumentWhereInput[];
    OR?: Prisma.ProjectDocumentWhereInput[];
    NOT?: Prisma.ProjectDocumentWhereInput | Prisma.ProjectDocumentWhereInput[];
    id?: Prisma.StringFilter<"ProjectDocument"> | string;
    projectId?: Prisma.StringFilter<"ProjectDocument"> | string;
    data?: Prisma.BytesFilter<"ProjectDocument"> | runtime.Bytes;
    filename?: Prisma.StringFilter<"ProjectDocument"> | string;
    mimeType?: Prisma.StringFilter<"ProjectDocument"> | string;
    size?: Prisma.IntFilter<"ProjectDocument"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProjectDocument"> | Date | string;
    docType?: Prisma.EnumDocumentTypeFilter<"ProjectDocument"> | $Enums.DocumentType;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
};
export type ProjectDocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    docType?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
};
export type ProjectDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProjectDocumentWhereInput | Prisma.ProjectDocumentWhereInput[];
    OR?: Prisma.ProjectDocumentWhereInput[];
    NOT?: Prisma.ProjectDocumentWhereInput | Prisma.ProjectDocumentWhereInput[];
    projectId?: Prisma.StringFilter<"ProjectDocument"> | string;
    data?: Prisma.BytesFilter<"ProjectDocument"> | runtime.Bytes;
    filename?: Prisma.StringFilter<"ProjectDocument"> | string;
    mimeType?: Prisma.StringFilter<"ProjectDocument"> | string;
    size?: Prisma.IntFilter<"ProjectDocument"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProjectDocument"> | Date | string;
    docType?: Prisma.EnumDocumentTypeFilter<"ProjectDocument"> | $Enums.DocumentType;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
}, "id">;
export type ProjectDocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    docType?: Prisma.SortOrder;
    _count?: Prisma.ProjectDocumentCountOrderByAggregateInput;
    _avg?: Prisma.ProjectDocumentAvgOrderByAggregateInput;
    _max?: Prisma.ProjectDocumentMaxOrderByAggregateInput;
    _min?: Prisma.ProjectDocumentMinOrderByAggregateInput;
    _sum?: Prisma.ProjectDocumentSumOrderByAggregateInput;
};
export type ProjectDocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProjectDocumentScalarWhereWithAggregatesInput | Prisma.ProjectDocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProjectDocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProjectDocumentScalarWhereWithAggregatesInput | Prisma.ProjectDocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProjectDocument"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"ProjectDocument"> | string;
    data?: Prisma.BytesWithAggregatesFilter<"ProjectDocument"> | runtime.Bytes;
    filename?: Prisma.StringWithAggregatesFilter<"ProjectDocument"> | string;
    mimeType?: Prisma.StringWithAggregatesFilter<"ProjectDocument"> | string;
    size?: Prisma.IntWithAggregatesFilter<"ProjectDocument"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProjectDocument"> | Date | string;
    docType?: Prisma.EnumDocumentTypeWithAggregatesFilter<"ProjectDocument"> | $Enums.DocumentType;
};
export type ProjectDocumentCreateInput = {
    id?: string;
    data: runtime.Bytes;
    filename: string;
    mimeType: string;
    size: number;
    createdAt?: Date | string;
    docType?: $Enums.DocumentType;
    project: Prisma.ProjectCreateNestedOneWithoutDocumentsInput;
};
export type ProjectDocumentUncheckedCreateInput = {
    id?: string;
    projectId: string;
    data: runtime.Bytes;
    filename: string;
    mimeType: string;
    size: number;
    createdAt?: Date | string;
    docType?: $Enums.DocumentType;
};
export type ProjectDocumentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    docType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    project?: Prisma.ProjectUpdateOneRequiredWithoutDocumentsNestedInput;
};
export type ProjectDocumentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    docType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
};
export type ProjectDocumentCreateManyInput = {
    id?: string;
    projectId: string;
    data: runtime.Bytes;
    filename: string;
    mimeType: string;
    size: number;
    createdAt?: Date | string;
    docType?: $Enums.DocumentType;
};
export type ProjectDocumentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    docType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
};
export type ProjectDocumentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    docType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
};
export type ProjectDocumentListRelationFilter = {
    every?: Prisma.ProjectDocumentWhereInput;
    some?: Prisma.ProjectDocumentWhereInput;
    none?: Prisma.ProjectDocumentWhereInput;
};
export type ProjectDocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProjectDocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    docType?: Prisma.SortOrder;
};
export type ProjectDocumentAvgOrderByAggregateInput = {
    size?: Prisma.SortOrder;
};
export type ProjectDocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    docType?: Prisma.SortOrder;
};
export type ProjectDocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    docType?: Prisma.SortOrder;
};
export type ProjectDocumentSumOrderByAggregateInput = {
    size?: Prisma.SortOrder;
};
export type ProjectDocumentCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ProjectDocumentCreateWithoutProjectInput, Prisma.ProjectDocumentUncheckedCreateWithoutProjectInput> | Prisma.ProjectDocumentCreateWithoutProjectInput[] | Prisma.ProjectDocumentUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectDocumentCreateOrConnectWithoutProjectInput | Prisma.ProjectDocumentCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ProjectDocumentCreateManyProjectInputEnvelope;
    connect?: Prisma.ProjectDocumentWhereUniqueInput | Prisma.ProjectDocumentWhereUniqueInput[];
};
export type ProjectDocumentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ProjectDocumentCreateWithoutProjectInput, Prisma.ProjectDocumentUncheckedCreateWithoutProjectInput> | Prisma.ProjectDocumentCreateWithoutProjectInput[] | Prisma.ProjectDocumentUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectDocumentCreateOrConnectWithoutProjectInput | Prisma.ProjectDocumentCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ProjectDocumentCreateManyProjectInputEnvelope;
    connect?: Prisma.ProjectDocumentWhereUniqueInput | Prisma.ProjectDocumentWhereUniqueInput[];
};
export type ProjectDocumentUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectDocumentCreateWithoutProjectInput, Prisma.ProjectDocumentUncheckedCreateWithoutProjectInput> | Prisma.ProjectDocumentCreateWithoutProjectInput[] | Prisma.ProjectDocumentUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectDocumentCreateOrConnectWithoutProjectInput | Prisma.ProjectDocumentCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput | Prisma.ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ProjectDocumentCreateManyProjectInputEnvelope;
    set?: Prisma.ProjectDocumentWhereUniqueInput | Prisma.ProjectDocumentWhereUniqueInput[];
    disconnect?: Prisma.ProjectDocumentWhereUniqueInput | Prisma.ProjectDocumentWhereUniqueInput[];
    delete?: Prisma.ProjectDocumentWhereUniqueInput | Prisma.ProjectDocumentWhereUniqueInput[];
    connect?: Prisma.ProjectDocumentWhereUniqueInput | Prisma.ProjectDocumentWhereUniqueInput[];
    update?: Prisma.ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput | Prisma.ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ProjectDocumentUpdateManyWithWhereWithoutProjectInput | Prisma.ProjectDocumentUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ProjectDocumentScalarWhereInput | Prisma.ProjectDocumentScalarWhereInput[];
};
export type ProjectDocumentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectDocumentCreateWithoutProjectInput, Prisma.ProjectDocumentUncheckedCreateWithoutProjectInput> | Prisma.ProjectDocumentCreateWithoutProjectInput[] | Prisma.ProjectDocumentUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectDocumentCreateOrConnectWithoutProjectInput | Prisma.ProjectDocumentCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput | Prisma.ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ProjectDocumentCreateManyProjectInputEnvelope;
    set?: Prisma.ProjectDocumentWhereUniqueInput | Prisma.ProjectDocumentWhereUniqueInput[];
    disconnect?: Prisma.ProjectDocumentWhereUniqueInput | Prisma.ProjectDocumentWhereUniqueInput[];
    delete?: Prisma.ProjectDocumentWhereUniqueInput | Prisma.ProjectDocumentWhereUniqueInput[];
    connect?: Prisma.ProjectDocumentWhereUniqueInput | Prisma.ProjectDocumentWhereUniqueInput[];
    update?: Prisma.ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput | Prisma.ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ProjectDocumentUpdateManyWithWhereWithoutProjectInput | Prisma.ProjectDocumentUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ProjectDocumentScalarWhereInput | Prisma.ProjectDocumentScalarWhereInput[];
};
export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType;
};
export type ProjectDocumentCreateWithoutProjectInput = {
    id?: string;
    data: runtime.Bytes;
    filename: string;
    mimeType: string;
    size: number;
    createdAt?: Date | string;
    docType?: $Enums.DocumentType;
};
export type ProjectDocumentUncheckedCreateWithoutProjectInput = {
    id?: string;
    data: runtime.Bytes;
    filename: string;
    mimeType: string;
    size: number;
    createdAt?: Date | string;
    docType?: $Enums.DocumentType;
};
export type ProjectDocumentCreateOrConnectWithoutProjectInput = {
    where: Prisma.ProjectDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectDocumentCreateWithoutProjectInput, Prisma.ProjectDocumentUncheckedCreateWithoutProjectInput>;
};
export type ProjectDocumentCreateManyProjectInputEnvelope = {
    data: Prisma.ProjectDocumentCreateManyProjectInput | Prisma.ProjectDocumentCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ProjectDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProjectDocumentUpdateWithoutProjectInput, Prisma.ProjectDocumentUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.ProjectDocumentCreateWithoutProjectInput, Prisma.ProjectDocumentUncheckedCreateWithoutProjectInput>;
};
export type ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ProjectDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProjectDocumentUpdateWithoutProjectInput, Prisma.ProjectDocumentUncheckedUpdateWithoutProjectInput>;
};
export type ProjectDocumentUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.ProjectDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.ProjectDocumentUpdateManyMutationInput, Prisma.ProjectDocumentUncheckedUpdateManyWithoutProjectInput>;
};
export type ProjectDocumentScalarWhereInput = {
    AND?: Prisma.ProjectDocumentScalarWhereInput | Prisma.ProjectDocumentScalarWhereInput[];
    OR?: Prisma.ProjectDocumentScalarWhereInput[];
    NOT?: Prisma.ProjectDocumentScalarWhereInput | Prisma.ProjectDocumentScalarWhereInput[];
    id?: Prisma.StringFilter<"ProjectDocument"> | string;
    projectId?: Prisma.StringFilter<"ProjectDocument"> | string;
    data?: Prisma.BytesFilter<"ProjectDocument"> | runtime.Bytes;
    filename?: Prisma.StringFilter<"ProjectDocument"> | string;
    mimeType?: Prisma.StringFilter<"ProjectDocument"> | string;
    size?: Prisma.IntFilter<"ProjectDocument"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProjectDocument"> | Date | string;
    docType?: Prisma.EnumDocumentTypeFilter<"ProjectDocument"> | $Enums.DocumentType;
};
export type ProjectDocumentCreateManyProjectInput = {
    id?: string;
    data: runtime.Bytes;
    filename: string;
    mimeType: string;
    size: number;
    createdAt?: Date | string;
    docType?: $Enums.DocumentType;
};
export type ProjectDocumentUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    docType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
};
export type ProjectDocumentUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    docType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
};
export type ProjectDocumentUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    docType?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
};
export type ProjectDocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    data?: boolean;
    filename?: boolean;
    mimeType?: boolean;
    size?: boolean;
    createdAt?: boolean;
    docType?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectDocument"]>;
export type ProjectDocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    data?: boolean;
    filename?: boolean;
    mimeType?: boolean;
    size?: boolean;
    createdAt?: boolean;
    docType?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectDocument"]>;
export type ProjectDocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    data?: boolean;
    filename?: boolean;
    mimeType?: boolean;
    size?: boolean;
    createdAt?: boolean;
    docType?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectDocument"]>;
export type ProjectDocumentSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    data?: boolean;
    filename?: boolean;
    mimeType?: boolean;
    size?: boolean;
    createdAt?: boolean;
    docType?: boolean;
};
export type ProjectDocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "data" | "filename" | "mimeType" | "size" | "createdAt" | "docType", ExtArgs["result"]["projectDocument"]>;
export type ProjectDocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type ProjectDocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type ProjectDocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type $ProjectDocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProjectDocument";
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
        docType: $Enums.DocumentType;
    }, ExtArgs["result"]["projectDocument"]>;
    composites: {};
};
export type ProjectDocumentGetPayload<S extends boolean | null | undefined | ProjectDocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProjectDocumentPayload, S>;
export type ProjectDocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProjectDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProjectDocumentCountAggregateInputType | true;
};
export interface ProjectDocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProjectDocument'];
        meta: {
            name: 'ProjectDocument';
        };
    };
    findUnique<T extends ProjectDocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, ProjectDocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProjectDocumentClient<runtime.Types.Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProjectDocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProjectDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectDocumentClient<runtime.Types.Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProjectDocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, ProjectDocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProjectDocumentClient<runtime.Types.Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProjectDocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProjectDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectDocumentClient<runtime.Types.Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProjectDocumentFindManyArgs>(args?: Prisma.SelectSubset<T, ProjectDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProjectDocumentCreateArgs>(args: Prisma.SelectSubset<T, ProjectDocumentCreateArgs<ExtArgs>>): Prisma.Prisma__ProjectDocumentClient<runtime.Types.Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProjectDocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, ProjectDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProjectDocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProjectDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProjectDocumentDeleteArgs>(args: Prisma.SelectSubset<T, ProjectDocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__ProjectDocumentClient<runtime.Types.Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProjectDocumentUpdateArgs>(args: Prisma.SelectSubset<T, ProjectDocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__ProjectDocumentClient<runtime.Types.Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProjectDocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProjectDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProjectDocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, ProjectDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProjectDocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProjectDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProjectDocumentUpsertArgs>(args: Prisma.SelectSubset<T, ProjectDocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__ProjectDocumentClient<runtime.Types.Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProjectDocumentCountArgs>(args?: Prisma.Subset<T, ProjectDocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProjectDocumentCountAggregateOutputType> : number>;
    aggregate<T extends ProjectDocumentAggregateArgs>(args: Prisma.Subset<T, ProjectDocumentAggregateArgs>): Prisma.PrismaPromise<GetProjectDocumentAggregateType<T>>;
    groupBy<T extends ProjectDocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProjectDocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: ProjectDocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProjectDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProjectDocumentFieldRefs;
}
export interface Prisma__ProjectDocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProjectDocumentFieldRefs {
    readonly id: Prisma.FieldRef<"ProjectDocument", 'String'>;
    readonly projectId: Prisma.FieldRef<"ProjectDocument", 'String'>;
    readonly data: Prisma.FieldRef<"ProjectDocument", 'Bytes'>;
    readonly filename: Prisma.FieldRef<"ProjectDocument", 'String'>;
    readonly mimeType: Prisma.FieldRef<"ProjectDocument", 'String'>;
    readonly size: Prisma.FieldRef<"ProjectDocument", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ProjectDocument", 'DateTime'>;
    readonly docType: Prisma.FieldRef<"ProjectDocument", 'DocumentType'>;
}
export type ProjectDocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ProjectDocumentOmit<ExtArgs> | null;
    include?: Prisma.ProjectDocumentInclude<ExtArgs> | null;
    where: Prisma.ProjectDocumentWhereUniqueInput;
};
export type ProjectDocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ProjectDocumentOmit<ExtArgs> | null;
    include?: Prisma.ProjectDocumentInclude<ExtArgs> | null;
    where: Prisma.ProjectDocumentWhereUniqueInput;
};
export type ProjectDocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProjectDocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProjectDocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProjectDocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ProjectDocumentOmit<ExtArgs> | null;
    include?: Prisma.ProjectDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectDocumentCreateInput, Prisma.ProjectDocumentUncheckedCreateInput>;
};
export type ProjectDocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProjectDocumentCreateManyInput | Prisma.ProjectDocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProjectDocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectDocumentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectDocumentOmit<ExtArgs> | null;
    data: Prisma.ProjectDocumentCreateManyInput | Prisma.ProjectDocumentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProjectDocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProjectDocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ProjectDocumentOmit<ExtArgs> | null;
    include?: Prisma.ProjectDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectDocumentUpdateInput, Prisma.ProjectDocumentUncheckedUpdateInput>;
    where: Prisma.ProjectDocumentWhereUniqueInput;
};
export type ProjectDocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProjectDocumentUpdateManyMutationInput, Prisma.ProjectDocumentUncheckedUpdateManyInput>;
    where?: Prisma.ProjectDocumentWhereInput;
    limit?: number;
};
export type ProjectDocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectDocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectDocumentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectDocumentUpdateManyMutationInput, Prisma.ProjectDocumentUncheckedUpdateManyInput>;
    where?: Prisma.ProjectDocumentWhereInput;
    limit?: number;
    include?: Prisma.ProjectDocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProjectDocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ProjectDocumentOmit<ExtArgs> | null;
    include?: Prisma.ProjectDocumentInclude<ExtArgs> | null;
    where: Prisma.ProjectDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectDocumentCreateInput, Prisma.ProjectDocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProjectDocumentUpdateInput, Prisma.ProjectDocumentUncheckedUpdateInput>;
};
export type ProjectDocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ProjectDocumentOmit<ExtArgs> | null;
    include?: Prisma.ProjectDocumentInclude<ExtArgs> | null;
    where: Prisma.ProjectDocumentWhereUniqueInput;
};
export type ProjectDocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectDocumentWhereInput;
    limit?: number;
};
export type ProjectDocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectDocumentSelect<ExtArgs> | null;
    omit?: Prisma.ProjectDocumentOmit<ExtArgs> | null;
    include?: Prisma.ProjectDocumentInclude<ExtArgs> | null;
};
export {};

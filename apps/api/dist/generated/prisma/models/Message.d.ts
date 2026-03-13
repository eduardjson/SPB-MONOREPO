import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MessageModel = runtime.Types.Result.DefaultSelection<Prisma.$MessagePayload>;
export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null;
    _avg: MessageAvgAggregateOutputType | null;
    _sum: MessageSumAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
};
export type MessageAvgAggregateOutputType = {
    id: number | null;
};
export type MessageSumAggregateOutputType = {
    id: number | null;
};
export type MessageMinAggregateOutputType = {
    id: number | null;
    userId: string | null;
    userName: string | null;
    text: string | null;
    createdAt: Date | null;
};
export type MessageMaxAggregateOutputType = {
    id: number | null;
    userId: string | null;
    userName: string | null;
    text: string | null;
    createdAt: Date | null;
};
export type MessageCountAggregateOutputType = {
    id: number;
    userId: number;
    userName: number;
    text: number;
    createdAt: number;
    _all: number;
};
export type MessageAvgAggregateInputType = {
    id?: true;
};
export type MessageSumAggregateInputType = {
    id?: true;
};
export type MessageMinAggregateInputType = {
    id?: true;
    userId?: true;
    userName?: true;
    text?: true;
    createdAt?: true;
};
export type MessageMaxAggregateInputType = {
    id?: true;
    userId?: true;
    userName?: true;
    text?: true;
    createdAt?: true;
};
export type MessageCountAggregateInputType = {
    id?: true;
    userId?: true;
    userName?: true;
    text?: true;
    createdAt?: true;
    _all?: true;
};
export type MessageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MessageCountAggregateInputType;
    _avg?: MessageAvgAggregateInputType;
    _sum?: MessageSumAggregateInputType;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
};
export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
    [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMessage[P]> : Prisma.GetScalarType<T[P], AggregateMessage[P]>;
};
export type MessageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithAggregationInput | Prisma.MessageOrderByWithAggregationInput[];
    by: Prisma.MessageScalarFieldEnum[] | Prisma.MessageScalarFieldEnum;
    having?: Prisma.MessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageCountAggregateInputType | true;
    _avg?: MessageAvgAggregateInputType;
    _sum?: MessageSumAggregateInputType;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
};
export type MessageGroupByOutputType = {
    id: number;
    userId: string;
    userName: string;
    text: string;
    createdAt: Date;
    _count: MessageCountAggregateOutputType | null;
    _avg: MessageAvgAggregateOutputType | null;
    _sum: MessageSumAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
};
type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MessageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MessageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MessageGroupByOutputType[P]>;
}>>;
export type MessageWhereInput = {
    AND?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    OR?: Prisma.MessageWhereInput[];
    NOT?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    id?: Prisma.IntFilter<"Message"> | number;
    userId?: Prisma.StringFilter<"Message"> | string;
    userName?: Prisma.StringFilter<"Message"> | string;
    text?: Prisma.StringFilter<"Message"> | string;
    createdAt?: Prisma.DateTimeFilter<"Message"> | Date | string;
    attachments?: Prisma.AttachmentListRelationFilter;
};
export type MessageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    attachments?: Prisma.AttachmentOrderByRelationAggregateInput;
};
export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    OR?: Prisma.MessageWhereInput[];
    NOT?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    userId?: Prisma.StringFilter<"Message"> | string;
    userName?: Prisma.StringFilter<"Message"> | string;
    text?: Prisma.StringFilter<"Message"> | string;
    createdAt?: Prisma.DateTimeFilter<"Message"> | Date | string;
    attachments?: Prisma.AttachmentListRelationFilter;
}, "id">;
export type MessageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MessageCountOrderByAggregateInput;
    _avg?: Prisma.MessageAvgOrderByAggregateInput;
    _max?: Prisma.MessageMaxOrderByAggregateInput;
    _min?: Prisma.MessageMinOrderByAggregateInput;
    _sum?: Prisma.MessageSumOrderByAggregateInput;
};
export type MessageScalarWhereWithAggregatesInput = {
    AND?: Prisma.MessageScalarWhereWithAggregatesInput | Prisma.MessageScalarWhereWithAggregatesInput[];
    OR?: Prisma.MessageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MessageScalarWhereWithAggregatesInput | Prisma.MessageScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Message"> | number;
    userId?: Prisma.StringWithAggregatesFilter<"Message"> | string;
    userName?: Prisma.StringWithAggregatesFilter<"Message"> | string;
    text?: Prisma.StringWithAggregatesFilter<"Message"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Message"> | Date | string;
};
export type MessageCreateInput = {
    userId: string;
    userName: string;
    text: string;
    createdAt?: Date | string;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutMessageInput;
};
export type MessageUncheckedCreateInput = {
    id?: number;
    userId: string;
    userName: string;
    text: string;
    createdAt?: Date | string;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutMessageInput;
};
export type MessageUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachments?: Prisma.AttachmentUpdateManyWithoutMessageNestedInput;
};
export type MessageUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutMessageNestedInput;
};
export type MessageCreateManyInput = {
    id?: number;
    userId: string;
    userName: string;
    text: string;
    createdAt?: Date | string;
};
export type MessageUpdateManyMutationInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MessageAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MessageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MessageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    userName?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MessageSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MessageScalarRelationFilter = {
    is?: Prisma.MessageWhereInput;
    isNot?: Prisma.MessageWhereInput;
};
export type MessageCreateNestedOneWithoutAttachmentsInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutAttachmentsInput, Prisma.MessageUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutAttachmentsInput;
    connect?: Prisma.MessageWhereUniqueInput;
};
export type MessageUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutAttachmentsInput, Prisma.MessageUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutAttachmentsInput;
    upsert?: Prisma.MessageUpsertWithoutAttachmentsInput;
    connect?: Prisma.MessageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MessageUpdateToOneWithWhereWithoutAttachmentsInput, Prisma.MessageUpdateWithoutAttachmentsInput>, Prisma.MessageUncheckedUpdateWithoutAttachmentsInput>;
};
export type MessageCreateWithoutAttachmentsInput = {
    userId: string;
    userName: string;
    text: string;
    createdAt?: Date | string;
};
export type MessageUncheckedCreateWithoutAttachmentsInput = {
    id?: number;
    userId: string;
    userName: string;
    text: string;
    createdAt?: Date | string;
};
export type MessageCreateOrConnectWithoutAttachmentsInput = {
    where: Prisma.MessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageCreateWithoutAttachmentsInput, Prisma.MessageUncheckedCreateWithoutAttachmentsInput>;
};
export type MessageUpsertWithoutAttachmentsInput = {
    update: Prisma.XOR<Prisma.MessageUpdateWithoutAttachmentsInput, Prisma.MessageUncheckedUpdateWithoutAttachmentsInput>;
    create: Prisma.XOR<Prisma.MessageCreateWithoutAttachmentsInput, Prisma.MessageUncheckedCreateWithoutAttachmentsInput>;
    where?: Prisma.MessageWhereInput;
};
export type MessageUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: Prisma.MessageWhereInput;
    data: Prisma.XOR<Prisma.MessageUpdateWithoutAttachmentsInput, Prisma.MessageUncheckedUpdateWithoutAttachmentsInput>;
};
export type MessageUpdateWithoutAttachmentsInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageUncheckedUpdateWithoutAttachmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    userName?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageCountOutputType = {
    attachments: number;
};
export type MessageCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attachments?: boolean | MessageCountOutputTypeCountAttachmentsArgs;
};
export type MessageCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageCountOutputTypeSelect<ExtArgs> | null;
};
export type MessageCountOutputTypeCountAttachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
};
export type MessageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    userName?: boolean;
    text?: boolean;
    createdAt?: boolean;
    attachments?: boolean | Prisma.Message$attachmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.MessageCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["message"]>;
export type MessageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    userName?: boolean;
    text?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["message"]>;
export type MessageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    userName?: boolean;
    text?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["message"]>;
export type MessageSelectScalar = {
    id?: boolean;
    userId?: boolean;
    userName?: boolean;
    text?: boolean;
    createdAt?: boolean;
};
export type MessageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "userName" | "text" | "createdAt", ExtArgs["result"]["message"]>;
export type MessageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attachments?: boolean | Prisma.Message$attachmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.MessageCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MessageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MessageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MessagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Message";
    objects: {
        attachments: Prisma.$AttachmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: string;
        userName: string;
        text: string;
        createdAt: Date;
    }, ExtArgs["result"]["message"]>;
    composites: {};
};
export type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessagePayload, S>;
export type MessageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessageCountAggregateInputType | true;
};
export interface MessageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Message'];
        meta: {
            name: 'Message';
        };
    };
    findUnique<T extends MessageFindUniqueArgs>(args: Prisma.SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MessageFindFirstArgs>(args?: Prisma.SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MessageFindManyArgs>(args?: Prisma.SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MessageCreateArgs>(args: Prisma.SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MessageCreateManyArgs>(args?: Prisma.SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MessageDeleteArgs>(args: Prisma.SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MessageUpdateArgs>(args: Prisma.SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MessageDeleteManyArgs>(args?: Prisma.SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MessageUpdateManyArgs>(args: Prisma.SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MessageUpsertArgs>(args: Prisma.SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MessageCountArgs>(args?: Prisma.Subset<T, MessageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MessageCountAggregateOutputType> : number>;
    aggregate<T extends MessageAggregateArgs>(args: Prisma.Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>;
    groupBy<T extends MessageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MessageGroupByArgs['orderBy'];
    } : {
        orderBy?: MessageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MessageFieldRefs;
}
export interface Prisma__MessageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    attachments<T extends Prisma.Message$attachmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Message$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MessageFieldRefs {
    readonly id: Prisma.FieldRef<"Message", 'Int'>;
    readonly userId: Prisma.FieldRef<"Message", 'String'>;
    readonly userName: Prisma.FieldRef<"Message", 'String'>;
    readonly text: Prisma.FieldRef<"Message", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Message", 'DateTime'>;
}
export type MessageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type MessageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type MessageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type MessageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageCreateInput, Prisma.MessageUncheckedCreateInput>;
};
export type MessageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MessageCreateManyInput | Prisma.MessageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MessageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    data: Prisma.MessageCreateManyInput | Prisma.MessageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MessageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageUpdateInput, Prisma.MessageUncheckedUpdateInput>;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyInput>;
    where?: Prisma.MessageWhereInput;
    limit?: number;
};
export type MessageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyInput>;
    where?: Prisma.MessageWhereInput;
    limit?: number;
};
export type MessageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageCreateInput, Prisma.MessageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MessageUpdateInput, Prisma.MessageUncheckedUpdateInput>;
};
export type MessageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
    limit?: number;
};
export type Message$attachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    cursor?: Prisma.AttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttachmentScalarFieldEnum | Prisma.AttachmentScalarFieldEnum[];
};
export type MessageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
};
export {};

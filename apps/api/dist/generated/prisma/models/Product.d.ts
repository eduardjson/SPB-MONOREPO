import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    category: string | null;
    manufacturer: string | null;
    imageUrl: string | null;
    unit: string | null;
};
export type ProductMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    category: string | null;
    manufacturer: string | null;
    imageUrl: string | null;
    unit: string | null;
};
export type ProductCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    category: number;
    manufacturer: number;
    imageUrl: number;
    unit: number;
    _all: number;
};
export type ProductMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    category?: true;
    manufacturer?: true;
    imageUrl?: true;
    unit?: true;
};
export type ProductMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    category?: true;
    manufacturer?: true;
    imageUrl?: true;
    unit?: true;
};
export type ProductCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    category?: true;
    manufacturer?: true;
    imageUrl?: true;
    unit?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductCountAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    category: string;
    manufacturer: string;
    imageUrl: string;
    unit: string;
    _count: ProductCountAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    title?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringFilter<"Product"> | string;
    category?: Prisma.StringFilter<"Product"> | string;
    manufacturer?: Prisma.StringFilter<"Product"> | string;
    imageUrl?: Prisma.StringFilter<"Product"> | string;
    unit?: Prisma.StringFilter<"Product"> | string;
    images?: Prisma.ProductImageListRelationFilter;
    shipmentItems?: Prisma.ShipmentItemListRelationFilter;
    stockItems?: Prisma.StockItemListRelationFilter;
};
export type ProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    images?: Prisma.ProductImageOrderByRelationAggregateInput;
    shipmentItems?: Prisma.ShipmentItemOrderByRelationAggregateInput;
    stockItems?: Prisma.StockItemOrderByRelationAggregateInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    title?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringFilter<"Product"> | string;
    category?: Prisma.StringFilter<"Product"> | string;
    manufacturer?: Prisma.StringFilter<"Product"> | string;
    imageUrl?: Prisma.StringFilter<"Product"> | string;
    unit?: Prisma.StringFilter<"Product"> | string;
    images?: Prisma.ProductImageListRelationFilter;
    shipmentItems?: Prisma.ShipmentItemListRelationFilter;
    stockItems?: Prisma.StockItemListRelationFilter;
}, "id">;
export type ProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    category?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    manufacturer?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    imageUrl?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    unit?: Prisma.StringWithAggregatesFilter<"Product"> | string;
};
export type ProductCreateInput = {
    id?: string;
    title: string;
    description?: string;
    category: string;
    manufacturer: string;
    imageUrl: string;
    unit?: string;
    images?: Prisma.ProductImageCreateNestedManyWithoutProductInput;
    shipmentItems?: Prisma.ShipmentItemCreateNestedManyWithoutProductInput;
    stockItems?: Prisma.StockItemCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string;
    category: string;
    manufacturer: string;
    imageUrl: string;
    unit?: string;
    images?: Prisma.ProductImageUncheckedCreateNestedManyWithoutProductInput;
    shipmentItems?: Prisma.ShipmentItemUncheckedCreateNestedManyWithoutProductInput;
    stockItems?: Prisma.StockItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.ProductImageUpdateManyWithoutProductNestedInput;
    shipmentItems?: Prisma.ShipmentItemUpdateManyWithoutProductNestedInput;
    stockItems?: Prisma.StockItemUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.ProductImageUncheckedUpdateManyWithoutProductNestedInput;
    shipmentItems?: Prisma.ShipmentItemUncheckedUpdateManyWithoutProductNestedInput;
    stockItems?: Prisma.StockItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyInput = {
    id?: string;
    title: string;
    description?: string;
    category: string;
    manufacturer: string;
    imageUrl: string;
    unit?: string;
};
export type ProductUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProductUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
};
export type ProductScalarRelationFilter = {
    is?: Prisma.ProductWhereInput;
    isNot?: Prisma.ProductWhereInput;
};
export type ProductCreateNestedOneWithoutImagesInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutImagesInput, Prisma.ProductUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutImagesInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutImagesInput, Prisma.ProductUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutImagesInput;
    upsert?: Prisma.ProductUpsertWithoutImagesInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutImagesInput, Prisma.ProductUpdateWithoutImagesInput>, Prisma.ProductUncheckedUpdateWithoutImagesInput>;
};
export type ProductCreateNestedOneWithoutStockItemsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutStockItemsInput, Prisma.ProductUncheckedCreateWithoutStockItemsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutStockItemsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutStockItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutStockItemsInput, Prisma.ProductUncheckedCreateWithoutStockItemsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutStockItemsInput;
    upsert?: Prisma.ProductUpsertWithoutStockItemsInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutStockItemsInput, Prisma.ProductUpdateWithoutStockItemsInput>, Prisma.ProductUncheckedUpdateWithoutStockItemsInput>;
};
export type ProductCreateNestedOneWithoutShipmentItemsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutShipmentItemsInput, Prisma.ProductUncheckedCreateWithoutShipmentItemsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutShipmentItemsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutShipmentItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutShipmentItemsInput, Prisma.ProductUncheckedCreateWithoutShipmentItemsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutShipmentItemsInput;
    upsert?: Prisma.ProductUpsertWithoutShipmentItemsInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutShipmentItemsInput, Prisma.ProductUpdateWithoutShipmentItemsInput>, Prisma.ProductUncheckedUpdateWithoutShipmentItemsInput>;
};
export type ProductCreateWithoutImagesInput = {
    id?: string;
    title: string;
    description?: string;
    category: string;
    manufacturer: string;
    imageUrl: string;
    unit?: string;
    shipmentItems?: Prisma.ShipmentItemCreateNestedManyWithoutProductInput;
    stockItems?: Prisma.StockItemCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutImagesInput = {
    id?: string;
    title: string;
    description?: string;
    category: string;
    manufacturer: string;
    imageUrl: string;
    unit?: string;
    shipmentItems?: Prisma.ShipmentItemUncheckedCreateNestedManyWithoutProductInput;
    stockItems?: Prisma.StockItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutImagesInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutImagesInput, Prisma.ProductUncheckedCreateWithoutImagesInput>;
};
export type ProductUpsertWithoutImagesInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutImagesInput, Prisma.ProductUncheckedUpdateWithoutImagesInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutImagesInput, Prisma.ProductUncheckedCreateWithoutImagesInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutImagesInput, Prisma.ProductUncheckedUpdateWithoutImagesInput>;
};
export type ProductUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentItems?: Prisma.ShipmentItemUpdateManyWithoutProductNestedInput;
    stockItems?: Prisma.StockItemUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentItems?: Prisma.ShipmentItemUncheckedUpdateManyWithoutProductNestedInput;
    stockItems?: Prisma.StockItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutStockItemsInput = {
    id?: string;
    title: string;
    description?: string;
    category: string;
    manufacturer: string;
    imageUrl: string;
    unit?: string;
    images?: Prisma.ProductImageCreateNestedManyWithoutProductInput;
    shipmentItems?: Prisma.ShipmentItemCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutStockItemsInput = {
    id?: string;
    title: string;
    description?: string;
    category: string;
    manufacturer: string;
    imageUrl: string;
    unit?: string;
    images?: Prisma.ProductImageUncheckedCreateNestedManyWithoutProductInput;
    shipmentItems?: Prisma.ShipmentItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutStockItemsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutStockItemsInput, Prisma.ProductUncheckedCreateWithoutStockItemsInput>;
};
export type ProductUpsertWithoutStockItemsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutStockItemsInput, Prisma.ProductUncheckedUpdateWithoutStockItemsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutStockItemsInput, Prisma.ProductUncheckedCreateWithoutStockItemsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutStockItemsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutStockItemsInput, Prisma.ProductUncheckedUpdateWithoutStockItemsInput>;
};
export type ProductUpdateWithoutStockItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.ProductImageUpdateManyWithoutProductNestedInput;
    shipmentItems?: Prisma.ShipmentItemUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutStockItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.ProductImageUncheckedUpdateManyWithoutProductNestedInput;
    shipmentItems?: Prisma.ShipmentItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutShipmentItemsInput = {
    id?: string;
    title: string;
    description?: string;
    category: string;
    manufacturer: string;
    imageUrl: string;
    unit?: string;
    images?: Prisma.ProductImageCreateNestedManyWithoutProductInput;
    stockItems?: Prisma.StockItemCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutShipmentItemsInput = {
    id?: string;
    title: string;
    description?: string;
    category: string;
    manufacturer: string;
    imageUrl: string;
    unit?: string;
    images?: Prisma.ProductImageUncheckedCreateNestedManyWithoutProductInput;
    stockItems?: Prisma.StockItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutShipmentItemsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutShipmentItemsInput, Prisma.ProductUncheckedCreateWithoutShipmentItemsInput>;
};
export type ProductUpsertWithoutShipmentItemsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutShipmentItemsInput, Prisma.ProductUncheckedUpdateWithoutShipmentItemsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutShipmentItemsInput, Prisma.ProductUncheckedCreateWithoutShipmentItemsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutShipmentItemsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutShipmentItemsInput, Prisma.ProductUncheckedUpdateWithoutShipmentItemsInput>;
};
export type ProductUpdateWithoutShipmentItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.ProductImageUpdateManyWithoutProductNestedInput;
    stockItems?: Prisma.StockItemUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutShipmentItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    images?: Prisma.ProductImageUncheckedUpdateManyWithoutProductNestedInput;
    stockItems?: Prisma.StockItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCountOutputType = {
    images: number;
    shipmentItems: number;
    stockItems: number;
};
export type ProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    images?: boolean | ProductCountOutputTypeCountImagesArgs;
    shipmentItems?: boolean | ProductCountOutputTypeCountShipmentItemsArgs;
    stockItems?: boolean | ProductCountOutputTypeCountStockItemsArgs;
};
export type ProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductImageWhereInput;
};
export type ProductCountOutputTypeCountShipmentItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentItemWhereInput;
};
export type ProductCountOutputTypeCountStockItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StockItemWhereInput;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    manufacturer?: boolean;
    imageUrl?: boolean;
    unit?: boolean;
    images?: boolean | Prisma.Product$imagesArgs<ExtArgs>;
    shipmentItems?: boolean | Prisma.Product$shipmentItemsArgs<ExtArgs>;
    stockItems?: boolean | Prisma.Product$stockItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    manufacturer?: boolean;
    imageUrl?: boolean;
    unit?: boolean;
}, ExtArgs["result"]["product"]>;
export type ProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    manufacturer?: boolean;
    imageUrl?: boolean;
    unit?: boolean;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    manufacturer?: boolean;
    imageUrl?: boolean;
    unit?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "category" | "manufacturer" | "imageUrl" | "unit", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    images?: boolean | Prisma.Product$imagesArgs<ExtArgs>;
    shipmentItems?: boolean | Prisma.Product$shipmentItemsArgs<ExtArgs>;
    stockItems?: boolean | Prisma.Product$stockItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        images: Prisma.$ProductImagePayload<ExtArgs>[];
        shipmentItems: Prisma.$ShipmentItemPayload<ExtArgs>[];
        stockItems: Prisma.$StockItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        category: string;
        manufacturer: string;
        imageUrl: string;
        unit: string;
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductFieldRefs;
}
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    images<T extends Prisma.Product$imagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    shipmentItems<T extends Prisma.Product$shipmentItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$shipmentItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stockItems<T extends Prisma.Product$stockItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$stockItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductFieldRefs {
    readonly id: Prisma.FieldRef<"Product", 'String'>;
    readonly title: Prisma.FieldRef<"Product", 'String'>;
    readonly description: Prisma.FieldRef<"Product", 'String'>;
    readonly category: Prisma.FieldRef<"Product", 'String'>;
    readonly manufacturer: Prisma.FieldRef<"Product", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"Product", 'String'>;
    readonly unit: Prisma.FieldRef<"Product", 'String'>;
}
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type Product$imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductImageSelect<ExtArgs> | null;
    omit?: Prisma.ProductImageOmit<ExtArgs> | null;
    include?: Prisma.ProductImageInclude<ExtArgs> | null;
    where?: Prisma.ProductImageWhereInput;
    orderBy?: Prisma.ProductImageOrderByWithRelationInput | Prisma.ProductImageOrderByWithRelationInput[];
    cursor?: Prisma.ProductImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductImageScalarFieldEnum | Prisma.ProductImageScalarFieldEnum[];
};
export type Product$shipmentItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Product$stockItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
};
export {};

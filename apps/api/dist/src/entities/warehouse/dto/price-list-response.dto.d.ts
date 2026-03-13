export declare class PriceListItemDto {
    productId: string;
    productName: string;
    manufacturer: string;
    category: string;
    unit: string;
    purchasePrice?: number;
    estimatePrice?: number;
    salePrice?: number;
    discount?: number;
    quantity: number;
    warehouseId: string;
    warehouseName: string;
    warehouseAddress?: string;
    lastUpdated: Date;
    firstArrivalDate: Date;
}
export declare class PriceListResponseDto {
    items: PriceListItemDto[];
    totalItems: number;
    generatedAt: Date;
}

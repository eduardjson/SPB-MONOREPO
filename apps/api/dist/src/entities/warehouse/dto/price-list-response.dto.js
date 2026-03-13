"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceListResponseDto = exports.PriceListItemDto = void 0;
class PriceListItemDto {
    productId;
    productName;
    manufacturer;
    category;
    unit;
    purchasePrice;
    estimatePrice;
    salePrice;
    discount;
    quantity;
    warehouseId;
    warehouseName;
    warehouseAddress;
    lastUpdated;
    firstArrivalDate;
}
exports.PriceListItemDto = PriceListItemDto;
class PriceListResponseDto {
    items;
    totalItems;
    generatedAt;
}
exports.PriceListResponseDto = PriceListResponseDto;
//# sourceMappingURL=price-list-response.dto.js.map
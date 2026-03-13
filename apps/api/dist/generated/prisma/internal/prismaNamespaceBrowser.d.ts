import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Token: "Token";
    readonly Product: "Product";
    readonly ProductImage: "ProductImage";
    readonly Message: "Message";
    readonly Attachment: "Attachment";
    readonly Warehouse: "Warehouse";
    readonly StockItem: "StockItem";
    readonly Object: "Object";
    readonly Shipment: "Shipment";
    readonly ShipmentItem: "ShipmentItem";
    readonly Project: "Project";
    readonly ProjectImage: "ProjectImage";
    readonly ProjectDocument: "ProjectDocument";
    readonly Estimate: "Estimate";
    readonly EstimateItem: "EstimateItem";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly password: "password";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly role: "role";
    readonly email: "email";
    readonly phone: "phone";
    readonly age: "age";
    readonly address: "address";
    readonly avatar: "avatar";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const TokenScalarFieldEnum: {
    readonly token: "token";
    readonly expires: "expires";
    readonly userId: "userId";
};
export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly category: "category";
    readonly manufacturer: "manufacturer";
    readonly imageUrl: "imageUrl";
    readonly unit: "unit";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ProductImageScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly url: "url";
};
export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly userName: "userName";
    readonly text: "text";
    readonly createdAt: "createdAt";
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const AttachmentScalarFieldEnum: {
    readonly id: "id";
    readonly messageId: "messageId";
    readonly fileName: "fileName";
    readonly fileSize: "fileSize";
    readonly fileType: "fileType";
    readonly filePath: "filePath";
    readonly uploadedAt: "uploadedAt";
};
export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum];
export declare const WarehouseScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address: "address";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum];
export declare const StockItemScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly warehouseId: "warehouseId";
    readonly quantity: "quantity";
    readonly purchasePrice: "purchasePrice";
    readonly estimatePrice: "estimatePrice";
    readonly salePrice: "salePrice";
    readonly discount: "discount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StockItemScalarFieldEnum = (typeof StockItemScalarFieldEnum)[keyof typeof StockItemScalarFieldEnum];
export declare const ObjectScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address: "address";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ObjectScalarFieldEnum = (typeof ObjectScalarFieldEnum)[keyof typeof ObjectScalarFieldEnum];
export declare const ShipmentScalarFieldEnum: {
    readonly id: "id";
    readonly warehouseId: "warehouseId";
    readonly objectId: "objectId";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum];
export declare const ShipmentItemScalarFieldEnum: {
    readonly id: "id";
    readonly shipmentId: "shipmentId";
    readonly productId: "productId";
    readonly quantity: "quantity";
    readonly createdAt: "createdAt";
};
export type ShipmentItemScalarFieldEnum = (typeof ShipmentItemScalarFieldEnum)[keyof typeof ShipmentItemScalarFieldEnum];
export declare const ProjectScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly status: "status";
};
export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];
export declare const ProjectImageScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly data: "data";
    readonly filename: "filename";
    readonly mimeType: "mimeType";
    readonly size: "size";
    readonly createdAt: "createdAt";
    readonly sortOrder: "sortOrder";
};
export type ProjectImageScalarFieldEnum = (typeof ProjectImageScalarFieldEnum)[keyof typeof ProjectImageScalarFieldEnum];
export declare const ProjectDocumentScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly data: "data";
    readonly filename: "filename";
    readonly mimeType: "mimeType";
    readonly size: "size";
    readonly createdAt: "createdAt";
    readonly docType: "docType";
};
export type ProjectDocumentScalarFieldEnum = (typeof ProjectDocumentScalarFieldEnum)[keyof typeof ProjectDocumentScalarFieldEnum];
export declare const EstimateScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly totalCost: "totalCost";
    readonly laborCost: "laborCost";
    readonly materialsCost: "materialsCost";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EstimateScalarFieldEnum = (typeof EstimateScalarFieldEnum)[keyof typeof EstimateScalarFieldEnum];
export declare const EstimateItemScalarFieldEnum: {
    readonly id: "id";
    readonly estimateId: "estimateId";
    readonly productId: "productId";
    readonly name: "name";
    readonly description: "description";
    readonly quantity: "quantity";
    readonly unit: "unit";
    readonly price: "price";
    readonly total: "total";
    readonly costType: "costType";
};
export type EstimateItemScalarFieldEnum = (typeof EstimateItemScalarFieldEnum)[keyof typeof EstimateItemScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

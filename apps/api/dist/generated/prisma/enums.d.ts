export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly USER: "USER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const ShipmentStatus: {
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type ShipmentStatus = (typeof ShipmentStatus)[keyof typeof ShipmentStatus];
export declare const ProjectStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly COMPLETED: "COMPLETED";
    readonly ARCHIVED: "ARCHIVED";
};
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
export declare const DocumentType: {
    readonly SPECIFICATION: "SPECIFICATION";
    readonly DRAWING: "DRAWING";
    readonly CONTRACT: "CONTRACT";
    readonly OTHER: "OTHER";
};
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];
export declare const CostType: {
    readonly MATERIAL: "MATERIAL";
    readonly LABOR: "LABOR";
};
export type CostType = (typeof CostType)[keyof typeof CostType];

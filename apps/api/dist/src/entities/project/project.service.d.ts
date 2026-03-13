import { PrismaService } from 'src/prisma';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateProjectDto, files?: {
        images?: Express.Multer.File[];
        documents?: Express.Multer.File[];
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        name: string;
        status: import("../../../generated/prisma/enums").ProjectStatus;
    }>;
    findAll(): Promise<({
        _count: {
            images: number;
            documents: number;
        };
        images: {
            id: string;
            filename: string;
            mimeType: string;
            size: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        name: string;
        status: import("../../../generated/prisma/enums").ProjectStatus;
    })[]>;
    findOne(id: string): Promise<{
        estimate: ({
            items: {
                id: string;
                description: string | null;
                unit: string;
                productId: string | null;
                name: string;
                quantity: number;
                estimateId: string;
                price: number;
                total: number;
                costType: import("../../../generated/prisma/enums").CostType;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            projectId: string;
            totalCost: number;
            laborCost: number | null;
            materialsCost: number | null;
        }) | null;
        images: {
            id: string;
            filename: string;
            mimeType: string;
            size: number;
            sortOrder: number;
        }[];
        documents: {
            id: string;
            createdAt: Date;
            filename: string;
            mimeType: string;
            size: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        name: string;
        status: import("../../../generated/prisma/enums").ProjectStatus;
    }>;
    update(id: string, dto: UpdateProjectDto, files?: {
        images?: Express.Multer.File[];
        documents?: Express.Multer.File[];
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        name: string;
        status: import("../../../generated/prisma/enums").ProjectStatus;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        name: string;
        status: import("../../../generated/prisma/enums").ProjectStatus;
    }>;
    getImage(id: string): Promise<{
        id: string;
        createdAt: Date;
        projectId: string;
        data: import("@prisma/client/runtime/client").Bytes;
        filename: string;
        mimeType: string;
        size: number;
        sortOrder: number;
    }>;
    getDocument(id: string): Promise<{
        id: string;
        createdAt: Date;
        projectId: string;
        data: import("@prisma/client/runtime/client").Bytes;
        filename: string;
        mimeType: string;
        size: number;
        docType: import("../../../generated/prisma/enums").DocumentType;
    }>;
    deleteImage(id: string): Promise<{
        id: string;
        createdAt: Date;
        projectId: string;
        data: import("@prisma/client/runtime/client").Bytes;
        filename: string;
        mimeType: string;
        size: number;
        sortOrder: number;
    }>;
    deleteDocument(id: string): Promise<{
        id: string;
        createdAt: Date;
        projectId: string;
        data: import("@prisma/client/runtime/client").Bytes;
        filename: string;
        mimeType: string;
        size: number;
        docType: import("../../../generated/prisma/enums").DocumentType;
    }>;
    private createEstimate;
}

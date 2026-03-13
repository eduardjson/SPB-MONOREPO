import { PrismaService } from 'src/prisma';
export declare class AttachmentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    saveFile(file: Express.Multer.File, messageId: number): Promise<{
        id: string;
        messageId: number;
        fileName: string;
        fileSize: number;
        fileType: string;
        filePath: string;
        uploadedAt: Date;
    }>;
    getFile(attachmentId: string): Promise<{
        id: string;
        messageId: number;
        fileName: string;
        fileSize: number;
        fileType: string;
        filePath: string;
        uploadedAt: Date;
    }>;
    deleteFile(attachmentId: string): Promise<{
        id: string;
        messageId: number;
        fileName: string;
        fileSize: number;
        fileType: string;
        filePath: string;
        uploadedAt: Date;
    }>;
    getMessageAttachments(messageId: number): Promise<{
        id: string;
        messageId: number;
        fileName: string;
        fileSize: number;
        fileType: string;
        filePath: string;
        uploadedAt: Date;
    }[]>;
}

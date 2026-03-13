import { Prisma } from 'generated/prisma/client';
import { MessageUpdatePayload, MessageWithAttachments } from 'src/types';
import { PrismaService } from 'src/prisma';
export declare class ChatService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getMessages(): Promise<MessageWithAttachments[]>;
    clearMessages(): Promise<Prisma.BatchPayload>;
    createMessage(data: Prisma.MessageCreateInput & {
        attachments?: any[];
    }): Promise<{
        attachments: {
            id: string;
            messageId: number;
            fileName: string;
            fileSize: number;
            fileType: string;
            filePath: string;
            uploadedAt: Date;
        }[];
    } & {
        id: number;
        createdAt: Date;
        userId: string;
        userName: string;
        text: string;
    }>;
    updateMessage(payload: MessageUpdatePayload): Promise<{
        attachments: {
            id: string;
            messageId: number;
            fileName: string;
            fileSize: number;
            fileType: string;
            filePath: string;
            uploadedAt: Date;
        }[];
    } & {
        id: number;
        createdAt: Date;
        userId: string;
        userName: string;
        text: string;
    }>;
    removeMessage(where: Prisma.MessageWhereUniqueInput): Promise<{
        attachments: {
            id: string;
            messageId: number;
            fileName: string;
            fileSize: number;
            fileType: string;
            filePath: string;
            uploadedAt: Date;
        }[];
    } & {
        id: number;
        createdAt: Date;
        userId: string;
        userName: string;
        text: string;
    }>;
}

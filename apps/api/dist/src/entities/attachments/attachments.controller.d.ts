import { StreamableFile } from '@nestjs/common';
import { AttachmentsService } from './attachments.service';
import type { Response } from 'express';
interface UploadedFileInfo {
    fileName: string;
    fileSize: number;
    fileType: string;
    filePath: string;
}
export declare class AttachmentsController {
    private readonly attachmentsService;
    constructor(attachmentsService: AttachmentsService);
    getFile(id: string, res: Response): Promise<StreamableFile>;
    uploadFiles(files: Express.Multer.File[]): Promise<UploadedFileInfo[]>;
}
export {};

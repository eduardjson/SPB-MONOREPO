"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../prisma");
const fs_1 = require("fs");
const path_1 = require("path");
const uuid_1 = require("uuid");
let AttachmentsService = class AttachmentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async saveFile(file, messageId) {
        const fileName = `${(0, uuid_1.v4)()}-${file.originalname}`;
        const uploadDir = (0, path_1.join)(process.cwd(), 'uploads');
        const filePath = (0, path_1.join)(uploadDir, fileName);
        const fs = require('fs');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        const writeStream = (0, fs_1.createWriteStream)(filePath);
        writeStream.write(file.buffer);
        writeStream.end();
        return this.prisma.attachment.create({
            data: {
                messageId,
                fileName: file.originalname,
                fileSize: file.size,
                fileType: file.mimetype,
                filePath: fileName,
            },
        });
    }
    async getFile(attachmentId) {
        const attachment = await this.prisma.attachment.findUnique({
            where: { id: attachmentId },
        });
        if (!attachment) {
            throw new common_1.NotFoundException('Файл не найден');
        }
        return attachment;
    }
    async deleteFile(attachmentId) {
        const attachment = await this.prisma.attachment.findUnique({
            where: { id: attachmentId },
        });
        if (!attachment) {
            throw new common_1.NotFoundException('Файл не найден');
        }
        try {
            const filePath = (0, path_1.join)(process.cwd(), 'uploads', attachment.filePath);
            (0, fs_1.unlinkSync)(filePath);
        }
        catch (error) {
            console.error('Ошибка при удалении файла:', error);
        }
        return this.prisma.attachment.delete({
            where: { id: attachmentId },
        });
    }
    async getMessageAttachments(messageId) {
        return this.prisma.attachment.findMany({
            where: { messageId },
        });
    }
};
exports.AttachmentsService = AttachmentsService;
exports.AttachmentsService = AttachmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], AttachmentsService);
//# sourceMappingURL=attachments.service.js.map
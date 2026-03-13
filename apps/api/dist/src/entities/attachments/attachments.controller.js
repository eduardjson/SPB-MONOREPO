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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentsController = void 0;
const common_1 = require("@nestjs/common");
const attachments_service_1 = require("./attachments.service");
const fs_1 = require("fs");
const path_1 = require("path");
const common_2 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const uuid_1 = require("uuid");
let AttachmentsController = class AttachmentsController {
    attachmentsService;
    constructor(attachmentsService) {
        this.attachmentsService = attachmentsService;
    }
    async getFile(id, res) {
        const attachment = await this.attachmentsService.getFile(id);
        const filePath = (0, path_1.join)(process.cwd(), 'uploads', attachment.filePath);
        const file = (0, fs_1.createReadStream)(filePath);
        res.set({
            'Content-Type': attachment.fileType,
            'Content-Disposition': `attachment; filename="${attachment.fileName}"`,
        });
        return new common_1.StreamableFile(file);
    }
    async uploadFiles(files) {
        const uploadedFiles = [];
        for (const file of files) {
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
            uploadedFiles.push({
                fileName: file.originalname,
                fileSize: file.size,
                fileType: file.mimetype,
                filePath: fileName,
            });
        }
        return uploadedFiles;
    }
};
exports.AttachmentsController = AttachmentsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AttachmentsController.prototype, "getFile", null);
__decorate([
    (0, common_2.Post)('upload'),
    (0, common_2.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    __param(0, (0, common_2.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AttachmentsController.prototype, "uploadFiles", null);
exports.AttachmentsController = AttachmentsController = __decorate([
    (0, common_1.Controller)('attachments'),
    __metadata("design:paramtypes", [attachments_service_1.AttachmentsService])
], AttachmentsController);
//# sourceMappingURL=attachments.controller.js.map
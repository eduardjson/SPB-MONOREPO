"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../prisma");
const util_1 = require("util");
const fs = __importStar(require("fs"));
const mkdir = (0, util_1.promisify)(fs.mkdir);
let ProductService = class ProductService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const createdProduct = await this.prisma.product.create({ data: dto });
        return createdProduct.id;
    }
    async readOne(id) {
        return await this.prisma.product.findUniqueOrThrow({ where: { id } });
    }
    async readMany() {
        return await this.prisma.product.findMany();
    }
    async update(id, dto) {
        const updatedProduct = await this.prisma.product.update({
            where: { id },
            data: dto,
        });
        return updatedProduct;
    }
    async delete(id) {
        await this.prisma.product.delete({ where: { id } });
    }
    async addImages(productId, files) {
        const savedImages = await Promise.all(files.map((f) => {
            const urlPath = `/uploads/products/${productId}/${f.filename}`;
            return this.prisma.productImage.create({
                data: {
                    productId,
                    url: urlPath,
                },
            });
        }));
        const result = savedImages.map((img) => ({
            id: img.id,
            url: img.url,
        }));
        return { images: result };
    }
    async getImages(productId) {
        const images = await this.prisma.productImage.findMany({
            where: { productId },
            select: { id: true, url: true },
        });
        return images;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map
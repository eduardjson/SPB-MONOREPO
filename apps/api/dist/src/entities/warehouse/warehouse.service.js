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
exports.WarehouseService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../prisma");
let WarehouseService = class WarehouseService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const warehouse = await this.prisma.warehouse.create({ data: dto });
        return warehouse.id;
    }
    async readOne(id) {
        const warehouse = await this.prisma.warehouse.findUnique({
            where: { id },
            include: {
                stockItems: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        if (!warehouse) {
            throw new common_1.NotFoundException('Склад не найден');
        }
        return warehouse;
    }
    async readMany() {
        return await this.prisma.warehouse.findMany({
            include: {
                stockItems: {
                    include: {
                        product: true,
                    },
                },
            },
        });
    }
    async update(id, dto) {
        await this.readOne(id);
        return await this.prisma.warehouse.update({
            where: { id },
            data: dto,
        });
    }
    async delete(id) {
        await this.readOne(id);
        await this.prisma.warehouse.delete({ where: { id } });
    }
    async addStock(warehouseId, dto) {
        const { productId, quantity, purchasePrice, estimatePrice, salePrice, discount, } = dto;
        const product = await this.prisma.product.findUnique({
            where: { id: productId },
        });
        if (!product) {
            throw new common_1.NotFoundException('Товар не найден');
        }
        await this.readOne(warehouseId);
        const existingStock = await this.prisma.stockItem.findUnique({
            where: {
                productId_warehouseId: {
                    productId,
                    warehouseId,
                },
            },
        });
        let stockItem;
        if (existingStock) {
            stockItem = await this.prisma.stockItem.update({
                where: {
                    productId_warehouseId: {
                        productId,
                        warehouseId,
                    },
                },
                data: {
                    quantity: {
                        increment: quantity,
                    },
                    ...(purchasePrice !== undefined && { purchasePrice }),
                    ...(estimatePrice !== undefined && { estimatePrice }),
                    ...(salePrice !== undefined && { salePrice }),
                    ...(discount !== undefined && { discount }),
                },
                include: {
                    product: true,
                    warehouse: true,
                },
            });
        }
        else {
            stockItem = await this.prisma.stockItem.create({
                data: {
                    productId,
                    warehouseId,
                    quantity,
                    purchasePrice,
                    estimatePrice,
                    salePrice,
                    discount,
                },
                include: {
                    product: true,
                    warehouse: true,
                },
            });
        }
        return stockItem;
    }
    async getStock(warehouseId, productId) {
        const where = { warehouseId };
        if (productId) {
            where.productId = productId;
        }
        return await this.prisma.stockItem.findMany({
            where,
            include: {
                product: true,
            },
        });
    }
    async getAllPriceLists() {
        const stockItems = await this.prisma.stockItem.findMany({
            where: {
                quantity: {
                    gt: 0,
                },
            },
            include: {
                product: true,
                warehouse: true,
            },
            orderBy: [
                { warehouse: { name: 'asc' } },
                { product: { category: 'asc' } },
                { product: { manufacturer: 'asc' } },
            ],
        });
        const items = await Promise.all(stockItems.map(async (item) => {
            const firstArrival = await this.prisma.stockItem.findFirst({
                where: {
                    productId: item.productId,
                    warehouseId: item.warehouseId,
                },
                orderBy: {
                    createdAt: 'asc',
                },
                select: {
                    createdAt: true,
                },
            });
            return {
                productId: item.productId,
                productName: item.product.title,
                manufacturer: item.product.manufacturer,
                category: item.product.category,
                unit: 'шт',
                purchasePrice: item.purchasePrice || undefined,
                estimatePrice: item.estimatePrice || undefined,
                salePrice: item.salePrice || undefined,
                discount: item.discount || 0,
                quantity: item.quantity,
                warehouseId: item.warehouseId,
                warehouseName: item.warehouse.name,
                warehouseAddress: item.warehouse.address || undefined,
                lastUpdated: item.updatedAt,
                firstArrivalDate: firstArrival?.createdAt || item.createdAt,
            };
        }));
        return {
            items,
            totalItems: items.length,
            generatedAt: new Date(),
        };
    }
    async getWarehousePriceList(warehouseId) {
        const warehouse = await this.prisma.warehouse.findUnique({
            where: { id: warehouseId },
        });
        if (!warehouse) {
            throw new common_1.NotFoundException('Склад не найден');
        }
        const stockItems = await this.prisma.stockItem.findMany({
            where: {
                warehouseId,
                quantity: {
                    gt: 0,
                },
            },
            include: {
                product: true,
            },
            orderBy: [
                { product: { category: 'asc' } },
                { product: { manufacturer: 'asc' } },
                { product: { title: 'asc' } },
            ],
        });
        const items = await Promise.all(stockItems.map(async (item) => {
            const firstArrival = await this.prisma.stockItem.findFirst({
                where: {
                    productId: item.productId,
                    warehouseId: item.warehouseId,
                },
                orderBy: {
                    createdAt: 'asc',
                },
                select: {
                    createdAt: true,
                },
            });
            return {
                productId: item.productId,
                productName: item.product.title,
                manufacturer: item.product.manufacturer,
                category: item.product.category,
                unit: 'шт',
                purchasePrice: item.purchasePrice || undefined,
                estimatePrice: item.estimatePrice || undefined,
                salePrice: item.salePrice || undefined,
                discount: item.discount || 0,
                quantity: item.quantity,
                warehouseId: item.warehouseId,
                warehouseName: warehouse.name,
                warehouseAddress: warehouse.address || undefined,
                lastUpdated: item.updatedAt,
                firstArrivalDate: firstArrival?.createdAt || item.createdAt,
            };
        }));
        return {
            items,
            totalItems: items.length,
            generatedAt: new Date(),
        };
    }
    async getFilteredPriceLists(warehouseId, category, manufacturer, minPrice, maxPrice) {
        const where = {
            quantity: { gt: 0 },
        };
        if (warehouseId) {
            where.warehouseId = warehouseId;
        }
        const stockItems = await this.prisma.stockItem.findMany({
            where,
            include: {
                product: true,
                warehouse: true,
            },
        });
        let filteredItems = stockItems;
        if (category) {
            filteredItems = filteredItems.filter((item) => item.product.category.toLowerCase().includes(category.toLowerCase()));
        }
        if (manufacturer) {
            filteredItems = filteredItems.filter((item) => item.product.manufacturer
                .toLowerCase()
                .includes(manufacturer.toLowerCase()));
        }
        if (minPrice !== undefined || maxPrice !== undefined) {
            filteredItems = filteredItems.filter((item) => {
                const price = item.salePrice || item.estimatePrice || item.purchasePrice || 0;
                if (minPrice !== undefined && maxPrice !== undefined) {
                    return price >= minPrice && price <= maxPrice;
                }
                else if (minPrice !== undefined) {
                    return price >= minPrice;
                }
                else if (maxPrice !== undefined) {
                    return price <= maxPrice;
                }
                return true;
            });
        }
        const items = await Promise.all(filteredItems.map(async (item) => {
            const firstArrival = await this.prisma.stockItem.findFirst({
                where: {
                    productId: item.productId,
                    warehouseId: item.warehouseId,
                },
                orderBy: {
                    createdAt: 'asc',
                },
                select: {
                    createdAt: true,
                },
            });
            return {
                productId: item.productId,
                productName: item.product.title,
                manufacturer: item.product.manufacturer,
                category: item.product.category,
                unit: item.product.unit || 'шт',
                purchasePrice: item.purchasePrice || undefined,
                estimatePrice: item.estimatePrice || undefined,
                salePrice: item.salePrice || undefined,
                discount: item.discount || 0,
                quantity: item.quantity,
                warehouseId: item.warehouseId,
                warehouseName: item.warehouse.name,
                warehouseAddress: item.warehouse.address || undefined,
                lastUpdated: item.updatedAt,
                firstArrivalDate: firstArrival?.createdAt || item.createdAt,
            };
        }));
        return {
            items,
            totalItems: items.length,
            generatedAt: new Date(),
        };
    }
};
exports.WarehouseService = WarehouseService;
exports.WarehouseService = WarehouseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], WarehouseService);
//# sourceMappingURL=warehouse.service.js.map
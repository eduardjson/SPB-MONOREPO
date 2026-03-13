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
exports.WarehouseController = void 0;
const common_1 = require("@nestjs/common");
const warehouse_service_1 = require("./warehouse.service");
const create_warehouse_dto_1 = require("./dto/create-warehouse.dto");
const add_stock_dto_1 = require("./dto/add-stock.dto");
let WarehouseController = class WarehouseController {
    service;
    constructor(service) {
        this.service = service;
    }
    async readMany() {
        return await this.service.readMany();
    }
    async readOne(id) {
        return await this.service.readOne(id);
    }
    async create(dto) {
        return await this.service.create(dto);
    }
    async update(id, dto) {
        return await this.service.update(id, dto);
    }
    async delete(id) {
        await this.service.delete(id);
    }
    async addStock(id, dto) {
        return await this.service.addStock(id, dto);
    }
    async getStock(id, productId) {
        return await this.service.getStock(id, productId);
    }
    async getAllPriceLists() {
        return await this.service.getAllPriceLists();
    }
    async getWarehousePriceList(id) {
        return await this.service.getWarehousePriceList(id);
    }
};
exports.WarehouseController = WarehouseController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "readMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "readOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_warehouse_dto_1.CreateWarehouseDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':id/stock'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_stock_dto_1.AddStockDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "addStock", null);
__decorate([
    (0, common_1.Get)(':id/stock'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "getStock", null);
__decorate([
    (0, common_1.Get)('price-lists/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "getAllPriceLists", null);
__decorate([
    (0, common_1.Get)(':id/price-list'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "getWarehousePriceList", null);
exports.WarehouseController = WarehouseController = __decorate([
    (0, common_1.Controller)('warehouses'),
    __metadata("design:paramtypes", [warehouse_service_1.WarehouseService])
], WarehouseController);
//# sourceMappingURL=warehouse.controller.js.map
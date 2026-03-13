import { PrismaService } from 'src/prisma';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { AddStockDto } from './dto/add-stock.dto';
import { PriceListResponseDto } from './dto/price-list-response.dto';
export declare class WarehouseService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateWarehouseDto): Promise<string>;
    readOne(id: string): Promise<object>;
    readMany(): Promise<object[]>;
    update(id: string, dto: Partial<CreateWarehouseDto>): Promise<object>;
    delete(id: string): Promise<void>;
    addStock(warehouseId: string, dto: AddStockDto): Promise<object>;
    getStock(warehouseId: string, productId?: string): Promise<object[]>;
    getAllPriceLists(): Promise<PriceListResponseDto>;
    getWarehousePriceList(warehouseId: string): Promise<PriceListResponseDto>;
    getFilteredPriceLists(warehouseId?: string, category?: string, manufacturer?: string, minPrice?: number, maxPrice?: number): Promise<PriceListResponseDto>;
}

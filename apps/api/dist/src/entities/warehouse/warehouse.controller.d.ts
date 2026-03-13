import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { AddStockDto } from './dto/add-stock.dto';
export declare class WarehouseController {
    private readonly service;
    constructor(service: WarehouseService);
    readMany(): Promise<object[]>;
    readOne(id: string): Promise<object>;
    create(dto: CreateWarehouseDto): Promise<string>;
    update(id: string, dto: Partial<CreateWarehouseDto>): Promise<object>;
    delete(id: string): Promise<void>;
    addStock(id: string, dto: AddStockDto): Promise<object>;
    getStock(id: string, productId?: string): Promise<object[]>;
    getAllPriceLists(): Promise<object>;
    getWarehousePriceList(id: string): Promise<object>;
}

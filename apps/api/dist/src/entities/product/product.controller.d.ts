import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly service;
    constructor(service: ProductService);
    readMany(): Promise<object[]>;
    readOne(id: string): Promise<object>;
    create(dto: CreateProductDto): Promise<string>;
    update(id: string, dto: UpdateProductDto): Promise<UpdateProductDto>;
    delete(id: string): Promise<void>;
    addImages(id: string, files: Express.Multer.File[]): Promise<{
        images: {
            id: string;
            url: string;
        }[];
    }>;
    getImages(id: string): Promise<{
        id: string;
        url: string;
    }[]>;
}

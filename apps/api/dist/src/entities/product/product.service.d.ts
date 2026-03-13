import { IProductService } from './dto/i-product-service.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma';
export declare class ProductService implements IProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateProductDto): Promise<string>;
    readOne(id: string): Promise<object>;
    readMany(): Promise<object[]>;
    update(id: string, dto: UpdateProductDto): Promise<UpdateProductDto>;
    delete(id: string): Promise<void>;
    addImages(productId: string, files: Express.Multer.File[]): Promise<{
        images: {
            id: string;
            url: string;
        }[];
    }>;
    getImages(productId: string): Promise<{
        id: string;
        url: string;
    }[]>;
}

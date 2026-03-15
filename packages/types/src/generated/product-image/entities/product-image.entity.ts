import { ProductEntity } from '../../product/entities/product.entity';

export class ProductImageEntity {
  id: string;
  productId: string;
  url: string;
  product?: ProductEntity;
}

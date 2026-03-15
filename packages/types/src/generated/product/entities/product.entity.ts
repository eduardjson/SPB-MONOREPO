import { ProductImageEntity } from '../../product-image/entities/product-image.entity';
import { ShipmentItemEntity } from '../../shipment-item/entities/shipment-item.entity';
import { StockItemEntity } from '../../stock-item/entities/stock-item.entity';

export class ProductEntity {
  id: string;
  title: string;
  description: string;
  category: string;
  manufacturer: string;
  imageUrl: string;
  unit: string;
  images?: ProductImageEntity[];
  shipmentItems?: ShipmentItemEntity[];
  stockItems?: StockItemEntity[];
}

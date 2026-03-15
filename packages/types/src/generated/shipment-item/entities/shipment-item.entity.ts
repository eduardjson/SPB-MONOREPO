import { ApiProperty } from '@nestjs/swagger';
import { ShipmentEntity } from '../../shipment/entities/shipment.entity';
import { ProductEntity } from '../../product/entities/product.entity';

export class ShipmentItemEntity {
  id: string;
  shipmentId: string;
  productId: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  quantity: number;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  createdAt: Date;
  shipment?: ShipmentEntity;
  product?: ProductEntity;
}

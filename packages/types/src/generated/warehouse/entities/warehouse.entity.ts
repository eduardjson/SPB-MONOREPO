import { ApiProperty } from '@nestjs/swagger';
import { StockItemEntity } from '../../stock-item/entities/stock-item.entity';
import { ShipmentEntity } from '../../shipment/entities/shipment.entity';

export class WarehouseEntity {
  id: string;
  name: string;
  address: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  createdAt: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  updatedAt: Date;
  stockItems?: StockItemEntity[];
  shipments?: ShipmentEntity[];
}

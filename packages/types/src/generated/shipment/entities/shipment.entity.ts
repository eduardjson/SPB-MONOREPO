import { ShipmentStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { WarehouseEntity } from '../../warehouse/entities/warehouse.entity';
import { ObjectEntity } from '../../object/entities/object.entity';
import { ShipmentItemEntity } from '../../shipment-item/entities/shipment-item.entity';

export class ShipmentEntity {
  id: string;
  warehouseId: string;
  objectId: string;
  @ApiProperty({
    enum: ShipmentStatus,
  })
  status: ShipmentStatus;
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
  warehouse?: WarehouseEntity;
  object?: ObjectEntity;
  items?: ShipmentItemEntity[];
}

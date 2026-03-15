import { ApiProperty } from '@nestjs/swagger';
import { ShipmentEntity } from '../../shipment/entities/shipment.entity';

export class ObjectEntity {
  id: string;
  name: string;
  address: string | null;
  description: string | null;
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
  shipments?: ShipmentEntity[];
}

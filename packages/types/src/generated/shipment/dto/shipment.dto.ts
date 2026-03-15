import { ShipmentStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ShipmentDto {
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
}

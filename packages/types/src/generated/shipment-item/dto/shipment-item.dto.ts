import { ApiProperty } from '@nestjs/swagger';

export class ShipmentItemDto {
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
}

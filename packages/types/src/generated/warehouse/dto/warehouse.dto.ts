import { ApiProperty } from '@nestjs/swagger';

export class WarehouseDto {
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
}

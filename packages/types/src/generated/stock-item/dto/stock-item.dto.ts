import { ApiProperty } from '@nestjs/swagger';

export class StockItemDto {
  id: string;
  productId: string;
  warehouseId: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  quantity: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  purchasePrice: number | null;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  estimatePrice: number | null;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  salePrice: number | null;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  discount: number | null;
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

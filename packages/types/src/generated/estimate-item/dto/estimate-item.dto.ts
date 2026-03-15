import { CostType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class EstimateItemDto {
  id: string;
  estimateId: string;
  productId: string | null;
  name: string;
  description: string | null;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  quantity: number;
  unit: string;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  price: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  total: number;
  @ApiProperty({
    enum: CostType,
  })
  costType: CostType;
}

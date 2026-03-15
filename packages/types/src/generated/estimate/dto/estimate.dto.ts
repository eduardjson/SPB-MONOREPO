import { ApiProperty } from '@nestjs/swagger';

export class EstimateDto {
  id: string;
  projectId: string;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  totalCost: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  laborCost: number | null;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  materialsCost: number | null;
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

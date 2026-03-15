import { IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEstimateDto {
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  @IsOptional()
  @IsNumber()
  laborCost?: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  @IsOptional()
  @IsNumber()
  materialsCost?: number;
}

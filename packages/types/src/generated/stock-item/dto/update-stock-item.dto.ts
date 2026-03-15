import { IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStockItemDto {
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  @IsOptional()
  @IsNumber()
  purchasePrice?: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  @IsOptional()
  @IsNumber()
  estimatePrice?: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  @IsOptional()
  @IsNumber()
  salePrice?: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
    default: 0,
  })
  @IsOptional()
  @IsNumber()
  discount?: number;
}

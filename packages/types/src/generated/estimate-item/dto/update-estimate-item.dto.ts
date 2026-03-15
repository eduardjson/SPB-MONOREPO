import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEstimateItemDto {
  @IsOptional()
  @IsString()
  productId?: string;
  @IsOptional()
  @IsString()
  name?: string;
  @IsOptional()
  @IsString()
  description?: string;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  @IsOptional()
  @IsNumber()
  quantity?: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  @IsOptional()
  @IsNumber()
  price?: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  @IsOptional()
  @IsNumber()
  total?: number;
}

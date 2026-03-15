import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEstimateItemDto {
  @IsOptional()
  @IsString()
  productId?: string;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  description?: string;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  @IsNotEmpty()
  @IsNumber()
  total: number;
}

import { IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateShipmentItemDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  @IsOptional()
  @IsInt()
  quantity?: number;
}

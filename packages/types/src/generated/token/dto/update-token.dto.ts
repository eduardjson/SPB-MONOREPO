import { IsOptional, IsRFC3339, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTokenDto {
  @IsOptional()
  @IsString()
  token?: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  @IsOptional()
  @IsRFC3339()
  expires?: Date;
}

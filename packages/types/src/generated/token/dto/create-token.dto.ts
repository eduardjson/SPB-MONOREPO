import { IsNotEmpty, IsRFC3339, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTokenDto {
  @IsNotEmpty()
  @IsString()
  token: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  @IsNotEmpty()
  @IsRFC3339()
  expires: Date;
}

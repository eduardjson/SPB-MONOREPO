import { ApiProperty } from '@nestjs/swagger';

export class TokenDto {
  token: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  expires: Date;
  userId: string;
}

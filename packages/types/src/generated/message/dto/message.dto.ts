import { ApiProperty } from '@nestjs/swagger';

export class MessageDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
  userId: string;
  userName: string;
  text: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  createdAt: Date;
}

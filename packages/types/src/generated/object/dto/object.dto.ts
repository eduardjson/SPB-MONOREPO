import { ApiProperty } from '@nestjs/swagger';

export class ObjectDto {
  id: string;
  name: string;
  address: string | null;
  description: string | null;
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

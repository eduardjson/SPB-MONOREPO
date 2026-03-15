import { Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  @ApiProperty({
    enum: Role,
  })
  role: Role[];
  email: string;
  phone: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  age: number;
  address: string;
  avatar: string;
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

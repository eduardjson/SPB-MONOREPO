import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../user/entities/user.entity';

export class TokenEntity {
  token: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  expires: Date;
  userId: string;
  user?: UserEntity;
}

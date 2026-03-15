import { ApiProperty } from '@nestjs/swagger';
import { AttachmentEntity } from '../../attachment/entities/attachment.entity';

export class MessageEntity {
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
  attachments?: AttachmentEntity[];
}

import { ApiProperty } from '@nestjs/swagger';
import { MessageEntity } from '../../message/entities/message.entity';

export class AttachmentEntity {
  id: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  messageId: number;
  message?: MessageEntity;
  fileName: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  fileSize: number;
  fileType: string;
  filePath: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  uploadedAt: Date;
}

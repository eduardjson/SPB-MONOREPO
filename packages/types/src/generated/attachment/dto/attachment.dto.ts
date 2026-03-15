import { ApiProperty } from '@nestjs/swagger';

export class AttachmentDto {
  id: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  messageId: number;
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

import { DocumentType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ProjectDocumentDto {
  id: string;
  projectId: string;
  data: Buffer;
  filename: string;
  mimeType: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  size: number;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  createdAt: Date;
  @ApiProperty({
    enum: DocumentType,
  })
  docType: DocumentType;
}

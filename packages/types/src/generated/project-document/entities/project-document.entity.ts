import { DocumentType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { ProjectEntity } from '../../project/entities/project.entity';

export class ProjectDocumentEntity {
  id: string;
  projectId: string;
  project?: ProjectEntity;
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

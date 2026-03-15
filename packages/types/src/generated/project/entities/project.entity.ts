import { ProjectStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { ProjectImageEntity } from '../../project-image/entities/project-image.entity';
import { ProjectDocumentEntity } from '../../project-document/entities/project-document.entity';
import { EstimateEntity } from '../../estimate/entities/estimate.entity';

export class ProjectEntity {
  id: string;
  name: string;
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
  images?: ProjectImageEntity[];
  documents?: ProjectDocumentEntity[];
  estimate?: EstimateEntity | null;
  @ApiProperty({
    enum: ProjectStatus,
  })
  status: ProjectStatus;
}

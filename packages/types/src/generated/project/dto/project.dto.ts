import { ProjectStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ProjectDto {
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
  @ApiProperty({
    enum: ProjectStatus,
  })
  status: ProjectStatus;
}

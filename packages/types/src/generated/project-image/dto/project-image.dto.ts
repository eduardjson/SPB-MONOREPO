import { ApiProperty } from '@nestjs/swagger';

export class ProjectImageDto {
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
    type: 'integer',
    format: 'int32',
  })
  sortOrder: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { ProjectEntity } from '../../project/entities/project.entity';
import { EstimateItemEntity } from '../../estimate-item/entities/estimate-item.entity';

export class EstimateEntity {
  id: string;
  projectId: string;
  project?: ProjectEntity;
  items?: EstimateItemEntity[];
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  totalCost: number;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  laborCost: number | null;
  @ApiProperty({
    type: 'number',
    format: 'float',
  })
  materialsCost: number | null;
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

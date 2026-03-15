import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAttachmentDto {
  @IsOptional()
  @IsString()
  fileName?: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  @IsOptional()
  @IsInt()
  fileSize?: number;
  @IsOptional()
  @IsString()
  fileType?: string;
  @IsOptional()
  @IsString()
  filePath?: string;
}

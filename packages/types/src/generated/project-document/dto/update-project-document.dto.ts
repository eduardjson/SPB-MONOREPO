import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectDocumentDto {
  @IsOptional()
  data?: Buffer;
  @IsOptional()
  @IsString()
  filename?: string;
  @IsOptional()
  @IsString()
  mimeType?: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  @IsOptional()
  @IsInt()
  size?: number;
}

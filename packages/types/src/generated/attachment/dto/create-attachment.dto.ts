import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAttachmentDto {
  @IsNotEmpty()
  @IsString()
  fileName: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  @IsNotEmpty()
  @IsInt()
  fileSize: number;
  @IsNotEmpty()
  @IsString()
  fileType: string;
  @IsNotEmpty()
  @IsString()
  filePath: string;
}

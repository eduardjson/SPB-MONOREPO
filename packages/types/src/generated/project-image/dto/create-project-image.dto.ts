import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectImageDto {
  @IsNotEmpty()
  data: Buffer;
  @IsNotEmpty()
  @IsString()
  filename: string;
  @IsNotEmpty()
  @IsString()
  mimeType: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  @IsNotEmpty()
  @IsInt()
  size: number;
}

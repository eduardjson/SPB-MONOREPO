import { IsOptional, IsString } from 'class-validator';

export class UpdateObjectDto {
  @IsOptional()
  @IsString()
  name?: string;
  @IsOptional()
  @IsString()
  address?: string;
  @IsOptional()
  @IsString()
  description?: string;
}

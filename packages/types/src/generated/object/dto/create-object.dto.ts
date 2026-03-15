import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateObjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  address?: string;
  @IsOptional()
  @IsString()
  description?: string;
}

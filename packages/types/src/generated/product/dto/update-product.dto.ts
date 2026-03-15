import { IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  title?: string;
  @IsOptional()
  @IsString()
  category?: string;
  @IsOptional()
  @IsString()
  manufacturer?: string;
  @IsOptional()
  @IsString()
  imageUrl?: string;
}

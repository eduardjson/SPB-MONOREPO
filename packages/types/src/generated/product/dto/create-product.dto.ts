import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  category: string;
  @IsNotEmpty()
  @IsString()
  manufacturer: string;
  @IsNotEmpty()
  @IsString()
  imageUrl: string;
}

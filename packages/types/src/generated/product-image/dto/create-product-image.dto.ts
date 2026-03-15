import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductImageDto {
  @IsNotEmpty()
  @IsString()
  url: string;
}

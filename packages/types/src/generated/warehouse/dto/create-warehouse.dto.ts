import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWarehouseDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  address?: string;
}

import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  username?: string;
  @IsOptional()
  @IsString()
  password?: string;
  @IsOptional()
  @IsString()
  firstName?: string;
  @IsOptional()
  @IsString()
  lastName?: string;
  @IsOptional()
  @IsString()
  email?: string;
  @IsOptional()
  @IsString()
  phone?: string;
}

import { IsOptional, IsString } from 'class-validator';

export class UpdateMessageDto {
  @IsOptional()
  @IsString()
  userId?: string;
  @IsOptional()
  @IsString()
  userName?: string;
  @IsOptional()
  @IsString()
  text?: string;
}

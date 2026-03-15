import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  @IsString()
  userId: string;
  @IsNotEmpty()
  @IsString()
  userName: string;
  @IsNotEmpty()
  @IsString()
  text: string;
}

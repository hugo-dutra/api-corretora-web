import { IsString, IsPhoneNumber, IsEmail, MaxLength, MinLength } from 'class-validator'

export class CorretoraDto {
  @IsString()
  @MaxLength(250)
  @MinLength(1)
  nome: string;
  @IsString()
  @IsEmail()
  @MaxLength(500)
  @MinLength(3)
  email: string;
  @IsString()
  @IsPhoneNumber('BR')
  @MaxLength(25)
  @MinLength(1)
  telefone: string;
}
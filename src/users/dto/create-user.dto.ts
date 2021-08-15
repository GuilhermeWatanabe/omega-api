import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  id: number;
  public_id: string;
  @IsNotEmpty({
    message: 'O nome não pode ser nulo',
  })
  name: string;

  @IsEmail(
    {},
    {
      message: 'O email não é válido.',
    },
  )
  email: string;

  @MinLength(8, {
    message: 'A senha deve ter no mínimo 8 caracteres.',
  })
  password: string;
}

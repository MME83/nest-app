import {
  MinLength,
  MaxLength,
  IsBoolean,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  readonly name: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly indexed: boolean;

  @IsOptional()
  @IsString()
  readonly other: string;
}

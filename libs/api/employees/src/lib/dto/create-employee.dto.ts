import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto{
  @ApiProperty({ example: 'Juan' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  firstName!: string;

  @ApiProperty({ example: 'Mendoza' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  lastName!: string;

  @ApiProperty({ example: 'Desarrollador Full Stack' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  position!: string;

  @ApiProperty({ example: 'Sistemas' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  area!: string;

}

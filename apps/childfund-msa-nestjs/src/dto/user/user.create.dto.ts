import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserCreateDto {
  @ApiProperty({
    required: true,
    example: 'john_doe',
    description: 'username',
  })
  @IsString()
  username: string;

  @ApiProperty({
    required: true,
    example: 'school_name',
    description: 'schoolName',
  })
  @IsString()
  schoolName: string;

  @ApiProperty({
    required: true,
    example: '1234567890',
    description: 'serialCode',
  })
  @IsString()
  serialCode: string;
}

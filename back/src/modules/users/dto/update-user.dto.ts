import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(50)
    readonly name: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(15)
    @MaxLength(255)
    readonly email: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(50)
    readonly password: string;

    @IsOptional()
    readonly posts: String[];
    
    @IsOptional()
    readonly followers: String[];
    
    @IsOptional()
    readonly following: String[];
}

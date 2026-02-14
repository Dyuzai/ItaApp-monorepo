import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreatePostDto {
    @IsString()
    title: string;

    @IsString()
    text: string;

    @IsOptional()
    @IsString()
    image_url?: string;

    @IsInt()
    authorId: number;
}
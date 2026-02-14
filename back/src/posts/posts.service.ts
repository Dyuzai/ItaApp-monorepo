import { Injectable, BadRequestException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    try {
      const postCreated = await this.prisma.post.create({
        data: {
          title: createPostDto.title,
          text: createPostDto.text,
          image_url: createPostDto.image_url,
          authorId: createPostDto.authorId,
        },
      });
      return postCreated;
    } catch (error) {
      throw new InternalServerErrorException('Failed to create post');
    }
  }

  async findAll() {
    return this.prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            // Exclude password
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            // Exclude password
          },
        },
      },
    });
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    try {
      const updatedPost = await this.prisma.post.update({
        where: { id },
        data: updatePostDto,
      });
      return updatedPost;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Post with ID ${id} not found`);
      }
      throw new InternalServerErrorException('Failed to update post');
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.post.delete({
        where: { id },
      });
      return { message: `Post with ID ${id} deleted successfully` };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Post with ID ${id} not found`);
      }
      throw new InternalServerErrorException('Failed to delete post');
    }
  }
}
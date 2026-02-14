import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './database/prisma.module';
@Module({
  imports: [PrismaModule, UsersModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
// import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal: true,
    }), 
    UsersModule, 
  ],

  controllers: [],
  providers: [],
  exports:[],
})

export class AppModule {}

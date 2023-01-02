import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
<<<<<<< HEAD
import { AuthModule } from './auth/auth.module';

=======
 
>>>>>>> efda6d758b1aa07a93ba72e3a2ff4f7d6c400672
@Module({
  imports: [BoardsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

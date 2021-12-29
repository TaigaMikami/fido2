import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntityFactory } from './model/user-entity-factory';
import { User } from './model/user.entity';
import { WebauthnController } from './webauthn.controller';
import { WebauthnService } from './webauthn.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [WebauthnService, UserEntityFactory],
  controllers: [WebauthnController],
})
export class WebauthnModule {}

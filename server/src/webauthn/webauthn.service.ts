import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuid } from 'uuid';
import base64url from 'base64url';
import { UserCreationOptions } from 'src/interface/user-creation-options.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './model/user.entity';
import { Repository } from 'typeorm';
import { UserEntityFactory } from './model/user-entity-factory';

@Injectable()
export class WebauthnService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    private readonly userEntityFactory: UserEntityFactory,
  ) {}

  async generateServerMakeCredRequest(
    createUserDto: CreateUserDto,
  ): Promise<UserCreationOptions> {
    const challenge = base64url.encode(Buffer.from(Uint8Array.from(uuid())));
    const userId = base64url.encode(Buffer.from(Uint8Array.from(uuid())));

    const userCreationOptions: UserCreationOptions = {
      email: createUserDto.email,
      challenge,
      rp: {
        name: 'webauthn-server',
      },
      user: {
        id: userId,
        name: createUserDto.email,
        displayName: createUserDto.email,
      },
      attestation: 'direct',
    };
    try {
      await this.usersRepository.insert(
        this.userEntityFactory.create(userCreationOptions),
      );
    } catch (err) {
      Logger.log(err);
      return null;
    }
    return userCreationOptions;
  }
}

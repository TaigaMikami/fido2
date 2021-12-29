import { Injectable } from '@nestjs/common';
import { UserCreationOptions } from 'src/interface/user-creation-options.interface';
import { User } from './user.entity';

@Injectable()
export class UserEntityFactory {
  create(userCreationOptions: UserCreationOptions): User {
    const user: User = {
      email: userCreationOptions.email,
      challenge: userCreationOptions.challenge,
      rp: userCreationOptions.rp.name,
      user_id: userCreationOptions.user.id,
      user_name: userCreationOptions.user.name,
      user_display_name: userCreationOptions.user.displayName,
      attenstation: userCreationOptions.attestation,
      id: '',
      auth_info_fmt: '',
      auth_info_public_key: '',
      auth_info_counter: 0,
      auth_info_cred_id: '',
    };

    return user;
  }
}

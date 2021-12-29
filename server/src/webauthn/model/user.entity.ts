import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  email: string;
  @Column()
  challenge: string;
  @Column()
  rp: string;
  @Column()
  user_id: string;
  @Column()
  user_name: string;
  @Column()
  user_display_name: string;
  @Column()
  attenstation: 'direct' | 'indirect' | 'none';
  @Column()
  id: string;
  @Column()
  auth_info_fmt: string;
  @Column()
  auth_info_public_key: string;
  @Column()
  auth_info_counter: number;
  @Column()
  auth_info_cred_id: string;
}

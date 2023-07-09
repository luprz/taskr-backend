import { BaseEntity } from "src/config/base.entity";
import { IUser } from "src/interfaces/user.interface";
import { Column, Entity } from "typeorm";

@Entity('users')
export class UserEntity extends BaseEntity implements IUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    unique: true,
  })
  username: string;

  @Column()
  password: string;

  @Column()
  role: string;
};

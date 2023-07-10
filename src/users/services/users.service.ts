import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserDTO } from '../dto/create.dto';
import { UserUpdateDTO } from '../dto/update.dto';
import { ErrorManager } from 'src/config/utils/error.manager';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
  ) {}

  public async createUser(body: UserDTO): Promise<UserEntity> {
    try {
      return await this.userRepository.save(body);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findUsers(): Promise<UserEntity[]> {
    try {
      const users: UserEntity[] = await this.userRepository.find();
      if (users.length === 0) {
        throw new ErrorManager({ type: 'NOT_FOUND', message: 'Users not found' });
      }
      return users;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findUserById(id: string): Promise<UserEntity> {
    try {
      const user : UserEntity = await this.userRepository
        .createQueryBuilder('user')
        .where({ id })
        .getOne();
      if (!user) {
        throw new ErrorManager({ type: 'NOT_FOUND', message: 'User not found' });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updateUser(body: UserUpdateDTO, id: string): Promise<UpdateResult> {
    try {
      const user: UpdateResult = await this.userRepository.update(id, body);

      if (user.affected === 0) {
        throw new ErrorManager({ type: 'UNPROCESSABLE_ENTITY', message: 'User has not been updated' });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async deleteUser(id: string): Promise<DeleteResult> {
    try {
      const user: DeleteResult = await this.userRepository.delete(id);

      if (user.affected === 0) {
        throw new ErrorManager({ type: 'UNPROCESSABLE_ENTITY', message: 'User has not been deleted' });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}

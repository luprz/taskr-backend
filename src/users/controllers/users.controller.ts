import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDTO } from '../dto/create.dto';
import { UserUpdateDTO } from '../dto/update.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  public async registerUser(@Body() body: UserDTO): Promise<UserDTO> {
    return await this.userService.createUser(body);
  }

  @Get()
  public async getUsers(): Promise<UserDTO[]> {
    return await this.userService.findUsers();
  }

  @Get(':id')
  public async getUserById(@Param('id') id: string): Promise<UserDTO> {
    return await this.userService.findUserById(id);
  }

  @Put(':id')
  public async updateUser(@Body() body: UserUpdateDTO, @Param('id') id: string): Promise<UpdateResult> {
    return await this.userService.updateUser(body, id);
  }

  @Delete(':id')
  public async deleteUser(@Param('id') id: string): Promise<DeleteResult> {
    return await this.userService.deleteUser(id);
  }
}

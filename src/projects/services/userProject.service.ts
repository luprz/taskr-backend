import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserProjectEntity } from "../entities/userProject.entity";
import { AddUserDTO } from "../dto/addUser.dto";
import { ErrorManager } from "src/config/utils/error.manager";
import { ProjectEntity } from "../entities/project.entity";

@Injectable()
export class UserProjectsService {
  constructor(
    @InjectRepository(UserProjectEntity) private readonly userProjectRepository: Repository<UserProjectEntity>,
    @InjectRepository(ProjectEntity) private readonly projectRepository: Repository<ProjectEntity>
  ) {}

  async addUser(id: string, body: AddUserDTO): Promise<UserProjectEntity> {
    try {
      const project : ProjectEntity = await this.projectRepository
        .createQueryBuilder('project')
        .where({ id })
        .getOne();
      if (!project) {
        throw new ErrorManager({ type: 'NOT_FOUND', message: 'User not found' });
      }
      return await this.userProjectRepository.save({ ...body, project });
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
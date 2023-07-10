import { IsNotEmpty, IsUUID, IsEnum, IsOptional } from "class-validator";
import { ACCESS_LEVELS } from "src/constants/roles";
import { UserEntity } from "src/users/entities/user.entity";
import { ProjectEntity } from "../entities/project.entity";

export class AddUserDTO {
  @IsNotEmpty()
  @IsUUID()
  user: UserEntity;

  @IsOptional()
  @IsUUID()
  project: ProjectEntity;

  @IsNotEmpty()
  @IsEnum(ACCESS_LEVELS)
  accessLevel: ACCESS_LEVELS;
}
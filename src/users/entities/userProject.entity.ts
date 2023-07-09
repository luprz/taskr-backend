
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { ACCESS_LEVELS } from '../../constants/roles';
import { UserEntity } from './user.entity';
import { ProjectEntity } from '../../projects/entities/project.entity';

@Entity('user_projects')
export class UserProjectEntity extends BaseEntity {
  @Column({ type: 'enum', enum: ACCESS_LEVELS })
  accessLevel: ACCESS_LEVELS;

  @ManyToOne(() => UserEntity, (user) => user.projectsIncludes)
  user: UserEntity;

  @ManyToOne(() => ProjectEntity, (project) => project.usersIncludes)
  project: ProjectEntity;
}

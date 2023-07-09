import { BaseEntity } from '../../config/base.entity';
import { IProject } from '../../interfaces/project.interface';
import { UserProjectEntity } from '../../users/entities/userProject.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('projects')
export class ProjectEntity extends BaseEntity implements IProject {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => UserProjectEntity, (userProject) => userProject.project)
  usersIncludes: UserProjectEntity[];
}
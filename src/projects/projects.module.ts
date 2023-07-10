import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from './entities/project.entity';
import { ProjectsController } from './controllers/projects.controller';
import { ProjectsService } from './services/projects.service';
import { UserProjectsController } from './controllers/userProjects.controller';
import { UserProjectsService } from './services/userProject.service';
import { UserProjectEntity } from './entities/userProject.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProjectEntity,
      UserProjectEntity
    ]),
  ],
  providers: [
    ProjectsService,
    UserProjectsService
  ],
  controllers: [
    ProjectsController,
    UserProjectsController,
  ]
})
export class ProjectsModule {}

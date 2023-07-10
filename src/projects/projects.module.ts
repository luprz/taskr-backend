import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from './entities/project.entity';
import { ProjectsController } from './controllers/projects.controller';
import { ProjectsService } from './services/projects.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProjectEntity]),
  ],
  providers: [ProjectsService],
  controllers: [ProjectsController]
})
export class ProjectsModule {}

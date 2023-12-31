import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProjectDTO } from '../dto/create.dto';
import { ProjectsService } from '../services/projects.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

  @Post()
  public async createProject(@Body() body: ProjectDTO): Promise<ProjectDTO> {
    return await this.projectService.createProject(body);
  }

  @Get()
  public async getProjects(): Promise<ProjectDTO[]> {
    return await this.projectService.findProjects();
  }

  @Get(':id')
  public async getProjectById(@Param('id') id: string): Promise<ProjectDTO> {
    return await this.projectService.findProjectById(id);
  }

  @Put(':id')
  public async updateProject(@Body() body: ProjectDTO, @Param('id') id: string): Promise<UpdateResult> {
    return await this.projectService.updateProject(body, id);
  }

  @Delete(':id')
  public async deleteProject(@Param('id') id: string): Promise<DeleteResult> {
    return await this.projectService.deleteProject(id);
  }
}

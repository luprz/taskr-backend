import { Body, Controller, Param, Post } from "@nestjs/common";
import { UserProjectsService } from "../services/userProject.service";
import { AddUserDTO } from "../dto/addUser.dto";

@Controller('projects')
export class UserProjectsController {
  constructor(private readonly userProjectService: UserProjectsService) {}

  @Post(':id/add-user')
  public async addUserToProject(@Param('id') id: string, @Body() body: AddUserDTO): Promise<any>{
    return await this.userProjectService.addUser(id, body);
  }
}
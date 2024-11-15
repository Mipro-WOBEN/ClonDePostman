import { Controller, Get } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Roles } from './roles.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolService: RolesService) {}

  @Get()
  async getRolAll(): Promise<Roles[]> {
    const roles = this.rolService.methodsAll();
    return roles;
  }
}

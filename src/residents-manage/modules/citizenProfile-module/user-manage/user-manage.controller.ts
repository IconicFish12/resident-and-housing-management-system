import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserManageService } from './user-manage.service';
import { CreateUserManageDto } from './dto/create-user-manage.dto';
import { UpdateUserManageDto } from './dto/update-user-manage.dto';

@Controller('user-manage')
export class UserManageController {
  constructor(private readonly userManageService: UserManageService) {}

  @Post()
  create(@Body() createUserManageDto: CreateUserManageDto) {
    return this.userManageService.create(createUserManageDto);
  }

  @Get()
  findAll() {
    return this.userManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userManageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserManageDto: UpdateUserManageDto) {
    return this.userManageService.update(+id, updateUserManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userManageService.remove(+id);
  }
}

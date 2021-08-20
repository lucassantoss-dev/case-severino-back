import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './shared/users';
import { UsersService } from './shared/users.service';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
      ) { }
    
      @Get()
      async getAll(): Promise<User[]> {
        return this.usersService.getAll();
      }
    
      @Get(':id')
      async getById(@Param('id') id: string): Promise<User> {
        return this.usersService.getById(id);
      }
    
      @Post()
      async create(@Body() user: User): Promise<User> {
        return this.usersService.create(user);
      }
    
      @Put(':id')
      async update(@Param('id') id: string, @Body() user: User): Promise<User> {
        return this.usersService.update(id, user);
      }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    if (!createUserDto.first_name || !createUserDto.email) throw new HttpException("datos incompletos", HttpStatus.BAD_REQUEST)
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    const result = this.usersService.findAll();
    return { status: "Success", payload: result }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {

    // definimos una exepcion
    if (isNaN(+id)) throw new HttpException("El id debe ser un numero", HttpStatus.BAD_REQUEST);
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

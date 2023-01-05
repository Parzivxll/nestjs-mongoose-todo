import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todos.service';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Post('create')
    async create(@Body() todo: CreateTodoDto) {
        return await this.todoService.create(todo);
    }

    @Get('all')
    async findAll() {
        return await this.todoService.findAll();
    }

    @Get('completed') 
    async findCompleted() {
        return await this.todoService.findCompleted();
    }

    @Get('find/:id') 
    async findOne(@Param('id') id: string) {
        return await this.todoService.findOne(id);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: string) {
        console.log(id);
        return await this.todoService.delete(id);
    }
    
    @Post('update/:id') 
    async update(@Param('id') id: string, @Body() todo: CreateTodoDto) {
        return await this.todoService.update(id, todo);
    }
}
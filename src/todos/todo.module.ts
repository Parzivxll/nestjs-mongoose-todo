import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todos.service';
import { todosProviders } from './todos.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [TodoController],
    providers: [TodoService, ...todosProviders],
})

export class TodoModule {}

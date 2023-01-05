import { Inject, Injectable } from "@nestjs/common";
import { Model, Types } from "mongoose";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { Todo } from "./interfaces/todos.interface";

@Injectable()
export class TodoService {
    constructor(@Inject('TODO_MODEL') private readonly todoModel: Model<Todo>) {}
    
    async create(createTodoDto: CreateTodoDto): Promise<Todo> {
        const createdTodo = new this.todoModel(createTodoDto);
        return await createdTodo.save();
    }

    async findAll(): Promise<Todo[]> {
        return await this.todoModel.find().lean();
    }

    async findOne(id: string): Promise<Todo> {
        return await this.todoModel.findById(id).exec();
    }

    async delete(id: string): Promise<Todo> {
        console.log(id);
        return await this.todoModel.findByIdAndDelete(id);
    }

    async update(id: string, todo: CreateTodoDto): Promise<Todo> {
        return await this.todoModel.findByIdAndUpdate(id, todo, { new: true });
    }

    async findCompleted(): Promise<Todo[]> {
        return await this.todoModel.find({ completed: true }).exec();
    }
}
import { Module } from "@nestjs/common";
import { TodoModule } from "./todos/todo.module";
@Module({
    imports: [TodoModule]
    
})

export class AppModule {}
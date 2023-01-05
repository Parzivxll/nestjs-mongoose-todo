import { Mongoose } from 'mongoose';
import { TodoSchema } from './schemas/todo.schema';

export const todosProviders = [
    {
        provide: 'TODO_MODEL',
        useFactory: (mongoose: Mongoose) => mongoose.model('Todo', TodoSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
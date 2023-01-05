import * as mongoose from 'mongoose';

export const DatabaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> => await mongoose.connect('MONGODB_URI'),
    },
];
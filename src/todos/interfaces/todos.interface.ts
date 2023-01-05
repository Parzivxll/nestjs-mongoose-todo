import { Document, Types } from "mongoose";

export interface Todo extends Document {
    _id: Types.ObjectId;
    readonly title: string;
    readonly completed: boolean;
}
import { Schema } from "mongoose";

export const TodoSchema = new Schema({
    title: String,
    completed: Boolean,
}, { timestamps: true });
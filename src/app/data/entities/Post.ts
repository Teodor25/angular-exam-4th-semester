import { Collection } from "./Collection";
import { Comment } from "./Comment";

export class Post {
    id: any; 
    publishedDate!: Date;
    title!: string; 
    text?: string;
    published!: boolean;
    likes!: number[]; 
    comments!: Comment[]; 
}
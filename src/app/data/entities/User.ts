export class User {
    id: any; 
    firstName!: string; 
    lastName!: string;
    role!: string; // admin, student, moderator
    username!: string;
    // password: string;
    email!: string;
    profileImage?: string;
    coverPhoto?: string;
    signupDate!: Date;
}
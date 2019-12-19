export interface userData {
    username:string;
    email:string;
    bio?: string;
    image:string;
    token:string;
}

export interface UserRO {
    user :UserRO;
}
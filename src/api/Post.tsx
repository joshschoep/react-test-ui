import User from './User';

export default interface Post {
    id: number;
    title: string;
    lead: string;
    content: string;
    
    created_at: string;
    updated_at: string;

    owner_id: number;
    owner: User;
}
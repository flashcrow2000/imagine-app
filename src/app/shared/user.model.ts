export class User {
  constructor(
    public username: string,
    public useremail: string,
    public userIdeas: number[], // ids of ideas added by user
    public subscriptions: number[] // ids of subscribed ideas 
    ) {}
}
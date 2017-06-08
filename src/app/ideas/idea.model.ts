import { User } from '../shared/user.model';
export class Idea {
  constructor(
    public ideaOwner: string,
    public ideaText: string,
    public ideaId: number,
    public ideaTitle: string
    ) {}
}
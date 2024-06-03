import { UserInterface } from "./user.interface";

export interface PublicAccount {
  id: string;
  account_number: number;
  userId: string;
  User: UserInterface;
  createdAt: string;
}

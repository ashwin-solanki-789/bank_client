import { PublicAccount } from "./account.interface";

export enum TransactionStatusEnum {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  DELETED = "DELETED",
}

export enum TransactionTypeEnum {
  REQUEST = "REQUEST",
  NORMAL = "NORMAL",
}

export interface TransactionInterface {
  id: string;
  description: string;
  status: TransactionStatusEnum;
  type: TransactionTypeEnum;
  amount: number;
  senderId: number;
  receiverId: number;
  createdAt: string;
  updatedAt: string;
  sender: PublicAccount;
  receiver: PublicAccount;
}

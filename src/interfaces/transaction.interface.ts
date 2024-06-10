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
  readonly id: string;
  readonly description: string | null | undefined;
  readonly status: TransactionStatusEnum;
  readonly type: TransactionTypeEnum;
  readonly amount: number;
  readonly senderId: number;
  readonly receiverId: number;
  readonly createdAt: string | null | undefined;
  // updatedAt: string;
  readonly sender: PublicAccount;
  readonly receiver: PublicAccount;
}

export interface UserInterface {
  id: string;
  firstname: string;
  lastname: string | null | undefined;
  tax_id: string;
  email: string;
  createdAt: string;
  [key: string]: unknown;
}

export interface ProfileType {
  id: string;
  name: string;
  email: string;
  role: string;
}

export enum RoleType {
  USER = "USER",
  MANAGER = "MANAGER",
  ADMIN = "ADMIN",
}

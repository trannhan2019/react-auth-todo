import React from "react";
import { RoleType } from "../types/user.type";
import { useAuthStore } from "../stores/auth";
import NotAuth from "../components/not-auth/NotAuth";

interface Props {
  children: React.ReactNode;
  roles: Array<RoleType>;
}

const RoleBaseGuard = ({ children, roles }: Props) => {
  const { profile } = useAuthStore();

  if (!roles.includes(profile?.role as RoleType)) {
    return <NotAuth />;
  }
  return <>{children}</>;
};

export default RoleBaseGuard;

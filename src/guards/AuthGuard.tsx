import React from "react";
import { useAuthStore } from "../stores/auth";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuth } = useAuthStore();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default AuthGuard;

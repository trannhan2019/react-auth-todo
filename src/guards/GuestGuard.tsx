import React from "react";
import { useAuthStore } from "../stores/auth";
import { Navigate } from "react-router-dom";

const GuestGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuth } = useAuthStore();

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default GuestGuard;

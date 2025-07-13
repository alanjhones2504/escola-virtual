import React from "react";
import { useAuth } from "../context/AuthContext";
import type { UserRole } from "../pages/Login";

interface RequireRoleProps {
  allowed: UserRole | UserRole[];
  children: React.ReactNode;
}

const RequireRole: React.FC<RequireRoleProps> = ({ allowed, children }) => {
  const { user } = useAuth();
  if (!user) return null;
  const allowedRoles = Array.isArray(allowed) ? allowed : [allowed];
  if (!allowedRoles.includes(user.role)) {
    return <div className="text-red-600 font-bold">Acesso negado: perfil não autorizado.</div>;
  }
  return <>{children}</>;
};

export default RequireRole; 
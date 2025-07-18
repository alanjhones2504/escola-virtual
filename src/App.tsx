import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import RequireRole from "./components/RequireRole";
import AdminDashboard from "./pages/AdminDashboard";
import ProfessorDashboard from "./pages/ProfessorDashboard";
import AlunoDashboard from "./pages/AlunoDashboard";
import Register from "./pages/Register";

const queryClient = new QueryClient();

function AdminPage() {
  return (
    <RequireRole allowed="admin">
      <AdminDashboard />
    </RequireRole>
  );
}

function ProfessorPage() {
  return (
    <RequireRole allowed="professor">
      <ProfessorDashboard />
    </RequireRole>
  );
}

function AlunoPage() {
  return (
    <RequireRole allowed="aluno">
      <AlunoDashboard />
    </RequireRole>
  );
}

function PortalRedirect() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (user.role === "admin") return <Navigate to="/admin" />;
  if (user.role === "professor") return <Navigate to="/professor" />;
  if (user.role === "aluno") return <Navigate to="/aluno" />;
  return <Navigate to="/login" />;
}

function MainApp() {
  const { user, login, logout } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portal" element={<PortalRedirect />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/professor" element={<ProfessorPage />} />
        <Route path="/aluno" element={<AlunoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
    LogOut,
    User,
    Home,
    BookOpen,
    Users,
    FileText,
    Settings,
    Bell,
} from "lucide-react";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    // Determinar os itens do menu com base no papel do usuário
    const getMenuItems = () => {
        switch (user?.role) {
            case "admin":
                return [
                    { icon: <Home className="w-5 h-5 mr-2" />, label: "Dashboard", path: "/admin" },
                    { icon: <Users className="w-5 h-5 mr-2" />, label: "Usuários", path: "#" },
                    { icon: <BookOpen className="w-5 h-5 mr-2" />, label: "Cursos", path: "#" },
                    { icon: <FileText className="w-5 h-5 mr-2" />, label: "Relatórios", path: "#" },
                    { icon: <Settings className="w-5 h-5 mr-2" />, label: "Configurações", path: "#" },
                ];
            case "professor":
                return [
                    { icon: <Home className="w-5 h-5 mr-2" />, label: "Dashboard", path: "/professor" },
                    { icon: <Users className="w-5 h-5 mr-2" />, label: "Minhas Turmas", path: "#" },
                    { icon: <FileText className="w-5 h-5 mr-2" />, label: "Avaliações", path: "#" },
                    { icon: <Bell className="w-5 h-5 mr-2" />, label: "Comunicações", path: "#" },
                ];
            case "aluno":
                return [
                    { icon: <Home className="w-5 h-5 mr-2" />, label: "Dashboard", path: "/aluno" },
                    { icon: <BookOpen className="w-5 h-5 mr-2" />, label: "Meus Cursos", path: "#" },
                    { icon: <FileText className="w-5 h-5 mr-2" />, label: "Tarefas", path: "#" },
                    { icon: <Bell className="w-5 h-5 mr-2" />, label: "Notificações", path: "#" },
                ];
            default:
                return [];
        }
    };

    const menuItems = getMenuItems();

    return (
        <div className="min-h-screen bg-background flex">
            {/* Sidebar */}
            <div className="w-64 bg-card border-r border-border flex flex-col">
                <div className="p-4 border-b border-border">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                            <BookOpen className="text-primary-foreground w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="font-medium text-lg text-foreground text-modern tracking-tight">EduVirtual</h2>
                            <p className="text-xs text-muted-foreground">{user?.role}</p>
                        </div>
                    </div>
                </div>

                {/* Menu de navegação */}
                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start text-foreground hover:bg-accent hover:text-foreground"
                                    onClick={() => item.path !== "#" && navigate(item.path)}
                                >
                                    {item.icon}
                                    {item.label}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Perfil e logout */}
                <div className="p-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <User className="w-5 h-5 mr-2 text-muted-foreground" />
                            <div>
                                <p className="text-sm font-medium text-foreground">{user?.name}</p>
                                <p className="text-xs text-muted-foreground">{user?.email}</p>
                            </div>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        className="w-full flex items-center justify-center border-border text-foreground hover:bg-accent hover:text-foreground"
                        onClick={handleLogout}
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sair
                    </Button>
                </div>
            </div>

            {/* Conteúdo principal */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="h-16 border-b border-border bg-card flex items-center px-6">
                    <h1 className="text-xl font-medium text-foreground text-modern tracking-tight">
                        {user?.role === "admin" && "Painel Administrativo"}
                        {user?.role === "professor" && "Painel do Professor"}
                        {user?.role === "aluno" && "Painel do Aluno"}
                    </h1>
                </header>

                {/* Conteúdo da página */}
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
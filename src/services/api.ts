import { AuthUser, UserRole } from "../pages/Login";

// Tipos para a API
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  teacherId: string;
  students: string[];
  progress: number;
  nextLesson: string;
}

export interface Task {
  id: string;
  title: string;
  courseId: string;
  dueDate: string;
  status: "pending" | "submitted" | "graded" | "late";
  grade?: number;
}

// Dados mockados
const mockUsers: User[] = [
  { id: "1", name: "Aluno Exemplo", email: "aluno@escola.com", role: "aluno" },
  { id: "2", name: "Professor Exemplo", email: "prof@escola.com", role: "professor" },
  { id: "3", name: "Administrador Exemplo", email: "admin@escola.com", role: "admin" },
];

const mockCourses: Course[] = [
  {
    id: "1",
    title: "Matemática Básica",
    description: "Fundamentos de matemática para o ensino médio",
    teacherId: "2",
    students: ["1"],
    progress: 75,
    nextLesson: "Equações do 2º Grau",
  },
  {
    id: "2",
    title: "Língua Portuguesa",
    description: "Gramática e literatura brasileira",
    teacherId: "2",
    students: ["1"],
    progress: 60,
    nextLesson: "Análise Sintática",
  },
  {
    id: "3",
    title: "História Geral",
    description: "História mundial desde a antiguidade até os dias atuais",
    teacherId: "2",
    students: ["1"],
    progress: 40,
    nextLesson: "Revolução Industrial",
  },
];

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Trabalho de Matemática",
    courseId: "1",
    dueDate: "2025-07-20",
    status: "pending",
  },
  {
    id: "2",
    title: "Redação sobre Meio Ambiente",
    courseId: "2",
    dueDate: "2025-07-22",
    status: "pending",
  },
  {
    id: "3",
    title: "Questionário sobre História Antiga",
    courseId: "3",
    dueDate: "2025-07-15",
    status: "late",
  },
  {
    id: "4",
    title: "Relatório de Experimento",
    courseId: "1",
    dueDate: "2025-07-10",
    status: "submitted",
  },
];

// Funções de API simuladas
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Autenticação
  login: async (email: string, password: string): Promise<AuthUser | null> => {
    await delay(800);
    const user = mockUsers.find(u => u.email === email);
    if (user) {
      return { email: user.email, name: user.name, role: user.role };
    }
    return null;
  },
  
  register: async (name: string, email: string, password: string, role: UserRole): Promise<User> => {
    await delay(1000);
    const newUser = {
      id: `${mockUsers.length + 1}`,
      name,
      email,
      role,
    };
    mockUsers.push(newUser);
    return newUser;
  },
  
  // Cursos
  getCourses: async (userId: string, role: UserRole): Promise<Course[]> => {
    await delay(500);
    if (role === "aluno") {
      return mockCourses.filter(course => course.students.includes(userId));
    } else if (role === "professor") {
      return mockCourses.filter(course => course.teacherId === userId);
    } else {
      return mockCourses;
    }
  },
  
  // Tarefas
  getTasks: async (userId: string, status?: string): Promise<Task[]> => {
    await delay(500);
    const user = mockUsers.find(u => u.id === userId);
    if (!user) return [];
    
    if (user.role === "aluno") {
      const studentCourses = mockCourses.filter(course => course.students.includes(userId));
      const courseIds = studentCourses.map(course => course.id);
      let tasks = mockTasks.filter(task => courseIds.includes(task.courseId));
      
      if (status) {
        tasks = tasks.filter(task => task.status === status);
      }
      
      return tasks;
    } else if (user.role === "professor") {
      const teacherCourses = mockCourses.filter(course => course.teacherId === userId);
      const courseIds = teacherCourses.map(course => course.id);
      return mockTasks.filter(task => courseIds.includes(task.courseId));
    }
    
    return mockTasks;
  },
  
  // Usuários
  getUsers: async (role?: UserRole): Promise<User[]> => {
    await delay(500);
    if (role) {
      return mockUsers.filter(user => user.role === role);
    }
    return mockUsers;
  },
  
  // Estatísticas
  getStats: async (role: UserRole): Promise<any> => {
    await delay(700);
    if (role === "admin") {
      return {
        totalStudents: mockUsers.filter(u => u.role === "aluno").length,
        totalTeachers: mockUsers.filter(u => u.role === "professor").length,
        totalCourses: mockCourses.length,
        approvalRate: 87,
      };
    } else if (role === "professor") {
      return {
        totalStudents: 45,
        totalAssignments: 12,
        pendingGrading: 4,
        upcomingClasses: 5,
      };
    } else {
      return {
        averageGrade: 8.5,
        attendance: 95,
        completedTasks: 85,
      };
    }
  },
};
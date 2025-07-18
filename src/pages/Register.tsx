import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { GraduationCap, Mail, Lock, User, ArrowLeft, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UserRole } from "../pages/Login";

// Esquema de validação com Zod
const registerSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  role: z.enum(["aluno", "professor", "admin"] as const, {
    required_error: "Selecione um tipo de usuário",
  }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "aluno",
    },
  });

  const onSubmit = (data: RegisterFormValues) => {
    // Simulando um registro bem-sucedido
    console.log("Dados do formulário:", data);
    
    // Em um cenário real, aqui seria feita uma chamada à API
    setTimeout(() => {
      setSuccess(true);
      toast.success("Cadastro realizado com sucesso!");
      
      // Redirecionar para o login após 2 segundos
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-medium text-foreground mb-2 text-modern tracking-tight">EduVirtual</h1>
          <p className="text-muted-foreground">Crie sua conta para começar</p>
        </div>
        
        <Card className="shadow-card border border-border bg-card">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl text-center text-foreground font-medium text-modern">Cadastro</CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Preencha os dados abaixo para criar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            {success ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-900/20 p-3 rounded-full">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-2 text-foreground text-modern">Cadastro realizado!</h3>
                <p className="text-muted-foreground mb-4">
                  Sua conta foi criada com sucesso. Você será redirecionado para a página de login.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Nome</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="Seu nome completo"
                              className="pl-10 h-12 bg-background border-border text-foreground"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">E-mail</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="seu@email.com"
                              type="email"
                              className="pl-10 h-12 bg-background border-border text-foreground"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Senha</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="••••••••"
                              type="password"
                              className="pl-10 h-12 bg-background border-border text-foreground"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Tipo de Usuário</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-background border-border text-foreground">
                              <SelectValue placeholder="Selecione um tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-border text-foreground">
                            <SelectItem value="aluno">Aluno</SelectItem>
                            <SelectItem value="professor">Professor</SelectItem>
                            <SelectItem value="admin">Administrador</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-medium mt-2 bg-primary text-primary-foreground hover:bg-primary/90 btn-hero"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Cadastrando..." : "Cadastrar"}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
          <CardFooter className="flex justify-center border-t border-border pt-4">
            <Link to="/login" className="text-sm text-muted-foreground hover:text-primary flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Voltar para o login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register; 
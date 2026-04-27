import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AppLayout } from "@/components/app/AppLayout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import CriarSenha from "./pages/CriarSenha";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/app/Dashboard";
import Treinos from "./pages/app/Treinos";
import TreinoDetalhe from "./pages/app/TreinoDetalhe";
import Progresso from "./pages/app/Progresso";
import Nutricao from "./pages/app/Nutricao";
import Perfil from "./pages/app/Perfil";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Público */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/criar-senha" element={<CriarSenha />} />

            {/* Área protegida */}
            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/app/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="treinos" element={<Treinos />} />
              <Route path="treinos/:id" element={<TreinoDetalhe />} />
              <Route path="progresso" element={<Progresso />} />
              <Route path="nutricao" element={<Nutricao />} />
              <Route path="perfil" element={<Perfil />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

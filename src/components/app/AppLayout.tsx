import { useState } from 'react'
import { NavLink, useNavigate, Outlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutDashboard, Dumbbell, TrendingUp, Salad, User, LogOut, Menu, X, Flame } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/app/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/app/treinos', icon: Dumbbell, label: 'Meus Treinos' },
  { to: '/app/progresso', icon: TrendingUp, label: 'Progresso' },
  { to: '/app/nutricao', icon: Salad, label: 'Nutrição' },
  { to: '/app/perfil', icon: User, label: 'Perfil' },
]

export function AppLayout() {
  const { user, profile, signOut } = useAuth()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  async function handleSignOut() {
    await signOut()
    navigate('/login')
  }

  const firstName = profile?.nome?.split(' ')[0] ?? user?.email?.split('@')[0] ?? 'Deusa'

  return (
    <div className="min-h-screen bg-background flex">
      {/* Overlay mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={cn(
        'fixed top-0 left-0 h-full w-64 z-50 bg-background border-r border-white/10 flex flex-col transition-transform duration-300',
        'lg:translate-x-0 lg:static lg:z-auto',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground text-sm leading-none">Projeto</p>
              <p className="font-display font-bold gradient-text text-lg leading-none">Deusa</p>
            </div>
          </div>
        </div>

        {/* Saudação */}
        <div className="px-6 py-4 border-b border-border/50">
          <p className="text-xs text-muted-foreground">Bem-vinda de volta,</p>
          <p className="text-foreground font-semibold truncate">{firstName} ✨</p>
        </div>

        {/* Navegação */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) => cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Sign out */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-red-400 hover:bg-red-500/10 transition-all w-full"
          >
            <LogOut className="w-5 h-5" />
            Sair
          </button>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Header mobile */}
        <header className="lg:hidden sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-pink-400" />
            <span className="font-display font-bold gradient-text">Projeto Deusa</span>
          </div>
          <button onClick={() => setSidebarOpen(true)} className="p-2 text-white hover:bg-white/10 rounded-lg">
            <Menu className="w-5 h-5" />
          </button>
        </header>

        {/* Conteúdo da rota */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>

        {/* Bottom nav mobile */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-white/10 z-30">
          <div className="grid grid-cols-5 py-2">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => cn(
                  'flex flex-col items-center gap-1 py-2 px-1 text-xs transition-all',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="truncate text-[10px]">{label.split(' ')[0]}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Zap, Trophy, Star, Target, Play, Lock, TrendingUp, Award, CheckCircle2, Clock, BookOpen, Menu } from 'lucide-react'

export default function DashboardPage() {
  const userLevel = 12
  const userXP = 8450
  const nextLevelXP = 10000
  const xpProgress = (userXP / nextLevelXP) * 100

  return (
    <div className="min-h-screen game-pattern">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center animate-glow">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold hidden sm:inline">LearnXP</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" className="bg-primary/10 text-primary">
                  Cursos
                </Button>
              </Link>
              <Link href="/ranking">
                <Button variant="ghost">Ranking</Button>
              </Link>
              <Link href="/conquistas">
                <Button variant="ghost">Conquistas</Button>
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <Link href="/perfil">
              <Avatar className="w-10 h-10 border-2 border-primary cursor-pointer hover:scale-110 transition-transform">
                <AvatarImage src="/avatar-game-character.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* User Profile Card */}
            <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
              <div className="text-center space-y-4">
                <Avatar className="w-24 h-24 mx-auto border-4 border-primary animate-float">
                  <AvatarImage src="/avatar-game-character.jpg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                
                <div>
                  <h3 className="font-bold text-xl">João Silva</h3>
                  <p className="text-sm text-muted-foreground">@joaosilva</p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="font-bold text-sm">Level {userLevel}</span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30">
                    <Zap className="w-4 h-4 text-accent" />
                    <span className="font-bold text-sm">{userXP} XP</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Próximo nível</span>
                    <span className="font-semibold">{nextLevelXP - userXP} XP</span>
                  </div>
                  <div className="relative">
                    <Progress value={xpProgress} className="h-3 xp-bar" />
                  </div>
                </div>

                <Link href="/perfil">
                  <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/5">
                    Ver Perfil Completo
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm space-y-4">
              <h3 className="font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Estatísticas
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Cursos Concluídos</span>
                  <span className="font-bold">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Em Progresso</span>
                  <span className="font-bold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total de Aulas</span>
                  <span className="font-bold">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Conquistas</span>
                  <span className="font-bold">24/200</span>
                </div>
              </div>
            </Card>

            {/* Ad Space */}
            <Card className="p-6 border-border/50 bg-gradient-to-br from-accent/20 to-secondary/20 backdrop-blur-sm text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-3" />
              <h4 className="font-bold mb-2">Premium</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Desbloqueie todos os cursos e conquistas exclusivas!
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Fazer Upgrade
              </Button>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* Welcome Banner */}
            <Card className="p-8 border-primary/30 bg-gradient-to-br from-primary/20 via-card/50 to-secondary/20 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 space-y-3">
                  <h1 className="text-3xl md:text-4xl font-bold">
                    Bem-vindo de volta, João! 👋
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    Continue de onde parou e ganhe mais XP hoje!
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <Badge className="bg-success/20 text-success border-success/30 hover:bg-success/30">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      3 dias seguidos
                    </Badge>
                    <Badge variant="outline" className="border-primary/30">
                      <Clock className="w-3 h-3 mr-1" />
                      2h hoje
                    </Badge>
                  </div>
                </div>
                <div className="shrink-0">
                  <div className="w-32 h-32 rounded-2xl bg-primary/20 flex items-center justify-center animate-float">
                    <Trophy className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Continue Learning */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Play className="w-6 h-6 text-primary" />
                  Continue Aprendendo
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'React Avançado',
                    progress: 65,
                    currentLesson: 'Aula 42: Context API Avançado',
                    xp: 250,
                    time: '18 min',
                    image: '/react-code-dark-theme.jpg',
                  },
                  {
                    title: 'Node.js & APIs',
                    progress: 42,
                    currentLesson: 'Aula 22: Autenticação JWT',
                    xp: 300,
                    time: '24 min',
                    image: '/nodejs-api-dark-theme.jpg',
                  },
                ].map((course, i) => (
                  <Card key={i} className="overflow-hidden card-hover border-border/50 bg-card/80 backdrop-blur-sm group cursor-pointer">
                    <div className="flex flex-col sm:flex-row gap-4 p-6">
                      <div className="relative w-full sm:w-32 h-24 rounded-lg overflow-hidden shrink-0">
                        <img 
                          src={course.image || "/placeholder.svg"} 
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            <Play className="w-6 h-6 text-primary-foreground ml-1" />
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">{course.currentLesson}</p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Progresso</span>
                            <span className="font-semibold">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1 text-primary font-medium">
                            <Zap className="w-4 h-4" />
                            +{course.xp} XP
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Courses */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Todos os Cursos
                </h2>
                <Button variant="outline" className="border-primary/30 hover:bg-primary/5">
                  Ver Todos
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'JavaScript Completo',
                    level: 'Iniciante',
                    xp: '5000 XP',
                    lessons: '48 aulas',
                    locked: false,
                    completed: true,
                    image: '/javascript-code-dark.jpg',
                  },
                  {
                    title: 'TypeScript Masterclass',
                    level: 'Avançado',
                    xp: '10000 XP',
                    lessons: '72 aulas',
                    locked: false,
                    completed: false,
                    image: '/typescript-code-dark.jpg',
                  },
                  {
                    title: 'Python para Data Science',
                    level: 'Iniciante',
                    xp: '6000 XP',
                    lessons: '40 aulas',
                    locked: false,
                    completed: false,
                    image: '/python-data-science-dark.jpg',
                  },
                  {
                    title: 'Next.js Full Stack',
                    level: 'Avançado',
                    xp: '12000 XP',
                    lessons: '80 aulas',
                    locked: true,
                    requiredLevel: 15,
                    image: '/nextjs-app-dark.jpg',
                  },
                  {
                    title: 'Vue.js Completo',
                    level: 'Intermediário',
                    xp: '7000 XP',
                    lessons: '56 aulas',
                    locked: true,
                    requiredLevel: 14,
                    image: '/vuejs-code-dark.jpg',
                  },
                  {
                    title: 'GraphQL & Apollo',
                    level: 'Avançado',
                    xp: '9000 XP',
                    lessons: '64 aulas',
                    locked: true,
                    requiredLevel: 16,
                    image: '/graphql-api-dark.jpg',
                  },
                ].map((course, i) => (
                  <Card 
                    key={i} 
                    className={`overflow-hidden card-hover border-border/50 bg-card/80 backdrop-blur-sm ${course.locked ? 'opacity-75' : 'cursor-pointer'}`}
                  >
                    <div className="relative h-40">
                      <img 
                        src={course.image || "/placeholder.svg"} 
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        {course.level}
                      </div>
                      {course.completed && (
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-success flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-success-foreground" />
                        </div>
                      )}
                      {course.locked && (
                        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center gap-2">
                          <Lock className="w-8 h-8 text-muted-foreground" />
                          <p className="text-sm font-medium text-muted-foreground">
                            Level {course.requiredLevel} necessário
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="p-4 space-y-3">
                      <h3 className="font-bold">{course.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Zap className="w-4 h-4 text-primary" />
                          {course.xp}
                        </span>
                        <span>{course.lessons}</span>
                      </div>
                      {!course.locked && (
                        <Link href="/curso/1">
                          <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                            {course.completed ? 'Revisar' : 'Continuar'}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

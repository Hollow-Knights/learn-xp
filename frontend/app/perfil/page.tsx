'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Zap, Trophy, Star, Award, Target, TrendingUp, Calendar, BookOpen, CheckCircle2, Crown, Flame, Sparkles, Lock, LogOut } from 'lucide-react'

export default function PerfilPage() {
  const router = useRouter()
  const userLevel = 12
  const userXP = 8450
  const nextLevelXP = 10000
  const xpProgress = (userXP / nextLevelXP) * 100

  const handleLogout = () => {
    router.push('/login')
  }

  return (
    <div className="min-h-screen game-pattern">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/editar-perfil">
              <Button variant="outline" className="border-primary/30 hover:bg-primary/5">
                Editar Perfil
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-destructive/30 hover:bg-destructive/10 text-destructive gap-2"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="p-8 mb-8 border-border/50 bg-gradient-to-br from-primary/20 via-card/50 to-secondary/20 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-primary animate-float">
                <AvatarImage src="/placeholder.svg?height=128&width=128" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center border-4 border-background animate-glow">
                <Star className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">João Silva</h1>
                <p className="text-xl text-muted-foreground">@joaosilva</p>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Badge className="px-4 py-2 text-sm bg-primary/20 border-primary/30 hover:bg-primary/30">
                  <Star className="w-4 h-4 mr-1" />
                  Level {userLevel}
                </Badge>
                <Badge className="px-4 py-2 text-sm bg-accent/20 border-accent/30 hover:bg-accent/30">
                  <Zap className="w-4 h-4 mr-1" />
                  {userXP} XP Total
                </Badge>
                <Badge className="px-4 py-2 text-sm bg-success/20 border-success/30 hover:bg-success/30">
                  <Flame className="w-4 h-4 mr-1" />
                  15 dias seguidos
                </Badge>
                <Badge className="px-4 py-2 text-sm bg-secondary/20 border-secondary/30 hover:bg-secondary/30">
                  <Trophy className="w-4 h-4 mr-1" />
                  Rank #127
                </Badge>
              </div>

              <div className="max-w-md space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progresso para Level {userLevel + 1}</span>
                  <span className="font-semibold">{xpProgress.toFixed(0)}%</span>
                </div>
                <div className="relative">
                  <Progress value={xpProgress} className="h-4 xp-bar" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Faltam {nextLevelXP - userXP} XP para o próximo nível
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center border-border/50 bg-card/50">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">8</div>
                <div className="text-xs text-muted-foreground">Cursos Concluídos</div>
              </Card>
              <Card className="p-4 text-center border-border/50 bg-card/50">
                <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">24</div>
                <div className="text-xs text-muted-foreground">Conquistas</div>
              </Card>
              <Card className="p-4 text-center border-border/50 bg-card/50">
                <Target className="w-8 h-8 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold">156</div>
                <div className="text-xs text-muted-foreground">Aulas Assistidas</div>
              </Card>
              <Card className="p-4 text-center border-border/50 bg-card/50">
                <Calendar className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold">87</div>
                <div className="text-xs text-muted-foreground">Dias Ativos</div>
              </Card>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="conquistas" className="space-y-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="conquistas">Conquistas</TabsTrigger>
            <TabsTrigger value="skins">Skins</TabsTrigger>
            <TabsTrigger value="estatisticas">Estatísticas</TabsTrigger>
          </TabsList>

          {/* Conquistas */}
          <TabsContent value="conquistas" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Suas Conquistas</h2>
              <p className="text-muted-foreground">24 de 200 badges desbloqueados</p>
              <Progress value={12} className="max-w-md mx-auto mt-4" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: Trophy, 
                  title: 'Primeira Vitória', 
                  description: 'Complete seu primeiro curso',
                  color: 'text-accent',
                  unlocked: true,
                  rarity: 'Comum'
                },
                { 
                  icon: Flame, 
                  title: 'Sequência de Fogo', 
                  description: 'Estude por 7 dias seguidos',
                  color: 'text-destructive',
                  unlocked: true,
                  rarity: 'Raro'
                },
                { 
                  icon: Star, 
                  title: 'Estrela Crescente', 
                  description: 'Alcance o nível 10',
                  color: 'text-primary',
                  unlocked: true,
                  rarity: 'Comum'
                },
                { 
                  icon: Zap, 
                  title: 'Velocista', 
                  description: 'Complete 5 aulas em um dia',
                  color: 'text-accent',
                  unlocked: true,
                  rarity: 'Incomum'
                },
                { 
                  icon: Target, 
                  title: 'Certeiro', 
                  description: 'Acerte 50 questões seguidas',
                  color: 'text-success',
                  unlocked: true,
                  rarity: 'Raro'
                },
                { 
                  icon: Award, 
                  title: 'Perfeccionista', 
                  description: 'Complete um curso com 100%',
                  color: 'text-accent',
                  unlocked: true,
                  rarity: 'Épico'
                },
                { 
                  icon: Crown, 
                  title: 'Mestre React', 
                  description: 'Complete todos os cursos de React',
                  color: 'text-accent',
                  unlocked: false,
                  rarity: 'Lendário'
                },
                { 
                  icon: Sparkles, 
                  title: 'Lenda Viva', 
                  description: 'Alcance o nível 50',
                  color: 'text-secondary',
                  unlocked: false,
                  rarity: 'Lendário'
                },
              ].map((badge, i) => (
                <Card 
                  key={i} 
                  className={`p-6 text-center card-hover border-border/50 ${
                    badge.unlocked 
                      ? 'bg-card/80 backdrop-blur-sm' 
                      : 'bg-card/30 opacity-60'
                  }`}
                >
                  <div className={`w-20 h-20 rounded-full ${
                    badge.unlocked ? 'bg-primary/20' : 'bg-muted'
                  } flex items-center justify-center mx-auto mb-4 ${
                    badge.unlocked && 'animate-float'
                  }`}>
                    {badge.unlocked ? (
                      <badge.icon className={`w-10 h-10 ${badge.color}`} />
                    ) : (
                      <Lock className="w-10 h-10 text-muted-foreground" />
                    )}
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`mb-2 text-xs ${
                      badge.rarity === 'Lendário' ? 'border-accent text-accent' :
                      badge.rarity === 'Épico' ? 'border-secondary text-secondary' :
                      badge.rarity === 'Raro' ? 'border-primary text-primary' :
                      'border-muted-foreground text-muted-foreground'
                    }`}
                  >
                    {badge.rarity}
                  </Badge>
                  <h3 className="font-bold mb-2">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                  {badge.unlocked && (
                    <div className="mt-3 flex items-center justify-center gap-1 text-xs text-success">
                      <CheckCircle2 className="w-3 h-3" />
                      Desbloqueado
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Skins */}
          <TabsContent value="skins" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Personalização</h2>
              <p className="text-muted-foreground">Desbloqueie e colecione skins exclusivas</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  name: 'Avatar Padrão', 
                  image: '/placeholder.svg?height=120&width=120',
                  unlocked: true,
                  equipped: true,
                  rarity: 'Comum'
                },
                { 
                  name: 'Guerreiro', 
                  image: '/placeholder.svg?height=120&width=120',
                  unlocked: true,
                  equipped: false,
                  rarity: 'Raro'
                },
                { 
                  name: 'Mago', 
                  image: '/placeholder.svg?height=120&width=120',
                  unlocked: true,
                  equipped: false,
                  rarity: 'Épico'
                },
                { 
                  name: 'Ninja', 
                  image: '/placeholder.svg?height=120&width=120',
                  unlocked: false,
                  rarity: 'Lendário',
                  requirement: 'Level 15'
                },
                { 
                  name: 'Dragão', 
                  image: '/placeholder.svg?height=120&width=120',
                  unlocked: false,
                  rarity: 'Lendário',
                  requirement: 'Level 25'
                },
                { 
                  name: 'Robô', 
                  image: '/placeholder.svg?height=120&width=120',
                  unlocked: false,
                  rarity: 'Épico',
                  requirement: 'Complete 10 cursos'
                },
              ].map((skin, i) => (
                <Card 
                  key={i} 
                  className={`overflow-hidden card-hover border-border/50 ${
                    skin.unlocked 
                      ? 'bg-card/80 backdrop-blur-sm' 
                      : 'bg-card/30 opacity-60'
                  }`}
                >
                  <div className="relative aspect-square bg-muted flex items-center justify-center">
                    <img 
                      src={skin.image || "/placeholder.svg"} 
                      alt={skin.name}
                      className={`w-full h-full object-cover ${!skin.unlocked && 'blur-sm'}`}
                    />
                    {skin.equipped && (
                      <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-success text-success-foreground text-xs font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Equipado
                      </div>
                    )}
                    {!skin.unlocked && (
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                        <Lock className="w-12 h-12 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold">{skin.name}</h3>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          skin.rarity === 'Lendário' ? 'border-accent text-accent' :
                          skin.rarity === 'Épico' ? 'border-secondary text-secondary' :
                          skin.rarity === 'Raro' ? 'border-primary text-primary' :
                          'border-muted-foreground text-muted-foreground'
                        }`}
                      >
                        {skin.rarity}
                      </Badge>
                    </div>
                    {skin.unlocked ? (
                      <Button 
                        className="w-full" 
                        variant={skin.equipped ? 'outline' : 'default'}
                        disabled={skin.equipped}
                      >
                        {skin.equipped ? 'Equipado' : 'Equipar'}
                      </Button>
                    ) : (
                      <p className="text-xs text-muted-foreground text-center">
                        {skin.requirement}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Estatísticas */}
          <TabsContent value="estatisticas" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Suas Estatísticas</h2>
              <p className="text-muted-foreground">Acompanhe seu progresso e evolução</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Progresso Geral</h3>
                    <p className="text-sm text-muted-foreground">Últimos 30 dias</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">XP Ganho</span>
                      <span className="font-bold">2,450 XP</span>
                    </div>
                    <Progress value={65} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Aulas Completadas</span>
                      <span className="font-bold">42 aulas</span>
                    </div>
                    <Progress value={70} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Tempo de Estudo</span>
                      <span className="font-bold">18h 32min</span>
                    </div>
                    <Progress value={55} />
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Flame className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Sequências</h3>
                    <p className="text-sm text-muted-foreground">Continue a sequência!</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent/20 to-destructive/20">
                    <div className="text-5xl font-bold mb-2">15</div>
                    <p className="text-sm text-muted-foreground">Dias seguidos estudando</p>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`aspect-square rounded-lg ${
                          i < 12 ? 'bg-success' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Cursos</h3>
                    <p className="text-sm text-muted-foreground">Seu desempenho</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'JavaScript', progress: 100, status: 'Concluído' },
                    { name: 'React Avançado', progress: 65, status: 'Em Progresso' },
                    { name: 'Node.js & APIs', progress: 42, status: 'Em Progresso' },
                    { name: 'TypeScript', progress: 0, status: 'Não Iniciado' },
                  ].map((course, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{course.name}</span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            course.status === 'Concluído' ? 'border-success text-success' :
                            course.status === 'Em Progresso' ? 'border-primary text-primary' :
                            'border-muted-foreground text-muted-foreground'
                          }`}
                        >
                          {course.status}
                        </Badge>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Ranking</h3>
                    <p className="text-sm text-muted-foreground">Sua posição global</p>
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20">
                    <Trophy className="w-8 h-8 text-accent" />
                    <div className="text-left">
                      <div className="text-3xl font-bold">#127</div>
                      <div className="text-xs text-muted-foreground">de 10.284 usuários</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Você está no top 2% dos estudantes!
                  </p>
                  <Link href="/dashboard/ranking">
                    <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/5">
                      Ver Ranking Completo
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

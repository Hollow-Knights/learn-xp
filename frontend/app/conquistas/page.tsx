import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Trophy, Star, Zap, Target, Award, Crown, Flame, Sparkles, Lock, CheckCircle2, BookOpen, TrendingUp, Calendar, Users, Code, Rocket, Shield, Heart, Smile, Coffee } from 'lucide-react'

export default function ConquistasPage() {
  const conquistas = [
    // Comuns
    { 
      icon: Trophy, 
      title: 'Primeira Vitória', 
      description: 'Complete seu primeiro curso',
      color: 'text-accent',
      unlocked: true,
      rarity: 'Comum',
      date: '15/01/2024',
      category: 'Progresso'
    },
    { 
      icon: Star, 
      title: 'Estrela Crescente', 
      description: 'Alcance o nível 10',
      color: 'text-primary',
      unlocked: true,
      rarity: 'Comum',
      date: '20/01/2024',
      category: 'Nível'
    },
    { 
      icon: BookOpen, 
      title: 'Leitor Ávido', 
      description: 'Complete 10 aulas',
      color: 'text-primary',
      unlocked: true,
      rarity: 'Comum',
      date: '10/01/2024',
      category: 'Progresso'
    },
    { 
      icon: Smile, 
      title: 'Primeiro Passo', 
      description: 'Complete sua primeira aula',
      color: 'text-success',
      unlocked: true,
      rarity: 'Comum',
      date: '05/01/2024',
      category: 'Progresso'
    },
    
    // Incomuns
    { 
      icon: Zap, 
      title: 'Velocista', 
      description: 'Complete 5 aulas em um dia',
      color: 'text-accent',
      unlocked: true,
      rarity: 'Incomum',
      date: '18/01/2024',
      category: 'Velocidade'
    },
    { 
      icon: Coffee, 
      title: 'Madrugador', 
      description: 'Estude antes das 6h da manhã',
      color: 'text-primary',
      unlocked: true,
      rarity: 'Incomum',
      date: '12/01/2024',
      category: 'Dedicação'
    },
    { 
      icon: Calendar, 
      title: 'Consistente', 
      description: 'Estude por 3 dias seguidos',
      color: 'text-success',
      unlocked: true,
      rarity: 'Incomum',
      date: '08/01/2024',
      category: 'Sequência'
    },

    // Raros
    { 
      icon: Flame, 
      title: 'Sequência de Fogo', 
      description: 'Estude por 7 dias seguidos',
      color: 'text-destructive',
      unlocked: true,
      rarity: 'Raro',
      date: '22/01/2024',
      category: 'Sequência'
    },
    { 
      icon: Target, 
      title: 'Certeiro', 
      description: 'Acerte 50 questões seguidas',
      color: 'text-success',
      unlocked: true,
      rarity: 'Raro',
      date: '25/01/2024',
      category: 'Precisão'
    },
    { 
      icon: TrendingUp, 
      title: 'Em Ascensão', 
      description: 'Suba 5 posições no ranking em uma semana',
      color: 'text-primary',
      unlocked: true,
      rarity: 'Raro',
      date: '19/01/2024',
      category: 'Ranking'
    },
    { 
      icon: Code, 
      title: 'Programador Dedicado', 
      description: 'Complete 50 aulas de programação',
      color: 'text-accent',
      unlocked: false,
      rarity: 'Raro',
      progress: 42,
      category: 'Progresso'
    },

    // Épicos
    { 
      icon: Award, 
      title: 'Perfeccionista', 
      description: 'Complete um curso com 100%',
      color: 'text-accent',
      unlocked: true,
      rarity: 'Épico',
      date: '28/01/2024',
      category: 'Perfeição'
    },
    { 
      icon: Rocket, 
      title: 'Foguete', 
      description: 'Ganhe 1000 XP em um único dia',
      color: 'text-secondary',
      unlocked: false,
      rarity: 'Épico',
      progress: 65,
      category: 'Velocidade'
    },
    { 
      icon: Shield, 
      title: 'Inabalável', 
      description: 'Mantenha uma sequência de 30 dias',
      color: 'text-primary',
      unlocked: false,
      rarity: 'Épico',
      progress: 50,
      category: 'Sequência'
    },
    { 
      icon: Users, 
      title: 'Mentor', 
      description: 'Ajude 10 estudantes',
      color: 'text-success',
      unlocked: false,
      rarity: 'Épico',
      progress: 30,
      category: 'Comunidade'
    },

    // Lendários
    { 
      icon: Crown, 
      title: 'Mestre React', 
      description: 'Complete todos os cursos de React',
      color: 'text-accent',
      unlocked: false,
      rarity: 'Lendário',
      progress: 75,
      category: 'Maestria'
    },
    { 
      icon: Sparkles, 
      title: 'Lenda Viva', 
      description: 'Alcance o nível 50',
      color: 'text-secondary',
      unlocked: false,
      rarity: 'Lendário',
      progress: 24,
      category: 'Nível'
    },
    { 
      icon: Heart, 
      title: 'Coração da Comunidade', 
      description: 'Ajude 100 estudantes',
      color: 'text-destructive',
      unlocked: false,
      rarity: 'Lendário',
      progress: 12,
      category: 'Comunidade'
    },
    { 
      icon: Trophy, 
      title: 'Campeão Global', 
      description: 'Alcance o 1º lugar no ranking global',
      color: 'text-accent',
      unlocked: false,
      rarity: 'Lendário',
      progress: 0,
      category: 'Ranking'
    },
  ]

  const unlockedCount = conquistas.filter(c => c.unlocked).length
  const totalCount = conquistas.length

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
          <h1 className="text-xl font-bold">Conquistas</h1>
          <div className="w-24" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Stats */}
        <Card className="p-8 mb-8 border-border/50 bg-gradient-to-br from-accent/20 via-card/50 to-secondary/20 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left flex-1">
              <Trophy className="w-16 h-16 text-accent mx-auto md:mx-0 mb-4 animate-float" />
              <h2 className="text-4xl font-bold mb-2">Suas Conquistas</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Continue colecionando badges e desbloqueie recompensas especiais
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-2xl font-bold text-primary">{unlockedCount}</span>
                <span className="text-muted-foreground">de {totalCount} desbloqueadas</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center border-border/50 bg-card/50">
                <div className="text-3xl font-bold text-accent mb-1">{unlockedCount}</div>
                <div className="text-xs text-muted-foreground">Desbloqueadas</div>
              </Card>
              <Card className="p-4 text-center border-border/50 bg-card/50">
                <div className="text-3xl font-bold text-primary mb-1">
                  {conquistas.filter(c => c.rarity === 'Lendário' && c.unlocked).length}
                </div>
                <div className="text-xs text-muted-foreground">Lendárias</div>
              </Card>
              <Card className="p-4 text-center border-border/50 bg-card/50">
                <div className="text-3xl font-bold text-success mb-1">
                  {((unlockedCount / totalCount) * 100).toFixed(0)}%
                </div>
                <div className="text-xs text-muted-foreground">Progresso</div>
              </Card>
              <Card className="p-4 text-center border-border/50 bg-card/50">
                <div className="text-3xl font-bold text-secondary mb-1">
                  {conquistas.filter(c => !c.unlocked && c.progress).length}
                </div>
                <div className="text-xs text-muted-foreground">Em Progresso</div>
              </Card>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progresso Geral</span>
              <span className="font-semibold">{((unlockedCount / totalCount) * 100).toFixed(1)}%</span>
            </div>
            <Progress value={(unlockedCount / totalCount) * 100} className="h-3" />
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="todas" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5">
            <TabsTrigger value="todas">Todas</TabsTrigger>
            <TabsTrigger value="desbloqueadas">Suas</TabsTrigger>
            <TabsTrigger value="progresso">Progresso</TabsTrigger>
            <TabsTrigger value="bloqueadas">Bloqueadas</TabsTrigger>
            <TabsTrigger value="raras">Raras</TabsTrigger>
          </TabsList>

          {/* Todas */}
          <TabsContent value="todas" className="space-y-6">
            {['Lendário', 'Épico', 'Raro', 'Incomum', 'Comum'].map((rarity) => {
              const items = conquistas.filter(c => c.rarity === rarity)
              if (items.length === 0) return null

              return (
                <div key={rarity}>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span 
                      className={`w-3 h-3 rounded-full ${
                        rarity === 'Lendário' ? 'bg-accent' :
                        rarity === 'Épico' ? 'bg-secondary' :
                        rarity === 'Raro' ? 'bg-primary' :
                        rarity === 'Incomum' ? 'bg-success' :
                        'bg-muted-foreground'
                      }`}
                    />
                    {rarity}
                    <span className="text-sm text-muted-foreground ml-2">
                      ({items.filter(i => i.unlocked).length}/{items.length})
                    </span>
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {items.map((badge, i) => (
                      <Card 
                        key={i} 
                        className={`p-6 text-center card-hover border-border/50 ${
                          badge.unlocked 
                            ? 'bg-card/80 backdrop-blur-sm' 
                            : 'bg-card/30 opacity-75'
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
                            badge.rarity === 'Incomum' ? 'border-success text-success' :
                            'border-muted-foreground text-muted-foreground'
                          }`}
                        >
                          {badge.rarity}
                        </Badge>
                        <h4 className="font-bold mb-2">{badge.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{badge.description}</p>
                        {badge.unlocked ? (
                          <div className="flex items-center justify-center gap-1 text-xs text-success">
                            <CheckCircle2 className="w-3 h-3" />
                            {badge.date}
                          </div>
                        ) : badge.progress ? (
                          <div className="space-y-1">
                            <Progress value={badge.progress} className="h-2" />
                            <div className="text-xs text-muted-foreground">{badge.progress}%</div>
                          </div>
                        ) : (
                          <div className="text-xs text-muted-foreground">Bloqueado</div>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </TabsContent>

          {/* Desbloqueadas */}
          <TabsContent value="desbloqueadas" className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {conquistas.filter(c => c.unlocked).map((badge, i) => (
                <Card 
                  key={i} 
                  className="p-6 text-center card-hover border-border/50 bg-card/80 backdrop-blur-sm"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 animate-float">
                    <badge.icon className={`w-10 h-10 ${badge.color}`} />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`mb-2 text-xs ${
                      badge.rarity === 'Lendário' ? 'border-accent text-accent' :
                      badge.rarity === 'Épico' ? 'border-secondary text-secondary' :
                      badge.rarity === 'Raro' ? 'border-primary text-primary' :
                      badge.rarity === 'Incomum' ? 'border-success text-success' :
                      'border-muted-foreground text-muted-foreground'
                    }`}
                  >
                    {badge.rarity}
                  </Badge>
                  <h4 className="font-bold mb-2">{badge.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{badge.description}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-success">
                    <CheckCircle2 className="w-3 h-3" />
                    {badge.date}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Em Progresso */}
          <TabsContent value="progresso" className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {conquistas.filter(c => !c.unlocked && c.progress).map((badge, i) => (
                <Card 
                  key={i} 
                  className="p-6 text-center card-hover border-border/50 bg-card/80 backdrop-blur-sm"
                >
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-10 h-10 text-muted-foreground" />
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
                  <h4 className="font-bold mb-2">{badge.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{badge.description}</p>
                  <div className="space-y-1">
                    <Progress value={badge.progress} className="h-2" />
                    <div className="text-xs text-muted-foreground">{badge.progress}% completo</div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Bloqueadas */}
          <TabsContent value="bloqueadas" className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {conquistas.filter(c => !c.unlocked).map((badge, i) => (
                <Card 
                  key={i} 
                  className="p-6 text-center card-hover border-border/50 bg-card/30 opacity-75"
                >
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-10 h-10 text-muted-foreground" />
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
                  <h4 className="font-bold mb-2">{badge.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{badge.description}</p>
                  {badge.progress ? (
                    <div className="space-y-1">
                      <Progress value={badge.progress} className="h-2" />
                      <div className="text-xs text-muted-foreground">{badge.progress}%</div>
                    </div>
                  ) : (
                    <div className="text-xs text-muted-foreground">Bloqueado</div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Raras */}
          <TabsContent value="raras" className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {conquistas.filter(c => ['Lendário', 'Épico'].includes(c.rarity)).map((badge, i) => (
                <Card 
                  key={i} 
                  className={`p-6 text-center card-hover border-border/50 ${
                    badge.unlocked 
                      ? 'bg-card/80 backdrop-blur-sm' 
                      : 'bg-card/30 opacity-75'
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
                      'border-secondary text-secondary'
                    }`}
                  >
                    {badge.rarity}
                  </Badge>
                  <h4 className="font-bold mb-2">{badge.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{badge.description}</p>
                  {badge.unlocked ? (
                    <div className="flex items-center justify-center gap-1 text-xs text-success">
                      <CheckCircle2 className="w-3 h-3" />
                      {badge.date}
                    </div>
                  ) : badge.progress ? (
                    <div className="space-y-1">
                      <Progress value={badge.progress} className="h-2" />
                      <div className="text-xs text-muted-foreground">{badge.progress}%</div>
                    </div>
                  ) : (
                    <div className="text-xs text-muted-foreground">Bloqueado</div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Trophy, Medal, Crown, Zap, TrendingUp, Star, Award, Flame } from 'lucide-react'

export default function RankingPage() {
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
          <h1 className="text-xl font-bold">Ranking Global</h1>
          <div className="w-24" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <Card className="p-8 mb-8 border-border/50 bg-gradient-to-br from-accent/20 via-card/50 to-secondary/20 backdrop-blur-sm text-center">
          <Trophy className="w-20 h-20 text-accent mx-auto mb-4 animate-float" />
          <h2 className="text-4xl font-bold mb-2">Ranking de Campeões</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Compete com milhares de estudantes ao redor do mundo
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10.284</div>
              <div className="text-sm text-muted-foreground">Total de Players</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">#127</div>
              <div className="text-sm text-muted-foreground">Sua Posição</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-success">Top 2%</div>
              <div className="text-sm text-muted-foreground">Percentil</div>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="global" className="space-y-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="mensal">Mensal</TabsTrigger>
            <TabsTrigger value="semanal">Semanal</TabsTrigger>
          </TabsList>

          <TabsContent value="global" className="space-y-6">
            {/* Top 3 Podium */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* 2nd Place */}
              <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm order-2 md:order-1 md:mt-8">
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <Avatar className="w-24 h-24 border-4 border-muted animate-float">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" />
                      <AvatarFallback>MA</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-muted flex items-center justify-center border-4 border-background">
                      <Medal className="w-6 h-6 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-muted-foreground mb-1">#2</div>
                    <h3 className="font-bold text-lg">Maria Santos</h3>
                    <p className="text-sm text-muted-foreground">@mariasantos</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Badge className="bg-primary/20 border-primary/30">
                      <Star className="w-3 h-3 mr-1" />
                      Level 18
                    </Badge>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="text-2xl font-bold text-primary">28.450 XP</div>
                    <div className="text-xs text-muted-foreground">Total acumulado</div>
                  </div>
                </div>
              </Card>

              {/* 1st Place */}
              <Card className="p-6 border-accent/30 bg-gradient-to-br from-accent/20 via-card/50 to-primary/20 backdrop-blur-sm order-1 md:order-2 animate-glow">
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <Avatar className="w-32 h-32 border-4 border-accent animate-float">
                      <AvatarImage src="/placeholder.svg?height=128&width=128" />
                      <AvatarFallback>PC</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-accent flex items-center justify-center border-4 border-background">
                      <Crown className="w-7 h-7 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-1">#1</div>
                    <h3 className="font-bold text-xl">Pedro Costa</h3>
                    <p className="text-sm text-muted-foreground">@pedrocosta</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Badge className="bg-accent/20 border-accent/30">
                      <Crown className="w-3 h-3 mr-1" />
                      Level 22
                    </Badge>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="text-3xl font-bold text-accent">35.980 XP</div>
                    <div className="text-xs text-muted-foreground">Total acumulado</div>
                  </div>
                </div>
              </Card>

              {/* 3rd Place */}
              <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm order-3 md:mt-8">
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <Avatar className="w-24 h-24 border-4 border-muted animate-float">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-muted flex items-center justify-center border-4 border-background">
                      <Award className="w-6 h-6 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-muted-foreground mb-1">#3</div>
                    <h3 className="font-bold text-lg">Ana Silva</h3>
                    <p className="text-sm text-muted-foreground">@anasilva</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Badge className="bg-primary/20 border-primary/30">
                      <Star className="w-3 h-3 mr-1" />
                      Level 17
                    </Badge>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="text-2xl font-bold text-primary">26.120 XP</div>
                    <div className="text-xs text-muted-foreground">Total acumulado</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Current User Position */}
            <Card className="p-4 border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-primary w-16 text-center">#127</div>
                <Avatar className="w-12 h-12 border-2 border-primary">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-bold">João Silva (Você)</h3>
                  <p className="text-sm text-muted-foreground">@joaosilva</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge className="bg-primary/20 border-primary/30">
                    <Star className="w-3 h-3 mr-1" />
                    Level 12
                  </Badge>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">8.450 XP</div>
                    <div className="text-xs text-muted-foreground">Total</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Ranking List */}
            <div className="space-y-3">
              {Array.from({ length: 20 }).map((_, i) => {
                const position = i + 4
                const user = {
                  name: `Usuário ${position}`,
                  username: `@usuario${position}`,
                  level: Math.floor(Math.random() * 10) + 10,
                  xp: Math.floor(Math.random() * 10000) + 5000,
                }
                return (
                  <Card 
                    key={i} 
                    className="p-4 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-lg font-bold text-muted-foreground w-12 text-center">
                        #{position}
                      </div>
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={`/generic-placeholder-graphic.png?height=40&width=40`} />
                        <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.username}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="border-primary/30">
                          <Star className="w-3 h-3 mr-1" />
                          Level {user.level}
                        </Badge>
                        <div className="text-right min-w-24">
                          <div className="font-bold text-primary">{user.xp.toLocaleString()} XP</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            <div className="text-center py-6">
              <Button variant="outline" className="border-primary/30 hover:bg-primary/5">
                Carregar Mais
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="mensal" className="space-y-4">
            <Card className="p-8 text-center border-border/50 bg-card/80 backdrop-blur-sm">
              <Flame className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Ranking do Mês</h3>
              <p className="text-muted-foreground mb-6">
                Competição mensal com recompensas especiais
              </p>
              <Badge className="bg-accent/20 border-accent/30 px-4 py-2 text-base">
                <TrendingUp className="w-4 h-4 mr-2" />
                Sua posição: #45
              </Badge>
            </Card>
          </TabsContent>

          <TabsContent value="semanal" className="space-y-4">
            <Card className="p-8 text-center border-border/50 bg-card/80 backdrop-blur-sm">
              <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Ranking da Semana</h3>
              <p className="text-muted-foreground mb-6">
                Competição semanal para os mais dedicados
              </p>
              <Badge className="bg-primary/20 border-primary/30 px-4 py-2 text-base">
                <TrendingUp className="w-4 h-4 mr-2" />
                Sua posição: #23
              </Badge>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

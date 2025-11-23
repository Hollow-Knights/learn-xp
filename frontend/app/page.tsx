import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Zap, Trophy, Star, Rocket, Target, Award, TrendingUp, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen game-pattern">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center animate-glow">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">LearnXP</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#cursos" className="text-foreground/80 hover:text-foreground transition-colors">
              Cursos
            </Link>
            <Link href="#sobre" className="text-foreground/80 hover:text-foreground transition-colors">
              Sobre
            </Link>
            <Link href="#ranking" className="text-foreground/80 hover:text-foreground transition-colors">
              Ranking
            </Link>
            <Link href="#premium" className="text-foreground/80 hover:text-foreground transition-colors">
              Premium
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="hover:bg-primary/10">
                Entrar
              </Button>
            </Link>
            <Link href="/cadastro">
              <Button className="bg-primary hover:bg-primary/90 animate-glow">
                Cadastrar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm animate-pulse-glow">
            <Star className="w-4 h-4 text-accent" />
            <span>+10.000 estudantes evoluindo suas skills</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Aprenda, Evolua e
            <span className="text-primary"> Domine </span>
            Novas Habilidades
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A plataforma de estudos mais gamificada do Brasil. Ganhe XP, suba de nível, 
            desbloqueie conquistas e se torne um mestre em programação!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/cadastro">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 animate-glow">
                <Rocket className="w-5 h-5 mr-2" />
                Começar Gratuitamente
              </Button>
            </Link>
            <Link href="#cursos">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5">
                Ver Cursos
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: 'Estudantes Ativos', value: '10k+', icon: Users },
              { label: 'Cursos Disponíveis', value: '50+', icon: Target },
              { label: 'XP Distribuído', value: '2M+', icon: Zap },
              { label: 'Conquistas', value: '200+', icon: Trophy },
            ].map((stat, i) => (
              <Card key={i} className="p-6 card-hover border-border/50 bg-card/50 backdrop-blur-sm">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20" id="sobre">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por que escolher a <span className="text-primary">LearnXP</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme o aprendizado em uma jornada épica com nosso sistema de gamificação completo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: 'Sistema de XP',
              description: 'Ganhe pontos de experiência a cada aula completada e veja seu progresso em tempo real',
              color: 'text-primary',
            },
            {
              icon: TrendingUp,
              title: 'Sistema de Níveis',
              description: 'Suba de nível e desbloqueie novos cursos, badges exclusivos e recursos premium',
              color: 'text-accent',
            },
            {
              icon: Trophy,
              title: 'Conquistas e Badges',
              description: 'Colecione mais de 200 conquistas únicas e mostre suas habilidades',
              color: 'text-success',
            },
            {
              icon: Star,
              title: 'Skins de Avatar',
              description: 'Personalize seu perfil com skins e temas desbloqueáveis',
              color: 'text-secondary',
            },
            {
              icon: Target,
              title: 'Cursos Progressivos',
              description: 'Conteúdo que evolui com você, sempre no nível certo de dificuldade',
              color: 'text-primary',
            },
            {
              icon: Award,
              title: 'Ranking Global',
              description: 'Compete com estudantes do mundo todo e prove que você é o melhor',
              color: 'text-accent',
            },
          ].map((feature, i) => (
            <Card 
              key={i} 
              className="p-8 card-hover border-border/50 bg-card/50 backdrop-blur-sm group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Courses Preview */}
      <section className="container mx-auto px-4 py-20" id="cursos">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cursos <span className="text-primary">Populares</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha entre dezenas de trilhas de aprendizado e comece sua jornada hoje mesmo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'JavaScript Completo',
              level: 'Iniciante',
              xp: '5000 XP',
              lessons: '48 aulas',
              students: '2.5k',
              image: '/javascript-code-editor-dark-theme.jpg',
            },
            {
              title: 'React Avançado',
              level: 'Intermediário',
              xp: '8000 XP',
              lessons: '64 aulas',
              students: '1.8k',
              image: '/react-code-components-dark-theme.jpg',
            },
            {
              title: 'Node.js & APIs',
              level: 'Intermediário',
              xp: '7500 XP',
              lessons: '52 aulas',
              students: '1.2k',
              image: '/nodejs-api-backend-dark-theme.jpg',
            },
            {
              title: 'Python para Data Science',
              level: 'Iniciante',
              xp: '6000 XP',
              lessons: '40 aulas',
              students: '3.1k',
              image: '/python-data-science-graphs-dark.jpg',
            },
            {
              title: 'TypeScript Masterclass',
              level: 'Avançado',
              xp: '10000 XP',
              lessons: '72 aulas',
              students: '890',
              image: '/typescript-code-editor-dark.jpg',
            },
            {
              title: 'Next.js Full Stack',
              level: 'Avançado',
              xp: '12000 XP',
              lessons: '80 aulas',
              students: '750',
              image: '/nextjs-fullstack-app-dark-theme.jpg',
            },
          ].map((course, i) => (
            <Card key={i} className="overflow-hidden card-hover border-border/50 bg-card/50 backdrop-blur-sm group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image || "/placeholder.svg"} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  {course.level}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{course.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-primary" />
                    {course.xp}
                  </span>
                  <span>{course.lessons}</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Começar Curso
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/cursos">
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
              Ver Todos os Cursos
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="p-12 md:p-16 text-center bg-gradient-to-br from-primary/20 via-card/50 to-secondary/20 border-primary/30 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-sm animate-pulse-glow">
              <Trophy className="w-4 h-4 text-accent" />
              <span>Primeira semana grátis para novos alunos!</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Pronto para começar sua jornada épica?
            </h2>
            
            <p className="text-xl text-muted-foreground text-pretty">
              Junte-se a milhares de estudantes que já estão evoluindo suas habilidades e 
              conquistando novos patamares na carreira!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cadastro">
                <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground animate-glow">
                  <Rocket className="w-5 h-5 mr-2" />
                  Criar Conta Grátis
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5">
                  Já tenho conta
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">LearnXP</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A plataforma de estudos mais gamificada do Brasil
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Plataforma</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Cursos</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Ranking</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Conquistas</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Premium</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Sobre</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Carreiras</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contato</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Termos de Uso</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacidade</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 LearnXP. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

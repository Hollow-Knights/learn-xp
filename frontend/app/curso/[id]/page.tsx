'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowLeft, Zap, CheckCircle2, Circle, Lock, ChevronDown, ChevronUp, Trophy, Play } from 'lucide-react'

export default function CursoPage() {
  const [currentLesson, setCurrentLesson] = useState(1)
  const [expandedModule, setExpandedModule] = useState(1)
  const [userXP, setUserXP] = useState(8450)

  const modules = [
    {
      id: 1,
      title: 'Introdução ao React',
      lessons: [
        { id: 1, title: 'O que é React?', duration: '12 min', completed: true, xp: 100 },
        { id: 2, title: 'Configurando o ambiente', duration: '18 min', completed: true, xp: 150 },
        { id: 3, title: 'Primeiro componente', duration: '15 min', completed: false, xp: 150 },
      ],
    },
    {
      id: 2,
      title: 'Componentes e Props',
      lessons: [
        { id: 4, title: 'Criando componentes', duration: '20 min', completed: false, xp: 200 },
        { id: 5, title: 'Props e comunicação', duration: '22 min', completed: false, xp: 200 },
        { id: 6, title: 'Children props', duration: '16 min', completed: false, xp: 150 },
      ],
    },
    {
      id: 3,
      title: 'State e Hooks',
      lessons: [
        { id: 7, title: 'useState Hook', duration: '25 min', locked: false, xp: 250 },
        { id: 8, title: 'useEffect Hook', duration: '28 min', locked: false, xp: 300 },
        { id: 9, title: 'Custom Hooks', duration: '30 min', locked: true, xp: 350 },
      ],
    },
  ]

  const handleCompleteLesson = () => {
    const lesson = modules
      .flatMap(m => m.lessons)
      .find(l => l.id === currentLesson)
    
    if (lesson) {
      setUserXP(prev => prev + lesson.xp)
      // Aqui você marcaria a aula como concluída no backend
    }
  }

  return (
    <div className="min-h-screen game-pattern">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="font-bold text-lg">React Avançado</h1>
              <p className="text-sm text-muted-foreground">Aula {currentLesson} de 9</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
              <Zap className="w-4 h-4 text-accent" />
              <span className="font-bold text-sm">{userXP} XP</span>
            </div>
            <Avatar className="w-10 h-10 border-2 border-primary">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <img 
                  src="/placeholder.svg?height=480&width=854"
                  alt="Video player"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button size="lg" className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90">
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    O que é React?
                  </h2>
                  <p className="text-muted-foreground">
                    Nesta aula introdutória, você vai aprender o que é React, por que ele é tão popular 
                    e como ele vai transformar sua maneira de desenvolver aplicações web.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>PM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Prof. Maria Silva</p>
                    <p className="text-sm text-muted-foreground">Instrutora React</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <Button 
                    onClick={handleCompleteLesson}
                    className="flex-1 bg-success hover:bg-success/90 text-success-foreground"
                    size="lg"
                  >
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Marcar como Concluída (+100 XP)
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary/30 hover:bg-primary/5"
                  >
                    Próxima Aula
                  </Button>
                </div>
              </div>
            </Card>

            {/* Course Info */}
            <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-4">Sobre o Curso</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Domine o React do básico ao avançado neste curso completo. Aprenda a criar 
                  aplicações modernas, escaláveis e performáticas utilizando as melhores práticas 
                  do mercado.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <p className="text-foreground font-semibold">64 aulas</p>
                    <p className="text-xs">Conteúdo completo</p>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">8000 XP</p>
                    <p className="text-xs">Total disponível</p>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">18h</p>
                    <p className="text-xs">Duração total</p>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Certificado</p>
                    <p className="text-xs">Ao concluir</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Lessons Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm sticky top-24">
              <div className="p-6 border-b border-border/50">
                <h3 className="font-bold text-lg mb-4">Conteúdo do Curso</h3>
                <div className="space-y-2">
                  <Progress value={22} className="h-2" />
                  <p className="text-sm text-muted-foreground">2 de 9 aulas concluídas (22%)</p>
                </div>
              </div>

              <div className="max-h-[600px] overflow-y-auto">
                {modules.map((module) => (
                  <div key={module.id} className="border-b border-border/50 last:border-0">
                    <button
                      onClick={() => setExpandedModule(expandedModule === module.id ? 0 : module.id)}
                      className="w-full p-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                          {module.id}
                        </div>
                        <span className="font-semibold text-sm text-left">{module.title}</span>
                      </div>
                      {expandedModule === module.id ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>

                    {expandedModule === module.id && (
                      <div className="px-4 pb-2">
                        {module.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => !lesson.locked && setCurrentLesson(lesson.id)}
                            className={`w-full p-3 flex items-center gap-3 rounded-lg hover:bg-primary/5 transition-colors ${
                              currentLesson === lesson.id ? 'bg-primary/10 border border-primary/30' : ''
                            } ${lesson.locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            disabled={lesson.locked}
                          >
                            <div>
                              {lesson.completed ? (
                                <CheckCircle2 className="w-5 h-5 text-success" />
                              ) : lesson.locked ? (
                                <Lock className="w-5 h-5 text-muted-foreground" />
                              ) : (
                                <Circle className="w-5 h-5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="flex-1 text-left">
                              <p className="text-sm font-medium">{lesson.title}</p>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                <span>{lesson.duration}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1 text-primary">
                                  <Zap className="w-3 h-3" />
                                  {lesson.xp} XP
                                </span>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-border/50 bg-gradient-to-br from-accent/10 to-success/10">
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-semibold text-sm">Conquista Desbloqueável</p>
                    <p className="text-xs text-muted-foreground">Complete o curso</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent to-success w-[22%]" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

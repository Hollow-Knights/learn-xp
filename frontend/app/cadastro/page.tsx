'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowLeft, ArrowRight, Zap, CheckCircle2 } from 'lucide-react'

export default function CadastroPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    cpf: '',
    interest1: false,
    interest2: false,
    interest3: false,
    interest4: false,
    interest5: false,
    interest6: false,
    interest7: false,
    interest8: false,
  })

  const handleNext = () => {
    if (step === 1) setStep(2)
  }

  const handleBack = () => {
    if (step === 2) setStep(1)
  }

  const handleSubmit = () => {
    console.log('Cadastro concluído:', formData)
    // Aqui você faria a integração com o backend
    window.location.href = '/dashboard'
  }

  const interests = [
    { id: 'interest1', label: 'Desenvolvimento Web', desc: 'HTML, CSS, JavaScript, React, Node.js' },
    { id: 'interest2', label: 'Desenvolvimento Mobile', desc: 'React Native, Flutter, Swift' },
    { id: 'interest3', label: 'Data Science', desc: 'Python, Machine Learning, IA' },
    { id: 'interest4', label: 'DevOps & Cloud', desc: 'AWS, Docker, Kubernetes' },
    { id: 'interest5', label: 'Design UI/UX', desc: 'Figma, Adobe XD, Prototipação' },
    { id: 'interest6', label: 'Backend & APIs', desc: 'Node.js, Python, Java, APIs REST' },
    { id: 'interest7', label: 'Banco de Dados', desc: 'SQL, MongoDB, PostgreSQL' },
    { id: 'interest8', label: 'Segurança', desc: 'Cybersecurity, Ethical Hacking' },
    { id: 'interest9', label: 'Inteligência Artificial', desc: 'Deep Learning, Neural Networks' },
    { id: 'interest10', label: 'Game Development', desc: 'Unity, Unreal Engine, Godot' },
    { id: 'interest11', label: 'Blockchain', desc: 'Ethereum, Smart Contracts, Web3' },
    { id: 'interest12', label: 'IoT', desc: 'Arduino, Raspberry Pi, Sensores' },
  ]

  return (
    <div className="min-h-screen game-pattern flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar para home
          </Link>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center animate-glow">
              <Zap className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="text-3xl font-bold">LearnXP</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Crie sua conta
          </h1>
          <p className="text-muted-foreground">
            Comece sua jornada épica de aprendizado hoje mesmo!
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-primary bg-primary text-primary-foreground' : 'border-muted'}`}>
              {step > 1 ? <CheckCircle2 className="w-5 h-5" /> : '1'}
            </div>
            <span className="hidden sm:inline text-sm font-medium">Dados Pessoais</span>
          </div>
          
          <div className={`w-16 h-0.5 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
          
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-primary bg-primary text-primary-foreground' : 'border-muted'}`}>
              2
            </div>
            <span className="hidden sm:inline text-sm font-medium">Interesses</span>
          </div>
        </div>

        <Card className="p-8 md:p-10 border-border/50 bg-card/80 backdrop-blur-sm">
          {step === 1 && (
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  placeholder="João Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Nome de Usuário</Label>
                <Input
                  id="username"
                  placeholder="@joaosilva"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="joao@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cpf">CPF</Label>
                <Input
                  id="cpf"
                  placeholder="000.000.000-00"
                  value={formData.cpf}
                  onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                  className="bg-background/50"
                />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                  Concordo com os termos de uso e política de privacidade
                </Label>
              </div>

              <Button 
                onClick={handleNext}
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                size="lg"
              >
                Continuar
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-slide-up">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Quais são seus interesses?</h2>
                <p className="text-muted-foreground">
                  Vamos personalizar sua experiência de aprendizado
                </p>
              </div>

              <div className="max-h-96 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                {interests.map((interest) => (
                  <Card 
                    key={interest.id}
                    className={`p-4 cursor-pointer transition-all border-2 ${
                      formData[interest.id as keyof typeof formData] 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border/50 hover:border-primary/50'
                    }`}
                    onClick={() => setFormData({ ...formData, [interest.id]: !formData[interest.id as keyof typeof formData] })}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox 
                        id={interest.id}
                        checked={formData[interest.id as keyof typeof formData] as boolean}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <Label htmlFor={interest.id} className="text-lg font-semibold cursor-pointer">
                          {interest.label}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">{interest.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 text-lg py-6 border-primary/30"
                  size="lg"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar
                </Button>
                <Button 
                  onClick={handleSubmit}
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 animate-glow"
                  size="lg"
                >
                  Concluir Cadastro
                  <CheckCircle2 className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Já tem uma conta?{' '}
          <Link href="/login" className="text-primary hover:underline font-medium">
            Fazer login
          </Link>
        </p>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Camera, Save, X, Mail, User, AtSign, FileText } from 'lucide-react'

export default function EditarPerfilPage() {
  const [formData, setFormData] = useState({
    name: 'João Silva',
    username: 'joaosilva',
    email: 'joao@exemplo.com',
    bio: 'Estudante apaixonado por tecnologia e programação. Sempre buscando aprender algo novo!',
    avatar: '/placeholder.svg?height=128&width=128',
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    console.log('Salvando perfil:', formData)
    setIsEditing(false)
    // Aqui você faria a integração com o backend
  }

  const handleCancel = () => {
    // Resetar para valores originais
    setFormData({
      name: 'João Silva',
      username: 'joaosilva',
      email: 'joao@exemplo.com',
      bio: 'Estudante apaixonado por tecnologia e programação. Sempre buscando aprender algo novo!',
      avatar: '/placeholder.svg?height=128&width=128',
    })
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen game-pattern">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/perfil">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Editar Perfil</h1>
          <div className="w-24" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Card className="p-8 border-border/50 bg-card/80 backdrop-blur-sm">
          {/* Avatar Section */}
          <div className="text-center mb-8 pb-8 border-b border-border">
            <div className="relative inline-block mb-4">
              <Avatar className="w-32 h-32 border-4 border-primary">
                <AvatarImage src={formData.avatar || "/placeholder.svg"} />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-primary hover:bg-primary/90"
                onClick={() => {
                  // Aqui você abriria um modal para upload de imagem
                  console.log('Upload avatar')
                }}
              >
                <Camera className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Clique no ícone para alterar sua foto de perfil
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-base">
                <User className="w-4 h-4 text-primary" />
                Nome Completo
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value })
                  setIsEditing(true)
                }}
                className="bg-background/50 text-base"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="username" className="flex items-center gap-2 text-base">
                <AtSign className="w-4 h-4 text-primary" />
                Nome de Usuário
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  @
                </span>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value.replace('@', '') })
                    setIsEditing(true)
                  }}
                  className="bg-background/50 text-base pl-8"
                  placeholder="seuusuario"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Seu nome de usuário é único e será usado na URL do seu perfil
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-base">
                <Mail className="w-4 h-4 text-primary" />
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
                  setIsEditing(true)
                }}
                className="bg-background/50 text-base"
                placeholder="seu@email.com"
              />
              <p className="text-xs text-muted-foreground">
                Seu e-mail não será exibido publicamente
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio" className="flex items-center gap-2 text-base">
                <FileText className="w-4 h-4 text-primary" />
                Biografia
              </Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => {
                  setFormData({ ...formData, bio: e.target.value })
                  setIsEditing(true)
                }}
                className="bg-background/50 min-h-32 resize-none"
                placeholder="Conte um pouco sobre você..."
                maxLength={200}
              />
              <p className="text-xs text-muted-foreground text-right">
                {formData.bio.length}/200 caracteres
              </p>
            </div>

            {/* Privacy Info */}
            <Card className="p-4 border-primary/30 bg-primary/5">
              <h3 className="font-semibold mb-2 text-sm">Informações de Privacidade</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Seu nome e nome de usuário são públicos</li>
                <li>• Seu e-mail permanece privado e seguro</li>
                <li>• Sua biografia pode ser visualizada por outros usuários</li>
              </ul>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              {isEditing ? (
                <>
                  <Button
                    variant="outline"
                    className="flex-1 border-destructive/30 text-destructive hover:bg-destructive/10"
                    onClick={handleCancel}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancelar
                  </Button>
                  <Button
                    className="flex-1 bg-success hover:bg-success/90 text-success-foreground"
                    onClick={handleSave}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Alterações
                  </Button>
                </>
              ) : (
                <Link href="/perfil" className="w-full">
                  <Button variant="outline" className="w-full border-primary/30">
                    Voltar ao Perfil
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </Card>

        {/* Additional Settings */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-4">Preferências de Notificação</h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm">E-mails de novos cursos</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm">Notificações de conquistas</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm">Atualizações semanais</span>
                <input type="checkbox" className="toggle" />
              </label>
            </div>
          </Card>

          <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-4">Privacidade do Perfil</h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm">Perfil público</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm">Mostrar no ranking</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm">Permitir mensagens</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
            </div>
          </Card>
        </div>

        {/* Danger Zone */}
        <Card className="mt-6 p-6 border-destructive/30 bg-destructive/5">
          <h3 className="font-bold text-lg mb-2 text-destructive">Zona de Perigo</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Ações irreversíveis que afetarão permanentemente sua conta
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="border-destructive/30 text-destructive hover:bg-destructive/10">
              Desativar Conta
            </Button>
            <Button variant="outline" className="border-destructive/30 text-destructive hover:bg-destructive/10">
              Excluir Conta
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

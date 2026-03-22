<template>
    <div class="min-h-screen bg-[#050714] flex overflow-hidden relative select-none">

        <!-- ── Orbs de fundo animados ── -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
            <div
                class="animate-orb-1 absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-25"
                style="background: radial-gradient(circle, #7c3aed 0%, transparent 65%); filter: blur(80px);"
            ></div>
            <div
                class="animate-orb-2 absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
                style="background: radial-gradient(circle, #2563eb 0%, transparent 65%); filter: blur(80px);"
            ></div>
            <div
                class="animate-orb-3 absolute top-1/2 left-1/3 w-[450px] h-[450px] rounded-full opacity-10"
                style="background: radial-gradient(circle, #059669 0%, transparent 65%); filter: blur(100px);"
            ></div>
        </div>

        <!-- ── Grid overlay ── -->
        <div class="grid-overlay fixed inset-0 opacity-100 pointer-events-none"></div>

        <!-- ══════════════════════════════════════════════════════════
             PAINEL ESQUERDO — Branding
             ══════════════════════════════════════════════════════════ -->
        <div class="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center px-12 py-16 animate-slide-left">

            <!-- Logo -->
            <div class="flex items-center gap-4 mb-10 self-start">
                <div class="relative">
                    <div
                        class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                        style="background: linear-gradient(135deg, #7c3aed, #3b82f6);"
                    >
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                        </svg>
                    </div>
                    <div
                        class="animate-pulse-ring absolute inset-0 rounded-2xl"
                        style="border: 2px solid rgba(124, 58, 237, 0.6);"
                    ></div>
                </div>
                <span class="text-4xl font-black gradient-text-static tracking-tight">LaraChat</span>
            </div>

            <!-- Headline -->
            <div class="self-start mb-8">
                <h1 class="text-5xl xl:text-6xl font-black text-white leading-tight mb-5">
                    Comunicação em<br>
                    <span class="gradient-text">tempo real</span><br>
                    para equipes<br>modernas.
                </h1>
                <p class="text-gray-400 text-lg leading-relaxed max-w-md">
                    Conecte sua equipe, acelere decisões e transforme
                    a maneira como vocês colaboram — em qualquer lugar.
                </p>
            </div>

            <!-- Chat bubbles ilustrativas -->
            <div class="relative w-full max-w-md mb-10">

                <!-- Linha de rede decorativa -->
                <div class="absolute inset-0 pointer-events-none opacity-20">
                    <svg class="w-full h-full" viewBox="0 0 400 200" fill="none">
                        <line x1="80" y1="40" x2="200" y2="100" stroke="url(#ln1)" stroke-width="1"/>
                        <line x1="320" y1="60" x2="200" y2="100" stroke="url(#ln2)" stroke-width="1"/>
                        <line x1="200" y1="100" x2="150" y2="170" stroke="url(#ln3)" stroke-width="1"/>
                        <circle cx="80"  cy="40"  r="4" fill="#7c3aed" opacity="0.8"/>
                        <circle cx="320" cy="60"  r="4" fill="#3b82f6" opacity="0.8"/>
                        <circle cx="200" cy="100" r="6" fill="#a855f7" opacity="0.9"/>
                        <circle cx="150" cy="170" r="4" fill="#06b6d4" opacity="0.8"/>
                        <defs>
                            <linearGradient id="ln1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#7c3aed"/>
                                <stop offset="100%" stop-color="#a855f7"/>
                            </linearGradient>
                            <linearGradient id="ln2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#3b82f6"/>
                                <stop offset="100%" stop-color="#06b6d4"/>
                            </linearGradient>
                            <linearGradient id="ln3" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#a855f7"/>
                                <stop offset="100%" stop-color="#06b6d4"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <!-- Bubble 1 -->
                <div class="animate-float glass-bubble rounded-2xl p-4 mb-3 max-w-xs ml-auto">
                    <div class="flex items-center gap-2 mb-2">
                        <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                             style="background: linear-gradient(135deg, #7c3aed, #a855f7);">A</div>
                        <span class="text-gray-400 text-xs font-medium">Ana Silva</span>
                        <div class="w-1.5 h-1.5 rounded-full bg-green-400 ml-auto"></div>
                    </div>
                    <p class="text-white text-sm">Deploy feito! 🚀 Tudo funcionando!</p>
                    <span class="text-gray-600 text-xs mt-1 block">agora mesmo</span>
                </div>

                <!-- Bubble 2 -->
                <div class="animate-float-2 glass-bubble rounded-2xl p-4 mb-3 max-w-xs" style="animation-delay: 1.5s;">
                    <div class="flex items-center gap-2 mb-2">
                        <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                             style="background: linear-gradient(135deg, #2563eb, #06b6d4);">C</div>
                        <span class="text-gray-400 text-xs font-medium">Carlos Dev</span>
                        <div class="w-1.5 h-1.5 rounded-full bg-green-400 ml-auto"></div>
                    </div>
                    <p class="text-white text-sm">Velocidade 10× melhor! 🔥</p>
                    <span class="text-gray-600 text-xs mt-1 block">há 1 min</span>
                </div>

                <!-- Bubble 3 -->
                <div class="animate-float-3 glass-bubble rounded-2xl p-4 max-w-xs ml-auto" style="animation-delay: 3s;">
                    <div class="flex items-center gap-2 mb-2">
                        <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                             style="background: linear-gradient(135deg, #059669, #06b6d4);">M</div>
                        <span class="text-gray-400 text-xs font-medium">Maria Tech</span>
                        <div class="w-1.5 h-1.5 rounded-full bg-yellow-400 ml-auto"></div>
                    </div>
                    <p class="text-white text-sm">Interface incrível! 💎 Adorei!</p>
                    <span class="text-gray-600 text-xs mt-1 block">há 2 min</span>
                </div>

                <!-- Indicador de typing -->
                <div class="flex items-center gap-2 mt-3 ml-3">
                    <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                         style="background: linear-gradient(135deg, #7c3aed, #3b82f6);">R</div>
                    <div class="glass-bubble rounded-2xl px-4 py-2 flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style="animation-delay: 0s;"></span>
                        <span class="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style="animation-delay: 0.15s;"></span>
                        <span class="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style="animation-delay: 0.3s;"></span>
                    </div>
                    <span class="text-gray-600 text-xs">Rafael está digitando...</span>
                </div>
            </div>

            <!-- Stats -->
            <div class="flex gap-8 self-start">
                <div class="text-center">
                    <div class="text-2xl font-black gradient-text-static">99.9%</div>
                    <div class="text-xs text-gray-500 mt-1">Uptime</div>
                </div>
                <div class="w-px bg-white/10 self-stretch"></div>
                <div class="text-center">
                    <div class="text-2xl font-black gradient-text-static">&lt;50ms</div>
                    <div class="text-xs text-gray-500 mt-1">Latência</div>
                </div>
                <div class="w-px bg-white/10 self-stretch"></div>
                <div class="text-center">
                    <div class="text-2xl font-black gradient-text-static">256-bit</div>
                    <div class="text-xs text-gray-500 mt-1">Criptografia</div>
                </div>
                <div class="w-px bg-white/10 self-stretch"></div>
                <div class="text-center">
                    <div class="text-2xl font-black gradient-text-static">+2.4k</div>
                    <div class="text-xs text-gray-500 mt-1">Equipes</div>
                </div>
            </div>
        </div>

        <!-- ══════════════════════════════════════════════════════════
             PAINEL DIREITO — Formulário
             ══════════════════════════════════════════════════════════ -->
        <div class="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12 lg:px-16 animate-slide-right">

            <!-- Logo mobile -->
            <div class="lg:hidden flex items-center gap-3 mb-10">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center"
                     style="background: linear-gradient(135deg, #7c3aed, #3b82f6);">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                </div>
                <span class="text-2xl font-black gradient-text-static">LaraChat</span>
            </div>

            <!-- Card do formulário -->
            <div
                class="w-full max-w-md glass-card rounded-3xl p-8 lg:p-10 animate-fade-up"
                style="box-shadow: 0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(168,85,247,0.12), inset 0 1px 0 rgba(255,255,255,0.05);"
            >
                <!-- Header do card -->
                <div class="mb-8">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="w-1 h-6 rounded-full" style="background: linear-gradient(180deg, #a855f7, #3b82f6);"></div>
                        <span class="text-xs font-semibold text-gray-500 uppercase tracking-widest">Acesso à plataforma</span>
                    </div>
                    <h2 class="text-3xl font-black text-white mb-2">Bem-vindo de volta</h2>
                    <p class="text-gray-500 text-sm">Entre na sua conta para continuar colaborando</p>
                </div>

                <!-- Alert de erro global -->
                <Transition name="fade-alert">
                    <div
                        v-if="erro"
                        class="mb-6 px-4 py-3 rounded-2xl text-sm text-red-300 flex items-center gap-3"
                        style="background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.2);"
                    >
                        <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                        </svg>
                        {{ erro }}
                    </div>
                </Transition>

                <form @submit.prevent="handleSubmit" class="space-y-5">

                    <!-- Campo: E-mail -->
                    <div>
                        <label class="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                        <div class="relative">
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style="color: rgba(255,255,255,0.25);">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                                </svg>
                            </div>
                            <input
                                v-model="form.email"
                                type="email"
                                placeholder="seu@email.com"
                                required
                                class="auth-input w-full pl-12 pr-4 py-4 rounded-2xl text-sm"
                                :class="{ 'border-red-500/50': erros.email }"
                            />
                        </div>
                        <p v-if="erros.email" class="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                            </svg>
                            {{ erros.email }}
                        </p>
                    </div>

                    <!-- Campo: Senha -->
                    <div>
                        <label class="block text-sm font-medium text-gray-300 mb-2">Senha</label>
                        <div class="relative">
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style="color: rgba(255,255,255,0.25);">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                </svg>
                            </div>
                            <input
                                v-model="form.senha"
                                :type="mostrarSenha ? 'text' : 'password'"
                                placeholder="••••••••"
                                required
                                class="auth-input w-full pl-12 pr-12 py-4 rounded-2xl text-sm"
                                :class="{ 'border-red-500/50': erros.senha }"
                            />
                            <button
                                type="button"
                                @click="mostrarSenha = !mostrarSenha"
                                class="absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-200"
                                style="color: rgba(255,255,255,0.25);"
                                tabindex="-1"
                            >
                                <svg v-if="!mostrarSenha" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                </svg>
                                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                                </svg>
                            </button>
                        </div>
                        <p v-if="erros.senha" class="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                            </svg>
                            {{ erros.senha }}
                        </p>
                    </div>

                    <!-- Botão de submit -->
                    <button
                        type="submit"
                        :disabled="carregando"
                        class="btn-gradient w-full py-4 rounded-2xl text-white font-bold text-sm tracking-wide mt-2"
                    >
                        <span v-if="!carregando" class="flex items-center justify-center gap-2">
                            Entrar na plataforma
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                            </svg>
                        </span>
                        <span v-else class="flex items-center justify-center gap-2">
                            <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                            </svg>
                            Autenticando...
                        </span>
                    </button>
                </form>

                <!-- Divisor -->
                <div class="flex items-center gap-4 my-6">
                    <div class="flex-1 h-px" style="background: rgba(255,255,255,0.06);"></div>
                    <span class="text-gray-600 text-xs tracking-widest uppercase">ou</span>
                    <div class="flex-1 h-px" style="background: rgba(255,255,255,0.06);"></div>
                </div>

                <!-- Link para registro -->
                <p class="text-center text-sm text-gray-500">
                    Não tem uma conta?
                    <RouterLink
                        to="/register"
                        class="ml-1 font-semibold gradient-text-static hover:opacity-80 transition-opacity"
                    >
                        Criar conta gratuita →
                    </RouterLink>
                </p>
            </div>

            <!-- Badge de segurança -->
            <div class="flex items-center gap-2 mt-6 text-gray-700 text-xs">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                Conexão protegida com SSL 256-bit · Dados criptografados
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth    = useAuthStore()
const router  = useRouter()

const carregando   = ref(false)
const erro         = ref('')
const erros        = reactive({})
const mostrarSenha = ref(false)

const form = reactive({
    email: '',
    senha: '',
})

async function handleSubmit() {
    carregando.value = true
    erro.value       = ''
    Object.keys(erros).forEach(k => delete erros[k])

    try {
        await auth.login(form.email, form.senha)
        router.push('/dashboard')
    } catch (e) {
        const camposComErro = e.response?.data?.errors
        if (camposComErro) {
            Object.assign(erros, Object.fromEntries(
                Object.entries(camposComErro).map(([k, v]) => [k, v[0]])
            ))
        } else {
            erro.value = e.response?.data?.message || 'Credenciais inválidas. Tente novamente.'
        }
    } finally {
        carregando.value = false
    }
}
</script>

<style scoped>
.fade-alert-enter-active,
.fade-alert-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-alert-enter-from,
.fade-alert-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>

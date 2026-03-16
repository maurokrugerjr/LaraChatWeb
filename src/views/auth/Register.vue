<template>
    <div class="min-h-screen bg-[#050714] flex overflow-hidden relative select-none">

        <!-- ── Orbs de fundo animados ── -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
            <div
                class="animate-orb-2 absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full opacity-20"
                style="background: radial-gradient(circle, #7c3aed 0%, transparent 65%); filter: blur(80px);"
            ></div>
            <div
                class="animate-orb-1 absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
                style="background: radial-gradient(circle, #0891b2 0%, transparent 65%); filter: blur(80px);"
            ></div>
            <div
                class="animate-orb-3 absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full opacity-10"
                style="background: radial-gradient(circle, #059669 0%, transparent 65%); filter: blur(90px);"
            ></div>
        </div>

        <!-- ── Grid overlay ── -->
        <div class="grid-overlay fixed inset-0 pointer-events-none"></div>

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
            <div class="self-start mb-10">
                <h1 class="text-5xl xl:text-6xl font-black text-white leading-tight mb-5">
                    Junte-se a milhares<br>
                    de equipes que<br>
                    <span class="gradient-text">colaboram melhor.</span>
                </h1>
                <p class="text-gray-400 text-lg leading-relaxed max-w-md">
                    Configure sua equipe em minutos. Sem cartão de crédito.
                    Comece a colaborar em tempo real hoje mesmo.
                </p>
            </div>

            <!-- Feature list -->
            <div class="self-start space-y-4 mb-10 w-full max-w-md">
                <div
                    v-for="feature in funcionalidades"
                    :key="feature.title"
                    class="glass-bubble rounded-2xl p-4 flex items-center gap-4 animate-float"
                    :style="`animation-delay: ${feature.delay}s;`"
                >
                    <div
                        class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        :style="`background: linear-gradient(135deg, ${feature.color1}, ${feature.color2});`"
                    >
                        <component :is="'svg'" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon"/>
                        </component>
                    </div>
                    <div>
                        <div class="text-white text-sm font-semibold">{{ feature.title }}</div>
                        <div class="text-gray-500 text-xs mt-0.5">{{ feature.desc }}</div>
                    </div>
                    <div class="ml-auto">
                        <div class="w-2 h-2 rounded-full" :style="`background: ${feature.color1};`"></div>
                    </div>
                </div>
            </div>

            <!-- Social proof -->
            <div class="self-start flex items-center gap-4">
                <div class="flex -space-x-3">
                    <div
                        v-for="(avatar, i) in avatares"
                        :key="i"
                        class="w-9 h-9 rounded-full border-2 border-[#050714] flex items-center justify-center text-xs font-bold text-white"
                        :style="`background: linear-gradient(135deg, ${avatar.c1}, ${avatar.c2});`"
                    >{{ avatar.letter }}</div>
                </div>
                <div class="text-sm">
                    <span class="text-gray-300 font-semibold">+2.400 equipes</span>
                    <span class="text-gray-500"> já usam o LaraChat</span>
                </div>
            </div>
        </div>

        <!-- ══════════════════════════════════════════════════════════
             PAINEL DIREITO — Formulário de Registro
             ══════════════════════════════════════════════════════════ -->
        <div class="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12 lg:px-16 animate-slide-right">

            <!-- Logo mobile -->
            <div class="lg:hidden flex items-center gap-3 mb-8">
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
                <div class="mb-7">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="w-1 h-6 rounded-full" style="background: linear-gradient(180deg, #34d399, #06b6d4);"></div>
                        <span class="text-xs font-semibold text-gray-500 uppercase tracking-widest">Cadastro gratuito</span>
                    </div>
                    <h2 class="text-3xl font-black text-white mb-2">Criar sua conta</h2>
                    <p class="text-gray-500 text-sm">Comece a colaborar em menos de 1 minuto</p>
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

                <form @submit.prevent="handleSubmit" class="space-y-4">

                    <!-- Campo: Nome -->
                    <div>
                        <label class="block text-sm font-medium text-gray-300 mb-2">Nome completo</label>
                        <div class="relative">
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style="color: rgba(255,255,255,0.25);">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                            </div>
                            <input
                                v-model="form.nome"
                                type="text"
                                placeholder="Seu nome"
                                required
                                class="auth-input w-full pl-12 pr-4 py-3.5 rounded-2xl text-sm"
                                :class="{ 'border-red-500/50': erros.nome }"
                            />
                        </div>
                        <p v-if="erros.nome" class="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                            </svg>
                            {{ erros.nome }}
                        </p>
                    </div>

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
                                class="auth-input w-full pl-12 pr-4 py-3.5 rounded-2xl text-sm"
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

                    <!-- Campos de senha em grid -->
                    <div class="grid grid-cols-2 gap-4">

                        <!-- Campo: Senha -->
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-2">Senha</label>
                            <div class="relative">
                                <div class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style="color: rgba(255,255,255,0.25);">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                    </svg>
                                </div>
                                <input
                                    v-model="form.senha"
                                    :type="mostrarSenha ? 'text' : 'password'"
                                    placeholder="Min. 8 chars"
                                    required
                                    minlength="8"
                                    class="auth-input w-full pl-10 pr-10 py-3.5 rounded-2xl text-sm"
                                    :class="{ 'border-red-500/50': erros.senha }"
                                />
                                <button
                                    type="button"
                                    @click="mostrarSenha = !mostrarSenha"
                                    class="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                                    style="color: rgba(255,255,255,0.2);"
                                    tabindex="-1"
                                >
                                    <svg v-if="!mostrarSenha" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                    </svg>
                                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                                    </svg>
                                </button>
                            </div>
                            <p v-if="erros.senha" class="mt-1.5 text-xs text-red-400">{{ erros.senha }}</p>
                        </div>

                        <!-- Campo: Confirmar senha -->
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-2">Confirmar</label>
                            <div class="relative">
                                <div class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style="color: rgba(255,255,255,0.25);">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                    </svg>
                                </div>
                                <input
                                    v-model="form.senha_confirmation"
                                    :type="mostrarSenha ? 'text' : 'password'"
                                    placeholder="Repita a senha"
                                    required
                                    class="auth-input w-full pl-10 pr-4 py-3.5 rounded-2xl text-sm"
                                    :class="{ 'border-red-500/50': senhasNaoCoincidem }"
                                />
                            </div>
                            <p v-if="senhasNaoCoincidem" class="mt-1.5 text-xs text-red-400">Senhas não coincidem</p>
                        </div>
                    </div>

                    <!-- Força da senha -->
                    <div v-if="form.senha.length > 0" class="space-y-1.5">
                        <div class="flex gap-1.5">
                            <div
                                v-for="n in 4"
                                :key="n"
                                class="h-1 flex-1 rounded-full transition-all duration-500"
                                :style="getStrengthBarStyle(n)"
                            ></div>
                        </div>
                        <p class="text-xs" :style="`color: ${corForca};`">
                            Senha {{ rotuloForca }}
                        </p>
                    </div>

                    <!-- Termos -->
                    <div class="flex items-start gap-3 py-1">
                        <input
                            id="terms"
                            v-model="termosAceitos"
                            type="checkbox"
                            class="mt-0.5 w-4 h-4 rounded cursor-pointer"
                            style="accent-color: #a855f7;"
                        />
                        <label for="terms" class="text-xs text-gray-500 leading-relaxed cursor-pointer">
                            Concordo com os
                            <span class="gradient-text-static font-medium">Termos de Uso</span>
                            e a
                            <span class="gradient-text-static font-medium">Política de Privacidade</span>
                        </label>
                    </div>

                    <!-- Botão de submit -->
                    <button
                        type="submit"
                        :disabled="loading || !termosAceitos"
                        class="btn-gradient w-full py-4 rounded-2xl text-white font-bold text-sm tracking-wide"
                    >
                        <span v-if="!loading" class="flex items-center justify-center gap-2">
                            Criar minha conta
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                            </svg>
                        </span>
                        <span v-else class="flex items-center justify-center gap-2">
                            <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                            </svg>
                            Criando sua conta...
                        </span>
                    </button>
                </form>

                <!-- Divisor -->
                <div class="flex items-center gap-4 my-5">
                    <div class="flex-1 h-px" style="background: rgba(255,255,255,0.06);"></div>
                    <span class="text-gray-600 text-xs tracking-widest uppercase">ou</span>
                    <div class="flex-1 h-px" style="background: rgba(255,255,255,0.06);"></div>
                </div>

                <!-- Link para login -->
                <p class="text-center text-sm text-gray-500">
                    Já tem uma conta?
                    <RouterLink
                        to="/login"
                        class="ml-1 font-semibold gradient-text-static hover:opacity-80 transition-opacity"
                    >
                        Entrar agora →
                    </RouterLink>
                </p>
            </div>

            <!-- Badge de segurança -->
            <div class="flex items-center gap-2 mt-6 text-gray-700 text-xs">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                Seus dados são protegidos · Nunca compartilhamos informações
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth   = useAuthStore()
const router = useRouter()

const carregando   = ref(false)
const erro         = ref('')
const erros        = reactive({})
const mostrarSenha = ref(false)
const termosAceitos = ref(false)

const form = reactive({
    nome:               '',
    email:              '',
    senha:              '',
    senha_confirmation: '',
})

// ── Força da senha ──────────────────────────────────────────
const forcaDaSenha = computed(() => {
    const valor = form.senha
    if (valor.length === 0) return 0
    let pontuacao = 0
    if (valor.length >= 8)               pontuacao++
    if (/[A-Z]/.test(valor))             pontuacao++
    if (/[0-9]/.test(valor))             pontuacao++
    if (/[^A-Za-z0-9]/.test(valor))     pontuacao++
    return pontuacao
})

const corForca = computed(() => {
    const cores = ['', '#ef4444', '#f97316', '#eab308', '#10b981']
    return cores[forcaDaSenha.value] || '#ef4444'
})

const rotuloForca = computed(() => {
    const rotulos = ['', 'muito fraca', 'fraca', 'razoável', 'forte']
    return rotulos[forcaDaSenha.value] || ''
})

function getStrengthBarStyle(indice) {
    const ativa = indice <= forcaDaSenha.value
    const cor   = corForca.value
    return ativa
        ? `background: ${cor}; box-shadow: 0 0 6px ${cor}40;`
        : 'background: rgba(255,255,255,0.07);'
}

// ── Validação de confirmação de senha ───────────────────────
const senhasNaoCoincidem = computed(() =>
    form.senha_confirmation.length > 0 && form.senha !== form.senha_confirmation
)

// ── Features do painel esquerdo ─────────────────────────────
const funcionalidades = [
    {
        title:  'Mensagens em tempo real',
        desc:   'Latência inferior a 50ms com WebSockets',
        icon:   'M13 10V3L4 14h7v7l9-11h-7z',
        color1: '#7c3aed',
        color2: '#a855f7',
        delay:  0,
    },
    {
        title:  'Criptografia end-to-end',
        desc:   'Seus dados protegidos com SSL 256-bit',
        icon:   'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
        color1: '#0891b2',
        color2: '#06b6d4',
        delay:  1.5,
    },
    {
        title:  'Canais & threads',
        desc:   'Organize conversas por projeto ou time',
        icon:   'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
        color1: '#059669',
        color2: '#10b981',
        delay:  3,
    },
]

const avatares = [
    { letter: 'A', c1: '#7c3aed', c2: '#a855f7' },
    { letter: 'C', c1: '#2563eb', c2: '#06b6d4' },
    { letter: 'M', c1: '#059669', c2: '#10b981' },
    { letter: 'R', c1: '#dc2626', c2: '#f97316' },
    { letter: 'J', c1: '#d97706', c2: '#eab308' },
]

// ── Submit ───────────────────────────────────────────────────
async function handleSubmit() {
    if (senhasNaoCoincidem.value) return

    carregando.value = true
    erro.value       = ''
    Object.keys(erros).forEach(k => delete erros[k])

    try {
        await auth.register(form.nome, form.email, form.senha, form.senha_confirmation)
        router.push('/dashboard')
    } catch (e) {
        const camposComErro = e.response?.data?.errors
        if (camposComErro) {
            Object.assign(erros, Object.fromEntries(
                Object.entries(camposComErro).map(([k, v]) => [k, v[0]])
            ))
        } else {
            erro.value = e.response?.data?.message || 'Erro ao criar conta. Tente novamente.'
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

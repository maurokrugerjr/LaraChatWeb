<template>
    <div class="min-h-screen bg-[#050714] flex flex-col select-none">

        <!-- ── Orbs de fundo ── -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
            <div
                class="absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full opacity-10"
                style="background: radial-gradient(circle, #7c3aed 0%, transparent 65%); filter: blur(100px);"
            ></div>
            <div
                class="absolute -bottom-60 -right-60 w-[700px] h-[700px] rounded-full opacity-10"
                style="background: radial-gradient(circle, #2563eb 0%, transparent 65%); filter: blur(100px);"
            ></div>
        </div>

        <!-- ── Header ── -->
        <header
            class="relative z-10 flex items-center justify-between px-6 py-4"
            style="background: rgba(255,255,255,0.02); border-bottom: 1px solid rgba(255,255,255,0.06);"
        >
            <!-- Logo -->
            <div class="flex items-center gap-3">
                <div
                    class="w-9 h-9 rounded-xl flex items-center justify-center"
                    style="background: linear-gradient(135deg, #7c3aed, #3b82f6);"
                >
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                </div>
                <span class="text-lg font-black text-white tracking-tight">LaraChat</span>
            </div>

            <!-- Usuário + logout -->
            <div class="flex items-center gap-4">
                <div class="flex items-center gap-2.5">
                    <div
                        class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style="background: linear-gradient(135deg, #7c3aed, #3b82f6);"
                    >
                        {{ iniciais }}
                    </div>
                    <span class="text-sm text-gray-400 hidden sm:block">{{ auth.user?.nome }}</span>
                </div>
                <button
                    @click="handleLogout"
                    class="flex items-center gap-1.5 text-xs text-gray-600 hover:text-red-400 transition-colors duration-200 px-3 py-1.5 rounded-xl"
                    style="border: 1px solid rgba(255,255,255,0.06);"
                >
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                    Sair
                </button>
            </div>
        </header>

        <!-- ── Main ── -->
        <main class="relative z-10 flex-1 flex items-center justify-center px-6">
            <div class="text-center max-w-md">
                <!-- Ícone animado -->
                <div class="flex justify-center mb-8">
                    <div
                        class="w-20 h-20 rounded-3xl flex items-center justify-center"
                        style="background: rgba(124,58,237,0.1); border: 1px solid rgba(124,58,237,0.2);"
                    >
                        <svg class="w-10 h-10" fill="none" stroke="url(#iconGrad)" viewBox="0 0 24 24">
                            <defs>
                                <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#a855f7"/>
                                    <stop offset="100%" stop-color="#3b82f6"/>
                                </linearGradient>
                            </defs>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                        </svg>
                    </div>
                </div>

                <h2 class="text-2xl font-black text-white mb-3">
                    Olá, {{ primeiroNome }}!
                </h2>
                <p class="text-gray-500 text-sm leading-relaxed mb-8">
                    As conversas em tempo real chegam na <span class="text-purple-400 font-medium">Sprint 2</span>.<br>
                    Tudo pronto para começar.
                </p>

                <!-- Badges de status -->
                <div class="flex flex-wrap justify-center gap-3">
                    <div
                        class="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-green-400"
                        style="background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2);"
                    >
                        <div class="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        API conectada
                    </div>
                    <div
                        class="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-blue-400"
                        style="background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.2);"
                    >
                        <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        JWT autenticado
                    </div>
                    <div
                        class="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-purple-400"
                        style="background: rgba(168,85,247,0.08); border: 1px solid rgba(168,85,247,0.2);"
                    >
                        <div class="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                        Sprint 1 concluída
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth   = useAuthStore()
const router = useRouter()

const iniciais = computed(() => {
    const nome = auth.user?.nome ?? ''
    return nome.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()
})

const primeiroNome = computed(() => auth.user?.nome?.split(' ')[0] ?? '')

async function handleLogout() {
    await auth.logout()
    router.push('/login')
}
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <header class="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <h1 class="text-lg font-semibold text-gray-900">LaraChat</h1>
            <div class="flex items-center gap-4">
                <span class="text-sm text-gray-600">{{ auth.user?.name }}</span>
                <button @click="handleLogout" class="text-sm text-red-600 hover:underline">
                    Logout
                </button>
            </div>
        </header>

        <main class="flex items-center justify-center h-[calc(100vh-64px)]">
            <p class="text-gray-400 text-sm">Conversations coming soon — Sprint 2</p>
        </main>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const router = useRouter()

async function handleLogout() {
    await auth.logout()
    router.push('/login')
}
</script>

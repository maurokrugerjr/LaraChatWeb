<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
            <h1 class="text-2xl font-semibold text-gray-900 mb-6">Entrar</h1>

            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input
                        v-model="form.email"
                        type="email"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                    <input
                        v-model="form.senha"
                        type="password"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <p v-if="error" class="text-sm text-red-600">{{ error }}</p>

                <button
                    type="submit"
                    :disabled="loading"
                    class="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition"
                >
                    {{ loading ? 'Entrando...' : 'Entrar' }}
                </button>
            </form>

            <p class="mt-4 text-sm text-center text-gray-600">
                Não tem uma conta?
                <RouterLink to="/register" class="text-indigo-600 hover:underline">Registrar</RouterLink>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const router = useRouter()
const loading = ref(false)
const error = ref('')
const errors = reactive({})

const form = reactive({
    email: '',
    senha: '',
})

async function handleSubmit() {
    loading.value = true
    error.value = ''
    Object.keys(errors).forEach(k => delete errors[k])

    try {
        await auth.login(form.email, form.senha)
        router.push('/dashboard')
    } catch (e) {
        const fieldErrors = e.response?.data?.errors
        if (fieldErrors) {
            Object.assign(errors, Object.fromEntries(
                Object.entries(fieldErrors).map(([k, v]) => [k, v[0]])
            ))
        } else {
            error.value = e.response?.data?.message || 'Credenciais inválidas.'
        }
    } finally {
        loading.value = false
    }
}
</script>

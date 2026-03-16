<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
            <h1 class="text-2xl font-semibold text-gray-900 mb-6">Sign in</h1>

            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        v-model="form.email"
                        type="email"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        v-model="form.password"
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
                    {{ loading ? 'Signing in...' : 'Sign in' }}
                </button>
            </form>

            <p class="mt-4 text-sm text-center text-gray-600">
                Don't have an account?
                <RouterLink to="/register" class="text-indigo-600 hover:underline">Register</RouterLink>
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

const form = reactive({
    email: '',
    password: '',
})

async function handleSubmit() {
    loading.value = true
    error.value = ''
    try {
        await auth.login(form.email, form.password)
        router.push('/dashboard')
    } catch (e) {
        error.value = e.response?.data?.message || 'Invalid credentials.'
    } finally {
        loading.value = false
    }
}
</script>

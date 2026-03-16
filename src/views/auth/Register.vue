<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
            <h1 class="text-2xl font-semibold text-gray-900 mb-6">Create account</h1>

            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        v-model="form.name"
                        type="text"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

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
                        minlength="8"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                    <input
                        v-model="form.password_confirmation"
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
                    {{ loading ? 'Creating account...' : 'Register' }}
                </button>
            </form>

            <p class="mt-4 text-sm text-center text-gray-600">
                Already have an account?
                <RouterLink to="/login" class="text-indigo-600 hover:underline">Sign in</RouterLink>
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
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
})

async function handleSubmit() {
    loading.value = true
    error.value = ''
    try {
        await auth.register(form.name, form.email, form.password, form.password_confirmation)
        router.push('/dashboard')
    } catch (e) {
        const errors = e.response?.data?.errors
        if (errors) {
            error.value = Object.values(errors).flat().join(' ')
        } else {
            error.value = e.response?.data?.message || 'Failed to create account.'
        }
    } finally {
        loading.value = false
    }
}
</script>

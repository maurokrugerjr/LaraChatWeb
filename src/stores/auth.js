import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const token = ref(localStorage.getItem('token'))

    const authenticated = computed(() => !!token.value)

    function setToken(access_token) {
        token.value = access_token
        localStorage.setItem('token', access_token)
    }

    function clearToken() {
        token.value = null
        user.value = null
        localStorage.removeItem('token')
    }

    async function login(email, password) {
        const { data } = await api.post('/api/auth/login', { email, password })
        setToken(data.access_token)
        user.value = data.user
    }

    async function register(name, email, password, password_confirmation) {
        const { data } = await api.post('/api/auth/register', {
            name,
            email,
            password,
            password_confirmation,
        })
        setToken(data.access_token)
        user.value = data.user
    }

    async function logout() {
        await api.post('/api/auth/logout').catch(() => {})
        clearToken()
    }

    async function refresh() {
        const { data } = await api.post('/api/auth/refresh')
        setToken(data.access_token)
    }

    async function fetchUser() {
        if (!token.value) return
        const { data } = await api.get('/api/auth/me')
        user.value = data
    }

    return { user, token, authenticated, login, register, logout, refresh, fetchUser }
})

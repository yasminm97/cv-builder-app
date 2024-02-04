import { defineStore } from 'pinia'

export const useStore = defineStore('formData', {
    state: () => ({
        name: '',
        title: '',
        phone: '',
        email: '',
        summary: '',
        skills: [],
        experiences: [],

    }),
})
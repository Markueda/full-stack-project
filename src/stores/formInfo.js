import { defineStore } from "pinia";

export const useFormInfoStore = defineStore("formInfo", {
    state: () => ({
        name: localStorage.getItem("name") || "",
        email: localStorage.getItem("email") || "",
    }),
    getters: {
        getName(state) {
            return state.name;
        },
        getEmail(state) {
            return state.email;
        }
    },
    actions: {
        setName(name) {
            this.name = name;
            localStorage.setItem("name", name);
        },
        setEmail(email) {
            this.email = email;
            localStorage.setItem("email", email);
        }
    }
})
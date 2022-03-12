import { reactive, inject } from 'vue'

// global states
export const stateSymbol = Symbol('state')
export const createState = () => reactive({
    backendRoute: 'http://127.0.0.1:8000/',
    currentUser: {},
    logIn: userData => {
        createState.currentUser = userData
        console.log(createState.currentUser)
    }
})

export const useState = () => inject(stateSymbol)
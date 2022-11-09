import { createStore } from 'vuex'

import trainersModule from './modules/trainers/index.js'
import requestsModule from './modules/requests/index.js'

const store = createStore({
    modules: {
        trainers: trainersModule,
        requests: requestsModule,
    },
    state() {
        return {
            userID: 'c3'
        }
    },
    getters: {
        userId(state) {
            return state.userID
        }
    }
})

export default store
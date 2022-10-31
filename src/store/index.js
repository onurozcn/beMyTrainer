import { createStore } from 'vuex'

import trainersModule from './modules/trainers/index.js'

const store = createStore({
    modules: {
        trainers: trainersModule

    }
})

export default store
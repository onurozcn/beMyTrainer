export default {
    trainers(state) {
        return state.trainers;
    },
    hasTrainers(state) {
        return state.trainers && state.trainers.length>0
    },
    isTrainer(_, getters, _2, rootGetters) {
        const trainers = getters.trainers
        const userId = rootGetters.userId
        return trainers.some(trainer => trainer.id === userId)
    }

};

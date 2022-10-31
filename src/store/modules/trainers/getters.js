export default {
    trainers(state) {
        return state.trainers;
    },
    hasTrainers(state) {
        return state.trainers && state.trainers.length>0
    }
};

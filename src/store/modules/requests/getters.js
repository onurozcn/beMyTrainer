export default {
  requests(state,_,_2,rootGetters) {
        const trainerId = rootGetters.userId;
        console.log(state.requests)
    return state.requests.filter((req) => req.trainerId === trainerId);
  },
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};

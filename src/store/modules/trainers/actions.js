export default {
    registerTrainer(context, data) {
        const trainerData = {
            id: context.rootGetters.userId, //dummy
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        }
        context.commit('registerTrainer', trainerData)
    }
}


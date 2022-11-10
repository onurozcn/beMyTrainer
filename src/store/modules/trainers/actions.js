export default {
    async registerTrainer(context, data) {
        const userId = context.rootGetters.userId //dummy
        const trainerData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        }
        const response = await fetch(
            `https://be-my-trainer-default-rtdb.europe-west1.firebasedatabase.app/trainers/${userId}.json`,
            {
                method: 'PUT',
                body: JSON.stringify(trainerData),
            }
        );

        const responseData = await response.json()

        if (!response.ok) {
             const error = new Error(responseData.message || 'Failed to fetch data!');
             throw error
        }

        context.commit('registerTrainer', {
            ...trainerData,
            id: userId,
        })
    },

    async loadTrainers(context) {
        const response = await fetch(`https://be-my-trainer-default-rtdb.europe-west1.firebasedatabase.app/trainers.json`)
        const responseData = await response.json()

        if (!response.ok) {
            // error
        }

        const trainers = []

        for (const key in responseData) {
            const trainer = {
              firstName: responseData[key].firstName,
              lastName: responseData[key].lastName,
              description: responseData[key].description,
              hourlyRate: responseData[key].hourlyRate,
              areas: responseData[key].areas,
            };
            trainers.push(trainer)
        }
        context.commit('setTrainers', trainers)
    }
    
}


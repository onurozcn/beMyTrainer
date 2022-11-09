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

        // const responseData = await response.json()

        if (!response.ok) {
            // error ...
        }

        context.commit('registerTrainer', {
            ...trainerData,
            id: userId,
        })
    }
}


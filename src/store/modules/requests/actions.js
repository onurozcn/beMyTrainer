export default {
    async contactTrainer(context, payload) {
        const newRequest = {
            
            userEmail: payload.email,
            message: payload.message,
        };
        const response = fetch(
            `https://be-my-trainer-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.trainerId}.json`,
            {
                method: 'POST',
                body: JSON.stringify(newRequest)
            });
        
        const responseData = await response.json()

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request!')
            throw error
        }

        newRequest.id = responseData.name
        newRequest.trainerId = payload.trainerId
        context.commit("addRequest", newRequest);
    },

    async fetchRequests(context) {
        const trainerId = context.rootGetters.userId
        const response = await fetch(
            `https://be-my-trainer-default-rtdb.europe-west1.firebasedatabase.app/requests/${trainerId}.json`)
        const responseData = await response.json()
        
        if (!response.ok) {
            const error = new Error(responseData.message || "Failed to fetch request!")
            throw error
        }

        const requests = []
        
        for (const key in responseData) {
            const request = {
                id: key,
                trainerId: trainerId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            }
            requests.push(request)
        }

        context.commit('setRequests', requests)
    }
}
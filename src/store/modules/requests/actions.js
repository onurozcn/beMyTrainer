export default {
    contactTrainer(context, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            trainerId: payload.trainerId,
            userEmail: payload.email,
            message: payload.message,
        };
        context.commit("addRequest", newRequest);
    }
}
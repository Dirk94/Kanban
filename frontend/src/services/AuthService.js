import client from "./ApiClient";

export default {
    async register({ name, email, password }) {
        try {
            await client.client.post(`/api/auth/register`, {
                name,
                email,
                password
            });
        } catch (ex) {
            const errors = client.getValidationErrorsFromResponse(ex);
            return errors;
        }

        return null;
    },

    async login({ email, password }) {
        try {
            const response = await client.client.post(`/api/auth/login`, {
                email,
                password
            });
            return response.data.user;
        } catch (ex) {
            const errors = client.getValidationErrorsFromResponse(ex);
            return errors;
        }
    }
};

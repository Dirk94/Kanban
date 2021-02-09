import client from "./ApiClient";

export default {
    async register({ name, email, password }) {
        try {
            await client.client.post(`/auth/register`, {
                name,
                email,
                password
            });
        } catch (ex) {
            const errors = client.getValidationErrorsFromResponse(ex);
            return errors;
        }

        return null;
    }
};

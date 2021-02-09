import axios from "axios";

const client = axios.create({
    // TODO put this in an .env file.
    baseURL: `http://kanban.laravel/api`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export default {
    client: client,

    getValidationErrorsFromResponse(ex) {
        let errors = {};

        try {
            errors = ex.response.data.errors;
        } catch (e) {
            errors.general = "Unknown error occurred.";
            console.error(ex);
        }

        return {
            errors
        };
    }
};

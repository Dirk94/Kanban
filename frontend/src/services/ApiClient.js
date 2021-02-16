import axios from "axios";

// TODO:
//  When our session expires the API will return a 
//  401 or 419 reponse. In that case we should redirect
//  to the login.

const client = axios.create({
    // TODO put this in an .env file.
    baseURL: `http://kanban.laravel`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    withCredentials: true
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

<template>
    <div class="columns">
        <div
            class="register-form column is-half-desktop is-one-third-widescreen is-centered"
        >
            <div style="width: 100%; max-width: 360px;">
                <h1 class="text-center">Login</h1>

                <p class="register-subtitle text-light text-center">
                    Don't have an account?
                    <router-link to="/register">Create on here</router-link>
                </p>

                <div class="form">
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input
                                @keyup.enter="submit()"
                                v-model="user.email"
                                class="input"
                                :class="{
                                    'is-danger': this.validationErrors.email
                                }"
                                type="email"
                                placeholder="john.snow@wintermail.com"
                            />
                        </div>
                        <p
                            v-if="this.validationErrors.email"
                            class="help is-danger"
                        >
                            {{ this.validationErrors.email[0] }}
                        </p>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input
                                @keyup.enter="submit()"
                                v-model="user.password"
                                :class="{
                                    'is-danger': this.validationErrors.password
                                }"
                                class="input"
                                type="password"
                                placeholder="Secret123"
                            />
                        </div>
                        <p
                            v-if="this.validationErrors.password"
                            class="help is-danger"
                        >
                            {{ this.validationErrors.password[0] }}
                        </p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button
                                class="button is-primary is-medium is-fullwidth"
                                @click="submit()"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="register-cover column is-hidden-touch"></div>
    </div>
</template>
<script>
import ApiClient from "@/services/ApiClient.js";

export default {
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: ""
            },

            success: false,

            validationErrors: {}
        };
    },

    mounted() {
        this.getCsrfToken();
    },

    methods: {
        async submit() {
            this.validationErrors = {};

            const result = await this.$store.dispatch("login", this.user);
            if (result && result.errors) {
                this.validationErrors = result.errors;
                return;
            }

            this.$router.push("/dashboard");
        },

        async getCsrfToken() {
            await ApiClient.client.get("/sanctum/csrf-cookie");
        }
    }
};
</script>
<style lang="scss" scoped>
.register-subtitle {
    margin-bottom: 36px;
}

.columns {
    min-height: 100%;
    margin: 0;
}

.register-form {
    min-height: 100%;
    padding: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.register-cover {
    background-image: url("../assets/cover.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    flex-grow: 1;
    padding: 0;
}
</style>

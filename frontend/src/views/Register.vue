<template>
    <div class="columns">
        <div
            class="register-form column is-half-desktop is-one-third-widescreen is-centered"
        >
            <div style="width: 100%; max-width: 360px;">
                <h1 class="text-center">Sign up</h1>

                <p class="text-light text-center">
                    A wholefully crafted Kanban experience.
                </p>

                <div class="form">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input
                                v-model="name"
                                class="input"
                                type="text"
                                placeholder="John Snow"
                            />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input
                                v-model="email"
                                class="input"
                                type="email"
                                placeholder="john.snow@wintermail.com"
                            />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input
                                v-model="password"
                                class="input"
                                type="password"
                                placeholder="Secret123"
                            />
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button
                                class="button is-primary is-medium is-fullwidth"
                            >
                                Create Account
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
export default {
    data() {
        return {
            name: "",
            email: "",
            password: ""
        };
    }
};
</script>
<style lang="scss" scoped>
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

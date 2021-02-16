<template>
    <div class="dashboard">
        <h1>Dashboard</h1>
    </div>
</template>

<script>
import ApiClient from "@/services/ApiClient.js";

export default {
    mounted() {
      	const me2 = ApiClient.client.get("/api/me");
        console.dir({ me2 });
    }
};
</script>

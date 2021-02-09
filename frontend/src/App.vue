<template>
    <div id="app">
        <router-view />

        <!-- 
			This is the full-page loading spinner. 
		  	It is bound to the  Vuex isLoading state. 
			  So everytime isLoading = true, this will pop up. -->
        <loading
            :active="isLoading"
            :is-full-page="true"
            color="#2c7be5"
			loader="spinner"
        ></loading>
    </div>
</template>
<script>
export default {
    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        }
    }
};
</script>

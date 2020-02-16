<template>
    <div class="chat-userhandler">
        <div class="chat-userhandler-content">
            <p class="text-primary">Do not wait any longer join chat app community and talk with anybody around the world!</p>
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Start extends Vue {

    }
</script>

<style scoped>

</style>

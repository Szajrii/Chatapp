<template>
    <div class="accordion" :id="identifier">
        <div class="card">
            <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#collapse' + identifier" aria-expanded="true" aria-controls="collapseOne">
                        {{buttonName}}
                    </button>
                </h2>
            </div>
            <div :id="'collapse' + identifier" class="collapse show" aria-labelledby="headingOne" :data-parent="'#' + identifier">
                <div class="card-body">
                    <slot/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class ExpandableElement extends Vue {

        @Prop()
        buttonName: string | undefined;
        @Prop()
        identifier: string | undefined;
    }
</script>

<style scoped lang="scss">
    .friends-management {
        width: 100%;
        height: 100%;

        &-finder {
            width: 100%;

            &-body {
                width: 70%;
                margin: auto;
                display: flex;

                input {
                    width: 80%;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }

                button {
                    width: 20%;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
            }
        }
    }
</style>

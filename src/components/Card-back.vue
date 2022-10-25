<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
    cvc: String
})

let cvc = ref("000")
watch(props, (newProps) => {
    cvc.value = '000'

    cvc.value = newProps.cvc + cvc.value.substring(newProps.cvc.length, 3)

})
</script>

<template>
    <div class="container-back">
        <div class="img-card">
        </div>
        <div class="content">
            <input class="input-lg" type="text" v-model="cvc" disabled>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-back {
    input {
        background: none;
        border: none;
        color: var(--white);
    }

    display: flex;
    position: relative;
    width: 100%;
    height: 100%;

    .img-card {
        width: inherit;
        height: inherit;
        box-shadow: 0px 0px 10px var(--very-dark-violet);
        background-image: url(./../../images/bg-card-back.png);
        border-radius: 11px;
        background-size: cover;
    }

    .content {
        position: absolute;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: repeat(7, minmax(0, 1fr));
        grid-template-columns: repeat(11, minmax(0, 1fr));
        justify-content: center;
        align-items: center;
        overflow: hidden;
        animation-name: appearInfo;
        animation-duration: 1s;

        .input-lg {
            grid-column: 9/11;
            grid-row: 4/5;
            font-size: 1.4rem;
            letter-spacing: 0.15rem;
            text-align: center;
        }
    }
}


@media screen and (max-width: 850px) {
    .container-back {
        .content {
            .input-lg {
                font-size: 1.2rem;
            }
        }
    }
}
</style>

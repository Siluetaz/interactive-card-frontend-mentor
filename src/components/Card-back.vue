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
    <div class="container">
        <img class="img-card" src="../../images/bg-card-back.png" alt="">
        <div class="content">
            <input class="input-lg" type="text" v-model="cvc" disabled>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    input {
        background: none;
        border: none;
        color: var(--white);
    }

    position: relative;

    .img-card {
        width: 100%;
    }

    .content {
        position: absolute;
        width: 100%;
        height: 100%;

        // background-color: red;
        // display: grid;
        // grid-template-columns: repeat(4);
        // grid-template-rows: repeat(2);
        .input-lg {
            // grid-column: 1/5;
            position: absolute;
            top: 9.8rem;
            right: 1rem;
            width: 30%;
            font-size: 1.4rem;
            letter-spacing: 0.15rem;
            text-align: center;
        }
    }
}
</style>

<script setup>
import { stringify } from 'postcss';
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
    name: String,
    number: Number,
    expDateM: Number,
    expDateM: Number
})
let number = ref("0000 0000 0000 0000")
let name = ref("JANE APPLESEED")
let expDate = ref("00/00")
onMounted(() => {
})

watch(props, (newProps) => {
    if (newProps.name !== '') {

        name.value = newProps.name
    }
    if (newProps.number !== '') {
        let lastNumber = newProps.number.toString().charAt(newProps.number.toString().length - 1)
        number.value = number.value.replace(/0/, lastNumber)
    }
    if (newProps.expDateM !== '') {

        let date = expDate.value.split('/')
        date[0] = newProps.expDateM
        date[1] = newProps.expDateY
        expDate.value = date[0] + "/" + date[1]
    }
})
</script>

<template>
    <div class="container">
        <img class="img-card" src="../../images/bg-card-front.png" alt="">
        <div class="content">
            <img class="img-logo" src="../../images/card-logo.svg" alt="">
            <input class="input-lg" type="text" v-model="number" disabled>
            <input class="input-md" type="text" v-model="name" disabled>
            <input class="input-sm" type="text" v-model="expDate" disabled>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    input {
        background: none;
        border: none;
        color: var(--light-grayish-violet);
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
            bottom: 6rem;
            width: 100%;
            font-size: 2.6rem;
            letter-spacing: 0.25rem;
            font-weight: 600;
            text-align: center;
        }

        .input-md {
            position: absolute;
            bottom: 2rem;
            left: 3.5rem;
            width: 40%;
            font-size: 1.3rem;
            letter-spacing: 0.15rem;
        }

        .input-sm {
            position: absolute;
            bottom: 2rem;
            right: 0.1rem;
            width: 18%;
            font-size: 1.3rem;
            letter-spacing: 0.15rem;
        }

        .img-logo {
            position: absolute;
            top: 2.8rem;
            left: 2.8rem;
            width: 8rem;
        }
    }
}
</style>

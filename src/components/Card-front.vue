<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
    name: String,
    number: String,
    expDateM: String,
    expDateY: String,
    pressed: String
})
let number = ref("0000 0000 0000 0000")
let name = ref("JANE APPLESEED")
let expDate = ref("MM/YY")
onMounted(() => {
})

watch(props, (newProps) => {

    name.value = newProps.name
    if (name.value === "") {
        name.value = "JANE APPLESEED"
    }
    number.value = '0000 0000 0000 0000'
    number.value = newProps.number + number.value.substring(newProps.number.length, 19)


    let date = expDate.value.split('/')

    date[0] = 'MM'
    date[0] = newProps.expDateM + date[0].substring(newProps.expDateM.length, 2)
    expDate.value = date[0] + "/" + date[1]

    date[1] = 'YY'
    date[1] = newProps.expDateY + date[1].substring(newProps.expDateY.length, 2)
    expDate.value = date[0] + "/" + date[1]
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

        .input-lg {
            position: absolute;
            bottom: 6rem;
            width: 100%;
            font-size: 2.6rem;
            letter-spacing: 0.25rem;
            text-align: center;
        }

        .input-md {
            position: absolute;
            bottom: 2rem;
            left: 3.5rem;
            width: 60%;
            font-size: 1.3rem;
            letter-spacing: 0.15rem;
            text-transform: uppercase;
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

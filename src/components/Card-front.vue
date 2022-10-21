<script setup>
import { ref, onMounted } from 'vue'

let number = ref("0000 0000 0000 0000")
let name = ref("JANE APPLESEED")
let expDate = ref("00/00")

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

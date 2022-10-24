<script setup>
import { ref, onMounted, watch } from 'vue'
const props = defineProps({
    state: Boolean,
})


onMounted(() => {
})
</script>

<template>
    <div class="complete-state-container">
        <div class="centered img-mask">
            <img class="icon-complete" src="../../images/icon-complete.svg" alt="">
        </div>
        <label class="centered text-lg">THANK YOU!</label>
        <label class="centered text-sm">We've added your cards details</label>
        <button class="centered btn-continue" @click="$emit('actionConfirm')">Continue</button>
    </div>
</template>

<style lang="scss">
.complete-state-container {
    width: 35%;
    display: grid;
    gap: 1.8rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-left: 5rem;
    justify-content: center;
    text-align: center;

    label {
        font-size: 1.2rem;
        font-weight: bolder;
        letter-spacing: 0.1rem;
    }

    .centered {
        grid-column: 1/5;
    }

    .text-lg {
        margin-top: 1rem;
        font-size: 2.5rem;
        letter-spacing: 0.2rem;
    }

    .text-sm {
        font-size: 1.4rem;
        color: var(--dark-grayish-violet);
    }

    .img-mask {
        text-align: center;
    }

    .btn-continue {
        background-color: var(--very-dark-violet);
        border-radius: 10px;
        color: var(--light-grayish-violet);
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.08rem;
        margin-top: 2rem;
        cursor: pointer;

        &:hover {
            background-color: var(--hover-btn-violet);
        }
    }

}.none {
    display: none !important;
}
</style>

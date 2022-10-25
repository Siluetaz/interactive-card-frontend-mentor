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
            <img class="icon-complete" src="./../../images/icon-complete.svg" alt="">
        </div>
        <label class="centered text-lg">THANK YOU!</label>
        <label class="centered text-sm">We've added your cards details</label>
        <button class="centered btn-continue" @click="$emit('actionConfirm')">Continue</button>
    </div>
</template>

<style lang="scss">
.complete-state-container {
    grid-column: 7/10;
    height: fit-content;
    display: grid;
    gap: 2.2rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
        animation-name: appearComplete;
        animation-duration: 0.5s;
        font-size: 0rem;
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
        transition: 0.3s;

        &:hover {
            background-color: var(--hover-btn-violet);
        }
    }

}

.none {
    display: none !important;
}

@media screen and (max-width: 850px) {
    .complete-state-container {
        grid-column: 2/11;
        grid-row: 3/6;
    }
}
</style>

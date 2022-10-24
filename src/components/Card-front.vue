<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
    name: String,
    number: String,
    expDateM: String,
    expDateY: String
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
    <div class="container-front">
        <img class="img-card" src="../../images/bg-card-front.png" alt="">
        <div class="content">
            <div class="img-logo">
                <img src="../../images/card-logo.svg" alt="">
            </div>
            <input class="input-lg" type="text" v-model="number" disabled>
            <input class="input-md" type="text" v-model="name" disabled>
            <input class="input-sm" type="text" v-model="expDate" disabled>
        </div>
    </div>
</template>

<style lang="scss" scoped>
input {
    background: none;
    border: none;
    color: var(--white);
}

.container-front {
    display: flex;
    position: relative;

    .img-card {
        width: 100%;
    }

    .content {
        position: absolute;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: repeat(11, minmax(0, 1fr));
        grid-template-columns: repeat(11, minmax(0, 1fr));

        .img-logo {
            grid-column: 1/5;
            grid-row: 1/7;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .input-lg {
            grid-column: 1/12;
            grid-row: 6/10;
            font-size: 2.6rem;
            letter-spacing: 0.25rem;
            text-align: center;
        }

        .input-md {
            grid-column: 2/8;
            grid-row: 9/12;
            font-size: 1.3rem;
            letter-spacing: 0.15rem;
            text-transform: uppercase;
            text-align: start;
        }

        .input-sm {
            grid-column: 9/12;
            grid-row: 9/12;
            font-size: 1.3rem;
            letter-spacing: 0.15rem;
            text-align: center;
        }

    }
}

@media screen and (max-width: 850px) {
    .container-front {
        display: flex;
        position: relative;

        .img-card {
            width: 100%;
        }

        .content {
            position: absolute;
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-rows: repeat(11, minmax(0, 1fr));
            grid-template-columns: repeat(11, minmax(0, 1fr));

            .img-logo {
                grid-column: 1/5;
                grid-row: 1/7;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 6.5rem;
                }
            }

            .input-lg {
                grid-column: 1/12;
                grid-row: 6/10;
                font-size: 1.78rem;
                letter-spacing: 0.25rem;
                text-align: center;
            }

            .input-md {
                grid-column: 2/8;
                grid-row: 9/12;
                font-size: 1rem;
                letter-spacing: 0.15rem;
                text-transform: uppercase;
                text-align: start;
            }

            .input-sm {
                grid-column: 9/12;
                grid-row: 9/12;
                font-size: 1rem;
                letter-spacing: 0.15rem;
                text-align: center;
            }

        }
    }
}
</style>

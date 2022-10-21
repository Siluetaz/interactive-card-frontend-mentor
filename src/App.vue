<script setup>
import { ref, onMounted } from 'vue'
import CardFront from "./components/Card-front.vue";
import CardBack from "./components/Card-back.vue";
let name = ref("")
let number = ref("")
let expDateM = ref("")
let expDateY = ref("")
let cvc = ref("")
onMounted(() => {
  //document.getElementById("round").style.border = "1px solid hsl(278, 68%, 11%)";
})

</script>

<template>
  <div class="container">
    <div class="left-side">
      <div class="bg-mask"><img class="bg-desktop" src="../images/bg-main-desktop.png" /></div>
    </div>
    <div class="right-side">
      <div class="form-container">
        <div class="input-lg-container">
          <label>CARDHOLDER NAME</label>
          <input type="text" v-model="name" placeholder="e.g. Jane Appleseed">
        </div>
        <div class="input-lg-container">
          <label>CARD NUMBER</label>
          <input type="number" v-model="number" placeholder="e.g. 1234 5678 9123 0000">
        </div>
        <div class="input-sm-container">
          <label class="input-md">EXP.DATE (MM/YY)</label>
          <label class="input-md-2">CVC</label>
          <input class="input-sm" type="number" v-model="expDateM" placeholder="MM" id="round">
          <input class="input-sm-2" type="number" v-model="expDateY" placeholder="YY">
          <input class="input-md-2" type="number" v-model="cvc" placeholder="e.g. 123">
        </div>
        <button class="btn-confirm">Confirm</button>
      </div>
    </div>
    <div class="card-container">
      <div class="card-mask">
        <card-front class="card-front" :name="name" :number="number" :expDateM="expDateM" :expDateY="expDateY">
        </card-front>
        <card-back class="card-back"></card-back>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  height: 100%;

  .card-container {
    position: fixed;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .card-mask {
      width: 40rem;

      .card-front {
        width: 100%;
      }

      .card-back {
        width: 100%;
        margin: 3rem 0rem 0rem 5rem;
      }
    }
  }

  .right-side {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .form-container {
      width: 40%;
      display: grid;
      gap: 1.8rem;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      margin-left: 5rem;

      input {
        padding: 1.2rem 0rem 1.2rem 1.4rem;
        border: 1px solid var(--light-grayish-violet);
        border-radius: 10px;
        outline: none;
        color: var(--very-dark-violet);
        letter-spacing: 1px;
        font-size: 1.6rem;
        transition: border 0.5s;

        &:focus {
          border: 1px solid var(--very-dark-violet);
        }
      }

      label {
        font-size: 1.2rem;
        font-weight: bolder;
        letter-spacing: 0.2rem;
      }

      .input-lg-container {
        display: flex;
        flex-direction: column;
        grid-column: 1/5;
        gap: 0.5rem;
      }


      .input-sm-container {
        grid-column: 1/5;
        display: grid;
        grid-template-columns: repeat(8, minmax(0, 1fr));
        gap: 0.5rem 0.3rem;

        .input-sm {
          grid-column: 1/3;
          margin-right: 0.5rem;
        }

        .input-sm-2 {
          grid-column: 3/5;
          margin-right: 0.5rem;
        }

        .input-md {
          grid-column: 1/5;
        }

        .input-md-2 {
          grid-column: 5/9;
          margin-left: 0.5rem;
        }
      }



      .btn-confirm {
        grid-column: 1/5;
        background-color: var(--very-dark-violet);
        border-radius: 10px;
        color: var(--light-grayish-violet);
        padding: 1rem;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin-top: 0.5rem;
      }

    }
  }

  .left-side {
    width: 45%;
    height: 100%;
    max-width: 45%;

    .bg-mask {
      height: 100%;
      overflow: hidden;

      .bg-desktop {
        width: 100%;
        height: 100%;
      }
    }

  }
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>

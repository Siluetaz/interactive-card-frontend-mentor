<script setup>
import CardFront from "./components/Card-front.vue";
import CardBack from "./components/Card-back.vue";


</script>

<template>
  <div class="container">
    <section class="left-side">
      <div class="bg-mask"><img class="bg-desktop" src="../images/bg-main-desktop.png" /></div>
    </section>
    <section class="right-side">
      <div class="form-container">
        <div class="input-lg-container">
          <label>CARDHOLDER NAME</label>
          <input type="text" v-model="name" placeholder="e.g. Jane Appleseed">
        </div>
        <div class="input-lg-container">
          <label>CARD NUMBER</label>
          <input type="text" v-model="number" placeholder="e.g. 1234 5678 9123 0000">
        </div>
        <div class="input-sm-container">
          <label class="input-md">EXP.DATE (MM/YY)</label>
          <label class="input-md-2">CVC</label>
          <input class="input-sm" type="text" v-model="expDateM" placeholder="MM">
          <input class="input-sm-2" type="text" v-model="expDateY" placeholder="YY">
          <input class="input-md-2" type="text" v-model="cvc" placeholder="e.g. 123">
        </div>
        <button class="btn-confirm">Confirm</button>
      </div>
    </section>
    <div class="card-container">
      <div class="card-mask">
        <card-front class="card"></card-front>
        <card-back class="card-2"></card-back>
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
    width: 40%;
    top: 20%;
    left: 10%;

    .card-mask {
      width: 70%;

      .card {
        width: 100%;
      }

      .card-2 {
        width: 100%;
        margin: 1.5rem 0rem 0rem 5rem;
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
      width: 45%;
      display: grid;
      gap: 1.8rem;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      margin-left: 5rem;

      input {
        padding: 0.7rem 0rem 0.7rem 1rem;
        border: 0.1px solid var(--dark-grayish-violet);
        border-radius: 10px;
        color: var(--very-dark-violet);
        font-weight: 500;
        letter-spacing: 1px;
      }

      label {
        font-size: 13px;
        font-weight: bolder;
        letter-spacing: 2px;
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
</style>
